---
title: Arity
date: 2016-06-20 11:35:48
tags:
- javascript
categories:
- a
summary: 代指一个函数的参数数量
---
你可能会在 JavaScript 领域遇到这个概念，已废弃的 API `Function.arity` 是其具体实现，现已被 `Function.length` 替代。

实例:

{% codeblock lang:js %}
function foo(a, b, c) {}

console.log(foo.length)
//=> 3
{% endcodeblock %}

## 外部链接

- [Function.arity](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arity)
- [Function.length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
