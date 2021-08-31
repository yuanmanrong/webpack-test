# webpack-test 项目

my webpack study

## 起步笔记

只负责打包 js 文件中的模块化语句
通过 webpack.config.js 配置文件以及 package.json 中的脚本配置
执行 `npm run build` 打包
.DS_Store 是 Mac OS 保存文件夹的自定义属性的隐藏文件，如文件的图标位置或背景色，相当于 Windows 的 desktop.ini

## 管理资源

动态打包所有依赖，可以避免打包未使用的模块。
通过 loader 来引入其他类型的文件。
安装 `style-loader`和`css-loader`并在 module 中配置,可以通过 import 引入，webpack 会将其插入到 html 文件中
`npm install --save-dev style-loader css-loader`(刚开始安装时没有指定版本，打包时可能会出错，因为版本过高问题，安装较低的版本即可解决)
安装`url-loader` `file-loader`来解决图像、字体文件
使用 `csv-loader`和`xml-loader`来处理 csv/tsv/xml 文件
