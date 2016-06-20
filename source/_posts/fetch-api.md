---
title: Fetch API
date: 2016-06-20 22:42:50
tags:
- javascript
- network
categories:
- f
summary: 更现代化的浏览器网络请求接口，相比 XMLHttpRequest 增加了灵活性并使用了 Promise 技术。
---
`fetch()` 接受一个资源路径作为第一个参数，无论请求成功与否，它都返回一个 `Promise` 对象。

第二个参数是配置项，你可以指定提交类型比如 `POST` 或者 `GET`，或者指定需要传递的 header 参数等等。

实例代码:

{% codeblock lang:js %}
const body = JSON.stringify({
  title: 'New Post'
})
fetch('/posts', {type: 'POST', body})
  .then(data => data.json())
  .then(data => console.log(data))
{% endcodeblock %}

## 浏览器兼容性

基于 [caniuse](http://caniuse.com/#feat=fetch) 的结果:

IE ✘
Edge ✘
Firefox ✘ 2+ ✘ 34+¹ ✔ 39+⁴ ✔ 40+
Chrome ✘ 4+ ◒ 40+² ◒ 41+² ✔ 42+
Safari ✘
Opera ✘ 9+ ◒ 27+² ◒ 28+² ✔ 29+

不过已经有相关 polyfill 让 Fetch API 能够运行在大部分浏览器和服务器端环境上。

## 外部链接

- [Fetch API 在 MDN 上的介绍](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
- [服务器端 Fetch API polyfill](https://github.com/bitinn/node-fetch)
- [浏览器端 Fetch API polyfill](https://github.com/github/fetch)
