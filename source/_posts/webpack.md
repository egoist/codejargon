---
title: Webpack
date: 2016-06-22 14:25:57
tags:
- javascript
- bundler
categories:
- w
summary: JavaScript 构建工具和依赖管理工具，提供了很多常见构建方式的解决方案。
---
众所周知 JavaScript 项目没有一个通用的模块依赖管理机制，而浏览器方面则更是紧紧停留在实现阶段。Webpack 让你可以使用 CommonJS/AMD/UMD/ES6 modules 管理模块，并且可以生成浏览器可用的前端静态文件。

Webpack 的重要卖点「热替换」可以让浏览器自动更新生成的代码中需要替换的部分而无需刷新浏览器，并且保存应用状态，比如表单输入的内容。

Webpack 2 的新功能「Tree Shaking」则能过滤模块中没有被使用的代码，不会将其打包进生成的文件中。

## 外部链接

- [Webpack](https://github.com/webpack/webpack)
- [What's new in webpack 2](https://gist.github.com/sokra/27b24881210b56bbaff7)
