/**
 * Authentication Middleware
 * Verifies JWT token before accessing protected routes
 */

const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.headers.authorization;

  // If no token provided
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request object
    req.user = decoded;

    next(); // Continue to next middleware/route
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};
