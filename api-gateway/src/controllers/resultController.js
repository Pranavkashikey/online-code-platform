const Execution = require("../models/Execution");

exports.saveExecution = async (req, res) => {

  try {

    const { jobId, userId, language, code, input, output } = req.body;

    const execution = new Execution({
      jobId,
      userId,
      language,
      code,
      input,
      output
    });

    await execution.save();

    res.json({ message: "Execution stored" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};