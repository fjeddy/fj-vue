<template>
  <div>

    <section>
      <h1>Sass variables</h1>
      <p>Change the look and feel of the entire framework using sass variables.</p>
    </section>

    <section>
      <h2>Bootstrap</h2>
      <p>Bootstrap comes included with this framework, Bootstrap comes with it's
        own set of sass variables that fj-vue heavily relies on.</p>

      <f-alert icon="info" class="my-4">
        Bootstrap comes with many many variables, we have only listed the ones
        that are actually used by the framework.
      </f-alert>

      <f-code :value="`// Core
$body-bg:                   $white;
$body-color:                $gray-900;
$font-size-base:            1rem;
$line-height-base:          1.428571429;

// Colors`" language="scss" />
    </section>

    <section>
      <h2>fj-vue</h2>
      <p>fj-vue comes with a few of it's own variables that can also be changed
      and defined.</p>

      <f-code :value="`// Code blocks
$f-code-font-size:                   .9em;
$f-code-border-radius:               3px;`" language="scss" />
    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
export default {
  name: "PageSassVariables"
}
</script>
