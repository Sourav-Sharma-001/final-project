import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Invoice from "./Invoice/Invoice";
import Statistic from "./Statistic/Statistic";
import Settings from "./Settings/Settings";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="pages-container">        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/statistics" element={<Statistic />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
