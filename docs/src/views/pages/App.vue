<template>
  <div>

    <section>
      <h1>App.vue</h1>
      <p>The contents of App.vue is quite simple and straight forward. The
        framework assumes that you are using <code>vue-router</code> and provide the options
        using meta data in the router.</p>
    </section>

    <section>
      <f-code :value="code" title="app.vue" />
    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
export default {
  name: "PageApp",

  data: function() {
    return {
      code: `
        <template>
          <div id="app" class="d-flex flex-column h-100">

            <f-navbar class="navbar-light bg-light">
              <router-link to="/" class="navbar-brand">
                Framework.vue
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

            <f-footer class="py-5 mt-5 bg-light">
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
        <\/script>
      `
    }
  }
}
</script>
