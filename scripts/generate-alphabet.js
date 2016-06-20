'use strict'
const path = require('path')
const pagination = require('hexo-pagination')

hexo.extend.generator.register('generate-alphabet', function (locals) {
  const config = {
    perPage: hexo.config.per_page || 50,
    base: path.join(path.sep, 'alphabet', path.sep),
    url: hexo.config.url
  }
  const alphabetList = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return locals.categories.filter(v => alphabetList.indexOf(v.slug) !== -1).reduce((result, category) => {
    if (!category.length) return result
    const posts = category.posts.sort('slug')
    const data = pagination(path.join(config.base, category.slug), posts, {
      perPage: 10,
      layout: ['alphabet', 'index'],
      data: {
        category: category.name,
        alphabet: true,
        alphabetList
      }
    })
    return result.concat(data)
  }, [])
})
