const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");


// GET ALL PROBLEMS
router.get("/", async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// CREATE PROBLEM
router.post("/create", async (req, res) => {
  try {

    const { title, description, difficulty } = req.body;

    const problem = new Problem({
      title,
      description,
      difficulty
    });

    await problem.save();

    res.status(201).json(problem);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;