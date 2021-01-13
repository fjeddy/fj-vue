<template>
  <div>

    <ul class="list-unstyled">
      <li><router-link to="/">
        Getting started
      </router-link></li>

      <li><router-link to="/sass-variables">
        Sass variables
      </router-link></li>
    </ul>

    <ul class="list-unstyled">
      <li><router-link to="/app.vue">
        App.vue
      </router-link></li>

      <li><router-link to="/router.js">
        router.js
      </router-link></li>
    </ul>

    <h5 class="mt-4">Components</h5>
    <ul class="list-unstyled">
      <li><router-link to="/component/list">
        List
      </router-link></li>

      <li><router-link to="/component/tabs">
        Tabs
      </router-link></li>
    </ul>

    <ul class="list-unstyled">
      <li><router-link to="/component/code">
        Code
      </router-link></li>

      <li><router-link to="/component/pagination">
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
