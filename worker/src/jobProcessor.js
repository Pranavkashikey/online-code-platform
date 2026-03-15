const runJS = require("./runners/jsRunner");
const runPython = require("./runners/pythonRunner");
const runCPP = require("./runners/cppRunner");
const axios = require("axios");

module.exports = async function(job) {

  const { language, code, input, userId } = job.data;

  let output;

  try {

    // run code based on language
    if (language === "javascript") {
      output = await runJS(code, input);
    }

    else if (language === "python") {
      output = await runPython(code, input);
    }

    else if (language === "cpp") {
      output = await runCPP(code, input);
    }

    else {
      throw new Error("Unsupported language");
    }

    
    await axios.post("http://localhost:5000/api/result", {
      jobId: job.id,
      userId,
      language,
      code,
      input,
      output
    });

    return output;

  } catch (error) {

  
    await axios.post("http://localhost:5000/api/result", {
      jobId: job.id,
      userId,
      language,
      code,
      input,
      output: error.message,
      status: "failed"
    });

    throw error;

  }

};