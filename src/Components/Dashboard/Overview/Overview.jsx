import React from "react";
import "./Overview.css";
import { LiaCoinsSolid } from "react-icons/lia";
import { FcBullish } from "react-icons/fc";
import { BsBarChart } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { TbShoppingCartCancel } from "react-icons/tb";
import { PiKeyReturnBold } from "react-icons/pi";
import { GoInbox } from "react-icons/go";
import { GoCheckbox } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { CiViewList } from "react-icons/ci";
import Chart from "./Chart/Chart";


export default function Overview() {
  return (
    <div className="overview">
      <div className="navbar">
        <div>Home</div>
        <input className="search-bar" placeholder="Search here..." />
      </div>
      <hr id="navbar-hr" />
      <div className="overview-content-conatiner">
        <div className="left-overview-container">
          <div className="sales-overview">
            <div className="sales-content-container">
              <h4>Sales Overview</h4>
              <div className="sales-block">
                <div className="quarter-container">
                  <div
                    className="overview-icons"
                    style={{ backgroundColor: "#0BB2F4" }}
                  >
                    <LiaCoinsSolid size={30} />
                  </div>
                  <div className="sales-data">
                    <div style={{fontWeight:"bold"}}>&#8377; 800</div>
                    <div>Sales</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div
                    className="overview-icons"
                    style={{ backgroundColor: "#FAD85D" }}
                  >
                    <FcBullish size={30} />
                  </div>
                  <div className="sales-data">
                    <div style={{fontWeight:"bold"}}>&#8377; 800</div>
                    <div>Revenue</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div
                    className="overview-icons"
                    style={{ backgroundColor: "#0BF4CB" }}
                  >
                    <BsBarChart size={30} />
                  </div>
                  <div className="sales-data">
                    <div style={{fontWeight:"bold"}}>&#8377; 800</div>
                    <div>Profit</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div
                    className="overview-icons"
                    style={{ backgroundColor: "#0BB2F4" }}
                  >
                    <RiMoneyRupeeCircleLine size={30} />
                  </div>
                  <div className="sales-data">
                    <div style={{fontWeight:"bold"}}>&#8377; 800</div>
                    <div>Cost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sales-overview">
            <div className="sales-content-container">
              <h4>Purchase Overview</h4>
              <div className="sales-block">
                <div className="quarter-container">
                  <div
                    className="overview-icons"
                    style={{ backgroundColor: "#0BB2F4" }}
                  >
                    <IoBagOutline size={30} />
                  </div>
                  <div className="sales-data">
                    <div style={{fontWeight:"bold"}}>&#8377; 800</div>
                    <div>Purchase</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div
                    className="overview-icons"
                    style={{ backgroundColor: "#FAD85D" }}
                  >
                    <RiMoneyRupeeCircleLine size={30} />
                  </div>
                  <div className="sales-data">
                    <div style={{fontWeight:"bold"}}>&#8377; 800</div>
                    <div>Cost</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div
                    className="overview-icons"
                    style={{ backgroundColor: "#0BF4CB" }}
                  >
                    <TbShoppingCartCancel size={30} />
                  </div>
                  <div className="sales-data">
                    <div style={{fontWeight:"bold"}}>&#8377; 800</div>
                    <div>Cancel</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div
                    className="overview-icons"
                    style={{ backgroundColor: "#0BB2F4" }}
                  >
                    <PiKeyReturnBold size={30} />
                  </div>
                  <div className="sales-data">
                    <div style={{fontWeight:"bold"}}>&#8377; 800</div>
                    <div>Return</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="graph">
            <Chart/>
          </div>
        </div>
        <div className="right-overview-container">
          <div className="inventory-summary">
            <div className="inventory-summary-container">
              <div className="inventory-summary-content">
                <h4>Sales Overview</h4>
                <div className="inventory-summary-block">
                  <div className="inventory-summary-quarter">
                    <div
                      className="inventory-summary-icon"
                      style={{ backgroundColor: "#0BB2F4" }}
                    >
                      <GoInbox size={30} />
                    </div>
                    <div className="inventory-summary-data">
                      <div style={{fontWeight:"bold"}}>800</div>
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
                      <div style={{fontWeight:"bold"}}>800</div>
                      <div>Receivable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="purchase-summary">
          <div className="inventory-summary-container">
              <div className="inventory-summary-content">
                <h4>Sales Overview</h4>
                <div className="inventory-summary-block">
                  <div className="inventory-summary-quarter">
                    <div
                      className="inventory-summary-icon"
                      style={{ backgroundColor: "#0BB2F4" }}
                    >
                      <CgProfile size={30} />
                    </div>
                    <div className="inventory-summary-data">
                      <div style={{fontWeight:"bold"}}>800</div>
                      <div>suppliers</div>
                    </div>
                  </div>
                  <div className="inventory-summary-quarter">
                    <div
                      className="inventory-summary-icon"
                      style={{ backgroundColor: "#FAD85D" }}
                    >
                      <CiViewList size={30} />
                    </div>
                    <div className="inventory-summary-data">
                      <div style={{fontWeight:"bold"}}>800</div>
                      <div>Categories</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="top-products">
            <h4>Top Products</h4>
            <p>Content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
