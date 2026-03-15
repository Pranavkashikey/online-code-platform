const runJS = require("../runners/jsRunner");
const runPython = require("../runners/pythonRunner");
const runCPP = require("../runners/cppRunner");

module.exports = async function judge(language, code, testCases){

  for(const testCase of testCases){

    let output;

    if(language === "javascript"){
      output = await runJS(code, testCase.input);
    }

    if(language === "python"){
      output = await runPython(code, testCase.input);
    }

    if(language === "cpp"){
      output = await runCPP(code, testCase.input);
    }

    if(output.trim() !== testCase.expectedOutput.trim()){
      return {
        verdict: "Wrong Answer",
        output
      };
    }

  }

  return {
    verdict: "Accepted"
  };

};