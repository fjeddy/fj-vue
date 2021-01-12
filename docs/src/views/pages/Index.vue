<template>
  <div>

    <section>
      <h1>Framework.vue</h1>
      <p class="lead">A VueJS framework aimed towards JSON API's with a certain
      JSON structure.</p>

      <p>If you are the creator of a JSON API, and are also the maker of a frontend,
        then this framework might be for you. Framework.vue aims at making the
        frontend creation and maintaince process much simpler by handling responses
        from the API such as lists, forms and so on.</p>

      <p>The framework will, if given the data in the correct format, generate the
        necessary HTML for you. Increasing the developement time drastically.</p>
    </section>

    <section>
      <h2>Bootstrap</h2>
      <p>Bootstrap is included by default in this framework, tho, only CSS included,
        and only a few subset files. Bootstrap as a whole is not included.</p>

      <pre>@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";

@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/images";
@import "~bootstrap/scss/containers";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/nav";
@import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/pagination";
@import "~bootstrap/scss/badge";

@import "~bootstrap/scss/helpers";
@import "~bootstrap/scss/utilities/api";
      </pre>
    </section>

    <section>
      <h2>Installing the entire framework</h2>
      <p>It's possible, but not recommended, to install the entire framework
        at once in Vue. This will include every component within the framework
        and make them globally available.</p>

      <strong>main.js</strong>
      <f-code :value="`import Vue from 'vue'
import Framework from 'f-vue'

import App from './App.vue'

Vue.use(Framework)

new Vue({
  render: h => h(App)
}).$mount('#app')`" />
    </section>

    <section>
      <h2>By component</h2>
      <p>Loading the components you need in the components you use them in
      is the recommended way of using this framework. Assuming you lazyload
      the routes itself, then you just load the subset of the framework you need.</p>

      <strong>MyRoute.vue</strong>
      <f-code :value="`<template>
  <f-list>
    My list item here
  </f-list>
</template>

<script>
import { FList } from 'f-vue'

export default {
  components: {
    FList
  }
}
</script>`" />
    </section>

  </div>
</template>

<script>
import { FCode } from 'framework'

export default {
  components: {
    FCode
  }
}
</script>
