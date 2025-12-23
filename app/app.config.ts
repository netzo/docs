export default defineAppConfig({
  header: {
    title: 'Netzo', // title to display if no logo
    logo: {
      alt: 'Netzo',
      light: '/netzo-logo-light.svg',
      dark: '/netzo-logo-dark.svg'
    },
  },
  docus: {
    // DISABLED: since it causes "Cannot find module '/app/server/i18n/locales/es.js" error
    // locale: 'es', // localizes nuxt UI components
  },
  github: {
    url: 'https://github.com/netzo/docs',
    branch: 'main',
  },
  seo: {
    // titleTemplate: '', // default `%s - ${site.name}`
    title: 'Netzo', // default `package.json name`
    description: 'Netzo documentation' // default `package.json description`
  },
  socials: {
    x: 'https://x.com/netzoio',
    instagram: 'https://www.instagram.com/netzoio',
  },
  ui: {
    colors: {
      primary: 'blue',
      secondary: 'sky',
      neutral: 'neutral'
    }
  }
})
