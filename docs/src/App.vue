<template>
  <div id="app" class="d-flex flex-column h-100">

    <f-navbar class="navbar-light">
      <div class="container">
        <f-link to="/" class="navbar-brand">
          fj-vue
        </f-link>

        <div>
          <f-link to="https://github.com/fjeddy/fj-vue" class="me-3" blank>
            GitHub
          </f-link>

          <f-link to="https://www.npmjs.com/package/fj-vue" blank>
            NPM
          </f-link>
        </div>
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
import FContent from 'fj-vue/src/layout/Content'
import FHeader from 'fj-vue/src/layout/Header'
import FNavbar from 'fj-vue/src/layout/Navbar'
import FFooter from 'fj-vue/src/layout/Footer'

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
