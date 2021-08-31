const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // 把一个路径或路径片段的序列解析为一个绝对路径。
  },
};
