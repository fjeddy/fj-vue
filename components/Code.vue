<template>
  <div class="f-code" ref="codeBlock">
    <strong v-if="title">{{ title }}</strong>
    <pre :class="languageClass"><code><slot>{{ value }}</slot></code></pre>
  </div>
</template>

<script>
import Prism from 'prism-es6'
import 'prism-es6/themes/prism-tomorrow.css'

const languages = {
  scss: import(/* webpackChunkName: "f-code-scss" */ 'prism-es6/components/prism-scss'),
  sass: import(/* webpackChunkName: "f-code-sass" */ 'prism-es6/components/prism-sass'),
  html: import(/* webpackChunkName: "f-code-markup" */ 'prism-es6/components/prism-markup'),
  java: import(/* webpackChunkName: "f-code-java" */ 'prism-es6/components/prism-java'),
  javascript: import(/* webpackChunkName: "f-code-javascript" */ 'prism-es6/components/prism-javascript'),
  json: import(/* webpackChunkName: "f-code-json" */ 'prism-es6/components/prism-json')
}

export default {
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
    }
  },

  computed: {
    languageClass() {
      return `language-${this.language}`
    }
  },

  mounted() {
    this.fetchLanguage()
  },

  methods: {
    async fetchLanguage() {
      if (this.language) {
        await languages[this.language]
        Prism.highlightAllUnder(this.$refs.codeBlock)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../sass/variables.scss';

.f-code pre {
  border-radius: $f-code-border-radius;
  font-size: $f-code-font-size;
}
</style>
