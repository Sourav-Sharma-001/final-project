import React from "react";
import "./Statistic.css";
import Navbar from "../Navbar/Navbar";
import { FaRupeeSign } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import Chart from "../Home/Chart/Chart";
import TopProducts from "../Home/TopProducts/TopProducts";

export default function Statistic() {
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
              <h2>₹200000</h2>
              <div>+20% form last month</div>
            </div>
          </div>
          <div
            className="statistic-total-revenue"
            style={{ backgroundColor: "#0BF4C8" }}
          >
            <div className="statistic-total-revenue-container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Total Revenue</div>
                <FaBox />
              </div>
              <h2>₹200000</h2>
              <div>+20% form last month</div>
            </div>
          </div>
          <div
            className="statistic-total-revenue"
            style={{ backgroundColor: "#F2A0FF" }}
          >
            <div className="statistic-total-revenue-container">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Total Revenue</div>
                <MdShowChart />
              </div>
              <h2>₹200000</h2>
              <div>+20% form last month</div>
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
