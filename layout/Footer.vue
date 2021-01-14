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

  props: {
    options: {
      type: Object,
      required: false
    }
  }
}
</script>
