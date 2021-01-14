<template>
  <div v-if="isHeader">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import merge from 'lodash/merge'

export default {
  name: 'FrameworkHeader',

  computed: {
    options() {
      if (this.$route.meta?.header) {
        return merge(this.$fj.header, this.$route.meta.header)
      }
      return this.$fj.header
    },

    isHeader() {
      return this.$route?.matched[0]?.components.header
    }
  }
}
</script>
