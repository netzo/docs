export default defineNuxtConfig({
  modules: ['nuxt-studio'],
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
