const { Queue } = require("bullmq");
const connection = require("../config/redis");

const executionQueue = new Queue("code-execution", {
  connection
});

exports.addExecutionJob = async (data) => {

  const job = await executionQueue.add("execute", data);

  return {
    jobId: job.id
  };

};