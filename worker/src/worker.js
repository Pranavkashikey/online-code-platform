const { Worker } = require("bullmq");
const connection = require("./config/redis");
const jobProcessor = require("./jobProcessor");

const worker = new Worker(
  "code-execution",
  async job => {
    return jobProcessor(job);
  },
  { connection }
);

worker.on("completed", job => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.log(`Job ${job.id} failed`, err);
});

console.log("Worker started and waiting for jobs...");