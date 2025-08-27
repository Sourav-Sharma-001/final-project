import React from "react";
import "./OverallInventory.css";
import { LiaCoinsSolid } from "react-icons/lia";
import { FcBullish } from "react-icons/fc";
import { BsBarChart } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

export default function OverallInventory() {
  return (
    <div className="overall-inventory">
      <div className="inventory-content-container">
        <h4>Overall Inventory</h4>
        <div className="inventory-block">
          <div className="quarter-container">
            <div className="inventory-icons" style={{ backgroundColor: "#0BB2F4" }}>
              <LiaCoinsSolid size={30} />
            </div>
            <div className="inventory-data">
              <div style={{ fontWeight: "bold" }}>&#8377; 800</div>
              <div>Sales</div>
            </div>
          </div>
          <div className="quarter-container">
            <div className="inventory-icons" style={{ backgroundColor: "#FAD85D" }}>
              <FcBullish size={30} />
            </div>
            <div className="inventory-data">
              <div style={{ fontWeight: "bold" }}>&#8377; 800</div>
              <div>Revenue</div>
            </div>
          </div>
          <div className="quarter-container">
            <div className="inventory-icons" style={{ backgroundColor: "#0BF4CB" }}>
              <BsBarChart size={30} />
            </div>
            <div className="inventory-data">
              <div style={{ fontWeight: "bold" }}>&#8377; 800</div>
              <div>Profit</div>
            </div>
          </div>
          <div className="quarter-container">
            <div className="inventory-icons" style={{ backgroundColor: "#0BB2F4" }}>
              <RiMoneyRupeeCircleLine size={30} />
            </div>
            <div className="inventory-data">
              <div style={{ fontWeight: "bold" }}>&#8377; 800</div>
              <div>Cost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
