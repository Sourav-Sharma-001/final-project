import React, { useState } from 'react';
import "./Table.css";

export default function Table() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

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
            <tr>
              <td>Example Product 1</td>
              <td>&#8377; 500</td>
              <td>20</td>
              <td>10</td>
              <td>2025-12-31</td>
              <td>In Stock</td>
            </tr>
            <tr>
              <td>Example Product 2</td>
              <td>&#8377; 1000</td>
              <td>5</td>
              <td>8</td>
              <td>2025-10-15</td>
              <td>Low Stock</td>
            </tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-button">Individual Product</button>
            <button className="modal-button">Multiple Product</button>
          </div>
        </div>
      )}
    </div>
  );
}
