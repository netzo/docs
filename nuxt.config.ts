export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  llms: {
    domain: 'https://docs.netzo.io',
    title: 'Netzo Docs',
    description: 'Netzo documentation',
    full: {
      title: 'Netzo Docs',
      description: 'Netzo documentation',
    },
  },
  site: {
    name: 'Netzo',
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
