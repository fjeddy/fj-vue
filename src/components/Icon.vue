<template>
  <i class="fj-icon" :class="getClassName"></i>
</template>

<script>
export default {
  name: 'FrameworkIcon',

  props: {
    icon: {
      type: String,
      required: false
    }
  },

  computed: {
    getClassName() {
      return `fj-${this.icon}`
    }
  }
}
</script>
