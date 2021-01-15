<template>
  <nav aria-label="Page navigation example" class="d-inline-block" v-if="hasPages">

    <ul class="pagination m-0">
      <li class="page-item" :class="{ disabled: !hasPrevious }">
        <router-link class="page-link" to="" @click.native.prevent="goToPage('-1')">
          {{ this.$fj.language.pagination.previous }}
        </router-link>
      </li>

      <li class="page-item" :class="{ active: options.current == index }" v-for="index of options.total" v-bind:key="index">
        <router-link class="page-link" to="" @click.native.prevent="goToPage(index)">
          {{ index }}
        </router-link>
      </li>

      <li class="page-item" :class="{ disabled: !hasNext }">
        <router-link class="page-link" to="" @click.native.prevent="goToPage('+1')">
          {{ this.$fj.language.pagination.next }}
        </router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
export default {
  name: 'FrameworkPagination',

  props: {
    options: {
      type: Object,
      required: true
    }
  },

  computed: {
    hasPages() {
      if (!this.options.total) return false
      if (this.options.total < 2) return false
      return true
    },

    hasPrevious() {
      if (!this.options.current) return false
      if (this.options.current == 1) return false
      return true
    },

    hasNext() {
      if (this.options.current === this.options.total) return false
      return true
    }
  },

  methods: {
    goToPage(page) {
      if (page === '-1') this.$emit('input', this.options.current - 1)
      else if (page === '+1') this.$emit('input', this.options.current + 1)
      else this.$emit('input', page)
    }
  }
}
</script>
