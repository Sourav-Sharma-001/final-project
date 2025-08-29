import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Settings from "./Settings/Settings";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="pages-container">
        <Settings />
      </div>
    </div>
  );
}
