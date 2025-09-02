const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema({
  clientProductId: { type: String, required: true, unique: true },
  autoProductId: { type: String, default: () => uuidv4(), unique: true },
  productName: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String },
  expiryDate: { type: Date },
  threshold: { type: Number },
  image: { type: String },
  status: { type: String, default: "Unpaid" },
  referenceNumber: { type: String, unique: true, sparse: true }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
