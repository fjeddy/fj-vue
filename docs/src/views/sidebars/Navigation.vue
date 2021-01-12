<template>
  <div>

    <router-link to="/">
      - Home
    </router-link>

    <h5 class="mt-5">Layouts</h5>
    <ul class="list-unstyled">
      <li><router-link to="/layout/header">
        With a header
      </router-link></li>

      <li><router-link to="/layout/no-sidebar">
        No sidebar
      </router-link></li>

      <li><router-link to="/layout/header-sidebar">
        Header & Sidebar
      </router-link></li>

      <li><router-link to="/layout/centered">
        Centered content
      </router-link></li>
    </ul>

    <h5 class="mt-5">Components</h5>
    <ul class="list-unstyled">
      <li><router-link to="/component/list">
        List
      </router-link></li>
    </ul>

  </div>
</template>
