<template>
  <div id="app" class="d-flex flex-column h-100">

    <f-navbar :data="this.$route.meta.navbar" class="navbar-light bg-light">
      Enter navbar content here
    </f-navbar>

    <f-header :data="this.$route.meta.header" class="py-5 bg-dark text-white">
      <router-view name="header" />
    </f-header>

    <f-content :data="this.$route" class="flex-fill py-5">
      <router-view></router-view>
    </f-content>

    <f-footer :data="this.$route.meta.footer" class="py-5 mt-5 bg-light">
      <p class="m-0">It's a footer, a footer that always sticks to the bottom.</p>
    </f-footer>

  </div>
</template>

<script>
import { FContent, FHeader, FNavbar, FFooter } from 'framework'

export default {
  components: {
    FContent,
    FHeader,
    FNavbar,
    FFooter
  }
}
</script>

<style lang="scss">
@import "@/sass/style.scss";
</style>
