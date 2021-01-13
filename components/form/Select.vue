<template>
  <select
    @input="$emit('input', $event.target.value)"
    class="form-select">

    <slot v-if="!options.options" />
    <option :value="option.value" v-for="option of options.options" v-bind:key="option.value" v-if="options.options">{{ option.title }}</option>

  </select>
</template>

<script>
export default {
  name: 'FrameworkFormSelect',
  props: {
    options: {
      type: Object,
      required: true
    }
  }
}
</script>
