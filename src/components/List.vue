<template>
  <div class="f-list">
    <div class="f-list-top" v-if="isTopVisible">
      <div class="row">
        <div class="col-md-3">
          <f-form-select class="form-select" :data="listOptions.order.options" v-model="userOrderBy" v-if="isOrderVisible" />
        </div>

        <div class="col-md-3">
          <f-form-select class="form-select" :data="listOptions.limit.options" v-model="userLimit" v-if="isLimitVisible" />
        </div>

        <div class="col-md-6 text-end">
          <f-pagination :options="listOptions.page" v-model="userOptions.page" v-if="isPaginationVisible" />
        </div>
      </div>
    </div>

    <div class="f-list-items">
      <div class="f-list-item" v-for="l of items.list">
        <slot v-bind:item="l"></slot>
      </div>
    </div>

    <div class="f-list-empty" v-if="items.list.length === 0">
      List is empty buddy
    </div>

    <div class="f-list-bottom d-flex align-items-center" v-if="isBottomVisible">
      <span class="flex-fill" v-html="getViewingString" v-if="isTotalVisible"></span>
      <f-pagination :options="listOptions.page" v-model="userOptions.page" v-if="isPaginationVisible" />
    </div>

    <div class="f-list-error d-flex align-items-center" v-if="isErrorVisible">
      <div class="d-flex flex-column align-items-center w-100">
        <h5 v-if="error.title" class="m-0">{{ error.title }}</h5>
        <p v-if="error.message" class="m-0">{{ error.message }}</p>
      </div>
    </div>

    <div class="f-list-loading d-flex align-items-center" v-if="isLoadingVisible">
      <div class="text-center w-100">
        <i class="fa-icon gg-spinner-two-alt me-2"></i>
        Loading list data
      </div>
    </div>

  </div>
</template>

<script>
import { FFormSelect, FPagination } from 'fj-vue'

import Axios from '../axios.js'

export default {
  name: "FJList",

  data: function() {
    return {
      initialLoad: false,
      loading: false,
      error: {
        type: null,
        message: null
      },
      userOptions: {
        page: this.page,
        limit: this.limit,
        order_key: this.orderBy,
        order_direction: this.direction
      },
      listOptions: {
        limit: {
          current: null,
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
          options: []
        }
      },
      items: {
        total: null,
        list: []
      }
    }
  },

  props: {
    url: {
      type: String,
      required: true
    },

    limit: {
      type: Number,
      default: null
    },

    page: {
      type: Number,
      default: null
    },

    orderBy: {
      type: String,
      default: null
    },

    direction: {
      type: String,
      default: null
    }
  },

  components: {
    FFormSelect,
    FPagination
  },

  mounted() {
    this.fetch()
  },

  computed: {
    getViewingString() {
      return this.$fj.language.listViewing
        .replaceAll('%limit', `<strong>${this.items.list.length}</strong>`)
        .replaceAll('%total',`<strong>${this.items.total || 0}</strong>`)
    },

    isTopVisible() {
      if (this.isOrderVisible) return true
      if (this.isPaginationVisible) return true
      return false
    },

    isBottomVisible() {
      if (this.isPaginationVisible) return true
      if (this.isTotalVisible) return true
      return false
    },

    isErrorVisible() {
      if (this.error.type || this.error.message) return true
      return false
    },

    isLoadingVisible() {
      if (this.loading) return true
      return false
    },

    isPaginationVisible() {
      if (this.items.list.length === 0) return false
      if (this.listOptions.page.total > 1) return true
      return false
    },

    isOrderVisible() {
      if (this.items.list.length === 0) return false
      if (this.listOptions.order.options) return true
      return false
    },

    isLimitVisible() {
      if (this.items.list.length === 0) return false
      if (this.listOptions.limit.options) return true
      return false
    },

    isTotalVisible() {
      if (this.items.list.length === 0) return false
      return false
    },

    queryParams() {
      const params = new URLSearchParams()

      if (this.userOptions.limit) params.append('limit', this.userOptions.limit)
      if (this.userOptions.page) params.append('page', this.userOptions.page)
      if (this.userOptions.order_key) params.append('order_key', this.userOptions.order_key)

      return params.toString()
    },

    queryUrl() {
      const params = this.queryParams

      if (params) return `${this.url}?${params}`
      return this.url
    },

    userOrderBy: {
      get() {
        return this.listOptions.order.current
      },

      set(val) {
        this.userOptions.order_key = val
      }
    },

    userLimit: {
      get() {
        return this.listOptions.limit.current
      },

      set(val) {
        this.userOptions.limit = val
      }
    }
  },

  methods: {
    async fetch() {
      try {

        if (!this.url) throw new Error('URL prop is missing.')

        this.loading = true
        const response = await Axios.get(this.queryUrl)

        // Got an error
        if (response.status != 200) {
          console.log('Got an error')

        // All good
        } else {

          // Not on page 1 but got an empty list? Go back one page
          if (response.data.items.list.length === 0 && this.listOptions.page.current && this.listOptions.page.current > 1) {
            this.userOptions.page = this.listOptions.page.current - 1

          // Nothing suspicious going on, keep on going
          } else {
            if (response.data.options) this.setOptions(response.data.options)
            if (response.data.items) this.setItems(response.data.items)
          }

          if (!this.initialLoad) this.initialLoad = true

        }

      } catch (error) {

        this.error.message = error.message

      } finally {

        this.loading = false

      }
    },

    setOptions(options) {
      if (!options) return

      if (options.limit && options.limit.current) this.listOptions.limit.current = options.limit.current
      if (options.limit && options.limit.min) this.listOptions.limit.min = options.limit.min
      if (options.limit && options.limit.max) this.listOptions.limit.max = options.limit.max
      if (options.limit && options.limit.options) this.listOptions.limit.options = options.limit.options

      if (options.order && options.order.current)  this.listOptions.order.current = options.order.current
      if (options.order && options.order.direction) this.listOptions.order.direction = options.order.direction
      if (options.order && options.order.options) this.listOptions.order.options = options.order.options

      if (options.page && options.page.current) this.listOptions.page.current = options.page.current
      if (options.page && options.page.total) this.listOptions.page.total = options.page.total
    },

    setItems(items) {
      if (items && items.total) this.items.total = items.total
      else this.items.total = null

      if (items && items.list) this.items.list = items.list
      else this.items.list = null
    }
  },

  watch: {
    userOptions: {
      deep: true,
      handler: function() {
        if (this.initialLoad) {
          this.fetch()
        }
      }
    }
  }
}
</script>

<!--
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
        if (error.response) {
          // client received an error response (5xx, 4xx)
        } else if (error.request) {
          // client never received a response, or request never left
        } else {
          // anything else
        }
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
-->
