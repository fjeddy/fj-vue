<template>
  <div>

    <section>
      <h1>Overview</h1>
      <p class="lead">fj-vue is a collection of components, functions and methods
      that can be called and used anywhere in your Vue.js application. It's
      technically a plugin, but not really.</p>

      <p>With fj-vue you need to import every component you want to use,
      individually. Assuming you use <a href="https://router.vuejs.org/" target="_blank">vue-router</a> and <a href="https://router.vuejs.org/guide/advanced/lazy-loading.html" target="_blank">lazyload your routes</a> as
      showcased in <router-link to="/router.js">router.js</router-link>, then
      only the components you use are included, known as tree-shaking.</p>

      <p>fj-vue connects directly with a JSON API, it doesn't take arrays and objects,
      but instead, an URL to the API endpoint where the data is located. This
      means that the JSON API needs to return a specific format that fj-vue can
      read and understand. If you are not in control over the JSON API you want
      to use fj-vue with, then this isn't for you. If the API isn't giving the
      exact expected format directly from the API response, it will fail.</p>

      <p><strong>Important:</strong> This project is made to simplify my life and
      is used in most project where we also make the backend APIs. It does not
      intend to solve any world problems or cover a specific problem, it's simply
      here to make my life easier.</p>
    </section>

    <section>
      <h3>Demo</h3>
      <p>The entire docs for fj-vue (The site you are on) is made solely using fj-vue.
      Reading the docs, then you are also looking at our demo :) The docs are
      using the CSS that is included within this Framework and nothing else. But
      some sass variables has been changed to "spruce" up the vanilla bootstrap
      design. These sass changes are not included in fj-vue.</p>
    </section>

    <section>
      <h3>Contributing</h3>
      <p>Feel free to contribute in any way you can. We love all the help we can get.
      Simply send in a PR and we will take a look :)</p>

      <p>Keep in mind, this "framework" is made for a specific intention, doing
      specific things, that are meant to be super universal, the goal is to achieve
      as much as possible, fitting as many scenarios as possible, with as few props
      and config options as possible. This means that creating a component with
      20 different props and settings to alter and change the behavior of a
      component is not something we want. That's what we have invidiual packages,
      plugins and components for.</p>

      <p>We are not making a framework that "fits all", think of fj-vue as a skeleton.
      Some elbow-grease on the final product when using fj-vue is expected. fj-vue
      will not make a website for you, it's simply speeding up the process quite a bit.</p>
    </section>

    <section>
      <h3>Functionality over size</h3>
      <p>Size is important, as in, the smaller the better. But functionality is
      even more important. This framework will try to keep things as tight as
      possible, but will not sacrifice simplicity and functionality for a smaller
      build.</p>

      <p>The goal is a total size of &lt; 250kb for the framework on initial load
      (Global CSS and JS). Almost half of this is the Bootstrap CSS that's included.</p>
    </section>

    <section>
      <h3>Dependencies</h3>
      <p>fj-vue implements a few packages that simplifies our lives.</p>
    </section>

    <section>
      <h3>License</h3>
      <p>MIT</p>
    </section>

  </div>
</template>

<script>
export default {
  name: "PageIndex"
}
</script>
