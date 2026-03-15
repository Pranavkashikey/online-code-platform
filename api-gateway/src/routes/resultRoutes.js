const express = require("express");
const router = express.Router();

const { saveExecution } = require("../controllers/resultController");

router.post("/result", saveExecution);

module.exports = router;