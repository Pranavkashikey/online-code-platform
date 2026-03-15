const dockerRunner = require("./dockerRunner");

module.exports = async function(job) {

  const { language, code, input } = job.data;

  const result = await dockerRunner(language, code, input);

  return result;

};