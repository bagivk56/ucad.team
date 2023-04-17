export const locales = [
  {
    code: 'en',
    name: 'EN',
    file: 'en-EN.json',
    iso: 'en-US',
  },
  {
    code: 'ru',
    name: 'RU',
    file: 'ru-RU.json',
    iso: 'ru-RU',
  }
];


export default {
  server: {
    port: 55794,
    host: '0.0.0.0'
  },
  head: {
    title: 'UCAD.TEAM',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/theme/fonts.scss',
    '~/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/vuelidate.js",
    "~/plugins/send-telegram-message.js",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Мультязычность
  i18n: {
    defaultLocale: 'ru',
    langDir: '~/locales/',
    locales,
  },

  // Переменные окружения
  env: {
    telegramBotId: process.env.TELEGRAM_BOT_ID,
    telegramChatId: process.env.TELEGRAM_CHAT_ID,
  }
}
