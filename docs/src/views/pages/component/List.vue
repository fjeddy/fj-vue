<template>
  <div>

    <section>
      <h1>List</h1>
      <p class="lead">Loop through an array of data and handle sorting, pagination
      and output automatically.</p>
    </section>

    <section class="bg-light p-1 rounded">
      <f-list url="http://localhost:2999/v1/packages" :limit="2" v-slot="{ item }">
        <div class="bg-dark p-2 text-white rounded">
          {{ item.name }}
        </div>
      </f-list>
    </section>

    <section>
      <f-tabs>

        <f-tab title="Vue docs" class="bg-white p-3">
          <h2>Component</h2>
          <p>An example of how the component can be implemented in Vue</p>

          <f-code :value="code" />
        </f-tab>

        <f-tab title="API Example" class="bg-white p-3">
          <h2>API response</h2>
          <p>The response the API should give for the component to work properly.</p>

          <f-code :value="api" language="json" />

          <p class="mb-0"><span class="text-danger">*</span> Every key in <code>options</code>
            can be omitted, the framework will remove the GUI if the option
            is missing. <strong>Ex:</strong> If you don't provide the <code>options.page</code>
            in the API response, then the pagination will not be displayed.</p>
        </f-tab>
        
      </f-tabs>


    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
import { FList } from 'fj-vue'

export default {
  data: function() {
    return {
      code: `<template>
  <div>
    <f-list
      url="https://api.elytra.no/v1/players"
      v-slot="{ item }"

      :limit="10">

      <div class="bg-dark p-2 text-white">
        {{ item.name }}
      </div>

      <!--
      // Enter your item HTML here, the item data is contained within the
      // 'item' object
      -->

    </f-list>
  </div>
</template>

<script>
import { FList } from 'fj-vue'

export default {
  components: {
    FList
  }
}
<\/script>`,
      api: `{
  "options": {
    "limit": {
      "current": 15,
      "min": 1,
      "max": 50,
      "options": []
    },
    "page": {
      "current": 1,
      "total": 23
    },
    "order": {
      "current": "name",
      "direction": "asc",
      "options": []
    }
  },
  "items": {
    "total": 129,
    "list": [
      {
        "name": "item 1"
      },
      {
        "name": "item 2 "
      }
    ]
  }
}`
    }
  },

  components: {
    FList
  }
}
</script>
