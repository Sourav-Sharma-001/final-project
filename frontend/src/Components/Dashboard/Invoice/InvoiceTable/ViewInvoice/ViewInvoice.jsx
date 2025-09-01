import React, { useRef } from "react";
import "./ViewInvoice.css";
import { RiDownload2Fill } from "react-icons/ri";
import { FiPrinter } from "react-icons/fi";

export default function ViewInvoice({ invoice, onClose }) {
  const invoiceRef = useRef();

  if (!invoice) return null;

  const subtotal = invoice.price || 0;
  const tax = (subtotal * 0.1).toFixed(2);
  const totalDue = (subtotal + parseFloat(tax)).toFixed(2);

  const handlePrint = () => {
    const printContent = invoiceRef.current;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      "<html><head><title>Invoice</title></head><body>"
    );
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([invoiceRef.current.innerHTML], {
      type: "text/html",
    });
    element.href = URL.createObjectURL(file);
    element.download = `${invoice.clientProductId || "invoice"}.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="view-invoice-container" ref={invoiceRef}>
      <div className="view-invoice-buttons">
        <button
          className="view-invoice-close"
          type="button"
          onClick={() => {
            onClose && onClose();
          }}
        >
          ×
        </button>
        <button
          className="view-invoice-print"
          type="button"
          onClick={handlePrint}
        >
          <FiPrinter size={16} />
        </button>
        <button
          className="view-invoice-download"
          type="button"
          onClick={handleDownload}
        >
          <RiDownload2Fill size={16} />
        </button>
      </div>

      <header className="view-invoice-header">
        <h1>INVOICE</h1>
        <div className="view-invoice-billing-section">
          <div>
            <p className="view-invoice-label">Billed to</p>
            <p>{invoice.customerName || "Customer Name"}</p>
            <p>{invoice.customerAddress || "Address"}</p>
            <p>{invoice.customerCity || "City, Country - ZIP"}</p>
          </div>
          <div>
            <p>{invoice.businessAddress || "Business address"}</p>
            <p>{invoice.businessCity || "City, State, ZIP"}</p>
            <p>TAX ID {invoice.taxId || "0XXXXXX1234XXX"}</p>
          </div>
        </div>
      </header>

      <div className="view-invoice-body">
        <div className="view-invoice-layout">
          <div className="view-invoice-meta">
            <div>
              <p className="view-invoice-meta-label">Invoice #</p>
              <p>{invoice.clientProductId}</p>
            </div>
            <div>
              <p className="view-invoice-meta-label">Invoice date</p>
              <p>
                {invoice.createdAt
                  ? new Date(invoice.createdAt).toLocaleDateString()
                  : "-"}
              </p>
            </div>
            <div>
              <p className="view-invoice-meta-label">Reference</p>
              <p>{invoice.referenceNumber || "-"}</p>
            </div>
            <div>
              <p className="view-invoice-meta-label">Due date</p>
              <p>
                {invoice.expiryDate
                  ? new Date(invoice.expiryDate).toLocaleDateString()
                  : "-"}
              </p>
            </div>
          </div>

          <table className="view-invoice-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{invoice.productName || "-"}</td>
                <td>1</td>
                <td>₹ {invoice.price || 0}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Subtotal</td>
                <td>₹ {subtotal}</td>
              </tr>
              <tr>
                <td colSpan="2">Tax (10%)</td>
                <td>₹ {tax}</td>
              </tr>
              <tr className="view-invoice-total-row">
                <td colSpan="2">Total due</td>
                <td>₹ {totalDue}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="view-invoice-note">
          🗒 Please pay within 15 days of receiving this invoice.
        </p>
      </div>

      <footer className="view-invoice-footer">
        <p>{invoice.companyWebsite || "www.recehtol.inc"}</p>
        <p>{invoice.companyPhone || "+91 00000 00000"}</p>
        <p>{invoice.companyEmail || "hello@email.com"}</p>
      </footer>
    </div>
  );
}
