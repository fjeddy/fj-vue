<template>
  <div class="f-code" ref="codeBlock">
    <strong v-if="title">{{ title }}</strong>
    <div class="f-code-content" :class="{ expanded: isExpanded }" v-on:click="toggleExpansion">
      <pre :class="languageClass"><code><slot>{{ value }}</slot></code></pre>
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
      isExpanded: this.expand
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
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>

<style lang="scss">
@import '../sass/variables.scss';

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
