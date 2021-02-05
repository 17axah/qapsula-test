export default {
  head: {
    title: 'qapsula',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Qapsula – это уникальный сервис, который позволяет получить онлайн консультацию врача или бесплатно задать вопрос. На портале круглосуточно работают более 900 врачей: гинекологи, дерматологи, ЛОР-врачи, неврологи, терапевты, педиатры, урологи, онкологи и многие другие.' },
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
    {
      src: '@/plugins/drag-scroll',
      mode: 'client',
    },
    '@/plugins/filters',
    '@/plugins/popover',
    '@/plugins/body-scroll-lock',
    '@/plugins/validation',
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
        path: '@/components/forms/',
        prefix: 'form',
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
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    'vue-scrollto/nuxt',
  ],

  mq: {
    defaultBreakpoint: 'sm',
    breakpoints: {
      xs: 576,
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

  pwa: {
    manifest: {
      name: 'Qapsula',
      theme_color: '#2CB2DB',
    },
  },

  polyfill: false,

  build: {
    transpile: [
      'vee-validate',
      'v-tooltip',
      'vue-material-design-ripple',
      'v-mask',
      'vue-i18n',
      'vue-scrollto',
      'vue-dragscroll',
      'v-scroll-lock',
    ],
  },
}
