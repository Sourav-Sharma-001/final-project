import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OverallInventory.css";

export default function OverallInventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://your-backend.onrender.com/api/products");
        setProducts(res.data.products || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const last7DaysProducts = products.filter(
    p => new Date(p.createdAt) >= sevenDaysAgo
  );

  const activeProducts = last7DaysProducts.filter(p => p.status !== "Expired");

  const totalCategories = [...new Set(activeProducts.map(p => p.category))].length;
  const totalProducts = activeProducts.length;
  const totalRevenue = activeProducts.reduce(
    (acc, p) => acc + ((p.price || 0) * (p.quantity || 0)),
    0
  ).toFixed(2);

  const lowStockProducts = activeProducts.filter(
    p => (p.quantity || 0) <= (p.threshold || 0)
  );
  const lowStockCount = lowStockProducts.length;
  const lowStockValue = lowStockProducts.reduce(
    (acc, p) => acc + ((p.price || 0) * (p.quantity || 0)),
    0
  ).toFixed(2);

  const topSellingProducts = [...activeProducts]
    .sort((a, b) => (b.quantity || 0) - (a.quantity || 0))
    .slice(0, 1);
  const topSellingCount = topSellingProducts.length > 0 ? topSellingProducts[0].quantity : 0;
  const topSellingRevenue = topSellingProducts.length > 0 
    ? ((topSellingProducts[0].price || 0) * (topSellingProducts[0].quantity || 0)).toFixed(2)
    : "0.00";

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
