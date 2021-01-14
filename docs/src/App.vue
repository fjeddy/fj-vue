<template>
  <div id="app" class="d-flex flex-column h-100">

    <f-navbar class="navbar-light">
      <router-link to="/" class="navbar-brand">
        fj-vue
      </router-link>

      <div>
        <a href="https://github.com/fjeddy/fj-vue" target="_blank" class="me-3">
          GitHub
        </a>

        <a href="https://www.npmjs.com/package/fj-vue" target="_blank">
          NPM
        </a>
      </div>
    </f-navbar>

    <f-header class="py-5 bg-dark text-white">
      <router-view name="header" />
    </f-header>

    <f-content class="flex-fill py-5">
      <router-view></router-view>
    </f-content>

    <f-footer>
      <p class="m-0">It's a footer, a footer that always sticks to the bottom.</p>
    </f-footer>

  </div>
</template>

<script>
import { FContent, FHeader, FNavbar, FFooter } from 'fj-vue'

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
