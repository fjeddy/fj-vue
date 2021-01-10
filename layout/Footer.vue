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
    data: {
      type: Object,
      required: false
    }
  }
}
</script>
