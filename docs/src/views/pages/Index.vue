<template>
  <div>

    <section>
      <h1>Overview</h1>
      <p class="lead">fj-vue is a VueJS framework that renders
      gui based on a JSON API response. Conforming to a specific JSON standard
      response makes it a breeze to create a frontend using fj-vue.</p>

      <p>If you are the creator of a JSON API, and are also the maker of a frontend,
        then this framework might be for you. Framework.vue aims at making the
        frontend creation and maintaince process much simpler by handling responses
        from a JSON API such as lists, forms and so on.</p>

      <p>The framework will, if given the data in the correct format, generate the
        necessary HTML for you. Increasing the developement time drastically.
        By conforming to a specific standard when creating the API, then half the
        job is already done on the frontend.</p>

      <p><strong>Important:</strong> This project is made to simplify my life and
      is used in most project where we also make the backend APIs. It does not
      intend to solve any world problems or cover a specific problem, it's simply
      here to make my life easier.</p>
    </section>

    <section>
      <h3>Demo</h3>
      <p>The entire docs for fj-vue (The site you are on) is made solely using fj-vue.
      Reading the docs, then you are also looking at our demo :)</p>
    </section>

    <section>
      <h3>Functionality over size</h3>
      <p>Size is important, as in, the smaller the better. But functionality is
      even more important. This framework will try to keep things as tight as
      possible, but will not sacrifice simplicity and functionality for a smaller
      build.</p>

      <p>The goal is a total size of &lt; 400kb for the framework on initial load
      (Global CSS and JS). Which should leave a production site, with your custom
      layout and css at &lt; 500kb, lazyloading the actual components within your
      production site.</p>
    </section>

    <section>
      <h3>Dependencies</h3>
      <p>fj-vue implements a few packages that simplifies our lives.</p>
    </section>

  </div>
</template>

<script>
export default {
  name: "PageIndex"
}
</script>
