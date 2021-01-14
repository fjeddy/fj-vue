<template>
  <div class="container">
    <div class="row">

      <div class="col-md-3 f-sidebar" v-if="isSidebar">
        <affix relative-element-selector=".f-sidebar">
          <router-view name="sidebar"></router-view>
        </affix>
      </div>

      <div class="col-md-9">
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<script>
import { Affix } from 'vue-affix'

export default {
  name: 'FrameworkLayout',

  components: {
    Affix
  },

  computed: {
    options() {
      if (this.$route.meta?.sidebar) {
        return { ...this.$fj.sidebar, ...this.$route.meta?.sidebar }
      }
      return this.$fj.footer
    },

    isHeader() {
      return this.$route.matched[0]?.components.header
    },

    isSidebar() {
      return this.$route.matched[0]?.components.sidebar
    }
  }
}
</script>
