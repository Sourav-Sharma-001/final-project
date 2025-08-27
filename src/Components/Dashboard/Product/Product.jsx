import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Product.css";
import OverallInventory from "./OverallInventory/OverallInventory";

export default function Product() {
  return (
    <div className="product">
      <Navbar />
      <div className="product-content-container">
        <OverallInventory />
        <PurchaseOverview />
      </div>
    </div>
  );
}
