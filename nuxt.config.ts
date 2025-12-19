export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', 'nuxt-studio'],
  i18n: {
    // see https://github.com/nuxt-content/studio/issues/92
    defaultLocale: 'es',
    locales: [
      {
        code: 'es',
        name: 'Español',
      },
      {
        code: 'en',
        name: 'English',
      },
    ],
  },
  llms: {
    domain: 'https://docs.netzo.io',
    title: 'Netzo Docs',
    description: 'Netzo documentation',
    full: {
      title: 'Netzo Docs',
      description: 'Netzo documentation',
    },
  },
  studio: {
    dev: false,
    repository: {
      provider: 'github',
      owner: 'netzo',
      repo: 'docs',
      branch: 'main'
    }
  }
})
