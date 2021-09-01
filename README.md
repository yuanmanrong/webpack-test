# webpack-test 项目

my webpack4 study！！！认真学习 webpack！！！

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
安装`url-loader` `file-loader`来解决图像、字体文件,😤！！！这里打包 css 的 url 图片时老是不行，最后发现需要配置一下 esMoudle 为 false.(后面还是有问题)
使用 `csv-loader`和`xml-loader`来处理 csv/tsv/xml 文件

## 管理输出

多入口打包
使用`HtmlWebpackPlugin`插件向 HTML 中动态添加 bundle
😤！！！遇到这个问题： TypeError: Cannot read property 'tap' of undefined 插件版本兼容问题，安装 4.5.0 版本解决
使用`clean-webpack-plugin`插件清理 dist 文件
留坑 manifest

## 开发环境

使用 source map 追踪 error 和 warning 在源代码的位置。
3 种自动编译代码方式，多数场景使用 webpack-dev-server
watch 模式：`"watch":"webpack --wacth"` (需要自己刷新浏览器)
webpack-dev-server：webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。
webpack-dev-middleware:是一个封装器(wrapper)，它可以把 webpack 处理过的文件发送到一个 server。

## 模块热替换 HMR

它允许在运行时更新所有类型的模块，而无需完全刷新。适用于开发环境不适用于生产环境。
我好像学了，但又好像没懂 😂

## tree shaking

留坑

## 生产环境

生产环境关注点在于压缩 bundle、更轻量的 source map、资源优化等，通过这些优化改善加载时间。
因此不同的环境编写彼此独立的 webpack 配置。
webpack-merge 工具用来将 common 和独立环境合并。
