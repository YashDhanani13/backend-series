// make a server  this way to express through

import express from "express";

const app = express();
const PORT = 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("🚀 Express server is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server started at http://localhost:${PORT}`);
});

/// mongo db database create : -

import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ Error:", err));
