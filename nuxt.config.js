export default {
  // server side rendering mode
  mode: 'universal',
  target: 'server',

  // Client side rendering mode - remove universal mode
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aspire-exam',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/normalize.css',
    './assets/reset.css',
    './assets/scss/_global.scss',
    './assets/scss/_spacing.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/vuex-saga.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/svg-sprite'
  ],
  svgSprite: {
    // manipulate module options
    input: './assets/sprite/svg/'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
  ],

  /**
   * Style resources module configuration
   */
   styleResources: {
    scss: [
      './assets/scss/_variables.scss'
    ]
  },
  
  // Check router middleware
  router: {
    middleware: ['mobile']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Server middleware
  serverMiddleware: [
    // Will register file from project server-middleware directory to handle /server-middleware/* requires
    { path: '/server', handler: '~/server/middleware.js' },
  ],

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
}
