<template>
  <nav class="f-navbar navbar navbar-expand-lg" :class="getClasses">
    <div class="container">
      <slot />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FrameworkNavbar',

  computed: {
    options() {
      if (this.$route.meta?.navbar) {
        return { ...this.$fj.navbar, ...this.$route.meta?.navbar }
      }
      return this.$fj.navbar
    },

    getClasses() {
      if (this.options.class) return this.options.class
      return false
    }
  }
}
</script>
