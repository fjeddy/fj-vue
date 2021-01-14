<template>
  <div>

    <section>
      <h1>Alert</h1>
      <p class="lead">Show an alert...</p>
    </section>

    <section>
      <f-alert>
        Info
      </f-alert>

      <f-alert type="success">
        Success
      </f-alert>

      <f-alert type="danger">
        Danger
      </f-alert>

      <f-alert type="warning" icon="info">
        Warning
      </f-alert>
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

    <f-alert>
      Info
    </f-alert>

    <f-alert type="success">
      Success
    </f-alert>

    <f-alert type="danger">
      Danger
    </f-alert>

    <f-alert type="warning">
      Warning
    </f-alert>

  </div>
</template>

<script>
import { FAlert } from 'f-vue'

export default {
  components: {
    FAlert
  }
}
<\/script>`
    }
  }
}
</script>
