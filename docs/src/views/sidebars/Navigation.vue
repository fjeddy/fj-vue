<template>
  <div class="navigation">

    <ul class="list-unstyled">
      <li><router-link to="/">
        <i class="fa-icon gg-chevron-right d-inline-block" v-if="this.$route.path === '/'"></i>
        Getting started
      </router-link></li>

      <li><router-link to="/sass-variables">
        <i class="fa-icon gg-chevron-right d-inline-block" v-if="this.$route.path === '/sass-variables'"></i>
        Sass variables
      </router-link></li>
    </ul>

    <ul class="list-unstyled">
      <li><router-link to="/app.vue">
        <i class="fa-icon gg-chevron-right d-inline-block" v-if="this.$route.path === '/app.vue'"></i>
        App.vue
      </router-link></li>

      <li><router-link to="/router.js">
        <i class="fa-icon gg-chevron-right d-inline-block" v-if="this.$route.path === '/router.js'"></i>
        router.js
      </router-link></li>
    </ul>

    <h5 class="mt-4">Components</h5>
    <ul class="list-unstyled">
      <li><router-link to="/component/list">
        <i class="fa-icon gg-chevron-right d-inline-block" v-if="this.$route.path === '/component/list'"></i>
        List
      </router-link></li>

      <li><router-link to="/component/tabs">
        <i class="fa-icon gg-chevron-right d-inline-block" v-if="this.$route.path === '/component/tabs'"></i>
        Tabs
      </router-link></li>
    </ul>

    <ul class="list-unstyled">
      <li><router-link to="/component/code">
        <i class="fa-icon gg-chevron-right d-inline-block" v-if="this.$route.path === '/component/code'"></i>
        Code
      </router-link></li>

      <li><router-link to="/component/pagination">
        <i class="fa-icon gg-chevron-right d-inline-block" v-if="this.$route.path === '/component/pagination'"></i>
        Pagination
      </router-link></li>
    </ul>

    <ul class="list-unstyled">
      <li><router-link to="/component/form">
        Form
      </router-link></li>

      <li><router-link to="/component/form/input">
        - Input
      </router-link></li>

      <li><router-link to="/component/form/textarea">
        - Textarea
      </router-link></li>

      <li><router-link to="/component/form/markdown">
        - Markdown
      </router-link></li>

      <li><router-link to="/component/form/select">
        - Select
      </router-link></li>

      <li><router-link to="/component/form/submit">
        - Submit
      </router-link></li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
.navigation ul li a {
  line-height: 1.8em;
}
</style>
