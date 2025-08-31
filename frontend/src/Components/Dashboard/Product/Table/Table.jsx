import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Table.css";
import Multiple from "./Multiple/Multiple";

export default function Table() {
  const [showModal, setShowModal] = useState(false);
  const [showMultiple, setShowMultiple] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [products, setProducts] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const rowsPerPage = 9;
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [refreshFlag]);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openMultiple = () => { setShowModal(false); setShowMultiple(true); };
  const closeMultiple = () => { setShowMultiple(false); setRefreshFlag(f => !f); };
  const goToIndividual = () => { setShowModal(false); navigate("/product/individual"); };

  const toggleDropdown = (index, event) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      const rect = event.target.getBoundingClientRect();
      const dropdownHeight = 70;
      const viewportHeight = window.innerHeight;
      const top = rect.bottom + dropdownHeight > viewportHeight ? rect.top - dropdownHeight : rect.bottom;
      const left = rect.right - 150;
      setDropdownPosition({ top: top + window.scrollY, left: left + window.scrollX });
      setOpenDropdown(index);
    }
  };

  const handleEdit = (id) => {
    navigate(`/product/individual/${id}`);
    setOpenDropdown(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      setRefreshFlag(f => !f);
      setOpenDropdown(null);
    } catch (err) {
      console.error(err);
    }
  };

  const totalPages = Math.max(Math.ceil(products.length / rowsPerPage), 1);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = products.slice(startIndex, startIndex + rowsPerPage);

  const getAvailability = (quantity, threshold) => {
    if (quantity === 0) return { text: "Out of Stock", className: "out-of-stock" };
    if (quantity <= threshold) return { text: "Low Stock", className: "low-stock" };
    return { text: "In Stock", className: "in-stock" };
  };

  return (
    <div className="table-container">
      <div className="table-heading">
        <h2>Products</h2>
        <button onClick={openModal}>Add Product</button>
      </div>

      <div className="table">
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
            {currentRows.map((product, i) => {
              const availability = getAvailability(product.quantity, product.threshold);
              return (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>₹ {product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.threshold}</td>
                  <td>{product.expiryDate ? new Date(product.expiryDate).toLocaleDateString() : "N/A"}</td>
                  <td className={`availability-cell ${availability.className}`}>
                    <span className="availability-text">{availability.text}</span>
                    <div className="dropdown-wrapper">
                      <button className="dots-button" onClick={(e) => toggleDropdown(i, e)}>⋮</button>
                      {openDropdown === i && (
                        <div
                          className="dropdown-menu"
                          style={{
                            position: "fixed",
                            top: dropdownPosition.top,
                            left: dropdownPosition.left,
                            zIndex: 1001,
                            width: "4rem"
                          }}
                        >
                          <div className="dropdown-item" onClick={() => handleEdit(product._id)}>Edit</div>
                          <div className="dropdown-item" onClick={() => handleDelete(product._id)}>Delete</div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
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
        <span className="pagination-info">Page {currentPage} of {totalPages}</span>
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
            <button className="modal-button" onClick={goToIndividual}>Individual Product</button>
            <button className="modal-button" onClick={openMultiple}>Multiple Product</button>
          </div>
        </div>
      )}

      {showMultiple && <Multiple onClose={closeMultiple} />}
    </div>
  );
}
