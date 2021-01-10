<template>
  <div id="app" class="d-flex flex-column h-100">

    <f-navbar :data="this.$route.meta.navbar" class="navbar-light bg-light">
      Enter navbar content here
    </f-navbar>

    <f-header :data="this.$route.meta.header" class="py-5">
      <router-view name="header" />
    </f-header>

    <f-content :data="this.$route" class="flex-fill">
      <router-view></router-view>
    </f-content>

    <f-footer :data="this.$route.meta.footer" class="py-5 mt-5 bg-light">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
