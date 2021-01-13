<template>
  <div class="f-code">
    <strong v-if="title">{{ title }}</strong>
    <vue-code-highlight :language="language">
      <slot>{{ value }}</slot>
    </vue-code-highlight>
  </div>
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
    },

    title: {
      type: String,
      required: false
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
