const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const createTempDir = require("../utils/createTempDir");

module.exports = function runPython(code) {

  return new Promise((resolve, reject) => {

    const dir = createTempDir();
    const filePath = path.join(dir, "main.py");

    fs.writeFileSync(filePath, code);

    const command =
      `docker run --rm \
      --memory=128m \
      --cpus=0.5 \
      -v ${dir}:/app \
      python:3.10 python /app/main.py`;

    exec(command, { timeout: 5000 }, (error, stdout, stderr) => {

      if (error) return reject(stderr || error.message);

      resolve(stdout);

    });

  });

};