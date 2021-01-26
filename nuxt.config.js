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
    sass: ['@/assets/styles/_variables.sass'],
  },

  css: [
    '@/assets/styles/fonts.sass',
    '@/assets/styles/reset.sass',
    '@/assets/styles/transitions.sass',
    '@/assets/styles/spacing.sass',
    '@/assets/styles/grid.sass',
    '@/assets/styles/helpers.sass',
  ],

  plugins: [
    {
      src: '@/plugins/ripple',
      mode: 'client',
    },
  ],

  components: {
    dirs: [
      {
        path: '@/components/ui/',
        prefix: 'ui',
      },
      {
        path: '@/components/icons/',
        prefix: 'icon',
        global: true,
      },
    ],
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],

  axios: {},

  build: {},
}
