const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jepg|jpg|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
              output: "image",
              name: "[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
};
