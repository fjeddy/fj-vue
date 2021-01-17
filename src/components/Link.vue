<template>
  <component :is="getType" :to="to"><slot /></component>
</template>

<script>
import Local from './link/Local.vue'
import Remote from './link/Remote.vue'

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
  },

  components: {
    Local,
    Remote
  },

  computed: {
    getType() {
      if (this.blank) return 'Remote'
      return 'Local'
    }
  }
}
</script>
