module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt_app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test app for weathers' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "/js/jquery.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/cookie.js",
        type: "text/javascript"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    components: ['BContainer', 'BRow', 'BCol', 'BFormInput', 'BButton', 'BTable', 'BModal'],
    directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy']
  },
  css: [
    'assets/main.css',
    'assets/bootstrap.min.css'
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      'axios',
      'jquery',
      'bootstrap',
      'vue-moment'
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

