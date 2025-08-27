import React from "react";
import "./Home.css";
import SalesOverview from "./SalesOverview/SalesOverview";
import PurchaseOverview from "./PurchaseOverview/PurchaseOverview";
import PurchaseSummary from "./PurchaseSummary/PurchaseSummary";
import InventorySummary from "./InventorySummary/InventorySummary";
import TopProducts from "./TopProducts/TopProducts";
import Chart from "./Chart/Chart";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content-container">
        <div className="left-home-container">
          <SalesOverview />
          <PurchaseOverview />
          <div className="graph">
            <Chart />
          </div>
        </div>
        <div className="right-home-container">
          <InventorySummary />
          <PurchaseSummary />
          <TopProducts />
        </div>
      </div>
    </div>
  );
}
