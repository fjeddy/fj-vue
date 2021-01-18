(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash/merge'), require('vue-affix'), require('prism-es6'), require('prism-es6/themes/prism-tomorrow.css'), require('markdown-it'), require('fj-vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash/merge', 'vue-affix', 'prism-es6', 'prism-es6/themes/prism-tomorrow.css', 'markdown-it', 'fj-vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['fj-vue'] = {}, global.merge, global.vueAffix, global.Prism, null, global.MarkdownIt, global.fjVue));
}(this, (function (exports, merge, vueAffix, Prism, prismTomorrow_css, MarkdownIt, fjVue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var merge__default = /*#__PURE__*/_interopDefaultLegacy(merge);
  var Prism__default = /*#__PURE__*/_interopDefaultLegacy(Prism);
  var MarkdownIt__default = /*#__PURE__*/_interopDefaultLegacy(MarkdownIt);

  var _axios = require('axios');

  var axiosRetry = require('axios-retry');

  var axios = _axios.create();

  var retryDelay = function retryDelay() {
    var retryNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var seconds = Math.pow(2, retryNumber) * 1000;
    var randomMs = 1000 * Math.random();
    return seconds + randomMs;
  };

  axiosRetry(axios, {
    retries: 2,
    retryDelay: retryDelay,
    retryCondition: axiosRetry.isRetryableError
  });
  var axios_1 = axios;

  var DayJS = {};

  //
  //
  //
  //
  var script = {
    name: 'FrameworkIcon',
    props: {
      icon: {
        type: String,
        required: false
      }
    },
    computed: {
      getClassName: function getClassName() {
        return "fj-".concat(this.icon);
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('i', {
      staticClass: "fj-icon",
      "class": _vm.getClassName
    });
  };

  var __vue_staticRenderFns__ = [];
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = undefined;
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  //
  var script$1 = {
    name: 'FrameworkLayout',
    components: {
      Affix: vueAffix.Affix
    },
    computed: {
      options: function options() {
        var _this$$route$meta;

        if ((_this$$route$meta = this.$route.meta) !== null && _this$$route$meta !== void 0 && _this$$route$meta.sidebar) {
          return merge__default['default'](this.$fj.options.sidebar, this.$route.meta.sidebar);
        }

        return this.$fj.options.sidebar;
      },
      isHeader: function isHeader() {
        var _this$$route$matched$;

        return (_this$$route$matched$ = this.$route.matched[0]) === null || _this$$route$matched$ === void 0 ? void 0 : _this$$route$matched$.components.header;
      },
      isSidebar: function isSidebar() {
        var _this$$route$matched$2;

        return (_this$$route$matched$2 = this.$route.matched[0]) === null || _this$$route$matched$2 === void 0 ? void 0 : _this$$route$matched$2.components.sidebar;
      }
    }
  };

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row"
    }, [_vm.isSidebar ? _c('div', {
      staticClass: "col-md-3 f-sidebar"
    }, [_c('affix', {
      attrs: {
        "relative-element-selector": ".f-sidebar",
        "offset": {
          top: 40,
          bottom: 15
        }
      }
    }, [_c('router-view', {
      attrs: {
        "name": "sidebar"
      }
    })], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "col-md-9"
    }, [_vm._t("default")], 2)])]);
  };

  var __vue_staticRenderFns__$1 = [];
  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  //
  var script$2 = {
    name: 'FrameworkHeader',
    computed: {
      options: function options() {
        var _this$$route$meta;

        if ((_this$$route$meta = this.$route.meta) !== null && _this$$route$meta !== void 0 && _this$$route$meta.header) {
          return merge__default['default'](this.$fj.options.header, this.$route.meta.header);
        }

        return this.$fj.options.header;
      },
      isHeader: function isHeader() {
        var _this$$route, _this$$route$matched$;

        return (_this$$route = this.$route) === null || _this$$route === void 0 ? void 0 : (_this$$route$matched$ = _this$$route.matched[0]) === null || _this$$route$matched$ === void 0 ? void 0 : _this$$route$matched$.components.header;
      }
    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.isHeader ? _c('div', [_c('div', {
      staticClass: "container"
    }, [_vm._t("default")], 2)]) : _vm._e();
  };

  var __vue_staticRenderFns__$2 = [];
  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

  //
  var script$3 = {
    name: 'FrameworkNavbar',
    computed: {
      options: function options() {
        var _this$$route$meta;

        if ((_this$$route$meta = this.$route.meta) !== null && _this$$route$meta !== void 0 && _this$$route$meta.navbar) {
          return merge__default['default'](this.$fj.options.navbar, this.$route.meta.navbar);
        }

        return this.$fj.options.navbar;
      },
      classes: function classes() {
        if (this.options["class"]) return this.options["class"];
        return false;
      }
    }
  };

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('nav', {
      staticClass: "f-navbar navbar navbar-expand-lg",
      "class": _vm.classes
    }, [_vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$3 = [];
  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

  //
  var script$4 = {
    name: 'FrameworkFooter',
    computed: {
      options: function options() {
        var _this$$route$meta;

        if ((_this$$route$meta = this.$route.meta) !== null && _this$$route$meta !== void 0 && _this$$route$meta.footer) {
          return merge__default['default'](this.$fj.options.footer, this.$route.meta.footer);
        }

        return this.$fj.options.footer;
      },
      classes: function classes() {
        return this.options["class"];
      }
    }
  };

  /* script */
  var __vue_script__$4 = script$4;
  /* template */

  var __vue_render__$4 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "f-footer",
      "class": _vm.classes
    }, [_c('div', {
      staticClass: "container"
    }, [_vm._t("default")], 2)]);
  };

  var __vue_staticRenderFns__$4 = [];
  /* style */

  var __vue_inject_styles__$4 = undefined;
  /* scoped */

  var __vue_scope_id__$4 = undefined;
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$4,
    staticRenderFns: __vue_staticRenderFns__$4
  }, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  var script$5 = {
    name: 'FrameworkLinkLocal',
    props: {
      to: {
        type: String,
        "default": ''
      }
    }
  };

  /* script */
  var __vue_script__$5 = script$5;
  /* template */

  var __vue_render__$5 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('router-link', {
      attrs: {
        "to": _vm.to
      }
    }, [_vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$5 = [];
  /* style */

  var __vue_inject_styles__$5 = undefined;
  /* scoped */

  var __vue_scope_id__$5 = undefined;
  /* module identifier */

  var __vue_module_identifier__$5 = undefined;
  /* functional template */

  var __vue_is_functional_template__$5 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$5,
    staticRenderFns: __vue_staticRenderFns__$5
  }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  var script$6 = {
    name: 'FrameworkLinkRemote',
    props: {
      to: {
        type: String,
        "default": ''
      }
    }
  };

  /* script */
  var __vue_script__$6 = script$6;
  /* template */

  var __vue_render__$6 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      attrs: {
        "href": _vm.to,
        "target": "_blank"
      }
    }, [_c('i', {
      staticClass: "fa-icon fj-globe"
    }), _vm._v(" "), _vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$6 = [];
  /* style */

  var __vue_inject_styles__$6 = undefined;
  /* scoped */

  var __vue_scope_id__$6 = undefined;
  /* module identifier */

  var __vue_module_identifier__$6 = undefined;
  /* functional template */

  var __vue_is_functional_template__$6 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$6,
    staticRenderFns: __vue_staticRenderFns__$6
  }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

  //
  var script$7 = {
    name: 'FrameworkLink',
    props: {
      to: {
        type: String,
        "default": ''
      },
      blank: {
        type: Boolean,
        "default": false
      }
    },
    components: {
      Local: __vue_component__$5,
      Remote: __vue_component__$6
    },
    computed: {
      getType: function getType() {
        if (this.blank) return 'Remote';
        return 'Local';
      }
    }
  };

  /* script */
  var __vue_script__$7 = script$7;
  /* template */

  var __vue_render__$7 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.getType, {
      tag: "component",
      staticClass: "f-link",
      attrs: {
        "to": _vm.to
      }
    }, [_vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$7 = [];
  /* style */

  var __vue_inject_styles__$7 = undefined;
  /* scoped */

  var __vue_scope_id__$7 = undefined;
  /* module identifier */

  var __vue_module_identifier__$7 = undefined;
  /* functional template */

  var __vue_is_functional_template__$7 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$7,
    staticRenderFns: __vue_staticRenderFns__$7
  }, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

  //
  //
  //
  //
  var script$8 = {
    name: 'FrameworkButton',
    props: {
      value: {
        type: String
      }
    }
  };

  /* script */
  var __vue_script__$8 = script$8;
  /* template */

  var __vue_render__$8 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('button', {
      staticClass: "btn",
      attrs: {
        "type": "submit"
      }
    }, [_vm._v(_vm._s(_vm.value))]);
  };

  var __vue_staticRenderFns__$8 = [];
  /* style */

  var __vue_inject_styles__$8 = undefined;
  /* scoped */

  var __vue_scope_id__$8 = undefined;
  /* module identifier */

  var __vue_module_identifier__$8 = undefined;
  /* functional template */

  var __vue_is_functional_template__$8 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$8,
    staticRenderFns: __vue_staticRenderFns__$8
  }, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$9 = {
    name: 'FrameworkPagination',
    props: {
      options: {
        type: Object,
        required: true
      }
    },
    computed: {
      hasPages: function hasPages() {
        if (!this.options.total) return false;
        if (this.options.total < 2) return false;
        return true;
      },
      hasPrevious: function hasPrevious() {
        if (!this.options.current) return false;
        if (this.options.current == 1) return false;
        return true;
      },
      hasNext: function hasNext() {
        if (this.options.current === this.options.total) return false;
        return true;
      }
    },
    methods: {
      goToPage: function goToPage(page) {
        if (page === '-1') this.$emit('input', this.options.current - 1);else if (page === '+1') this.$emit('input', this.options.current + 1);else this.$emit('input', page);
      }
    }
  };

  /* script */
  var __vue_script__$9 = script$9;
  /* template */

  var __vue_render__$9 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.hasPages ? _c('nav', {
      staticClass: "d-inline-block",
      attrs: {
        "aria-label": "Page navigation example"
      }
    }, [_c('ul', {
      staticClass: "pagination m-0"
    }, [_c('li', {
      staticClass: "page-item",
      "class": {
        disabled: !_vm.hasPrevious
      }
    }, [_c('router-link', {
      staticClass: "page-link",
      attrs: {
        "to": ""
      },
      nativeOn: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.goToPage('-1');
        }
      }
    }, [_vm._v("\n        " + _vm._s(this.$fj.language.pagination.previous) + "\n      ")])], 1), _vm._v(" "), _vm._l(_vm.options.total, function (index) {
      return _c('li', {
        key: index,
        staticClass: "page-item",
        "class": {
          active: _vm.options.current == index
        }
      }, [_c('router-link', {
        staticClass: "page-link",
        attrs: {
          "to": ""
        },
        nativeOn: {
          "click": function click($event) {
            $event.preventDefault();
            return _vm.goToPage(index);
          }
        }
      }, [_vm._v("\n        " + _vm._s(index) + "\n      ")])], 1);
    }), _vm._v(" "), _c('li', {
      staticClass: "page-item",
      "class": {
        disabled: !_vm.hasNext
      }
    }, [_c('router-link', {
      staticClass: "page-link",
      attrs: {
        "to": ""
      },
      nativeOn: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.goToPage('+1');
        }
      }
    }, [_vm._v("\n        " + _vm._s(this.$fj.language.pagination.next) + "\n      ")])], 1)], 2)]) : _vm._e();
  };

  var __vue_staticRenderFns__$9 = [];
  /* style */

  var __vue_inject_styles__$9 = undefined;
  /* scoped */

  var __vue_scope_id__$9 = undefined;
  /* module identifier */

  var __vue_module_identifier__$9 = undefined;
  /* functional template */

  var __vue_is_functional_template__$9 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$9,
    staticRenderFns: __vue_staticRenderFns__$9
  }, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function _empty() {}

  var languages = {
    scss: import(
    /* webpackChunkName: "f-code-scss" */
    'prism-es6/components/prism-scss'),
    sass: import(
    /* webpackChunkName: "f-code-sass" */
    'prism-es6/components/prism-sass'),
    java: import(
    /* webpackChunkName: "f-code-java" */
    'prism-es6/components/prism-java'),
    json: import(
    /* webpackChunkName: "f-code-json" */
    'prism-es6/components/prism-json')
  };

  function _awaitIgnored(value, direct) {
    if (!direct) {
      return value && value.then ? value.then(_empty) : Promise.resolve();
    }
  }

  var d_languages = ['markup', 'html', 'xml', 'svh', 'mathml', 'ssml', 'atom', 'rss', 'css', 'clike', 'javascript', 'js'];

  function _invokeIgnored(body) {
    var result = body();

    if (result && result.then) {
      return result.then(_empty);
    }
  }

  var script$a = {
    name: 'FrameworkCode',
    data: function data() {
      return {
        isExpanded: this.expand,
        toSmallForExpansion: false
      };
    },
    props: {
      value: {
        type: String,
        required: false
      },
      language: {
        type: String,
        required: false,
        "default": 'javascript'
      },
      title: {
        type: String,
        required: false
      },
      expand: {
        type: Boolean,
        "default": false
      }
    },
    components: {
      FIcon: __vue_component__
    },
    mounted: function mounted() {
      this.fetchLanguage();
      if (this.value && this.value.split("\n").length <= this.$fj.options.codeBlock.forceExpandOnLine) this.toSmallForExpansion = true;
    },
    computed: {
      languageClass: function languageClass() {
        return "language-".concat(this.language);
      },
      getCodeSnippet: function getCodeSnippet() {
        var lines = this.value.split('\n');

        if (this.isEmpty(lines[0])) {
          lines.splice(0, 1);
        }

        var whitespaces = lines[0].search(/\S/);

        if (whitespaces > 0) {
          var _iterator = _createForOfIteratorHelper(lines.entries()),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  index = _step$value[0],
                  line = _step$value[1];

              lines[index] = this.lctrim(line, whitespaces);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (this.isEmpty(lines[lines.length - 1])) {
          lines.splice(lines.length - 1, 1);
        }

        return lines.join('\n');
      }
    },
    methods: {
      fetchLanguage: function fetchLanguage() {
        try {
          var _this2 = this;

          return _invokeIgnored(function () {
            if (_this2.language) {
              return _invokeIgnored(function () {
                if (d_languages.includes(_this2.language)) {
                  Prism__default['default'].highlightAllUnder(_this2.$refs.codeBlock);
                } else {
                  return _awaitIgnored(languages[_this2.language].then(function () {
                    Prism__default['default'].highlightAllUnder(_this2.$refs.codeBlock);
                  }));
                }
              });
            }
          });
        } catch (e) {
          return Promise.reject(e);
        }
      },
      toggleExpansion: function toggleExpansion() {
        if (this.expand) return;
        if (this.toSmallForExpansion) return;
        this.isExpanded = !this.isExpanded;
      },
      isEmpty: function isEmpty(string) {
        return string.length === 0 || !string.trim();
      },
      lctrim: function lctrim(str, count) {
        var result = [];
        var chars = str.split('');
        var removed = 0;

        var _iterator2 = _createForOfIteratorHelper(chars),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _char = _step2.value;

            if (this.isEmpty(_char) && removed < count) {
              removed++;
              if (removed === count) continue;
            } else {
              result.push(_char);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return result.join('');
      }
    }
  };

  /* script */
  var __vue_script__$a = script$a;
  /* template */

  var __vue_render__$a = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "f-code"
    }, [_c('div', {
      staticClass: "f-code-title"
    }, [_vm.title ? _c('strong', [_vm._v(_vm._s(_vm.title))]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "f-code-content",
      "class": {
        expanded: _vm.isExpanded || _vm.toSmallForExpansion
      },
      on: {
        "click": _vm.toggleExpansion
      }
    }, [_c('div', {
      staticClass: "f-code-tools"
    }, [_c('ul', {
      staticClass: "list-unstyled list-inline"
    }, [_c('li', {
      staticClass: "list-inline-item"
    }, [_c('f-icon', {
      attrs: {
        "icon": "copy"
      }
    }), _vm._v(" Copy")], 1), _vm._v(" "), _c('li', {
      staticClass: "list-inline-item"
    }, [_vm._v("Copying")])])]), _vm._v(" "), _c('pre', {
      ref: "codeBlock",
      "class": _vm.languageClass
    }, [_c('code', [_vm._t("default", [_vm._v(_vm._s(_vm.getCodeSnippet))])], 2)])])]);
  };

  var __vue_staticRenderFns__$a = [];
  /* style */

  var __vue_inject_styles__$a = undefined;
  /* scoped */

  var __vue_scope_id__$a = undefined;
  /* module identifier */

  var __vue_module_identifier__$a = undefined;
  /* functional template */

  var __vue_is_functional_template__$a = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$a = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$a,
    staticRenderFns: __vue_staticRenderFns__$a
  }, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$b = {
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
        "default": 'info'
      },
      icon: {
        type: String
      }
    },
    computed: {
      getClasses: function getClasses() {
        return "alert-".concat(this.type);
      },
      getIcon: function getIcon() {
        if (!this.icon) return;
        return "fj-".concat(this.icon);
      }
    }
  };

  /* script */
  var __vue_script__$b = script$b;
  /* template */

  var __vue_render__$b = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "alert",
      "class": _vm.getClasses
    }, [_vm.title ? _c('strong', [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "d-flex align-items-center"
    }, [_vm.icon ? _c('span', {
      staticClass: "me-3"
    }, [_c('i', {
      staticClass: "fa-icon",
      "class": _vm.getIcon,
      staticStyle: {
        "font-size": "1.5em"
      }
    })]) : _vm._e(), _vm._v(" "), _c('span', [_vm._t("default", [_vm._v(_vm._s(_vm.content))])], 2)])]);
  };

  var __vue_staticRenderFns__$b = [];
  /* style */

  var __vue_inject_styles__$b = undefined;
  /* scoped */

  var __vue_scope_id__$b = undefined;
  /* module identifier */

  var __vue_module_identifier__$b = undefined;
  /* functional template */

  var __vue_is_functional_template__$b = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$b = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$b,
    staticRenderFns: __vue_staticRenderFns__$b
  }, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  var script$c = {
    name: 'FrameworkLoading'
  };

  /* script */
  var __vue_script__$c = script$c;
  /* template */

  var __vue_render__$c = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_vm._v("\n  Link\n")]);
  };

  var __vue_staticRenderFns__$c = [];
  /* style */

  var __vue_inject_styles__$c = undefined;
  /* scoped */

  var __vue_scope_id__$c = undefined;
  /* module identifier */

  var __vue_module_identifier__$c = undefined;
  /* functional template */

  var __vue_is_functional_template__$c = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$c = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$c,
    staticRenderFns: __vue_staticRenderFns__$c
  }, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$d = {
    name: 'FrameworkFormSelect',
    props: {
      data: {
        type: Array,
        required: true
      },
      value: {}
    },
    computed: {
      input: {
        get: function get() {
          return this.value;
        },
        set: function set(val) {
          this.$emit('input', val);
        }
      }
    }
  };

  /* script */
  var __vue_script__$d = script$d;
  /* template */

  var __vue_render__$d = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.input,
        expression: "input"
      }],
      on: {
        "change": function change($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.input = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
        }
      }
    }, [_vm._t("default", _vm._l(_vm.data, function (option) {
      return _vm.data ? _c('option', {
        key: option.value || option,
        domProps: {
          "value": option.value || option
        }
      }, [_vm._v("\n        " + _vm._s(option.title || option.value || option) + "\n    ")]) : _vm._e();
    }))], 2);
  };

  var __vue_staticRenderFns__$d = [];
  /* style */

  var __vue_inject_styles__$d = undefined;
  /* scoped */

  var __vue_scope_id__$d = undefined;
  /* module identifier */

  var __vue_module_identifier__$d = undefined;
  /* functional template */

  var __vue_is_functional_template__$d = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$d = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$d,
    staticRenderFns: __vue_staticRenderFns__$d
  }, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, undefined, undefined);

  var script$e = {
    name: 'FrameworkTab',
    props: {
      title: {
        type: String,
        "default": ''
      },
      icon: {
        type: String,
        "default": ''
      },
      tabData: {
        "default": null
      },

      /***
       * Function to execute before tab switch. Return value must be boolean
       * If the return result is false, tab switch is restricted
       */
      beforeChange: {
        type: Function
      },
      id: String,
      route: {
        type: [String, Object]
      },
      disabled: Boolean,
      transitionName: String,
      transitionMode: String
    },
    computed: {
      isValidParent: function isValidParent() {
        return this.$parent.$options.name === 'vue-tabs';
      },
      hash: function hash() {
        return "#".concat(this.id);
      },
      tabId: function tabId() {
        return this.id ? this.id : this.title;
      }
    },
    data: function data() {
      return {
        active: false,
        validationError: null
      };
    },
    mounted: function mounted() {
      this.$parent.addTab(this);
    },
    destroyed: function destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }

      this.$parent.removeTab(this);
    },
    render: function render() {
      return /*#__PURE__*/React.createElement("div", {
        "class": "tab-container",
        id: "p-".concat(this.tabId),
        "aria-labelledby": "t-".concat(this.tabId),
        role: "tabpanel",
        "v-show": this.active
      }, this.$slots["default"]);
    }
  };

  /* script */
  var __vue_script__$e = script$e;
  /* template */

  /* style */

  var __vue_inject_styles__$e = undefined;
  /* scoped */

  var __vue_scope_id__$e = undefined;
  /* module identifier */

  var __vue_module_identifier__$e = undefined;
  /* functional template */

  var __vue_is_functional_template__$e = undefined;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$e = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);

  var script$f = {
    name: 'FrameworkTabs',
    props: {
      activeTabColor: String,
      activeTextColor: String,
      disabledColor: String,
      disabledTextColor: String,

      /**
       * Tab title position: center | bottom | top
       */
      textPosition: {
        type: String,
        "default": 'center'
      },

      /**
       * Tab type: tabs | pills
       */
      type: {
        type: String,
        "default": 'tabs'
      },
      direction: {
        type: String,
        "default": 'horizontal'
      },

      /**
       * Centers the tabs and makes the container div full width
       */
      centered: Boolean,
      value: [String, Number, Object]
    },
    data: function data() {
      return {
        activeTabIndex: 0,
        tabs: []
      };
    },
    computed: {
      isTabShape: function isTabShape() {
        return this.type === 'tabs';
      },
      isStacked: function isStacked() {
        return this.direction === 'vertical';
      },
      classList: function classList() {
        var navType = this.isTabShape ? 'nav-tabs' : 'nav-pills';
        var centerClass = this.centered ? 'nav-justified' : '';
        var isStacked = this.isStacked ? 'nav-stacked' : '';
        return "nav ".concat(navType, " ").concat(centerClass, " ").concat(isStacked);
      },
      stackedClass: function stackedClass() {
        return this.isStacked ? 'stacked' : '';
      },
      activeTabStyle: function activeTabStyle() {
        return {
          backgroundColor: this.activeTabColor,
          color: this.activeTextColor
        };
      }
    },
    methods: {
      navigateToTab: function navigateToTab(index, route) {
        this.changeTab(this.activeTabIndex, index, route);
      },
      activateTab: function activateTab(index) {
        this.activeTabIndex = index;
        var tab = this.tabs[index];
        tab.active = true;
        this.$emit('input', tab.title);
      },
      changeTab: function changeTab(oldIndex, newIndex, route) {
        var oldTab = this.tabs[oldIndex] || {};
        var newTab = this.tabs[newIndex];
        if (newTab.disabled) return;
        this.activeTabIndex = newIndex;
        oldTab.active = false;
        newTab.active = true;
        this.$emit('input', this.tabs[newIndex].title);
        this.$emit('tab-change', newIndex, newTab, oldTab);
        this.tryChangeRoute(route);
      },
      tryChangeRoute: function tryChangeRoute(route) {
        if (this.$router && route) {
          this.$router.push(route);
        }
      },
      addTab: function addTab(item) {
        var index = this.$slots["default"].indexOf(item.$vnode);
        this.tabs.splice(index, 0, item);
      },
      removeTab: function removeTab(item) {
        var tabs = this.tabs;
        var index = tabs.indexOf(item);

        if (index > -1) {
          tabs.splice(index, 1);
        }
      },
      getTabs: function getTabs() {
        if (this.$slots["default"]) {
          return this.$slots["default"].filter(function (comp) {
            return comp.componentOptions;
          });
        }

        return [];
      },
      findTabAndActivate: function findTabAndActivate(tabNameOrIndex) {
        var indexToActivate = this.tabs.findIndex(function (tab, index) {
          return tab.title === tabNameOrIndex || index === tabNameOrIndex;
        }); // if somehow activeTabIndex is not reflected in the actual vue-tab instance, set it.

        if (indexToActivate === this.activeTabIndex && !this.tabs[this.activeTabIndex].active) {
          this.tabs[this.activeTabIndex].active = true;
        }

        if (indexToActivate !== -1) {
          this.changeTab(this.activeTabIndex, indexToActivate);
        } else {
          this.changeTab(this.activeTabIndex, 0);
        }
      },
      renderTabTitle: function renderTabTitle(index) {
        var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
        if (this.tabs.length === 0) return;
        var tab = this.tabs[index];
        var active = tab.active,
            title = tab.title;
        var titleStyles = {
          color: this.activeTabColor
        };
        if (position === 'center') titleStyles.color = this.activeTextColor;
        var simpleTitle = /*#__PURE__*/React.createElement("span", {
          "class": "title title_".concat(position),
          style: active ? titleStyles : {}
        }, position === 'center' && this.renderIcon(index), title);
        if (tab.$slots.title) return tab.$slots.title;
        if (tab.$scopedSlots.title) return tab.$scopedSlots.title({
          active: active,
          title: title,
          position: position,
          icon: tab.icon,
          data: tab.tabData
        });
        return simpleTitle;
      },
      renderIcon: function renderIcon(index) {
        if (this.tabs.length === 0) return;
        var tab = this.tabs[index];
        var icon = tab.icon;
        var simpleIcon = /*#__PURE__*/React.createElement("i", {
          "class": icon
        }, "\xA0");
        if (!tab.$slots.title && icon) return simpleIcon;
      },
      tabStyles: function tabStyles(tab) {
        if (tab.disabled) {
          return {
            backgroundColor: this.disabledColor,
            color: this.disabledTextColor
          };
        }

        return {};
      },
      renderTabs: function renderTabs() {
        var _this = this;

        return this.tabs.map(function (tab, index) {
          if (!tab) return;
          var route = tab.route,
              id = tab.id,
              title = tab.title,
              icon = tab.icon,
              tabId = tab.tabId;
          var active = _this.activeTabIndex === index;
          return /*#__PURE__*/React.createElement("li", {
            name: "tab",
            onClick: function onClick() {
              return !tab.disabled && _this.navigateToTab(index, route);
            },
            "class": ['tab', {
              active: active
            }, {
              disabled: tab.disabled
            }],
            key: title,
            id: "t-".concat(tabId),
            "aria-selected": active,
            "aria-controls": "p-".concat(tabId),
            role: "tab"
          }, _this.textPosition === 'top' && _this.renderTabTitle(index, _this.textPosition), /*#__PURE__*/React.createElement("a", {
            href: "#",
            onClick: function onClick(e) {
              e.preventDefault();
              return false;
            },
            style: active ? _this.activeTabStyle : _this.tabStyles(tab),
            "class": [{
              'active': active
            }, 'nav-link'],
            role: "tab"
          }, _this.textPosition !== 'center' && !tab.$slots.title && _this.renderIcon(index), _this.textPosition === 'center' && _this.renderTabTitle(index, _this.textPosition)), _this.textPosition === 'bottom' && _this.renderTabTitle(index, _this.textPosition));
        });
      }
    },
    render: function render() {
      var tabList = this.renderTabs();
      return /*#__PURE__*/React.createElement("div", {
        "class": ['f-tabs', this.stackedClass]
      }, /*#__PURE__*/React.createElement("div", {
        "class": [{
          'nav-tabs-navigation': !this.isStacked
        }, {
          'left-vertical-tabs': this.isStacked
        }]
      }, /*#__PURE__*/React.createElement("div", {
        "class": ['nav-tabs-wrapper', this.stackedClass]
      }, /*#__PURE__*/React.createElement("ul", {
        "class": this.classList,
        role: "tablist"
      }, tabList))), /*#__PURE__*/React.createElement("div", {
        "class": ['tab-content', {
          'right-text-tabs': this.isStacked
        }]
      }, this.$slots["default"]));
    },
    watch: {
      tabs: function tabs(newList) {
        if (newList.length > 0 && !this.value) {
          if (newList.length <= this.activeTabIndex) {
            this.activateTab(this.activeTabIndex - 1);
          } else {
            this.activateTab(this.activeTabIndex);
          }
        }

        if (newList.length > 0 && this.value) {
          this.findTabAndActivate(this.value);
        }
      },
      value: function value(newVal) {
        this.findTabAndActivate(newVal);
      }
    }
  };

  /* script */
  var __vue_script__$f = script$f;
  /* template */

  /* style */

  var __vue_inject_styles__$f = undefined;
  /* scoped */

  var __vue_scope_id__$f = undefined;
  /* module identifier */

  var __vue_module_identifier__$f = undefined;
  /* functional template */

  var __vue_is_functional_template__$f = undefined;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$f = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);

  var script$g = {
    name: 'FrameworkMarkdown',
    template: '<div><slot></slot></div>',
    data: function data() {
      return {
        sourceData: this.source
      };
    },
    props: {
      watches: {
        type: Array,
        "default": function _default() {
          return ['source', 'show', 'toc'];
        }
      },
      source: {
        type: String,
        "default": ''
      },
      show: {
        type: Boolean,
        "default": true
      },
      html: {
        type: Boolean,
        "default": true
      },
      xhtmlOut: {
        type: Boolean,
        "default": true
      },
      breaks: {
        type: Boolean,
        "default": true
      },
      linkify: {
        type: Boolean,
        "default": true
      },
      typographer: {
        type: Boolean,
        "default": true
      },
      langPrefix: {
        type: String,
        "default": 'language-'
      },
      quotes: {
        type: String,
        "default": '“”‘’'
      },
      prerender: {
        type: Function,
        "default": function _default(sourceData) {
          return sourceData;
        }
      },
      postrender: {
        type: Function,
        "default": function _default(htmlData) {
          return htmlData;
        }
      }
    },
    md: new MarkdownIt__default['default'](),
    render: function render(createElement) {
      this.md = new MarkdownIt__default['default']();
      this.md.set({
        html: this.html,
        xhtmlOut: this.xhtmlOut,
        breaks: this.breaks,
        linkify: this.linkify,
        typographer: this.typographer,
        langPrefix: this.langPrefix,
        quotes: this.quotes
      });
      var outHtml = this.show ? this.md.render(this.prerender(this.sourceData)) : '';
      outHtml = this.postrender(outHtml);
      return createElement('div', {
        domProps: {
          innerHTML: outHtml
        }
      });
    },
    beforeMount: function beforeMount() {
      var _this = this;

      if (this.$slots["default"]) {
        this.sourceData = '';

        var _iterator = _createForOfIteratorHelper(this.$slots["default"]),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var slot = _step.value;
            this.sourceData += slot.text;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.$watch('source', function () {
        _this.sourceData = _this.prerender(_this.source);

        _this.$forceUpdate();
      });
      this.watches.forEach(function (v) {
        _this.$watch(v, function () {
          _this.$forceUpdate();
        });
      });
    }
  };

  /* script */
  var __vue_script__$g = script$g;
  /* template */

  /* style */

  var __vue_inject_styles__$g = undefined;
  /* scoped */

  var __vue_scope_id__$g = undefined;
  /* module identifier */

  var __vue_module_identifier__$g = undefined;
  /* functional template */

  var __vue_is_functional_template__$g = undefined;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$g = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, undefined, undefined);

  //

  function _await(value, then, direct) {
    if (direct) {
      return then ? then(value) : value;
    }

    if (!value || !value.then) {
      value = Promise.resolve(value);
    }

    return then ? value.then(then) : value;
  }

  function _catch(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }

    if (result && result.then) {
      return result.then(void 0, recover);
    }

    return result;
  }

  function _rethrow(thrown, value) {
    if (thrown) throw value;
    return value;
  }

  function _finallyRethrows(body, finalizer) {
    try {
      var result = body();
    } catch (e) {
      return finalizer(true, e);
    }

    if (result && result.then) {
      return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
    }

    return finalizer(false, result);
  }

  var script$h = {
    name: "FJList",
    data: function data() {
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
      };
    },
    props: {
      url: {
        type: String,
        required: true
      },
      limit: {
        type: Number,
        "default": null
      },
      page: {
        type: Number,
        "default": null
      },
      orderBy: {
        type: String,
        "default": null
      },
      direction: {
        type: String,
        "default": null
      }
    },
    components: {
      FFormSelect: fjVue.FFormSelect,
      FPagination: fjVue.FPagination
    },
    mounted: function mounted() {
      this.fetch();
    },
    computed: {
      getViewingString: function getViewingString() {
        return this.$fj.language.listViewing.replaceAll('%limit', "<strong>".concat(this.items.list.length, "</strong>")).replaceAll('%total', "<strong>".concat(this.items.total || 0, "</strong>"));
      },
      isTopVisible: function isTopVisible() {
        if (this.isOrderVisible) return true;
        if (this.isPaginationVisible) return true;
        return false;
      },
      isBottomVisible: function isBottomVisible() {
        if (this.isPaginationVisible) return true;
        if (this.isTotalVisible) return true;
        return false;
      },
      isErrorVisible: function isErrorVisible() {
        if (this.error.type || this.error.message) return true;
        return false;
      },
      isLoadingVisible: function isLoadingVisible() {
        if (this.loading) return true;
        return false;
      },
      isPaginationVisible: function isPaginationVisible() {
        if (this.items.list.length === 0) return false;
        if (this.listOptions.page.total > 1) return true;
        return false;
      },
      isOrderVisible: function isOrderVisible() {
        if (this.items.list.length === 0) return false;
        if (this.listOptions.order.options) return true;
        return false;
      },
      isLimitVisible: function isLimitVisible() {
        if (this.items.list.length === 0) return false;
        if (this.listOptions.limit.options) return true;
        return false;
      },
      isTotalVisible: function isTotalVisible() {
        if (this.items.list.length === 0) return false;
        return false;
      },
      queryParams: function queryParams() {
        var params = new URLSearchParams();
        if (this.userOptions.limit) params.append('limit', this.userOptions.limit);
        if (this.userOptions.page) params.append('page', this.userOptions.page);
        if (this.userOptions.order_key) params.append('order_key', this.userOptions.order_key);
        return params.toString();
      },
      queryUrl: function queryUrl() {
        var params = this.queryParams;
        if (params) return "".concat(this.url, "?").concat(params);
        return this.url;
      },
      userOrderBy: {
        get: function get() {
          return this.listOptions.order.current;
        },
        set: function set(val) {
          this.userOptions.order_key = val;
        }
      },
      userLimit: {
        get: function get() {
          return this.listOptions.limit.current;
        },
        set: function set(val) {
          this.userOptions.limit = val;
        }
      }
    },
    methods: {
      fetch: function fetch() {
        try {
          var _this2 = this;

          return _finallyRethrows(function () {
            return _catch(function () {
              if (!_this2.url) throw new Error('URL prop is missing.');
              _this2.loading = true;
              return _await(axios_1.get(_this2.queryUrl), function (response) {
                if (response.status != 200) {
                  console.log('Got an error'); // All good
                } else {
                  // Not on page 1 but got an empty list? Go back one page
                  if (response.data.items.list.length === 0 && _this2.listOptions.page.current && _this2.listOptions.page.current > 1) {
                    _this2.userOptions.page = _this2.listOptions.page.current - 1; // Nothing suspicious going on, keep on going
                  } else {
                    if (response.data.options) _this2.setOptions(response.data.options);
                    if (response.data.items) _this2.setItems(response.data.items);
                  }

                  if (!_this2.initialLoad) _this2.initialLoad = true;
                }
              }); // Got an error
            }, function (error) {
              _this2.error.message = error.message;
            });
          }, function (_wasThrown, _result) {
            _this2.loading = false;
            return _rethrow(_wasThrown, _result);
          });
        } catch (e) {
          return Promise.reject(e);
        }
      },
      setOptions: function setOptions(options) {
        if (!options) return;
        if (options.limit && options.limit.current) this.listOptions.limit.current = options.limit.current;
        if (options.limit && options.limit.min) this.listOptions.limit.min = options.limit.min;
        if (options.limit && options.limit.max) this.listOptions.limit.max = options.limit.max;
        if (options.limit && options.limit.options) this.listOptions.limit.options = options.limit.options;
        if (options.order && options.order.current) this.listOptions.order.current = options.order.current;
        if (options.order && options.order.direction) this.listOptions.order.direction = options.order.direction;
        if (options.order && options.order.options) this.listOptions.order.options = options.order.options;
        if (options.page && options.page.current) this.listOptions.page.current = options.page.current;
        if (options.page && options.page.total) this.listOptions.page.total = options.page.total;
      },
      setItems: function setItems(items) {
        if (items && items.total) this.items.total = items.total;else this.items.total = null;
        if (items && items.list) this.items.list = items.list;else this.items.list = null;
      }
    },
    watch: {
      userOptions: {
        deep: true,
        handler: function handler() {
          if (this.initialLoad) {
            this.fetch();
          }
        }
      }
    }
  };

  /* script */
  var __vue_script__$h = script$h;
  /* template */

  var __vue_render__$e = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "f-list"
    }, [_vm.isTopVisible ? _c('div', {
      staticClass: "f-list-top"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-3"
    }, [_vm.isOrderVisible ? _c('f-form-select', {
      staticClass: "form-select",
      attrs: {
        "data": _vm.listOptions.order.options
      },
      model: {
        value: _vm.userOrderBy,
        callback: function callback($$v) {
          _vm.userOrderBy = $$v;
        },
        expression: "userOrderBy"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "col-md-3"
    }, [_vm.isLimitVisible ? _c('f-form-select', {
      staticClass: "form-select",
      attrs: {
        "data": _vm.listOptions.limit.options
      },
      model: {
        value: _vm.userLimit,
        callback: function callback($$v) {
          _vm.userLimit = $$v;
        },
        expression: "userLimit"
      }
    }) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "col-md-6 text-end"
    }, [_vm.isPaginationVisible ? _c('f-pagination', {
      attrs: {
        "options": _vm.listOptions.page
      },
      model: {
        value: _vm.userOptions.page,
        callback: function callback($$v) {
          _vm.$set(_vm.userOptions, "page", $$v);
        },
        expression: "userOptions.page"
      }
    }) : _vm._e()], 1)])]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "f-list-items"
    }, _vm._l(_vm.items.list, function (l) {
      return _c('div', {
        staticClass: "f-list-item"
      }, [_vm._t("default", null, {
        "item": l
      })], 2);
    }), 0), _vm._v(" "), _vm.items.list.length === 0 ? _c('div', {
      staticClass: "f-list-empty"
    }, [_vm._v("\n    List is empty buddy\n  ")]) : _vm._e(), _vm._v(" "), _vm.isBottomVisible ? _c('div', {
      staticClass: "f-list-bottom d-flex align-items-center"
    }, [_vm.isTotalVisible ? _c('span', {
      staticClass: "flex-fill",
      domProps: {
        "innerHTML": _vm._s(_vm.getViewingString)
      }
    }) : _vm._e(), _vm._v(" "), _vm.isPaginationVisible ? _c('f-pagination', {
      attrs: {
        "options": _vm.listOptions.page
      },
      model: {
        value: _vm.userOptions.page,
        callback: function callback($$v) {
          _vm.$set(_vm.userOptions, "page", $$v);
        },
        expression: "userOptions.page"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.isErrorVisible ? _c('div', {
      staticClass: "f-list-error d-flex align-items-center"
    }, [_c('div', {
      staticClass: "d-flex flex-column align-items-center w-100"
    }, [_vm.error.title ? _c('h5', {
      staticClass: "m-0"
    }, [_vm._v(_vm._s(_vm.error.title))]) : _vm._e(), _vm._v(" "), _vm.error.message ? _c('p', {
      staticClass: "m-0"
    }, [_vm._v(_vm._s(_vm.error.message))]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.isLoadingVisible ? _c('div', {
      staticClass: "f-list-loading d-flex align-items-center"
    }, [_vm._m(0)]) : _vm._e()]);
  };

  var __vue_staticRenderFns__$e = [function () {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "text-center w-100"
    }, [_c('i', {
      staticClass: "fa-icon gg-spinner-two-alt me-2"
    }), _vm._v("\n      Loading list data\n    ")]);
  }];
  /* style */

  var __vue_inject_styles__$h = undefined;
  /* scoped */

  var __vue_scope_id__$h = undefined;
  /* module identifier */

  var __vue_module_identifier__$h = undefined;
  /* functional template */

  var __vue_is_functional_template__$h = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$h = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$e,
    staticRenderFns: __vue_staticRenderFns__$e
  }, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, undefined, undefined);

  var index = {
    install: function install(Vue, app_options) {
      // Set options
      var def_options = {
        options: {
          navbar: {},
          header: {},
          sidebar: {
            follow: true
          },
          footer: {
            "class": 'py-5'
          },
          codeBlock: {
            forceExpandOnLine: 12
          }
        },
        language: {
          apiError: "Got an error while loading data from the API :(",
          apiFailed: "We've failed in any attempt made to process this list... We suck :(",
          listViewing: "Viewing %limit of %total items",
          pagination: {
            previous: "Previous",
            next: "Next"
          }
        }
      };
      var options = merge__default['default'](def_options, app_options);
      Vue.prototype.$fj = options;
      Vue.prototype.$axios = axios_1;
      Vue.prototype.$dayjs = DayJS;
    }
  };

  exports.FAlert = __vue_component__$b;
  exports.FButton = __vue_component__$8;
  exports.FCode = __vue_component__$a;
  exports.FContent = __vue_component__$1;
  exports.FFooter = __vue_component__$4;
  exports.FFormSelect = __vue_component__$d;
  exports.FHeader = __vue_component__$2;
  exports.FIcon = __vue_component__;
  exports.FLink = __vue_component__$7;
  exports.FList = __vue_component__$h;
  exports.FLoading = __vue_component__$c;
  exports.FMarkdown = __vue_component__$g;
  exports.FNavbar = __vue_component__$3;
  exports.FPagination = __vue_component__$9;
  exports.FTab = __vue_component__$e;
  exports.FTabs = __vue_component__$f;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
