<template>
  <div v-if="isHeader">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrameworkHeader',

  props: {
    data: {
      type: Object,
      required: false
    }
  },

  computed: {
    isHeader() {
      return this.$route?.matched[0]?.components.header
    }
  }
}
</script>
