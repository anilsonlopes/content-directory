export default defineAppConfig({
  ui: {
    colors: {
      primary: 'quila',
      neutral: 'ink'
    },
    pageHero: {
      slots: {
        headline: 'flex items-center font-mono text-xs font-medium uppercase tracking-widest text-primary',
        title: 'font-extrabold tracking-tighter'
      }
    },
    pageSection: {
      slots: {
        title: 'font-extrabold tracking-tighter'
      }
    },
    pageCTA: {
      slots: {
        title: 'font-extrabold tracking-tighter'
      }
    },
    pageFeature: {
      slots: {
        title: 'font-bold'
      }
    },
    pageHeader: {
      slots: {
        headline: 'font-mono text-xs font-medium uppercase tracking-widest',
        title: 'font-extrabold tracking-tight'
      }
    },
    pageLinks: {
      slots: {
        title: 'font-mono text-xs font-medium uppercase tracking-widest'
      }
    },
    contentToc: {
      slots: {
        title: 'font-mono text-xs font-medium uppercase tracking-widest'
      }
    },
    prose: {
      h1: {
        slots: {
          base: 'font-extrabold tracking-tight'
        }
      },
      h2: {
        slots: {
          base: 'font-extrabold tracking-tight'
        }
      },
      h3: {
        slots: {
          base: 'tracking-tight'
        }
      }
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'font-mono text-xs uppercase tracking-wider text-muted'
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
