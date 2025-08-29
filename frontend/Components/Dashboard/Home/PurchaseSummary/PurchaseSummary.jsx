import React from "react";
import "./PurchaseSummary.css";
import { CgProfile } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";

export default function PurchaseSummary() {
  return (
    <div className="purchase-summary">
      <div className="purchase-summary-container">
        <div className="purchase-summary-content">
          <h4>Product Summary</h4>
          <div className="purchase-summary-block">
            <div className="purchase-summary-quarter">
              <div
                className="purchase-summary-icon"
                style={{ backgroundColor: "#0BB2F4" }}
              >
                <CgProfile size={30} />
              </div>
              <div className="purchase-summary-data">
                <div style={{ fontWeight: "bold" }}>800</div>
                <div>Suppliers</div>
              </div>
            </div>
            <div className="purchase-summary-quarter">
              <div
                className="purchase-summary-icon"
                style={{ backgroundColor: "#FAD85D" }}
              >
                <CiViewList size={30} />
              </div>
              <div className="purchase-summary-data">
                <div style={{ fontWeight: "bold" }}>800</div>
                <div>Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
