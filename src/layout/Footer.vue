<template>
  <div class="f-footer">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrameworkFooter',

  computed: {
    options() {
      if (this.$route.meta?.footer) {
        return { ...this.$fj.footer, ...this.$route.meta?.footer }
      }
      return this.$fj.footer
    }
  }
}
</script>
