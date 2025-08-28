import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Invoice from "./Invoice/Invoice";
import ViewInvoice from "./Invoice/InvoiceTable/ViewInvoice/ViewInvoice";

export default function Dashboard() {
  return (
    <ViewInvoice/>
  );
}
