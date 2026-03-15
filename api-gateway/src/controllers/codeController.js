const queueService = require("../services/queueService");

exports.executeCode = async (req, res) => {

  try {

    const { language, code, input } = req.body;

    const job = await queueService.addExecutionJob({
      language,
      code,
      input,
      userId: req.user.id
    });

    res.json({
      message: "Job submitted",
      job
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};