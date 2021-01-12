<template>
  <div>

    <section>

      <h2>List</h2>
      <p class="lead">Loop through and print an array of items.</p>

      <code>
        f-list
          url=""
          :limit="10"
          v-slot="{ item }">
        /f-list
      </code>

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
import { FList } from 'framework'

export default {
  components: {
    FList
  }
}
</script>
