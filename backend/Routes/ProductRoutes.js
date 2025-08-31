const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const upload = multer({ dest: "uploads/" });

router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/upload-csv", upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const products = [];
  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (row) => {
      products.push({
        clientProductId: row.clientProductId,
        autoProductId: uuidv4(),
        productName: row.productName,
        category: row.category,
        price: Number(row.price),
        quantity: Number(row.quantity),
        unit: row.unit,
        expiryDate: row.expiryDate ? new Date(row.expiryDate) : null,
        threshold: Number(row.threshold),
        image: row.image || "",
      });
    })
    .on("end", async () => {
      try {
        await Product.insertMany(products);
        fs.unlinkSync(req.file.path);
        res.status(201).json({ message: "Products uploaded successfully" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    })
    .on("error", (err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(404).json({ error: "Product not found" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
