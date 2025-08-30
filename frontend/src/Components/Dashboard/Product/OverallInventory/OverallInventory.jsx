import React from "react";
import "./OverallInventory.css";

export default function OverallInventory() {
  return (
    <div className="overall-inventory">
      <h3 id="product-h3">Overall Inventory</h3>
      <div style={{ display: "flex" }}>
        <div className="inventory-block">
          <h4 id="product-h4">Categories</h4>
          <div
            style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}
          >
            14
          </div>
          <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>
            Last 7 days
          </div>
        </div>
        <div className="inventory-block">
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>
            Total Products
          </h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#858D9D",
              }}
            >
              14
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#858D9D",
              }}
            >
              &#8377;10000
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>
              Last 7 days
            </div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Revenue</div>
          </div>
        </div>
        <div className="inventory-block">
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>
            Top Selling
          </h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#858D9D",
              }}
            >
              14
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#858D9D",
              }}
            >
              &#8377;10000
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>
              Last 7 days
            </div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Revenue</div>
          </div>
        </div>
        <div className="inventory-block" style={{ border: "none" }}>
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>
            Low Stocks
          </h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#858D9D",
              }}
            >
              14
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#858D9D",
              }}
            >
              10000
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>
              Last 7 days
            </div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
}
