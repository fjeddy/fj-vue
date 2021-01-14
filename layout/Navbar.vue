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

  props: {
    options: {
      type: Object,
      required: false
    }
  },

  computed: {
    getClasses() {
      if (this.options.class) return this.options.class
      return false
    }
  }
}
</script>
