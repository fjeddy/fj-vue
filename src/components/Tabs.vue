<template>
  <div class="f-tabs">

    <slot />

  </div>
</template>

<script>
export default {
  name: 'FrameworkTabs'
}
</script>

<style lang="scss" scoped>
.f-tabs .f-tab {
  display: none;
}
</style>
