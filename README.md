# fj-vue
fj-vue is a simple API-driven collection of components and directives for VueJS. It relies heavily on a JSON API serving data in a specific format, and by doing so, fj-vue will in return format, handle and show the correct GUI elements.

If you don't control the API, aka, make the API, then fj-vue is likely of no use to you. As it is intended to simplify the work of making a frontend website when it's the same person that is making the backend API. fj-vue depends on a specific output from the API.

This is a personal project, made to simplify my life. Feel free to use it, if you can, and want too.

## Documentation & demo
All the documentation can be found at [fj-vue.fjeddy.com](https://fj-vue.fjeddy.com/). The demo is written and made solely using fj-vue. The same docs can be found in the `docs/` folder in this repo.

## Included dependencies
fj-vue depends on certain other modules to simplify the integration process.

* [Bootstrap v5 (Certain submodules, css only)](https://github.com/twbs/bootstrap)
* [axios](https://github.com/axios/axios)
* [axios-retry](https://github.com/softonic/axios-retry)
* [vue-affix](https://github.com/eddiemf/vue-affix)
* [prism-es6](https://github.com/elisiondesign/prism-es6)

Most components are lazyloaded, so no module will actually be included if you
don't use a module in fj-vue that use one of the dependencies.

## License
MIT
