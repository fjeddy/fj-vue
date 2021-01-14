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

  props: {
    options: {
      type: Object,
      required: false
    }
  },

  computed: {
    isHeader() {
      return this.options?.matched[0]?.components.header
    },

    isSidebar() {
      return this.options?.matched[0]?.components.sidebar
    }
  }
}
</script>
