'use strict'
const path = require('path')

hexo.extend.generator.register('generate-title', function (locals) {
  const titles = locals.posts.data.map(p => p.title.toLowerCase())
  return {
    path: path.join(path.sep, 'async', path.sep, 'title.json'),
    data: JSON.stringify(titles)
  }
})
