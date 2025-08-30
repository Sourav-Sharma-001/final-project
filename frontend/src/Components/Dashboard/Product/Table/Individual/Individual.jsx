import React, { useRef, useState } from "react";
import "./Individual.css";
import Navbar from "../../../Navbar/Navbar";

export default function Individual() {
  const [image, setImage] = useState(null);

  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [threshold, setThreshold] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Navbar />
      <div className="individual-container">
        <h3>New Product</h3>
        <div className="image-upload-wrapper">
          <div className="image-box">
            {image && <img src={image} alt="Preview" />}
          </div>
          <div className="image-text">
            <p>Drag image here</p>
            <p>or</p>
            <p className="browse-btn" onClick={handleBrowseClick}>
              Browse image
            </p>
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*"
        />

        <div className="product-details">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        <div className="product-details">
          <label htmlFor="product-id">Product ID:</label>
          <input
            type="text"
            id="product-id"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter product ID"
          />
        </div>
        <div className="product-details">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
          />
        </div>
        <div className="product-details">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>
        <div className="product-details">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </div>
        <div className="product-details">
          <label htmlFor="unit">Unit:</label>
          <input
            type="text"
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            placeholder="Enter unit (e.g. kg, pcs)"
          />
        </div>
        <div className="product-details">
          <label htmlFor="expiry-date">Expiry Date:</label>
          <input
            type="date"
            id="expiry-date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="Select expiry date"
          />
        </div>
        <div className="product-details">
          <label htmlFor="threshold">Threshold:</label>
          <input
            type="number"
            id="threshold"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            placeholder="Enter threshold value"
          />
        </div>

        <div className="buttons-wrapper">
          <button className="discard-btn">Discard</button>
          <button className="add-btn">Add Product</button>
        </div>
      </div>{" "}
    </>
  );
}
