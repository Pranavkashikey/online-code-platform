const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const createTempDir = require("../utils/createTempDir");

module.exports = function runCPP(code) {

  return new Promise((resolve, reject) => {

    const dir = createTempDir();
    const filePath = path.join(dir, "main.cpp");

    fs.writeFileSync(filePath, code);

    const command =
      `docker run --rm \
      --memory=128m \
      --cpus=0.5 \
      -v ${dir}:/app \
      gcc:latest bash -c "g++ /app/main.cpp -o /app/main && /app/main"`;

    exec(command, { timeout: 5000 }, (error, stdout, stderr) => {

      if (error) return reject(stderr || error.message);

      resolve(stdout);

    });

  });

};