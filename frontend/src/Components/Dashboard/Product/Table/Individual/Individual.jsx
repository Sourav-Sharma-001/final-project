import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Individual.css";

export default function Individual() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [productName, setProductName] = useState("");
  const [clientProductId, setClientProductId] = useState(""); 
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

  const handleBrowseClick = () => fileInputRef.current.click();

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        clientProductId,
        productName,
        category,
        price,
        quantity,
        unit,
        expiryDate,
        threshold,
        image,
      };

      console.log("📦 Sending product data:", newProduct);

      await axios.post("http://localhost:5000/api/products", newProduct);
      toast.success("✅ Product added successfully!");
      
    } catch (err) {
      console.error("❌ Error adding product:", err);
      toast.error("❌ Error: " + (err.response?.data?.error || err.message));
    }
  };

  return (
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
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
          required
        />
      </div>

      <div className="product-details">
        <label>Product ID:</label>
        <input
          type="text"
          value={clientProductId}
          onChange={(e) => setClientProductId(e.target.value)}
          placeholder="Enter custom product ID"
          required
        />
      </div>

      <div className="product-details">
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
          required
        />
      </div>

      <div className="product-details">
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter price"
          required
        />
      </div>

      <div className="product-details">
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
          required
        />
      </div>

      <div className="product-details">
        <label>Unit:</label>
        <input
          type="text"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          placeholder="Enter unit (e.g. kg, pcs)"
          required
        />
      </div>

      <div className="product-details">
        <label>Expiry Date:</label>
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
      </div>

      <div className="product-details">
        <label>Threshold:</label>
        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          placeholder="Enter threshold value"
          required
        />
      </div>

      <div className="buttons-wrapper">
        <button className="discard-btn" onClick={() => navigate("/product")}>
          Discard
        </button>
        <button className="add-btn" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}
