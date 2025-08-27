import React from "react";
import "./PurchaseOverview.css";
import { IoBagOutline } from "react-icons/io5";
import { TbShoppingCartCancel } from "react-icons/tb";
import { PiKeyReturnBold } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

export default function PurchaseOverview() {
  return (
    <div className="purchase-overview">
      <div className="purchase-content-container">
        <h4>Purchase Overview</h4>
        <div className="purchase-block">
          <div className="purchase-quarter">
            <div className="purchase-icon" style={{ backgroundColor: "#0BB2F4" }}>
              <IoBagOutline size={30} />
            </div>
            <div className="purchase-data">
              <div style={{ fontWeight: "bold" }}>&#8377; 800</div>
              <div>Purchase</div>
            </div>
          </div>
          <div className="purchase-quarter">
            <div className="purchase-icon" style={{ backgroundColor: "#FAD85D" }}>
              <RiMoneyRupeeCircleLine size={30} />
            </div>
            <div className="purchase-data">
              <div style={{ fontWeight: "bold" }}>&#8377; 800</div>
              <div>Cost</div>
            </div>
          </div>
          <div className="purchase-quarter">
            <div className="purchase-icon" style={{ backgroundColor: "#0BF4CB" }}>
              <TbShoppingCartCancel size={30} />
            </div>
            <div className="purchase-data">
              <div style={{ fontWeight: "bold" }}>&#8377; 800</div>
              <div>Cancel</div>
            </div>
          </div>
          <div className="purchase-quarter">
            <div className="purchase-icon" style={{ backgroundColor: "#0BB2F4" }}>
              <PiKeyReturnBold size={30} />
            </div>
            <div className="purchase-data">
              <div style={{ fontWeight: "bold" }}>&#8377; 800</div>
              <div>Return</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
