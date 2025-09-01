import React, { useState } from "react";
import "./InvoiceTable.css";
import { LiaEyeSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import ViewInvoice from "./ViewInvoice/ViewInvoice";

export default function InvoiceTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [rowOptions, setRowOptions] = useState(null);
  const [dotOptions, setDotOptions] = useState(null);
  const rowsPerPage = 9;

  const invoices = Array.from({ length: 40 }).map((_, i) => ({
    id: `INV-${1000 + i}`,
    reference: `REF-${2000 + i}`,
    amount: 100 + i * 10,
    status: i % 2 === 0 ? "Paid" : "Pending",
    dueDate: "2025-12-31",
    customer: `Customer ${i + 1}`,
    items: [
      { name: "Rice", qty: 2, price: 50 },
      { name: "Milk", qty: 1, price: 30 },
      { name: "Bread", qty: 3, price: 25 },
    ],
  }));

  const totalPages = Math.max(Math.ceil(invoices.length / rowsPerPage), 1);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = invoices.slice(startIndex, startIndex + rowsPerPage);

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setRowOptions(null);
    setDotOptions(null);
  };

  const handleDeleteInvoice = (invoice) => {
    alert(`Deleted ${invoice.id}`);
    setRowOptions(null);
    setDotOptions(null);
  };

  return (
    <div className="invoice-table-container">
      <div className="invoice-table-heading">
        <h2>Invoice List</h2>
      </div>

      <div className="invoice-table">
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Reference Number</th>
              <th>Amount (₹)</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((invoice, i) => (
              <tr
                key={i}
                onClick={(e) => {
                  setRowOptions({
                    invoice,
                    x: e.clientX,
                    y: e.clientY,
                  });
                }}
                style={{ cursor: "pointer" }}
              >
                <td>{invoice.id}</td>
                <td>{invoice.reference}</td>
                <td>₹ {invoice.amount}</td>
                <td>{invoice.status}</td>
                <td className="due-date-cell">
                  <span>{invoice.dueDate}</span>
                  <button
                    className="dots-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      setDotOptions({
                        invoice,
                        x: rect.left,
                        y: rect.top,
                      });
                    }}
                  >
                    ⋮
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="invoice-pagination">
        <button
          className="invoice-pagination-button"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="invoice-pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="invoice-pagination-button"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {rowOptions && (
        <div className="row-options-modal" onClick={() => setRowOptions(null)}>
          <div
            className="row-options-modal-content"
            style={{
              position: "absolute",
              top: rowOptions.y,
              left: rowOptions.x,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="dropdown-item"
              onClick={() => handleViewInvoice(rowOptions.invoice)}
            >
              <LiaEyeSolid size={18} /> View Invoice
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleDeleteInvoice(rowOptions.invoice)}
            >
              <RiDeleteBin6Line size={18} /> Delete
            </div>
          </div>
        </div>
      )}

      {dotOptions && (
        <div className="row-options-modal" onClick={() => setDotOptions(null)}>
          <div
            className="dot-options-modal-content"
            style={{
              position: "absolute",
              top: dotOptions.y,
              left: dotOptions.x,
              transform: "translate(-100%, 0)",
              zIndex: 1000,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="dropdown-item"
              onClick={() => {
                alert(`${dotOptions.invoice.id} Paid`);
                setDotOptions(null);
              }}
            >
              Paid
            </div>
          </div>
        </div>
      )}

      {selectedInvoice && (
        <div className="invoice-modal" onClick={() => setSelectedInvoice(null)}>
          <div
            className="invoice-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <ViewInvoice invoice={selectedInvoice} />
          </div>
        </div>
      )}
    </div>
  );
}
