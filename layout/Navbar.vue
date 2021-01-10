<template>
  <nav class="f-navbar navbar navbar-expand-lg">
    <div class="container">
      <slot />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'FrameworkNavbar',

  props: {
    data: {
      type: Object,
      required: false
    }
  }
}
</script>
