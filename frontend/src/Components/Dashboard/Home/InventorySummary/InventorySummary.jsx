import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InventorySummary.css";
import { GoInbox, GoCheckbox } from "react-icons/go";

export default function InventorySummary() {
  const [quantity, setQuantity] = useState(0);
  const [receivable, setReceivable] = useState(0);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await axios.get("https://your-backend.onrender.com/api/products?limit=1000");
        const products = res.data.products || [];

        const totalQuantity = products.reduce((acc, p) => acc + (p.quantity || 0), 0);
        setQuantity(totalQuantity);

        const totalReceivable = products.reduce(
          (acc, p) => acc + ((p.price || 0) * (p.quantity || 0)),
          0
        );
        setReceivable(totalReceivable.toFixed(2));
      } catch (err) {
        console.error("Error fetching inventory data:", err);
      }
    };

    fetchInventory();
  }, []);

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
                <div style={{ fontWeight: "bold" }}>{quantity}</div>
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
                <div style={{ fontWeight: "bold" }}>&#8377;{receivable}</div>
                <div>Receivable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
