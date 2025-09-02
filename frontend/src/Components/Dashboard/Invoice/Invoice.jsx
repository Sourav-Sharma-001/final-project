import React, { useContext, useState } from 'react'
import "./Invoice.css"
import OverrallInvoice from './OverrallInvoice/OverrallInvoice'
import InvoiceTable from './InvoiceTable/InvoiceTable'
import { AppContext } from "../../ContextAPI/ContextAPI";

export default function Invoice() {
  const { currentPage } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="invoice">
      <div className="invoice-navbar">
        <div>{currentPage}</div>
        <input
          className="invoice-search-bar"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr id="invoice-navbar-hr" />
      <div className="invoice-content-container">
        <OverrallInvoice searchTerm={searchTerm} />
        <InvoiceTable searchTerm={searchTerm} />       
      </div>
    </div>
  )
}
