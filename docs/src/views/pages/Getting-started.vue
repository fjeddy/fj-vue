<template>
  <div>

    <section>
      <h1>Getting started</h1>
    </section>

    <section>
      <h3>Installing the package</h3>
      <p>First thing first, we need to include the fj-vue package in our project.</p>

      <f-code value="npm install fj-vue -S" />
    </section>

    <section>
      <h3>Default configuration</h3>
      <p>You can define a default configuration in your <code>main.js</code> file
      or wherever else you might define your plugins.</p>

      <f-alert type="warning">
        This step is not required,
        but will probably be needed to avoid repeating yourself when defining the
        route variables.
      </f-alert>

      <f-code :value="`
        import Vue from 'vue'
        import FJVue from 'fj-vue'

        import App from './App.vue'

        Vue.use(FJVue, {
          options: {
            navbar: {},
            header: {},
            sidebar: {
              follow: true
            },
            footer: {
              class: 'py-5'
            },
            codeBlock: {
              forceExpandOnLine: 12
            }
          },
          language: {
            apiError: 'Got an error while loading data from the API :(',
            apiFailed: 'We have failed in any attempt made to process this list... We suck :(',
            listViewing: 'Viewing %limit of %total items',
            pagination: {
              previous: 'Previous',
              next: 'Next'
            }
          }
        })

        new Vue({
          render: h => h(App)
        }).$mount('#app')
      `" title="main.js" />

      <p>The options you define here will be merged with the meta tags for every
        route. You can override them on a per-route level by re-defining them in
        the route meta.</p>
    </section>

    <section>
      <h3>Include SCSS</h3>
      <p>The SCSS needs to be included in a specific order to make sure your
      custom SASS variables are not overwritten. In <code>App.vue</code> or
      any other file where you want to include the SCSS.</p>

      <f-code :value="codeSCSS" language="scss" />

      <p>You can find a complete list of all the variables you can use over at
        <router-link to="/sass-variables">Sass variables</router-link>. You
      only need to include the ones you change the value of.</p>
    </section>

    <section>
      <h3>Start using fj-vue</h3>
      <p>You can now start importing the different parts of fj-vue you might
      need in your application. An example of doing so could be...</p>

      <f-code :value="`
        <template>
          <div>

            <f-list url='myurl' v-prop='{ item }'>
              // Item is one element, each element is looped until the end of the list
              {{ item.name }}
            </f-list>

          </div>
        </template>

        <script>
        import { FList } from 'fj-vue'

        export default {
          name: 'MyComponent',
          components: {
            FList
          }
        }
        </script>
      `" title="MyComponent.vue" />
    </section>

  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data: function() {
    return {
      codeSCSS: `
        // All Bootstrap and fj-vue variables are inside here
        @import "~fj-vue/src/sass/variables.scss";

        // Override Bootstrap and fj-vue variables AFTER including them
        $body-bg:                   $light;
        $body-color:                $gray-900;

        $font-size-base:            1.1rem;
        $line-height-base:          1.6;

        // Include the actual css from fj-vue, using your new variables
        @import "~fj-vue/src/sass/framework.scss";

        // Include your custom css AFTER including fj-vue's CSS
        html,
        body {
          height: 100%;
        }

        a {
          text-decoration: none;
        }

        section {
          margin: 50px 0;
        }

        section:first-child {
          margin-top: 0;
        }

        section:last-child {
          margin-bottom: 0;
        }
      `
    }
  }
}
</script>
