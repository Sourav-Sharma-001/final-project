import React from "react";
import "./ViewInvoice.css";

export default function ViewInvoice() {
  return (
    <div className="invoice-container">
      <header className="invoice-header">
        <h1>INVOICE</h1>
        <div className="billing-section">
          <div>
            <p className="label">Billed to</p>
            <p>Company Name</p>
            <p>Company address</p>
            <p>City, Country - 00000</p>
          </div>
          <div>
            <p>Business address</p>
            <p>City, State, IN - 000 000</p>
            <p>TAX ID 0XXXXXX1234XXX</p>
          </div>
        </div>
      </header>

      <div className="invoice-body">
        <div className="invoice-layout">
          <div className="invoice-meta">
            <p><strong>Invoice #</strong><br />INV-1007</p>
            <p><strong>Invoice date</strong><br />01-Apr-2025</p>
            <p><strong>Reference</strong><br />INV-057</p>
            <p><strong>Due date</strong><br />15-Apr-2025</p>
          </div>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>Products</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Basmati Rice (5kg)</td><td>1</td><td>1,090</td></tr>
              <tr><td>Aashirvaad Atta (10kg)</td><td>1</td><td>₹545</td></tr>
              <tr><td>Fortune Sunflower Oil (5L)</td><td>1</td><td>₹1,090</td></tr>
              <tr><td>Amul Toned Milk (1L)</td><td>5</td><td>₹273</td></tr>
              <tr><td>Tata Salt (1kg)</td><td>2</td><td>₹55</td></tr>
              <tr><td>Maggi Noodles (12-pack)</td><td>1</td><td>₹136</td></tr>
              <tr><td>Good Day Biscuits (10 packs)</td><td>1</td><td>₹227</td></tr>
              <tr><td>Red Label Tea (500g)</td><td>1</td><td>₹263</td></tr>
              <tr><td>Sugar (5kg)</td><td>1</td><td>₹272</td></tr>
              <tr><td>Mixed Vegetables</td><td>1 set</td><td>₹1,090</td></tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">Subtotal</td>
                <td>₹5,090</td>
              </tr>
              <tr>
                <td colSpan="2">Tax (10%)</td>
                <td>₹510</td>
              </tr>
              <tr className="total-row">
                <td colSpan="2">Total due</td>
                <td>₹5,600</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="note">🗒 Please pay within 15 days of receiving this invoice.</p>
      </div>

      <footer className="invoice-footer">
        <p>www.recehtol.inc</p>
        <p>+91 00000 00000</p>
        <p>hello@email.com</p>
      </footer>
    </div>
  );
}
