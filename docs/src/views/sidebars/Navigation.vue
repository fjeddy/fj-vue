<template>
  <div class="navigation">

    <ul class="list-unstyled">
      <li><router-link to="/">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/'" />
        Overview
      </router-link></li>

      <li><router-link to="/getting-started">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/getting-started'" />
        Getting started
      </router-link></li>

      <li><router-link to="/sass-variables">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/sass-variables'" />
        Sass variables
      </router-link></li>
    </ul>

    <ul class="list-unstyled">
      <li><router-link to="/app.vue">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/app.vue'" />
        App.vue
      </router-link></li>

      <li><router-link to="/router.js">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/router.js'" />
        router.js
      </router-link></li>
    </ul>

    <h5 class="mt-4">Utilities</h5>
    <ul class="list-unstyled">
      <li><router-link to="/utilities/axios">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/utilities/axios'" />
        Axios
      </router-link></li>

      <li><router-link to="/utilities/axios">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/utilities/axios'" />
        DayJS
      </router-link></li>
    </ul>

    <h5 class="mt-4">Components</h5>
    <ul class="list-unstyled">
      <li><router-link to="/component/list">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/component/list'" />
        List
      </router-link></li>

      <li><router-link to="/component/tabs">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/component/tabs'" />
        Tabs
      </router-link></li>

      <li><router-link to="/component/markdown">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/component/markdown'" />
        Markdown
      </router-link></li>
    </ul>

    <ul class="list-unstyled">
      <li><router-link to="/component/code">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/component/code'" />
        Code
      </router-link></li>

      <li><router-link to="/component/pagination">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/component/pagination'" />
        Pagination
      </router-link></li>

      <li><router-link to="/component/alert">
        <f-icon icon="long-arrow-right" class="me-2" v-if="this.$route.path === '/component/alert'" />
        Alert
      </router-link></li>
    </ul>

    <ul class="list-unstyled mb-0">
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
