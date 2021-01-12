<template>
  <div class="f-list">

    <div class="f-list-top d-flex align-items-center">
      <div class="f-list-top-sort flex-fill">
        Sort the list
      </div>

      <f-pagination :options="meta" />
    </div>

    <div class="f-list-loading" :class="{ active: loading }">
      <div class="f-list-items">
        <div class="f-list-item" v-for="l of list">
          <slot v-bind:item="l">
            <translate>We've failed in any attempt made to process this list... We suck :(</translate>
          </slot>
        </div>
      </div>
    </div>

    <div class="f-list-bottom d-flex align-items-center">
      <div class="f-list-bottom-info flex-fill">
        Showing
      </div>

      <f-pagination :options="meta" />
    </div>

  </div>
</template>

<script>
import { FPagination } from '../'
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

  components: {
    FPagination
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

<style lang="scss" scoped>
.f-list .f-list-items .f-list-item {
  margin-bottom: 4px;
}

.f-list .f-list-items .f-list-item:last-child {
  margin-bottom: 0;
}

.f-list .f-list-top {
  margin-bottom: 4px;
}

.f-list .f-list-bottom {
  margin-top: 4px;
}

.f-list .f-list-loading {
  position: relative;
  min-height: 50px;
}

.f-list .f-list-loading.active:before {
  content: '';
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
