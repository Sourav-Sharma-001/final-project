const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const Product = require("../Models/Product");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Upload CSV
router.post("/upload-csv", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const results = [];
    const errors = [];

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => {
        try {
          data.price = Number(data.price);
          data.quantity = Number(data.quantity);
          data.threshold = Number(data.threshold);
          data.expiryDate = data.expiryDate ? new Date(data.expiryDate) : null;
          if (data.image === "") data.image = null;
          if (!data.clientProductId || !data.productName || isNaN(data.price) || isNaN(data.quantity)) {
            throw new Error("Missing required fields or invalid number");
          }
          results.push(data);
        } catch (e) {
          errors.push({ row: data, error: e.message });
        }
      })
      .on("end", async () => {
        try {
          if (errors.length) {
            fs.unlinkSync(req.file.path);
            return res.status(400).json({ error: "Validation failed", details: errors });
          }
          await Product.insertMany(results);
          fs.unlinkSync(req.file.path);
          res.json({ message: "CSV uploaded successfully", count: results.length });
        } catch (err) {
          fs.unlinkSync(req.file.path);
          res.status(500).json({ error: "Database insert failed", details: err.message });
        }
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get products with pagination
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const total = await Product.countDocuments();

    const products = await Product.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(total / limit);

    res.json({ products, totalPages, currentPage: page, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Mark as Paid
router.put("/pay/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.status === "Paid") {
      return res.json(product);
    }

    let refNumber;
    let exists = true;

    while (exists) {
      const randomNum = Math.floor(Math.random() * 1000); // 0–999
      refNumber = `Inv-${randomNum.toString().padStart(3, "0")}`; // zero-padded
      exists = await Product.findOne({ referenceNumber: refNumber });
    }

    product.status = "Paid";
    product.referenceNumber = refNumber;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Delete product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
