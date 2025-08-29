import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home"
import Product from "./Product/Product"
import Invoice from "./Invoice/Invoice"
import Statistic from "./Statistic/Statistic"
import Settings from "./Settings/Settings";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="pages-container">
        <Home />
        
      </div>
    </div>
  );
}
