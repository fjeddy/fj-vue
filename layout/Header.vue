<template>
  <div class="container">
    <slot></slot>
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
  }
}
</script>
