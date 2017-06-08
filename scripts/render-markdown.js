const Prism = require('prismjs')
const MD = require('markdown-it')

require('prismjs/components/prism-javascript')

const md = new MD({
  html: true,
  linkify: true,
  typographer: true,
  highlight(str, lang) {
    return Prism.highlight(str, Prism.languages[lang] || Prism.languages.markup)
  }
})

md.use(require('markdown-it-prettier'), {
  singleQuote: true,
  semi: false
})
md.use(require('markdown-it-footnote'))

function renderer(data, options) {
  return md.render(data.text)
}

hexo.extend.renderer.register('md', 'html', renderer, true)