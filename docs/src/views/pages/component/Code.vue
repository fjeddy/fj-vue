<template>
  <div>

    <section>
      <h1>Code</h1>
      <p class="lead">Highlight a piece of code. Heavily used here, in the docs /
      example.</p>
    </section>

    <section>
      <f-code :value="`{
  key: 'Some test code',
  hmmm: 'Waddup?'
}`" />

      <f-code language="html" class="mt-3">
        <p>This is my code of some sort</p>
      </f-code>
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

    <f-code :value="\`{
      key: 'Some test code',
      hmmm: 'Waddup?'
    }\`" />

    <f-code language="text">
      This is my code of some sort
    </f-code>

  </div>
</template>

<script>
import { FCode } from 'f-vue'

export default {
  components: {
    FCode
  }
}
<\/script>`
    }
  }
}
</script>
