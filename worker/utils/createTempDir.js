const fs = require("fs");
const path = require("path");

module.exports = function createTempDir() {

  const dir = path.join(__dirname, "..", "temp", Date.now().toString());

  fs.mkdirSync(dir, { recursive: true });

  return dir;
};