const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // 把一个路径或路径片段的序列解析为一个绝对路径。
  },
  module: {
    rules: [
      {
        test: /\.css$/, //通过正则查找文件
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
