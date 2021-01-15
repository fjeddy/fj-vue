<template>
  <div class="f-list">

    <div class="f-list-top d-flex align-items-center">
      <div class="f-list-top-sort" v-if="options.order.current">
        <f-form-select :options="options.order" v-model="options.order.current" />
      </div>

      <div class="flex-fill text-end">
        <f-pagination
          :options="options.page"
          v-model="options.page.current" />
      </div>
    </div>

    <div class="f-list-loading" :class="{ active: loading }">
      <div class="f-list-loader" v-if="loading">
        <i class="fa-icon gg-spinner-two-alt"></i> Loading
      </div>

      <div class="f-list-error text-center p-5" v-if="error">
        <p class="lead">{{ this.$fj.language.apiError }}</p>
        <small>{{ error }}</small>
      </div>

      <div class="f-list-items" v-if="items.list && items.list.length">
        <div class="f-list-item" v-for="l of items.list">
          <slot v-bind:item="l">

          </slot>
        </div>
      </div>
    </div>

    <div class="f-list-bottom d-flex align-items-center">
      <div class="f-list-bottom-info flex-fill ps-1" v-html="stringViewing" v-if="items.list && items.total">
      </div>

      <f-pagination
        :options="options.page"
        v-model="options.page.current" />
    </div>

  </div>
</template>

<script>
import { FPagination, FFormSelect } from '../'
import Axios from '../axios.js'
import axiosRetry from 'axios-retry'

export default {
  name: 'FrameworkList',

  data: function() {
    return {
      loading: false,
      error: null,
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

  computed: {
    stringViewing() {
      return this.$fj.language.listViewing
        .replaceAll('%limit', `<strong>${this.items.list.length}</strong>`)
        .replaceAll('%total',`<strong>${this.items.total}</strong>`)
    }
  },

  methods: {
    async fetchData() {
      if (!this.url) return
      if (this.loading) return

      this.loading = true

      try {
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
      } catch (error) {
      console.log('hello')
        if (error.response) {
          // client received an error response (5xx, 4xx)
          console.log('got response')
        } else if (error.request) {
          // client never received a response, or request never left
          console.log(error.request)
          console.log('client never got a response')
        } else {
          // anything else
          console.log('Something else happend')
        }
        console.log('hello')
        this.error = error
      } finally {
        this.loading = false
      }
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

.f-list .f-list-error {
  background-color: #dc3545;
  color: #fff;
  border-radius: 3px;
}

.f-list .f-list-loading {
  position: relative;
  min-height: 50px;
}

.f-list .f-list-loading .f-list-loader {
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  color: #fff;
  border-radius: 3px;
}
</style>
