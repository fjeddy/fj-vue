<script>
import MarkdownIt from 'markdown-it'

export default {
  name: 'FrameworkMarkdown',

  template: '<div><slot></slot></div>',

  data: function() {
    return {
      sourceData: this.source
    }
  },

  props: {
    watches: {
      type: Array,
      default: () => ['source', 'show', 'toc']
    },
    source: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    },
    html: {
      type: Boolean,
      default: true,
    },
    xhtmlOut: {
      type: Boolean,
      default: true,
    },
    breaks: {
      type: Boolean,
      default: true,
    },
    linkify: {
      type: Boolean,
      default: true,
    },
    typographer: {
      type: Boolean,
      default: true,
    },
    langPrefix: {
      type: String,
      default: 'language-',
    },
    quotes: {
      type: String,
      default: '“”‘’',
    },
    prerender: {
      type: Function,
      default: (sourceData) => { return sourceData }
    },
    postrender: {
      type: Function,
      default: (htmlData) => { return htmlData }
    }
  },

  md: new MarkdownIt(),

  render(createElement) {
    this.md = new MarkdownIt()

    this.md.set({
      html: this.html,
      xhtmlOut: this.xhtmlOut,
      breaks: this.breaks,
      linkify: this.linkify,
      typographer: this.typographer,
      langPrefix: this.langPrefix,
      quotes: this.quotes,
    })

    let outHtml = this.show ?
      this.md.render(
        this.prerender(this.sourceData)
      ) : ''

    outHtml = this.postrender(outHtml)

    return createElement(
      'div', {
        domProps: {
          innerHTML: outHtml
        }
      }
    )
  },

  beforeMount() {
    if (this.$slots.default) {
      this.sourceData = ''
      for (let slot of this.$slots.default) {
        this.sourceData += slot.text
      }
    }

    this.$watch('source', () => {
      this.sourceData = this.prerender(this.source)
      this.$forceUpdate()
    })

    this.watches.forEach((v) => {
      this.$watch(v, () => {
        this.$forceUpdate()
      })
    })
  }
}
</script>
