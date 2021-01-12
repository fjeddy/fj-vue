<template>
  <div>

    <section>

      <h2>List</h2>
      <p class="lead">Loop through and print an array of items.</p>

      <vuep :value="code" :scope="scope" />

    </section>

    <section class="mt-5">

      <h3>Example</h3>

      <f-list url="https://api.elytra.no/v1/players" :limit="2" v-slot="{ item }">
        {{ item.name }}
      </f-list>

    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
import { FList } from 'framework'

export default {
  data: function() {
    return {
      scope: { FList },
      code: `
<template>
  <div>
    <f-list
      url="https://api.elytra.no/v1/players"
      v-slot="{ item }"

      :limit="10">

      {{ item.name }}

      <!--
      // Enter your item HTML here, the item data is contained within the
      // 'item' object
      -->

    </f-list>
  </div>
</template>

<script>
// import { FList } from 'f-vue'

module.exports = {
  components: {
    FList
  }
}
<\/script>
      `
    }
  },

  components: {
    FList
  }
}
</script>
