import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Individual.css";

export default function Individual() {
  const navigate = useNavigate();
  const { id } = useParams();
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

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
        const p = res.data;
        setProductName(p.productName);
        setClientProductId(p.clientProductId);
        setCategory(p.category);
        setPrice(p.price);
        setQuantity(p.quantity);
        setUnit(p.unit);
        setExpiryDate(p.expiryDate ? p.expiryDate.split("T")[0] : "");
        setThreshold(p.threshold);
        setImage(p.image);
      });
    }
  }, [id]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setImage(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseClick = () => fileInputRef.current.click();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { clientProductId, productName, category, price, quantity, unit, expiryDate, threshold, image };
    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/products/${id}`, productData);
        toast.success("✅ Product updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/products", productData);
        toast.success("✅ Product added successfully!");
      }
      navigate("/product");
    } catch (err) {
      toast.error("❌ " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="individual-container">
      <h3>{id ? "Edit Product" : "New Product"}</h3>
      <form onSubmit={handleSubmit}>
        <div className="image-upload-wrapper">
          <div className="image-box">{image && <img src={image} alt="Preview" />}</div>
          <div className="image-text">
            <p>Drag image here</p>
            <p>or</p>
            <p className="browse-btn" onClick={handleBrowseClick}>Browse image</p>
          </div>
        </div>
        <input type="file" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} accept="image/*" />
        <div className="product-details"><label>Product Name:</label><input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required /></div>
        <div className="product-details"><label>Product ID:</label><input type="text" value={clientProductId} onChange={(e) => setClientProductId(e.target.value)} required /></div>
        <div className="product-details"><label>Category:</label><input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required /></div>
        <div className="product-details"><label>Price:</label><input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required /></div>
        <div className="product-details"><label>Quantity:</label><input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required /></div>
        <div className="product-details"><label>Unit:</label><input type="text" value={unit} onChange={(e) => setUnit(e.target.value)} required /></div>
        <div className="product-details"><label>Expiry Date:</label><input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required /></div>
        <div className="product-details"><label>Threshold:</label><input type="number" value={threshold} onChange={(e) => setThreshold(e.target.value)} required /></div>
        <div className="buttons-wrapper">
          <button type="button" className="discard-btn" onClick={() => navigate("/product")}>Discard</button>
          <button type="submit" className="add-btn">{id ? "Update Product" : "Add Product"}</button>
        </div>
      </form>
    </div>
  );
}
