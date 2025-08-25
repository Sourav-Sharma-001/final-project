import React from "react";
import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <div className="navbar">
        <div>Home</div>
        <input className="search-bar" placeholder="Search here..." />
      </div>
      <hr id="navbar-hr" />
      <div className="overview-content-conatiner">
        <div className="left-overview-container">
          <div className="sales-overview">
            <div className="sales-content-container">
              <h4>Sales Overview</h4>
              <div className="sales-block">
                <div className="quarter-container">
                  <div className="overview-icons">a</div>
                  <div className="sales-data">
                    <div>c</div>
                    <div>d</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="purchase-overview">b</div>
          <div className="graph">c</div>
        </div>
        <div className="right-overview-container">
          <div className="inventory-summary">a</div>
          <div className="purchase-summary">b</div>
          <div className="top-products">c</div>
        </div>
      </div>
    </div>
  );
}
