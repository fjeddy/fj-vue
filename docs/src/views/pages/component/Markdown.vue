<template>
  <div>

    <section>
      <h1>Markdown</h1>
      <p class="lead">Render Markdown as HTML.</p>
    </section>

    <section>
      <f-markdown source="
### Hello
Some code goes here, easy right? This is all made just using Markdown, pure delicious text.

#### Markdown is super fun
And so darn easy, it isn't really that fun.
" />
    </section>

    <section>
      <h2>Vue example</h2>
      <p>An example of how the component can be implemented in Vue</p>

      <f-code :value="code" />
    </section>

    <section>
      <f-alert type="warning">Indents are a pain to work with. Take a good look at the example
      and notice how the indents start at the beginning of the document and does
      not follow the indent structure of the rest of the code. It has to be like
      that for markdown-it to render it correctly. Your indents are included
      and rendered as markdown.</f-alert>
    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
import { FMarkdown } from 'fj-vue'

export default {
  data: function() {
    return {
      code: `
        <template>
          <div>

          <f-markdown source="
        ### Hello
        Some code goes here, easy right? This is all made just using Markdown, pure delicious text.

        #### Markdown is super fun
        And so darn easy, it isn't really that fun.
          "/>

          </div>
        </template>

        <script>
        import { FMarkdown } from 'f-vue'

        export default {
          components: {
            FMarkdown
          }
        }
        <\/script>
      `
    }
  },

  components: {
    FMarkdown
  }
}
</script>
