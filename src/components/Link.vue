<template>
  <span class="f-link">

    <router-link :to="to" v-if="!blank">
      <slot />
    </router-link>

    <a :href="to" target="_blank" v-if="blank">
      <i class="fa-icon fj-globe"></i>
      <slot />
    </a>

  </span>
</template>

<script>
export default {
  name: 'FrameworkLink',

  props: {
    to: {
      type: String,
      default: ''
    },

    blank: {
      type: Boolean,
      default: false
    }
  }
}
</script>
