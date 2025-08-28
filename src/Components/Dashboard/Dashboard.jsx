import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Invoice from "./Invoice/Invoice";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="pages-container">
        <Invoice/>
      </div>
    </div>
  );
}
