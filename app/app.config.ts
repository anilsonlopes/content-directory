export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'content-directory'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/anilsonlopes/content-directory',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `content-directory • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/anilsonlopes/content-directory',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  toc: {
    title: 'Nesta página',
    bottom: {
      title: 'Comunidade',
      edit: 'https://github.com/anilsonlopes/content-directory/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Dar estrela no GitHub',
        to: 'https://github.com/anilsonlopes/content-directory',
        target: '_blank'
      }]
    }
  }
})
