import React, { useState, useContext } from "react";
import "./Product.css";
import OverallInventory from "./OverallInventory/OverallInventory";
import Table from "./Table/Table";
import { AppContext } from "../../ContextAPI/ContextAPI";

export default function Product() {
  const { currentPage } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState(""); // search state

  return (
    <div className="product">
      <div className="product-navbar">
        <div>{currentPage}</div>
        <input
          className="product-search-bar"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr id="product-navbar-hr" />
      <div className="product-content-container">
        <OverallInventory />
        <Table searchTerm={searchTerm} /> {/* pass searchTerm to Table */}
      </div>
    </div>
  );
}
