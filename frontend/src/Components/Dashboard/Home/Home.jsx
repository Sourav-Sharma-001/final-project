import React, { useState } from "react";
import "./Home.css";
import SalesOverview from "./SalesOverview/SalesOverview";
import PurchaseOverview from "./PurchaseOverview/PurchaseOverview";
import PurchaseSummary from "./PurchaseSummary/PurchaseSummary";
import InventorySummary from "./InventorySummary/InventorySummary";
import TopProducts from "./TopProducts/TopProducts";
import Chart from "./Chart/Chart";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  const [blocks, setBlocks] = useState([{ id: "overview" }, { id: "graph" }]);

  const handleDragStart = (e, dragIndex) => {
    e.dataTransfer.setData("dragIndex", dragIndex);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = parseInt(e.dataTransfer.getData("dragIndex"), 10);
    if (dragIndex === dropIndex) return;

    const newOrder = [...blocks];
    const [moved] = newOrder.splice(dragIndex, 1);
    newOrder.splice(dropIndex, 0, moved);
    setBlocks(newOrder);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <Navbar />
      <div className="home-content-container">
        <div className="left-home-container">
          {blocks.map((block, index) => {
            if (block.id === "overview") {
              return (
                <div
                  key="overview"
                  className="draggable-unit"
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <div className="draggable-unit-1">
                    <SalesOverview />
                    <PurchaseOverview />
                  </div>
                </div>
              );
            }

            if (block.id === "graph") {
              return (
                <div
                  key="graph"
                  className="draggable-unit graph"
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <Chart />
                </div>
              );
            }

            return null;
          })}
        </div>

        <div className="right-home-container">
          <div className="draggable-unit-2-upper">
            <InventorySummary />
            <PurchaseSummary />
          </div>
          <div className="draggable-unit-2-lower">
            <TopProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
