<template>
  <div class="f-list">

    <div class="f-list-item" v-for="l of list">
      <slot v-bind:item="l">
        <translate>We've failed in any attempt made to process this list... We suck :(</translate>
      </slot>
    </div>

    {{ list.length }}
    {{ meta.page }}
    {{ limit }}
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'FrameworkList',

  data: function() {
    return {
      loading: true,
      list: [],
      meta: {
        limit: 0,
        page: 0,
        total: 0
      }
    }
  },

  props: {
    url: {
      type: String,
      require: true
    },

    limit: {
      type: Number,
      default: 15
    }
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      if (!this.url) return
      this.loading = true

      const payload = {}
      if (this.limit) payload.limit = this.limit
      
      const data = await Axios.get(this.url + '?' + new URLSearchParams(payload).toString())

      this.list = data.data.players
      this.meta.limit = data.data.limit
      this.meta.page = data.data.page
      this.meta.total = data.data.total

      this.loading = false
    }
  }
}
</script>

<style lang="scss">

</style>
