import React from "react";
import "./Product.css";
import OverallInventory from "./OverallInventory/OverallInventory";
import Navbar from "../Navbar/Navbar";
import Table from "./Table/Table";
import Multiple from "./Table/Multiple/Multiple";


export default function Product() {
  return (
    <div className="product">
      <Navbar/>
      <Multiple/>
    </div>
  );
}
