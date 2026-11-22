// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    // explícito e antes do nuxt-og-image: sem isso as OG images caem na fonte Inter
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    'nuxt-agent-discovery',
    '@nuxtjs/mcp-toolkit'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://content-directory.quila.dev'
  },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },

  ui: {
    eslint: {
      rules: {
        'no-unknown-classes': 'error',
        'no-conflicting-classes': 'error',
        'no-palette-colors': 'error'
      }
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // o padrão do @nuxt/fonts é 400–700; os títulos usam 800
  fonts: {
    families: [
      { name: 'Archivo', weights: [400, 500, 600, 700, 800] },
      { name: 'DM Mono', weights: [400, 500] }
    ]
  },

  llms: {
    domain: 'https://content-directory.quila.dev',
    title: 'content-directory',
    description: 'Base de conhecimento sobre engenharia web: acessibilidade, performance, sustentabilidade, UX engineering, product discovery, qualidade e DX.',
    full: {
      title: 'content-directory - Conteúdo completo',
      description: 'Conteúdo completo da base de conhecimento sobre engenharia web.'
    },
    sections: [
      {
        title: 'Acessibilidade',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/acessibilidade%' }
        ]
      },
      {
        title: 'Performance',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/performance%' }
        ]
      },
      {
        title: 'Sustentabilidade',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/sustentabilidade%' }
        ]
      },
      {
        title: 'UX Engineering',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/ux-engineering%' }
        ]
      },
      {
        title: 'Product Discovery',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/product-discovery%' }
        ]
      },
      {
        title: 'Qualidade e DX',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/qualidade-e-dx%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'content-directory'
  },

  ogImage: {
    zeroRuntime: true
  },

  prerender: {
    routes: [
      '/'
    ],
    crawlLinks: true
  }
})
