import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PurchaseSummary.css";
import { CgProfile } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";

export default function PurchaseSummary() {
  const [suppliersCount, setSuppliersCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products?limit=1000");
        const products = res.data.products || [];

        const suppliers = new Set(products.map(p => p.supplier || "Unknown"));
        setSuppliersCount(suppliers.size);

        const categories = new Set(products.map(p => p.category || "Uncategorized"));
        setCategoriesCount(categories.size);

      } catch (err) {
        console.error("Error fetching purchase summary:", err);
      }
    };

    fetchSummary();
  }, []);

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
                <div style={{ fontWeight: "bold" }}>{suppliersCount}</div>
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
                <div style={{ fontWeight: "bold" }}>{categoriesCount}</div>
                <div>Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
