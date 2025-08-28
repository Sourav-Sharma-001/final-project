import React from "react";
import "./ViewInvoice.css";

export default function ViewInvoice({ onClose }) {
  return (
    <div className="view-invoice-container">
      <button className="view-invoice-close-cross" onClick={onClose}>×</button>
      <header className="view-invoice-header">
        <h1>INVOICE</h1>
        <div className="view-invoice-billing-section">
          <div>
            <p className="view-invoice-label">Billed to</p>
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

      <div className="view-invoice-body">
        <div className="view-invoice-layout">
          <div className="view-invoice-meta">
            <div>
              <p className="view-invoice-meta-label">Invoice #</p>
              <p>INV-1007</p>
            </div>
            <div>
              <p className="view-invoice-meta-label">Invoice date</p>
              <p>01-Apr-2025</p>
            </div>
            <div>
              <p className="view-invoice-meta-label">Reference</p>
              <p>INV-057</p>
            </div>
            <div>
              <p className="view-invoice-meta-label">Due date</p>
              <p>15-Apr-2025</p>
            </div>
          </div>

          <table className="view-invoice-table">
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
              <tr className="view-invoice-total-row">
                <td colSpan="2">Total due</td>
                <td>₹5,600</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="view-invoice-note">🗒 Please pay within 15 days of receiving this invoice.</p>
      </div>

      <footer className="view-invoice-footer">
        <p>www.recehtol.inc</p>
        <p>+91 00000 00000</p>
        <p>hello@email.com</p>
      </footer>
    </div>
  );
}
