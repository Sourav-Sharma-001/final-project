import React from 'react';
import { FaHome, FaBox, FaFileInvoice, FaCog, FaChartBar, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <img src="/frame.png" alt="Logo" />
      </div>
      <hr />
      <div className='sidebar-pages'>
        <Link to="/" className='sidebar-item'><FaHome className="sidebar-icon" /> Home</Link>
        <Link to="/product" className='sidebar-item'><FaBox className="sidebar-icon" /> Product</Link>
        <Link to="/invoice" className='sidebar-item'><FaFileInvoice className="sidebar-icon" /> Invoice</Link>
        <Link to="/statistics" className='sidebar-item'><FaChartBar className="sidebar-icon" /> Statistics</Link>
        <Link to="/settings" className='sidebar-item'><FaCog className="sidebar-icon" /> Settings</Link>
      </div>
      <hr />
      <div className='sidebar-profile'>
        <FaUserCircle className="profile-icon" />
        <span className="profile-name">John Doe</span>
      </div>
    </div>
  );
}
