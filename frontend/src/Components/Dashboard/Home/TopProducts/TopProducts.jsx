import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TopProducts.css";

export default function TopProducts() {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products?limit=1000");
        const products = res.data.products || [];

        const sorted = [...products]
          .sort((a, b) => (b.paidQuantity || 0) - (a.paidQuantity || 0))
          .slice(0, 9);

        setTopProducts(sorted);
      } catch (err) {
        console.error("Error fetching top products:", err);
      }
    };

    fetchTopProducts();
  }, []);

  return (
    <div className="top-products">
      <h4>Top Products</h4>
      <div className="top-products-list">
        {topProducts.length > 0 ? (
          topProducts.map((product, index) => (
            <div className="product-item" key={index}>
              <span className="product-name">{product.productName}</span>
              <span className="product-sales">{product.paidQuantity || 0}</span>
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", color: "#858D9D" }}>
            No product data available
          </div>
        )}
      </div>
    </div>
  );
}
