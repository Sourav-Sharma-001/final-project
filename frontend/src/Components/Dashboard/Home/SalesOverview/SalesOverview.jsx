import React, { useState, useEffect } from "react";
import "./SalesOverview.css";
import { LiaCoinsSolid } from "react-icons/lia";
import { FcBullish } from "react-icons/fc";
import { BsBarChart } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import axios from "axios";

export default function SalesOverview() {
  const [sales, setSales] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [profit, setProfit] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        // Fetch invoices or sales products
        const res = await axios.get("https://your-backend.onrender.com/api/products?limit=1000");
        const data = res.data.products || [];

        // Calculate totals
        const paidProducts = data.filter(p => p.status === "Paid");
        const unpaidProducts = data.filter(p => p.status !== "Paid");

        const totalSales = data.reduce((acc, p) => acc + (p.price || 0), 0);
        const totalRevenue = paidProducts.reduce((acc, p) => acc + (p.price || 0), 0);
        const totalCost = data.reduce((acc, p) => acc + ((p.cost || 0) * (p.quantity || 1)), 0);
        const totalProfit = totalRevenue - totalCost;

        setSales(totalSales);
        setRevenue(totalRevenue);
        setCost(totalCost);
        setProfit(totalProfit);
      } catch (err) {
        console.error("Error fetching sales data:", err);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="sales-overview">
      <div className="sales-content-container">
        <h4>Sales Overview</h4>
        <div className="sales-block">
          <div className="quarter-container">
            <div className="overview-icons" style={{ backgroundColor: "#0BB2F4" }}>
              <LiaCoinsSolid size={30} />
            </div>
            <div className="sales-data">
              <div style={{ fontWeight: "bold" }}>&#8377; {sales.toFixed(2)}</div>
              <div>Sales</div>
            </div>
          </div>
          <div className="quarter-container">
            <div className="overview-icons" style={{ backgroundColor: "#FAD85D" }}>
              <FcBullish size={30} />
            </div>
            <div className="sales-data">
              <div style={{ fontWeight: "bold" }}>&#8377; {revenue.toFixed(2)}</div>
              <div>Revenue</div>
            </div>
          </div>
          <div className="quarter-container">
            <div className="overview-icons" style={{ backgroundColor: "#0BF4CB" }}>
              <BsBarChart size={30} />
            </div>
            <div className="sales-data">
              <div style={{ fontWeight: "bold" }}>&#8377; {profit.toFixed(2)}</div>
              <div>Profit</div>
            </div>
          </div>
          <div className="quarter-container">
            <div className="overview-icons" style={{ backgroundColor: "#0BB2F4" }}>
              <RiMoneyRupeeCircleLine size={30} />
            </div>
            <div className="sales-data">
              <div style={{ fontWeight: "bold" }}>&#8377; {cost.toFixed(2)}</div>
              <div>Cost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
