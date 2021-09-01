const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    // print: "./src/print.js",
  },
  devtool: "inline-source-map",
  devServer: {
    //contentBase: "./dist", //将dist目录下的文件serve到loccalhost:8080下，将编译文件放在内存中
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
    //new CleanWebpackPlugin({}),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // 把一个路径或路径片段的序列解析为一个绝对路径。
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/, //通过正则查找文件
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8129,
              esModule: false, //默认值:true,描述:使用es模块化。
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash:8].[ext]",
              outputPath: "img",
              esModule: false,
            },
          },
        ],
      },
    ],
  },
};
