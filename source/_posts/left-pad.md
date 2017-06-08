---
title: left-pad
date: 2016-06-20 12:48:39
tags:
- left-pad
- npm
- javascript
- node.js
categories:
- l
summary: 一个开发者对 NPM 公司不满，unpublish 了自己的所有模块，其中包括被广泛使用的 left-pad。
---

Azer 在《[I’ve Just Liberated My Modules](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c)》一文中写道：

> 几个星期前有位专利律师给我发了一封电子邮件，要求我取消发布 NPM 上的 “KIK” 模块。我的回答是“不”，于是他回复我说：“I don’t wanna be dick about it（这句就不翻译了，你只需要知道 dick 是什么意思就够了），但 “KIK” 是我们的注册品牌，并且我们的律师遍布世界各地。”<br>
> 当我开始编写 kik 时，并不知道有同名的公司。而我也不希望因为这个公司而被迫改变项目的名字。在遭到了我的拒绝后，他们联系了 NPM 的技术支持，为了强调他们的律师权力，每一个电子邮件都抄送给了我。在未经我允许的情况下，@izs 更改了此模块的所有权。<br>
> 鉴于此我才意识到，NPM 是某个人的私有地盘，他比其他人有更多的控制权，但是我是做开源的，因为权力属于人民。（Power To The People 是约翰·列侬的同名歌曲）<br>
>概述一下就是; NPM 不再是我分享开源工作的地方，所以，我取消了曾经发布的所有模块)。（一共取消了 273 个）
这不是一个下意识的行为。我喜欢开源，相信开源社区将最终创造一个真正自由的 NPM。<br>
> 如果你的项目因此而构建失败，我向你道歉。你可以在仓库（azer/dependency）指出你的依赖，或者如果你自愿参加我的 Github 上的任何模块，我会高兴地转移所有权。
干杯，再见。<br>
> —— 援引自 《[开发者对 npm 公司不满，unpublish 了自己的所有模](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.74d3ql425)》

这个事件以 `left-pad` 的名称流传最广，这是 Azer 删除的 273 个模块之一，该模块被大量流行开源项目使用，比如 Babel 和 React Native 项目。[目前此模块已被作者转让给新的开发者](https://github.com/stevemao/left-pad)。

## 外部链接

- [I’ve Just Liberated My Modules](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.74d3ql425)
- [开发者对 npm 公司不满，unpublish 了自己的所有模块](http://mp.weixin.qq.com/s?__biz=MzI0NTAyNjE0NQ==&mid=427175657&idx=1&sn=57c0cda917797198df18552f7d8f4eca&scene=0#wechat_redirect)
- [如何看待 Azer Koçulu 删除了自己的所有 npm 库？](https://www.zhihu.com/question/41694868)
- [kik, left-pad, and npm](http://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm)
