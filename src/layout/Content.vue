<template>
  <div class="container">
    <div class="row">

      <div class="col-md-3 f-sidebar" v-if="isSidebar">
        <affix relative-element-selector=".f-sidebar" :offset="{ top: 40, bottom: 15 }">
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
import merge from 'lodash/merge'

export default {
  name: 'FrameworkLayout',

  components: {
    Affix
  },

  computed: {
    options() {
      if (this.$route.meta?.sidebar) {
        return merge(this.$fj.options.sidebar, this.$route.meta.sidebar)
      }
      return this.$fj.options.sidebar
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
