<template>
  <vue-code-highlight :language="language">
    <slot>{{ value }}</slot>
  </vue-code-highlight>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight'
import 'vue-code-highlight/themes/prism-tomorrow.css'

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
    }
  },

  components: {
    VueCodeHighlight
  }
}
</script>
