---
title: HTTP/2
date: 2016-06-19 23:02:44
categories:
- h
tags:
- http
- network
- server
summary: HTTP 协议的的第二个主要版本，其最为显著的新特性「多路复用」让请求相互独立，一个请求不会阻塞其它请求。
---

HTTP/2 协议基于 SPDY 演化而来，在保证与 HTTP 1.1 的语义兼容的进行了多项改进:

- 多路复用: 单个连接上可以并行交错的请求和响应，之间互不干扰
- 优先级请求: 可以在请求中设置优先值，确保最重要的请求优先获得处理
- 服务器推送: 服务器能推送消息给客户端
- 头部压缩: 压缩头部（HEAD）减少请求和响应的大小

## 外部链接

- [HTTP/2 讲解](https://ye11ow.gitbooks.io/http2-explained/content/)
