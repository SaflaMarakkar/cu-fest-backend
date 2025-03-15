require("dotenv").config();
const express = require("express");


const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://saflamarakkar1:SaflaMarakkar@cluster0.zw3k4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MONGO_URI) 
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Import and Use Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

