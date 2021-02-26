import type { NuxtConfig } from '@nuxt/types'

require('dotenv').config()

const primaryColor = '#5d4ea2'

// @ts-ignore
const config: NuxtConfig = {
  /*
   ** Headers of the page
   */
  head: {
    title: '',
    titleTemplate: (titleChunk: any) => {
      return titleChunk ? `${titleChunk} - title goes here` : 'title goes here'
    },
    meta: [
      {
        name: 'robots',
        content: process.env.APP_ENV === 'prod' ? 'INDEX, FOLLOW' : 'noindex'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: { 'data-toggle': 'affix', id: 'app-body' }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: primaryColor },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/style.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/truncate.ts',
    '~plugins/global-components.ts',
    { src: '~/plugins/sw.js', mode: 'client' }
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['@nuxt']
  },

  /*
   ** env
   */
  env: {
    baseUrl: process.env.BASE_URL ? process.env.BASE_URL : ''
  },

  /*
   ** Define the dist directory for your Nuxt.js application
   */
  buildDir: 'dist',

  /* See on mobile */
  server: {
    host: '0' // default: localhost
  },

  /*
   ** Transition for page the
   */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  ssr: false,
  generate: {
    routes: ['/']
  }
}

export default config
