import React from "react";
import "./InventorySummary.css";
import { GoInbox, GoCheckbox } from "react-icons/go";

export default function InventorySummary() {
  return (
    <div className="inventory-summary">
      <div className="inventory-summary-container">
        <div className="inventory-summary-content">
          <h4>Inventory Summary</h4>
          <div className="inventory-summary-block">
            <div className="inventory-summary-quarter">
              <div
                className="inventory-summary-icon"
                style={{ backgroundColor: "#0BB2F4" }}
              >
                <GoInbox size={30} />
              </div>
              <div className="inventory-summary-data">
                <div style={{ fontWeight: "bold" }}>800</div>
                <div>Quantity</div>
              </div>
            </div>
            <div className="inventory-summary-quarter">
              <div
                className="inventory-summary-icon"
                style={{ backgroundColor: "#FAD85D" }}
              >
                <GoCheckbox size={30} />
              </div>
              <div className="inventory-summary-data">
                <div style={{ fontWeight: "bold" }}>800</div>
                <div>Receivable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
