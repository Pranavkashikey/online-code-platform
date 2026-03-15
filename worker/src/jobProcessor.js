const runJS = require("./runners/jsRunner");
const runPython = require("./runners/pythonRunner");
const runCPP = require("./runners/cppRunner");
const axios = require("axios");

module.exports = async function(job) {

  const { language, code, problemId, userId } = job.data;

  try {

    // get test cases from API
    const { data: testCases } = await axios.get(
      `http://localhost:5000/api/problem/${problemId}/tests`
    );

    let verdict = "Accepted";
    let lastOutput = "";

    for (const testCase of testCases) {

      let output;

      if (language === "javascript") {
        output = await runJS(code, testCase.input);
      }

      else if (language === "python") {
        output = await runPython(code, testCase.input);
      }

      else if (language === "cpp") {
        output = await runCPP(code, testCase.input);
      }

      else {
        throw new Error("Unsupported language");
      }

      lastOutput = output;

      // compare expected output
      if (output.trim() !== testCase.expectedOutput.trim()) {

        verdict = "Wrong Answer";

        await axios.post("http://localhost:5000/api/result", {
          jobId: job.id,
          userId,
          language,
          code,
          input: testCase.input,
          output,
          verdict
        });

        return verdict;
      }

    }

    // all testcases passed
    await axios.post("http://localhost:5000/api/result", {
      jobId: job.id,
      userId,
      language,
      code,
      output: lastOutput,
      verdict
    });

    return verdict;

  } catch (error) {

    await axios.post("http://localhost:5000/api/result", {
      jobId: job.id,
      userId,
      language,
      code,
      output: error.message,
      verdict: "Runtime Error"
    });

    throw error;

  }

};