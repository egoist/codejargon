---
title: DOM
date: 2016-06-20 23:33:10
tags:
- javascript
- browser
categories:
- d
summary: HTML 和 XML 文档的编程接口。
---


一个网页就是一个文档，而 DOM 给文档（结构树）提供了一个结构化的表述并且定义了一种方式 —— 程序可以对结构树进行访问，以改变文档的结构，样式和内容。

DOM 不是一种编程语言而是一个标准，它有很多具体实现，比如在各个浏览器 JS 引擎上的实现，尽管遵循统一标准，你可以通过相同的 API 接口访问，但各种实现也存在着些许差异。

实例代码，使用 DOM 操作元素:

```js
const p = document.querySelector('p')
p.innerHTML = 'hack by codejargon'
```

## 外部链接

- [DOM 概述](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)
- [DOM 接口](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model#DOM_接口)
