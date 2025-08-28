import React, { useState } from 'react';
import "./Table.css";

export default function Table() {
  const [showMenu, setShowMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8; 

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const products = Array.from({ length: 40 }).map((_, i) => ({
    name: `Product ${i + 1}`,
    price: 100 + i * 10,
    qty: Math.floor(Math.random() * 50),
    threshold: 5 + (i % 10),
    expiry: "2025-12-31",
    status: i % 2 === 0 ? "In Stock" : "Low Stock"
  }));

  const totalPages = Math.ceil(products.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = products.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className='table-container'>
      <div className='table-heading'>
        <h3>Products</h3>
        <button onClick={openModal}>Add Product</button>
      </div>

      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Threshold Value</th>
              <th>Expiry Date</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((product, i) => (
              <tr key={i}>
                <td>{product.name}</td>
                <td>₹ {product.price}</td>
                <td>{product.qty}</td>
                <td>{product.threshold}</td>
                <td>{product.expiry}</td>
                <td className="availability-cell">
                  <span className="availability-text">{product.status}</span>
                  <div className="dropdown-wrapper">
                    <button
                      className="dots-button"
                      onClick={() => setShowMenu(showMenu === i ? null : i)}
                    >
                      ⋮
                    </button>
                    {showMenu === i && (
                      <div className="dropdown-menu">
                        <div className="dropdown-item">Edit</div>
                        <div className="dropdown-item">Delete</div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="pagination-button"
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-button">Individual Product</button>
            <button className="modal-button">Multiple Product</button>
          </div>
        </div>
      )}
    </div>
  );
}
