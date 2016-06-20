---
title: 高阶函数
date: 2016-06-20 15:23:13
tags:
- function
- high-order-function
categories:
- h
summary: 以函数作为参数或返回值的函数。
---
全称 High order function，比如在 JavaScript 中，`[].map` 就是一个高阶函数:

{% codeblock lang:js %}
// 以一个箭头函数作为参数
[1, 2, 3].map(v => v * 2)
{% endcodeblock %}

{% codeblock lang:js %}
// 返回一个函数
function divideBy(n) {
  return function (d) {
    return n / d
  }
}

divideBy(10)(2)
//=> 5
{% endcodeblock %}

JavaScript 的回调函数就是典型的高阶函数，在 Web 编程中网络请求往往可以带有一个回调函数，可以在成功获得返回结果时执行回调函数来处理结果:

{% codeblock lang:js %}
$.get('/url', function (err, data) {
  console.log(data)
})
{% endcodeblock %}

## 外部链接

- [Higher-Order Functions in JavaScript](http://www.sitepoint.com/higher-order-functions-javascript/)
