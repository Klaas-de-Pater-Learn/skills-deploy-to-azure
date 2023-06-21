const path = require("path");

module.exports = {
  entry: {
    "main.js": [
      path.resolve(__dirname, "index.js"),
      path.resolve(__dirname, "game.js"),
    ],
  },
  output: {
    hashFunction: "xxhash64",
    filename: "main.js",
    path: path.resolve(__dirname, "../public"),
  },
};
