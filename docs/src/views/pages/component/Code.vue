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

      <f-code language="html" class="mt-3" :value="codeText">

      </f-code>
    </section>

    <section>
      <h2>Vue example</h2>
      <p>An example of how the component can be implemented in Vue</p>

      <f-code :value="code" />
    </section>

    <section>
      <h2>Props</h2>
      <p>Props you can use to modify the output of the component.</p>

      <table class="table table-striped bg-secondary p-1 rounded">
        <thead>
          <tr>
            <th width="20%"></th>
            <th width="20%">Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>value</strong></td>
            <td class="text-info">String</td>
            <td class="small">What you want to print in the code block. Use this if you dont want to use the <code>slot</code> property</td>
          </tr>

          <tr>
            <td><strong>language</strong></td>
            <td class="text-info">String</td>
            <td class="small">The language you want syntax for. Defaults to javascript</td>
          </tr>

          <tr>
            <td><strong>expand</strong></td>
            <td class="text-info">Boolean</td>
            <td class="small">Include expand and the codeblock will be expanded by default.</td>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
export default {
  data: function() {
    return {
      codeText: '<p>This is my code of some sort</p>',
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
