import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./OverrallInvoice.css";
import { AppContext } from "../../../ContextAPI/ContextAPI";

export default function OverrallInvoice() {
  const [products, setProducts] = useState([]);
  const [recentTransactions, setRecentTransactions] = useState(0);
  const [totalInvoices, setTotalInvoices] = useState(0);
  const [paidCount, setPaidCount] = useState(0);
  const [unpaidCount, setUnpaidCount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [unpaidAmount, setUnpaidAmount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const { processed, refreshInvoices } = useContext(AppContext);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products?limit=1000");
      const data = res.data.products || [];
      setProducts(data);

      const now = new Date();
      const last7Days = new Date();
      last7Days.setDate(now.getDate() - 7);

      const recent = data.filter(p => new Date(p.createdAt) >= last7Days);
      setRecentTransactions(recent.length);

      setTotalInvoices(data.length);

      const paidProducts = data.filter(p => p.status === "Paid");
      setPaidCount(paidProducts.length);
      setPaidAmount(paidProducts.reduce((acc, p) => acc + (p.price || 0), 0));

      const unpaidProducts = data.filter(p => p.status !== "Paid");
      setUnpaidCount(unpaidProducts.length);
      setUnpaidAmount(unpaidProducts.reduce((acc, p) => acc + (p.price || 0), 0));

      const uniqueCustomers = new Set(data.map(p => p.customerName || p.clientProductId));
      setCustomersCount(uniqueCustomers.size);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [refreshInvoices]);

  return (
    <div className="overall-invoice">
      <h3 id="product-h3">Overall Invoice</h3>
      <div style={{ display: "flex" }}>
        <div className="invoice-block">
          <h4 id="product-h4">Recent Transactions</h4>
          <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
            {recentTransactions}
          </div>
          <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Last 7 days</div>
        </div>

        <div className="invoice-block">
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>Total Invoices</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              {totalInvoices}
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              {processed}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Last 7 days</div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Processed</div>
          </div>
        </div>

        <div className="invoice-block">
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>Paid Amount</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
            ₹ {paidAmount.toFixed(2)}
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              {paidCount}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Paid</div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Invoices</div>
          </div>
        </div>

        <div className="invoice-block" style={{ border: "none" }}>
          <h4 id="product-h4" style={{ marginLeft: "3rem" }}>Unpaid Amount</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
            ₹ {unpaidAmount.toFixed(2)}
            </div>
            <div style={{ fontSize: "0.9rem", fontWeight: "bold", color: "#858D9D" }}>
              {unpaidCount}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Pending Payment</div>
            <div style={{ fontSize: "0.7rem", color: "#858D9D" }}>Invoices</div>
          </div>
        </div>
      </div>
    </div>
  );
}
