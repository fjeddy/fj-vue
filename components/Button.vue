<template>
  <button type="submit" class="btn">{{ value }}</button>
</template>

<script>
export default {
  name: 'FrameworkButton',
  props: {
    value: {
      type: String
    }
  }
}
</script>

<style lang="scss">

</style>
