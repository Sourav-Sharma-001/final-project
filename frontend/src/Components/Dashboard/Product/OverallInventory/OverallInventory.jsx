import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OverallInventory.css";

export default function OverallInventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data.products);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const last7DaysProducts = products.filter(p => new Date(p.createdAt) >= sevenDaysAgo);

  const expiredProducts = last7DaysProducts.filter(p => p.status === "Expired");
  const activeProducts = last7DaysProducts.filter(p => p.status !== "Expired");

  const totalCategories = [...new Set(activeProducts.map(p => p.category))].length;
  const totalProducts = activeProducts.length;
  const totalRevenue = activeProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  const lowStockProducts = activeProducts.filter(p => p.quantity <= p.threshold);
  const lowStockCount = lowStockProducts.length;
  const lowStockValue = lowStockProducts.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  const topSellingProducts = [...activeProducts].sort((a, b) => b.quantity - a.quantity).slice(0, 1);
  const topSellingCount = topSellingProducts.length > 0 ? topSellingProducts[0].quantity : 0;
  const topSellingRevenue = topSellingProducts.length > 0 ? topSellingProducts[0].price * topSellingProducts[0].quantity : 0;

  return (
    <div className="overall-inventory">
      <h3 id="product-h3">Overall Inventory</h3>
      <div style={{ display: "flex" }}>
        <div className="inventory-block">
          <h4 id="product-h4">Categories</h4>
          <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
            {totalCategories}
          </div>
          <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Last 7 days</div>
        </div>
        <div className="inventory-block">
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>Total Products</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              {totalProducts}
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              &#8377;{totalRevenue}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Last 7 days</div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Revenue</div>
          </div>
        </div>
        <div className="inventory-block">
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>Top Selling</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              {topSellingCount}
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              &#8377;{topSellingRevenue}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Last 7 days</div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Revenue</div>
          </div>
        </div>
        <div className="inventory-block" style={{ border: "none" }}>
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>Low Stocks</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              {lowStockCount}
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              &#8377;{lowStockValue}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Last 7 days</div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
}
