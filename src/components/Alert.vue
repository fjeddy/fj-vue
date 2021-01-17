<template>
  <div class="alert" :class="getClasses">

    <strong v-if="title">{{ title }}</strong>

    <div class="d-flex align-items-center">
      <span class="me-3" v-if="icon">
        <i class="fa-icon" :class="getIcon" style="transform: scale(1.5)" />
      </span>

      <span>
        <slot>{{ content }}</slot>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FrameworkAlert',

  props: {
    title: {
      type: String
    },

    content: {
      type: String
    },

    type: {
      type: String,
      default: 'info'
    },

    icon: {
      type: String
    }
  },

  computed: {
    getClasses() {
      return `alert-${this.type}`
    },

    getIcon() {
      if (!this.icon) return
      return `fj-${this.icon}`
    }
  }
}
</script>
