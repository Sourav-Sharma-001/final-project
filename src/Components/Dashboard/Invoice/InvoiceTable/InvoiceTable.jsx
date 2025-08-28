import React, { useState, useEffect, useRef } from "react";
import "./InvoiceTable.css";
import { LiaEyeSolid } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import ViewInvoice from "./ViewInvoice/ViewInvoice"; 

export default function InvoiceTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const rowsPerPage = 9;
  const dropdownRefs = useRef([]);

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

  const totalPages = Math.ceil(invoices.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = invoices.slice(startIndex, startIndex + rowsPerPage);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target)
        )
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedInvoice) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous || "";
      };
    }
  }, [selectedInvoice]);

  const handleViewInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setOpenDropdown(null);
  };

  const handleDeleteInvoice = (invoice) => {
    alert(`Deleted ${invoice.id}`);
    setOpenDropdown(null);
  };

  return (
    <div className="invoice-table-container">
      <div className="invoice-table-heading">
        <h3>Invoice List</h3>
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
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.reference}</td>
                <td>₹ {invoice.amount}</td>
                <td>{invoice.status}</td>
                <td
                  className="due-date-cell"
                  ref={(el) => (dropdownRefs.current[i] = el)}
                >
                  <span>{invoice.dueDate}</span>
                  <button
                    className="dots-button"
                    onClick={() => toggleDropdown(i)}
                    aria-label="options"
                  >
                    ⋮
                  </button>
                  {openDropdown === i && (
                    <div className="dropdown-menu" role="menu">
                      <div
                        className="dropdown-item"
                        onClick={() => handleViewInvoice(invoice)}
                        role="menuitem"
                      >
                        <LiaEyeSolid size={18} /> View Invoice
                      </div>
                      <div
                        className="dropdown-item"
                        onClick={() => handleDeleteInvoice(invoice)}
                        role="menuitem"
                      >
                        <RiDeleteBin6Line size={18} /> Delete
                      </div>
                    </div>
                  )}
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

      {selectedInvoice && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedInvoice(null);
          }}
        >
          <div
            className="modal-box"
            role="dialog"
            aria-modal="true"
            aria-label={`Invoice ${selectedInvoice.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              aria-label="Close invoice"
              onClick={() => setSelectedInvoice(null)}
            >
              ✕
            </button>

            <ViewInvoice invoice={selectedInvoice} />
          </div>
        </div>
      )}
    </div>
  );
}
