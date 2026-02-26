/**
 * Main server entry file
 * Responsible for:
 * - Connecting to MongoDB
 * - Registering middleware
 * - Registering routes
 * - Starting Express server
 */

require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");

const app = express();

// Enable CORS so frontend can call backend
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

/**
 * Connect to MongoDB database
 */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error:", err));

/**
 * Register API routes
 */
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

/**
 * Start server
 */
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});
