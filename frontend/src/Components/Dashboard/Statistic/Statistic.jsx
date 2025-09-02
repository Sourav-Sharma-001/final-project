import React, { useEffect, useState } from "react";
import "./Statistic.css";
import Navbar from "../Navbar/Navbar";
import { FaRupeeSign } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import Chart from "../Home/Chart/Chart";
import TopProducts from "../Home/TopProducts/TopProducts";
import axios from "axios";

export default function Statistic() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    productsSold: 0,
    productInStock: 0,
    revenueChange: "+0%",
    soldChange: "+0%",
    stockChange: "+0%",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://your-backend.onrender.com/api/products");
        const products = res.data.products || [];

        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const last7DaysProducts = products.filter(
          (p) => new Date(p.createdAt) >= sevenDaysAgo
        );

        const activeProducts = last7DaysProducts.filter(
          (p) => p.status !== "Expired"
        );

        const totalRevenue = activeProducts.reduce(
          (acc, p) => acc + ((p.price || 0) * (p.quantity || 0)),
          0
        );

        const productsSold = activeProducts.reduce(
          (acc, p) => acc + (p.quantitySold || 0),
          0
        );

        const productInStock = activeProducts.reduce(
          (acc, p) => acc + (p.quantity || 0),
          0
        );

        setStats({
          totalRevenue,
          productsSold,
          productInStock,
          revenueChange: "+20% form last month",
          soldChange: "+15% form last month",
          stockChange: "+10% form last month",
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="statistic">
      <Navbar />
      <div className="statistic-container">
        <div className="statistic-data">
          <div
            className="statistic-total-revenue"
            style={{ backgroundColor: "#FAD85D" }}
          >
            <div className="statistic-total-revenue-container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Total Revenue</div>
                <FaRupeeSign />
              </div>
              <h2>₹{stats.totalRevenue.toLocaleString()}</h2>
              <div>{stats.revenueChange}</div>
            </div>
          </div>
          <div
            className="statistic-total-revenue"
            style={{ backgroundColor: "#0BF4C8" }}
          >
            <div className="statistic-total-revenue-container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Products Sold</div>
                <FaBox />
              </div>
              <h2>{stats.productsSold}</h2>
              <div>{stats.soldChange}</div>
            </div>
          </div>
          <div
            className="statistic-total-revenue"
            style={{ backgroundColor: "#F2A0FF" }}
          >
            <div className="statistic-total-revenue-container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Product in Stock</div>
                <MdShowChart />
              </div>
              <h2>{stats.productInStock}</h2>
              <div>{stats.stockChange}</div>
            </div>
          </div>
        </div>
        <div className="statistic-graph-top-products-container">
          <div className="statistic-chart-container">
            <Chart />
          </div>
          <div className="statistic-top-products">
            <TopProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
