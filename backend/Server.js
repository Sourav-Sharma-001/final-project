const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cron = require("node-cron");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

const productRoutes = require("./Routes/ProductRoutes");
app.use("/api/products", productRoutes);

app.get("/ping", (req, res) => {
  res.send("pong");
});

cron.schedule("0 0 * * *", async () => {
  try {
    const today = new Date();
    const Product = require("./Models/Product");

    const result = await Product.updateMany(
      { expiryDate: { $lte: today }, status: { $ne: "Expired" } },
      { $set: { status: "Expired", quantity: 0 } }
    );
    console.log(`Cron job ran: Expired products updated - matched ${result.matchedCount}, modified ${result.modifiedCount}`);
  } catch (err) {
    console.error("Cron job error:", err);
  }
});

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

const authRoutes = require("./Routes/Auth"); 
app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
