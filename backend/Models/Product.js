const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema({
  clientProductId: { type: String, required: true, unique: true },
  autoProductId: { type: String, default: () => uuidv4(), unique: true },
  productName: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  expiryDate: { type: Date, required: true },
  threshold: { type: Number, required: true },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
