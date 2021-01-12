<template>
  <nav aria-label="Page navigation example">

    <ul class="pagination m-0">
      <li class="page-item" :class="{ disabled: !hasPrevious }"><router-link class="page-link" to="/">
        Previous
      </router-link></li>

      <li class="page-item"><router-link class="page-link" to="/">
        1
      </router-link></li>

      <li class="page-item" :class="{ disabled: !hasNext }"><router-link class="page-link" to="/">
        Next
      </router-link></li>
    </ul>

  </nav>
</template>

<script>
export default {
  name: 'FrameworkPagination',

  data: function() {
    return {
      page: this.options.page || 1
    }
  },

  props: {
    options: {
      type: Object,
      required: true
    }
  },

  computed: {
    hasPrevious() {
      if (!this.page) return false
      if (this.page == 1) return false
      return true
    },

    hasNext() {
      return true
    }
  }
}
</script>

<style lang="scss">

</style>
