<template>
  <div>

    <section>
      <h1>Tabs</h1>
      <p class="lead">Seperate the content into multiple different tabs.</p>
    </section>

    <section>
      <div class="bg-secondary p-1 rounded">
        <f-tabs>

          <f-tab title="Tab 1" class="bg-white p-3">
            This is the first tab content
          </f-tab>

          <f-tab title="Tab 2" class="bg-white p-3">
            This is the second tab content
          </f-tab>

        </f-tabs>
      </div>

      <div class="bg-secondary p-1 rounded mt-3">
        <f-tabs type="pills">

          <f-tab title="Tab 1" class="bg-white p-3">
            This is the first tab content
          </f-tab>

          <f-tab title="Tab 2" class="bg-white p-3">
            This is the second tab content
          </f-tab>

        </f-tabs>
      </div>
    </section>

    <section>
      <h2>Vue example</h2>
      <p>An example of how the component can be implemented in Vue</p>

      <f-code :value="code" />
    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
export default {
  data: function() {
    return {
      code: `<template>
  <div>

    <f-tabs>

      <f-tab title="Tab 1" class="bg-white p-3">
        This is the first tab content
      </f-tab>

      <f-tab title="Tab 2" class="bg-white p-3">
        This is the second tab content
      </f-tab>

    </f-tabs>

    <f-tabs type="pills" class="mt-5">

      <f-tab title="Tab 1" class="bg-white p-3">
        This is the first tab content
      </f-tab>

      <f-tab title="Tab 2" class="bg-white p-3">
        This is the second tab content
      </f-tab>

    </f-tabs>

  </div>
</template>

<script>
import { FTabs, FTab } from 'f-vue'

export default {
  components: {
    FTabs,
    FTab
  }
}
<\/script>`
    }
  }
}
</script>
