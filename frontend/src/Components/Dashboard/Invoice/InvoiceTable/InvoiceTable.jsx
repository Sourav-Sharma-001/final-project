import React, { useState, useEffect, useContext } from "react";
import "./InvoiceTable.css";
import { LiaEyeSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import ViewInvoice from "./ViewInvoice/ViewInvoice";
import axios from "axios";
import { AppContext } from "../../../ContextAPI/ContextAPI";

export default function InvoiceTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [rowOptions, setRowOptions] = useState(null);
  const [dotOptions, setDotOptions] = useState(null);
  const rowsPerPage = 9;
  const { incrementProcessed, triggerRefresh } = useContext(AppContext);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products?page=${currentPage}&limit=${rowsPerPage}`
      );
      setProducts(res.data.products || []);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      console.error(err);
      setProducts([]);
      setTotalPages(1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setRowOptions(null);
    setDotOptions(null);
    incrementProcessed();
  };

  const handleDeleteInvoice = async (invoice) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${invoice._id}`);
      fetchProducts();
      setRowOptions(null);
      setDotOptions(null);
      triggerRefresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePaid = async (invoice) => {
    if (invoice.status === "Paid") return;
    try {
      const res = await axios.put(
        `http://localhost:5000/api/products/pay/${invoice._id}`
      );
      setProducts((prev) =>
        prev.map((p) => (p._id === res.data._id ? res.data : p))
      );
      setDotOptions(null);
      triggerRefresh(); // optional: refresh OverallInvoice immediately
    } catch (err) {
      console.error(err);
    }
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
            {products.map((invoice, i) => (
              <tr
                key={i}
                onClick={(e) =>
                  setRowOptions({ invoice, x: e.clientX, y: e.clientY })
                }
                style={{ cursor: "pointer" }}
              >
                <td>{invoice.clientProductId}</td>
                <td>{invoice.referenceNumber || "-"}</td>
                <td>₹ {invoice.price}</td>
                <td>{invoice.status}</td>
                <td className="due-date-cell">
                  <span>
                    {invoice.expiryDate
                      ? new Date(invoice.expiryDate).toISOString().split("T")[0]
                      : "-"}
                  </span>
                  <button
                    className="dots-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const rect = e.currentTarget.getBoundingClientRect();
                      setDotOptions({ invoice, x: rect.left, y: rect.top });
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
            <div className="dropdown-item">
              <button
                onClick={async () => await handlePaid(dotOptions.invoice)}
                disabled={dotOptions.invoice.status === "Paid"}
                style={{
                  background: "none",
                  border: "none",
                  color:
                    dotOptions.invoice.status === "Paid" ? "gray" : "green",
                  cursor:
                    dotOptions.invoice.status === "Paid"
                      ? "default"
                      : "pointer",
                  fontSize: "1rem",
                }}
              >
                Paid
              </button>
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
