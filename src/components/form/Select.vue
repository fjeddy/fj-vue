<template>
  <select v-model="input">
    <slot>
      <option
        v-if="data"
        v-for="option of data"
        v-bind:key="option.value || option"
        v-bind:value="option.value || option">
          {{ option.title || option.value || option }}
      </option>
    </slot>
  </select>
</template>

<script>
export default {
  name: 'FrameworkFormSelect',

  props: {
    data: {
      type: Array,
      required: true
    },

    value: {}
  },

  computed: {
    input: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
