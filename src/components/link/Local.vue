<template>
  <router-link :to="to">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'FrameworkLinkLocal',

  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
