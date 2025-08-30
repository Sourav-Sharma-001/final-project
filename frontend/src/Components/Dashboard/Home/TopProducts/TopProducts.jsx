import React from "react";
import "./TopProducts.css";

export default function TopProducts() {
  const products = [
    { name: "Product A", sales: 120 },
    { name: "Product B", sales: 95 },
    { name: "Product C", sales: 70 },
    { name: "Product D", sales: 50 },
  ];

  return (
    <div className="top-products">
      <h4>Top Products</h4>
      <div className="top-products-list">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <span className="product-name">{product.name}</span>
            <span className="product-sales">{product.sales}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
