require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json()); // This enables JSON request body parsing
app.use(express.urlencoded({ extended: true })); // Optional for form data

// Connect to MongoDB
const mongoose = require("mongoose");

const MONGO_URI ="";

mongoose.connect(MONGO_URI) 
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Import and Use Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

