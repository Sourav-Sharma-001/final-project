import React from "react";
import "./Overview.css";
import Navbar from "./Navbar/Navbar";
import SalesOverview from "./SalesOverview/SalesOverview";
import PurchaseOverview from "./PurchaseOverview/PurchaseOverview";
import PurchaseSummary from "./PurchaseSummary/PurchaseSummary";
import InventorySummary from "./InventorySummary/InventorySummary";
import TopProducts from "./TopProducts/TopProducts";
import Chart from "./Chart/Chart";

export default function Overview() {
  return (
    <div className="overview">
      <Navbar />
      <div className="overview-content-conatiner">
        <div className="left-overview-container">
          <SalesOverview />
          <PurchaseOverview />
          <div className="graph">
            <Chart />
          </div>
        </div>
        <div className="right-overview-container">
          <InventorySummary />
          <PurchaseSummary />
          <TopProducts />
        </div>
      </div>
    </div>
  );
}
