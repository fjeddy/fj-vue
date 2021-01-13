<template>
  <div class="f-list">

    <div class="f-list-top d-flex align-items-center">
      <div class="f-list-top-sort">
        <f-form-select :options="options.order" v-model="options.order.current" />
      </div>

      <div class="flex-fill text-end">
        <f-pagination
          :options="options.page"
          v-model="options.page.current" />
      </div>
    </div>

    <div class="f-list-loading" :class="{ active: loading }">
      <div class="f-list-items">
        <div class="f-list-item" v-for="l of items.list">
          <slot v-bind:item="l">
            <translate>We've failed in any attempt made to process this list... We suck :(</translate>
          </slot>
        </div>
      </div>
    </div>

    <div class="f-list-bottom d-flex align-items-center">
      <div class="f-list-bottom-info flex-fill" v-if="items.list && items.total">
        Viewing <strong>{{ items.list.length }}</strong> of <strong>{{ items.total }}</strong> items
      </div>

      <f-pagination
        :options="options.page"
        v-model="options.page.current" />
    </div>

  </div>
</template>

<script>
import { FPagination, FFormSelect } from '../'
import Axios from 'axios'

export default {
  name: 'FrameworkList',

  data: function() {
    return {
      loading: true,
      options: {
        limit: {
          current: this.limit || null,
          min: null,
          max: null,
          options: null
        },
        page: {
          current: null,
          total: null
        },
        order: {
          current: null,
          direction: null,
          options: null
        }
      },
      items: {
        total: null,
        list: null
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
    FPagination,
    FFormSelect
  },

  mounted() {
    const { page } = this.$route.query
    if (page) this.options.page.current = page
    this.fetchData()
  },

  methods: {
    async fetchData() {
      if (!this.url) return
      this.loading = true

      const payload = {}
      if (this.options.limit.current) payload.limit = this.options.limit.current
      if (this.options.page.current) payload.page = this.options.page.current
      if (this.options.order.current) payload.order_key = this.options.order.current

      const { data } = await Axios.get(this.url + '?' + new URLSearchParams(payload).toString())

      this.items.total = data.items.total
      this.items.list = data.items.list

      this.options.limit.current = data.options.limit.current
      this.options.limit.min = data.options.limit.min
      this.options.limit.max = data.options.limit.max
      this.options.limit.options = data.options.limit.options

      this.options.page.current = data.options.page.current
      this.options.page.total = data.options.page.total

      this.options.order.current = data.options.order.current
      this.options.order.direction = data.options.order.direction
      this.options.order.options = data.options.order.options

      this.loading = false
    },

    setUrlParams() {

    }
  },

  watch: {
    'options.page.current': function() {
      this.fetchData()
      this.setUrlParams()
    },

    'options.order.current': function() {
      this.fetchData()
      this.setUrlParams()
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
