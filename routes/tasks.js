/**
 * Task Routes
 * All routes require authentication
 */

const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// Apply auth middleware to all task routes
router.use(auth);

/**
 * Get all tasks for logged-in user
 */
router.get("/", async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
});

/**
 * Create new task
 */
router.post("/", async (req, res) => {
  const task = await Task.create({
    userId: req.user.id,
    title: req.body.title,
  });

  res.json(task);
});

module.exports = router;
