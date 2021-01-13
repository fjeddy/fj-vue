<template>
  <vue-code-highlight :language="language" class="f-code">
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

<style lang="scss">
.f-code pre {
  border-radius: 3px;
}
</style>
