import React, { useState } from 'react';
import "./InvoiceTable.css";

export default function InvoiceTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const rowsPerPage = 9;

  const invoices = Array.from({ length: 40 }).map((_, i) => ({
    id: `INV-${1000 + i}`,
    reference: `REF-${2000 + i}`,
    amount: 100 + i * 10,
    status: i % 2 === 0 ? "Paid" : "Pending",
    dueDate: "2025-12-31"
  }));

  const totalPages = Math.ceil(invoices.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = invoices.slice(startIndex, startIndex + rowsPerPage);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className='invoice-table-container'>
      <div className='invoice-table-heading'>
        <h3>Invoice List</h3>
      </div>

      <div className='invoice-table'>
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
              <tr key={i}>
                <td>{invoice.id}</td>
                <td>{invoice.reference}</td>
                <td>₹ {invoice.amount}</td>
                <td>{invoice.status}</td>
                <td className="due-date-cell">
                  <span>{invoice.dueDate}</span>
                  <button className="dots-button" onClick={() => toggleDropdown(i)}>⋮</button>
                  {openDropdown === i && (
                    <div className="dropdown-menu">
                      <div className="dropdown-item">Edit</div>
                      <div className="dropdown-item">Delete</div>
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
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="invoice-pagination-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="invoice-pagination-button"
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
