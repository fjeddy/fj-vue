<template>
  <nav class="f-navbar navbar navbar-expand-lg" :class="classes">
    <slot />
  </nav>
</template>

<script>
import merge from 'lodash/merge'

export default {
  name: 'FrameworkNavbar',

  computed: {
    options() {
      if (this.$route.meta?.navbar) {
        return merge(this.$fj.options.navbar, this.$route.meta.navbar)
      }
      return this.$fj.options.navbar
    },

    classes() {
      if (this.options.class) return this.options.class
      return false
    }
  }
}
</script>
