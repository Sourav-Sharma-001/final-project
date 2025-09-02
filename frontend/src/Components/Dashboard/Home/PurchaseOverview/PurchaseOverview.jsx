import React, { useState, useEffect } from "react";
import "./PurchaseOverview.css";
import { IoBagOutline } from "react-icons/io5";
import { TbShoppingCartCancel } from "react-icons/tb";
import { PiKeyReturnBold } from "react-icons/pi";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import axios from "axios";

export default function PurchaseOverview() {
  const [purchase, setPurchase] = useState(0);
  const [cost, setCost] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [returns, setReturns] = useState(0);

  useEffect(() => {
    const fetchPurchaseData = async () => {
      try {
        const res = await axios.get("https://your-backend.onrender.com/api/products?limit=1000");
        const data = res.data.products || [];

        const totalPurchase = data.reduce((acc, p) => acc + (p.price || 0), 0);

        const totalCost = data.reduce((acc, p) => acc + ((p.cost || 0) * (p.quantity || 1)), 0);

        const canceledProducts = data.filter(p => p.status === "Canceled");
        const totalCanceled = canceledProducts.reduce((acc, p) => acc + (p.price || 0), 0);

        const returnedProducts = data.filter(p => p.status === "Returned");
        const totalReturned = returnedProducts.reduce((acc, p) => acc + (p.price || 0), 0);

        setPurchase(totalPurchase);
        setCost(totalCost);
        setCancel(totalCanceled);
        setReturns(totalReturned);
      } catch (err) {
        console.error("Error fetching purchase data:", err);
      }
    };

    fetchPurchaseData();
  }, []);

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
              <div style={{ fontWeight: "bold" }}>&#8377; {purchase.toFixed(2)}</div>
              <div>Purchase</div>
            </div>
          </div>
          <div className="purchase-quarter">
            <div className="purchase-icon" style={{ backgroundColor: "#FAD85D" }}>
              <RiMoneyRupeeCircleLine size={30} />
            </div>
            <div className="purchase-data">
              <div style={{ fontWeight: "bold" }}>&#8377; {cost.toFixed(2)}</div>
              <div>Cost</div>
            </div>
          </div>
          <div className="purchase-quarter">
            <div className="purchase-icon" style={{ backgroundColor: "#0BF4CB" }}>
              <TbShoppingCartCancel size={30} />
            </div>
            <div className="purchase-data">
              <div style={{ fontWeight: "bold" }}>&#8377; {cancel.toFixed(2)}</div>
              <div>Cancel</div>
            </div>
          </div>
          <div className="purchase-quarter">
            <div className="purchase-icon" style={{ backgroundColor: "#0BB2F4" }}>
              <PiKeyReturnBold size={30} />
            </div>
            <div className="purchase-data">
              <div style={{ fontWeight: "bold" }}>&#8377; {returns.toFixed(2)}</div>
              <div>Return</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
