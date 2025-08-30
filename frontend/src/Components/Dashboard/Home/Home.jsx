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
  // State for left draggable blocks
  const [leftBlocks, setLeftBlocks] = useState([
    { id: "overview" },
    { id: "graph" },
  ]);

  // State for right draggable blocks
  const [rightBlocks, setRightBlocks] = useState([
    { id: "upper" },
    { id: "lower" },
  ]);

  const [dragOverIndexLeft, setDragOverIndexLeft] = useState(null);
  const [dragOverIndexRight, setDragOverIndexRight] = useState(null);

  // Handlers for left blocks

  const handleDragStartLeft = (e, dragIndex) => {
    e.dataTransfer.setData("dragIndex", dragIndex);
  };

  const handleDragEnterLeft = (e, index) => {
    setDragOverIndexLeft(index);
  };

  const handleDragOverLeft = (e) => {
    e.preventDefault();
  };

  const handleDropLeft = (e) => {
    const dragIndex = parseInt(e.dataTransfer.getData("dragIndex"), 10);
    if (dragIndex === dragOverIndexLeft || dragOverIndexLeft === null) return;

    const newOrder = [...leftBlocks];
    const [moved] = newOrder.splice(dragIndex, 1);
    newOrder.splice(dragOverIndexLeft, 0, moved);

    setLeftBlocks(newOrder);
    setDragOverIndexLeft(null);
  };

  // Handlers for right blocks

  const handleDragStartRight = (e, dragIndex) => {
    e.dataTransfer.setData("dragIndexRight", dragIndex);
  };

  const handleDragEnterRight = (e, index) => {
    setDragOverIndexRight(index);
  };

  const handleDragOverRight = (e) => {
    e.preventDefault();
  };

  const handleDropRight = (e) => {
    const dragIndex = parseInt(e.dataTransfer.getData("dragIndexRight"), 10);
    if (dragIndex === dragOverIndexRight || dragOverIndexRight === null) return;

    const newOrder = [...rightBlocks];
    const [moved] = newOrder.splice(dragIndex, 1);
    newOrder.splice(dragOverIndexRight, 0, moved);

    setRightBlocks(newOrder);
    setDragOverIndexRight(null);
  };

  return (
    <div className="home">
      <Navbar />
      <div className="home-content-container">
        {/* LEFT SIDE */}
        <div className="left-home-container">
          {leftBlocks.map((block, index) => {
            if (block.id === "overview") {
              return (
                <div
                  key="overview"
                  className="draggable-unit"
                  draggable
                  onDragStart={(e) => handleDragStartLeft(e, index)}
                  onDragEnter={(e) => handleDragEnterLeft(e, index)}
                  onDragOver={handleDragOverLeft}
                  onDrop={handleDropLeft}
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
                  onDragStart={(e) => handleDragStartLeft(e, index)}
                  onDragEnter={(e) => handleDragEnterLeft(e, index)}
                  onDragOver={handleDragOverLeft}
                  onDrop={handleDropLeft}
                >
                  <Chart />
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="right-home-container">
          {rightBlocks.map((block, index) => {
            if (block.id === "upper") {
              return (
                <div
                  key="upper"
                  className="draggable-unit-2-upper"
                  draggable
                  onDragStart={(e) => handleDragStartRight(e, index)}
                  onDragEnter={(e) => handleDragEnterRight(e, index)}
                  onDragOver={handleDragOverRight}
                  onDrop={handleDropRight}
                >
                  <InventorySummary />
                  <PurchaseSummary />
                </div>
              );
            }
            if (block.id === "lower") {
              return (
                <div
                  key="lower"
                  className="draggable-unit-2-lower"
                  draggable
                  onDragStart={(e) => handleDragStartRight(e, index)}
                  onDragEnter={(e) => handleDragEnterRight(e, index)}
                  onDragOver={handleDragOverRight}
                  onDrop={handleDropRight}
                >
                  <TopProducts />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
