---
title: Coroutine
date: 2016-06-21 15:56:02
tags:
- coroutine
categories:
- c
summary: 协作式的用户态线程。
---

中文译作「协程」，根据协程的各种不同实现，协程起着不同的作用:

- 状态机: 控制过程当前的出口／入口点，有助于将异步、回调方式的代码用同步的方式写出来，增强可读性。
- 角色模型: 并行的角色模型，例如计算机游戏。每个角色有自己的过程（这又在逻辑上分离了代码），但他们自愿地向顺序执行各角色过程的中央调度器交出控制（这是合作式多任务的一种形式）。
- 产生器: 它有助于输入／输出和对数据结构的通用遍历。

## 外部链接

- [协程（维基百科）](https://zh.wikipedia.org/wiki/%E5%8D%8F%E7%A8%8B)
- [怎么理解coroutine?（知乎）](https://www.zhihu.com/question/21483863)