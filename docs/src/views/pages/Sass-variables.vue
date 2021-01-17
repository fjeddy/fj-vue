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

      <f-code :value="codeBootstrap" language="scss" />
    </section>

    <section>
      <h2>fj-vue</h2>
      <p>fj-vue comes with a few of it's own variables that can also be changed
      and defined.</p>

      <f-code :value="`
        // Code blocks
        $f-code-font-size:                   .9em;
        $f-code-border-radius:               3px;
      `" language="scss" />
    </section>

  </div>
</template>

<script>
/*eslint-disable no-useless-escape */
export default {
  name: "PageSassVariables",
  data: function() {
    return {
      codeBootstrap: `
        // Core
        $body-bg:                   $white;
        $body-color:                $gray-900;
        $font-size-base:            1rem;
        $line-height-base:          1.428571429;

        $font-size-base:            1.1rem;
        $line-height-base:          1.6;

        $small-font-size:           .875em;
        $text-muted:                $gray-600;

        // Colors
        $theme-colors: (
          "primary": #007bff,
          "danger": #dc3545,
          "warning": #ffc107,
          "info": #17a2b8,
          "dark": #343a40,
          "light": #f8f9fa,
          "success": #28a745,
          "secondary": #6c757d
        );

        // Navigations
        $nav-link-padding-y:                .5rem;
        $nav-link-padding-x:                1rem;
        $nav-link-font-size:                null;
        $nav-link-font-weight:              null;
        $nav-link-color:                    null;
        $nav-link-hover-color:              null;
        $nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
        $nav-link-disabled-color:           $gray-600;

        $nav-tabs-border-color:             $gray-300;
        $nav-tabs-border-width:             $border-width;
        $nav-tabs-border-radius:            $border-radius;
        $nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color;
        $nav-tabs-link-active-color:        $gray-700;
        $nav-tabs-link-active-bg:           $body-bg;
        $nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg;

        $nav-pills-border-radius:           $border-radius;
        $nav-pills-link-active-color:       $component-active-color;
        $nav-pills-link-active-bg:          $component-active-bg;

        // .lead
        $lead-font-size:            $font-size-base * 1.35;
        $lead-font-weight:          300;
      `
    }
  }
}
</script>
