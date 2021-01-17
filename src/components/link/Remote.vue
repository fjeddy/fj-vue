<template>
  <a :href="to" target="_blank">
    <i class="fa-icon fj-globe"></i> <slot />
  </a>
</template>

<script>
export default {
  name: 'FrameworkLinkRemote',

  props: {
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
