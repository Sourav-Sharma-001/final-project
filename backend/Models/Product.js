const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productId: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String },
  expiryDate: { type: Date },
  threshold: { type: Number },
  image: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
