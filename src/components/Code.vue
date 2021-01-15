<template>
  <div class="f-code" ref="codeBlock">
    <strong v-if="title">{{ title }}</strong>
    <div class="f-code-content" :class="{ expanded: isExpanded || toSmallForExpansion }" v-on:click="toggleExpansion">
      <pre :class="languageClass"><code><slot>{{ getCodeSnippet }}</slot></code></pre>
    </div>
  </div>
</template>

<script>
import Prism from 'prism-es6'
import 'prism-es6/themes/prism-tomorrow.css'

const languages = {
  scss: import(/* webpackChunkName: "f-code-scss" */ 'prism-es6/components/prism-scss'),
  sass: import(/* webpackChunkName: "f-code-sass" */ 'prism-es6/components/prism-sass'),
  java: import(/* webpackChunkName: "f-code-java" */ 'prism-es6/components/prism-java'),
  json: import(/* webpackChunkName: "f-code-json" */ 'prism-es6/components/prism-json')
}

const d_languages = [
  'markup',
  'html',
  'xml',
  'svh',
  'mathml',
  'ssml',
  'atom',
  'rss',
  'css',
  'clike',
  'javascript',
  'js'
]

export default {
  data: function() {
    return {
      isExpanded: this.expand,
      toSmallForExpansion: false
    }
  },

  props: {
    value: {
      type: String,
      required: false
    },

    language: {
      type: String,
      required: false,
      default: 'javascript'
    },

    title: {
      type: String,
      required: false
    },

    expand: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    this.fetchLanguage()
    if (this.value && this.value.split("\n").length <= this.$fj.options.codeBlock.forceExpandOnLine) this.toSmallForExpansion = true
  },

  computed: {
    languageClass() {
      return `language-${this.language}`
    },

    getCodeSnippet() {
      const lines = this.value.split('\n')

      if (this.isEmpty(lines[0])) {
        lines.splice(0, 1)
      }

      const whitespaces = lines[0].search(/\S/)
      if (whitespaces > 0) {
        for (const [index, line] of lines.entries()) {
          lines[index] = this.lctrim(line, whitespaces)
        }
      }

      if (this.isEmpty(lines[lines.length - 1])) {
        lines.splice(lines.length - 1, 1)
      }

      return lines.join('\n')
    }
  },

  methods: {
    async fetchLanguage() {
      if (this.language) {

        if (d_languages.includes(this.language)) {
          Prism.highlightAllUnder(this.$refs.codeBlock)
        } else {
          await languages[this.language]
            .then(() => {
              Prism.highlightAllUnder(this.$refs.codeBlock)
            })
        }

      }
    },

    toggleExpansion() {
      if (this.expand) return
      if (this.toSmallForExpansion) return
      this.isExpanded = !this.isExpanded
    },

    isEmpty(string) {
      return (string.length === 0 || !string.trim())
    },

    lctrim(str, count) {
      const result = []
      const chars = str.split('')
      let removed = 0

      for (const char of chars) {
        if (this.isEmpty(char) && removed < count) {
          removed++
          if (removed === count) continue
        } else {
          result.push(char)
        }
      }

      return result.join('')
    }
  }
}
</script>

<style lang="scss">
@import '../sass/variables.scss';

.f-code {
  margin: 15px 0;
}

.f-code .f-code-content {
  height: 100px;
  overflow: hidden;
  border-radius: $f-code-border-radius;
  position: relative;
}

.f-code .f-code-content:hover:before {
  content: 'Click to expand';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  padding-top: 35px;
}

.f-code .f-code-content.expanded:before {
  display: none;
}

.f-code pre {
  overflow: hidden;
  border-radius: $f-code-border-radius;
  font-size: $f-code-font-size;
  height: 100%;
  margin: 0;
}

.f-code .f-code-content.expanded {
  height: auto;
  overflow: auto;
}
</style>
