import React from 'react'
import "./Invoice.css"
import Navbar from '../Navbar/Navbar'
import OverrallInvoice from './OverrallInvoice/OverrallInvoice'
import InvoiceTable from './InvoiceTable/InvoiceTable'

export default function Invoice() {
  return (
    <div className="invoice">
      <Navbar/>
      <div className="invoice-content-container">
        <OverrallInvoice />
        <InvoiceTable/>       
      </div>
    </div>
  )
}
