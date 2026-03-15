const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const createTempDir = require("../utils/createTempDir");

module.exports = function runJS(code, input) {

  return new Promise((resolve, reject) => {

    const dir = createTempDir();

    const codePath = path.join(dir, "main.js");
    const inputPath = path.join(dir, "input.txt");

    fs.writeFileSync(codePath, code);
    fs.writeFileSync(inputPath, input || "");

    const command = `
      docker run --rm
      --memory=128m
      --cpus=0.5
      -v ${dir}:/app
      node:18
      bash -c "node /app/main.js < /app/input.txt"
    `;

    exec(command, { timeout: 5000 }, (error, stdout, stderr) => {

      if (error) return reject(stderr || error.message);

      resolve(stdout);

    });

  });

};