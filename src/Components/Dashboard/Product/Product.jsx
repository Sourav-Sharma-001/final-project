import React from "react";
import "./Product.css";
import OverallInventory from "./OverallInventory/OverallInventory";
import Navbar from "../Navbar/Navbar";

export default function Product() {
  return (
    <div className="product">
      <Navbar/>
      <div className="product-content-container">
        <OverallInventory />        
      </div>
    </div>
  );
}
