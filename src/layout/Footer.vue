<template>
  <div class="f-footer" :class="classes">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import merge from 'lodash/merge'

export default {
  name: 'FrameworkFooter',

  computed: {
    options() {
      if (this.$route.meta?.footer) {
        return merge(this.$fj.options.footer, this.$route.meta.footer)
      }
      return this.$fj.options.footer
    },

    classes() {
      return this.options.class
    }
  }
}
</script>
