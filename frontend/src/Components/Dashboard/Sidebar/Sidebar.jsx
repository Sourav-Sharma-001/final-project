import React, { useContext } from "react";
import {
  FaHome,
  FaBox,
  FaFileInvoice,
  FaCog,
  FaChartBar,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "./Images/frame.png";
import "./Sidebar.css";
import { AppContext } from "../../ContextAPI/ContextAPI";

export default function Sidebar() {
  const { setCurrentPage } = useContext(AppContext);
  const location = useLocation();

  const getActiveClass = (path) =>
    location.pathname === path ? "sidebar-item active" : "sidebar-item";

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <hr />
      <div className="sidebar-pages">
        <Link
          to="/"
          className={getActiveClass("/")}
          onClick={() => setCurrentPage("Home")}
        >
          <FaHome className="sidebar-icon" /> Home
        </Link>
        <Link
          to="/product"
          className={getActiveClass("/product")}
          onClick={() => setCurrentPage("Product")}
        >
          <FaBox className="sidebar-icon" /> Product
        </Link>
        <Link
          to="/invoice"
          className={getActiveClass("/invoice")}
          onClick={() => setCurrentPage("Invoice")}
        >
          <FaFileInvoice className="sidebar-icon" /> Invoice
        </Link>
        <Link
          to="/statistics"
          className={getActiveClass("/statistics")}
          onClick={() => setCurrentPage("Statistics")}
        >
          <FaChartBar className="sidebar-icon" /> Statistics
        </Link>
        <Link
          to="/settings"
          className={getActiveClass("/settings")}
          onClick={() => setCurrentPage("Settings")}
        >
          <FaCog className="sidebar-icon" /> Settings
        </Link>
      </div>
      <hr />
      <div className="sidebar-profile">
        <FaUserCircle className="profile-icon" />
        <span className="profile-name">John Doe</span>
      </div>
    </div>
  );
}
