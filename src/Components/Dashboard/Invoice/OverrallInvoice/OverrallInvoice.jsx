import React from "react";
import "./OverrallInvoice.css"

export default function OverrallInvoice() {
  return (
    <div className="overall-invoice">
      <h3 id="product-h3">Overall Invoice</h3>
      <div style={{ display: "flex" }}>
        <div className="invoice-block">
          <h4 id="product-h4">Recent Transactions</h4>
          <div
            style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}
          >
            14
          </div>
          <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>
            Last 7 days
          </div>
        </div>
        <div className="invoice-block">
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>
            Total Invoices
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
        <div className="invoice-block">
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>
            Paid Amount
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
        <div className="invoice-block" style={{ border: "none" }}>
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>
            Unpaid Amount
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
