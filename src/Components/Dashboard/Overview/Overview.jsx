import React from "react";
import "./Overview.css";
import { LiaCoinsSolid } from "react-icons/lia";
import { FcBullish } from "react-icons/fc";
import { BsBarChart } from "react-icons/bs";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { TbShoppingCartCancel } from "react-icons/tb";
import { PiKeyReturnBold } from "react-icons/pi";




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
                  <div className="overview-icons" style={{backgroundColor:"#0BB2F4"}}>
                    <LiaCoinsSolid size={30}/>
                  </div>
                  <div className="sales-data">
                    <div>&#8377; 800</div>
                    <div>Sales</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div className="overview-icons" style={{backgroundColor:"#FAD85D"}}>
                    <FcBullish size={30}/>
                  </div>
                  <div className="sales-data">
                    <div>&#8377; 800</div>
                    <div>Revenue</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div className="overview-icons" style={{backgroundColor:"#0BF4CB"}}>
                    <BsBarChart size={30}/>
                  </div>
                  <div className="sales-data">
                    <div>&#8377; 800</div>
                    <div>Profit</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div className="overview-icons" style={{backgroundColor:"#0BB2F4"}}>
                    <RiMoneyRupeeCircleLine size={30}/>
                  </div>
                  <div className="sales-data">
                    <div>&#8377; 800</div>
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
                  <div className="overview-icons" style={{backgroundColor:"#0BB2F4"}}>
                    <IoBagOutline size={30}/>
                  </div>
                  <div className="sales-data">
                    <div>&#8377; 800</div>
                    <div>Purchase</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div className="overview-icons" style={{backgroundColor:"#FAD85D"}}>
                    <RiMoneyRupeeCircleLine size={30}/>
                  </div>
                  <div className="sales-data">
                    <div>&#8377; 800</div>
                    <div>Cost</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div className="overview-icons" style={{backgroundColor:"#0BF4CB"}}>
                    <TbShoppingCartCancel size={30}/>
                  </div>
                  <div className="sales-data">
                    <div>&#8377; 800</div>
                    <div>Cancel</div>
                  </div>
                </div>
                <div className="quarter-container">
                  <div className="overview-icons" style={{backgroundColor:"#0BB2F4"}}>
                    <PiKeyReturnBold size={30}/>
                  </div>
                  <div className="sales-data">
                    <div>&#8377; 800</div>
                    <div>Return</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="graph">c</div>
        </div>
        <div className="right-overview-container">
          <div className="inventory-summary">a</div>
          <div className="purchase-summary">b</div>
          <div className="top-products">c</div>
        </div>
      </div>
    </div>
  );
}
