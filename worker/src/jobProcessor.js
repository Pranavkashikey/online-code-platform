const runJS = require("./runners/jsRunner");
const runPython = require("./runners/pythonRunner");
const runCPP = require("./runners/cppRunner");

module.exports = async function(job) {

  const { language, code } = job.data;

  if (language === "javascript") {
    return runJS(code);
  }

  if (language === "python") {
    return runPython(code);
  }

  if (language === "cpp") {
    return runCPP(code);
  }

  throw new Error("Unsupported language");

};