<template>
  <div class="f-code">

    <div class="f-code-title">
      <strong v-if="title">{{ title }}</strong>
    </div>

    <div class="f-code-content" :class="{ expanded: isExpanded || toSmallForExpansion }" v-on:click="toggleExpansion">

      <div class="f-code-tools">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item"><f-icon icon="copy" /> Copy</li>
          <li class="list-inline-item">Copying</li>
        </ul>
      </div>

      <pre :class="languageClass" ref="codeBlock"><code><slot>{{ getCodeSnippet }}</slot></code></pre>

    </div>

  </div>
</template>

<script>
import { FIcon } from '../'
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
  name: 'FrameworkCode',

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

  components: {
    FIcon
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
