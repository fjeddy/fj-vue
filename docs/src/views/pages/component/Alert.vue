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

      <f-alert type="success" title="Stay alert buddy">
        Success with a title
      </f-alert>

      <f-alert type="danger">
        An extended error message with loads of content.. Woot woot
        <hr class="my-2" />
        <small>Love the world, and the world will love you back</small>
      </f-alert>

      <f-alert type="warning" icon="info">
        Warning with an icon
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

    <f-alert type="success" title="Stay alert buddy">
      Success with a title
    </f-alert>

    <f-alert type="danger">
      An extended error message with loads of content.. Woot woot
      <hr class="my-2" />
      <small>Love the world, and the world will love you back</small>
    </f-alert>

    <f-alert type="warning" icon="info">
      Warning with an icon
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
