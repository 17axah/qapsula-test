export default {
  head: {
    title: 'qapsula',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  styleResources: {
    sass: [
      '@/assets/styles/_variables.sass',
      '@/assets/styles/_mixins.sass',
    ],
  },

  css: [
    '@/assets/styles/fonts.sass',
    '@/assets/styles/reset.sass',
    '@/assets/styles/popover.sass',
    '@/assets/styles/transitions.sass',
    '@/assets/styles/grid.sass',
    '@/assets/styles/helpers.sass',
  ],

  plugins: [
    {
      src: '@/plugins/ripple',
      mode: 'client',
    },
    '@/plugins/popover',
    '@/plugins/body-scroll-lock',
  ],

  components: {
    dirs: [
      {
        path: '@/components/ui/',
        prefix: 'ui',
      },
      {
        path: '@/components/transitions/',
        prefix: 'transition',
      },
      {
        path: '@/components/icons/',
        prefix: 'icon',
        global: true,
      },
      {
        path: '@/components/app/',
        prefix: 'app',
      },
    ],
  },

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-mq',
    'nuxt-i18n',
  ],

  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      sm: 768,
      md: 1024,
      lg: 1200,
    },
  },

  i18n: {
    lazy: true,
    defaultLocale: 'ru',
    langDir: 'lang/',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.js',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        name: 'Русский',
        file: 'ru-RU.js',
      },
    ],
  },

  axios: {},

  build: {},
}
