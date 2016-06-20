---
title: AJAX
date: 2016-06-19 17:50:45
categories:
- a
tags:
- javascript
- network
- ajax
summary: 异步 HTTP 请求技术。
---

AJAX 是一项用过异步数据传输来实现服务器与客户端之间交互操作的技术。使用 AJAX 更新页面部分内容而不是传统地刷新整个页面，这样极大提升了客户端与服务器之间的数据通信效率。

实例，使用 jQuery 提供的 AJAX 方法更新添加评论后的新评论列表:

{% codeblock lang:js %}
$.post('/add-comment', {comment}, function (err, addedComment) {
  $('.comment-list').append(`<div class="comment">${addedComment.body}</div>`)
})
{% endcodeblock %}

## 外部链接

- [MDN 上关于 AJAX 的介绍](https://developer.mozilla.org/zh-CN/docs/AJAX/Getting_Started)
