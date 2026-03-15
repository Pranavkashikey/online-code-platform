const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

module.exports = function(language, code) {

  return new Promise((resolve, reject) => {

    const tempDir = path.join(__dirname, "temp");

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    const filePath = path.join(tempDir, "main.js");

    fs.writeFileSync(filePath, code);

    const command =
      `docker run --rm -v ${tempDir}:/app node:18 node /app/main.js`;

    exec(command, (error, stdout, stderr) => {

      if (error) {
        return reject(stderr);
      }

      resolve(stdout);

    });

  });

};