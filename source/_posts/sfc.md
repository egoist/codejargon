---
title: SFC
date: 2017-06-08 00:52:21
tags:
- vue
categories: 
- s
summary: Vue 单文件组件。
---
将一个组件所需要的 HTML 模板、JS 逻辑、CSS 样式分割的同时写在同一个文件中，并借用 Webpack / Browserify 等打包工具让其充分利用 npm 生态中的各种预处理工具，比如 Babel、PostCSS 等等。

示例 `Counter.vue` 文件:

```html
<template>
  <div class="counter">
    <button class="count" @click="count++">
      {{ count }}
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
</script>

<style scoped>
  .count {
    color: red;
  }
</style>
```

## 外部链接

- [Vue 中文文档: 单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)