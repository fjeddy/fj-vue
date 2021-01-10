<template>
  <div class="container">
    <div class="row">

      <div class="col-md-3 f-sidebar">
        <affix relative-element-selector=".f-sidebar" v-if="isSidebar">
          <router-view name="sidebar"></router-view>
        </affix>
      </div>

      <div class="col">
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
    data: {
      type: Object,
      required: false
    }
  },

  computed: {
    isHeader() {
      return this.data?.matched[0]?.components.header
    },

    isSidebar() {
      return this.data?.matched[0]?.components.sidebar
    }
  }
}
</script>
