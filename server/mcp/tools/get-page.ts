import { z } from 'zod'
import { queryCollection } from '@nuxt/content/server'

export default defineMcpTool({
  description: `Devolve o Markdown completo de uma página do content-directory, a base de conhecimento de Anilson Lopes (Quila) sobre engenharia web, junto com título, descrição e URL.

QUANDO USAR: quando você tem o caminho exato de uma página, vindo de list-pages ou informado pelo usuário. Leia a página antes de recomendar práticas, revisar código ou responder sobre acessibilidade, performance, sustentabilidade, UX engineering, product discovery ou qualidade e DX.

Exemplos de caminho: "/acessibilidade/formularios", "/performance/otimizacao-de-imagens", "/ux-engineering/heuristicas-de-usabilidade".

QUANDO NÃO USAR: se você não sabe o caminho, chame list-pages primeiro. Não invente caminhos.

COMO RESPONDER: baseie a resposta no conteúdo devolvido e cite a página pelo campo url.`,
  inputSchema: {
    path: z.string().describe('Caminho da página, como devolvido por list-pages (por exemplo, /acessibilidade/formularios)')
  },
  cache: '1h',
  handler: async ({ path }) => {
    const event = useEvent()
    const url = getRequestURL(event)
    const siteUrl = import.meta.dev ? `${url.protocol}//${url.hostname}:${url.port}` : url.origin

    try {
      const page = await queryCollection(event, 'docs')
        .where('path', '=', path)
        .select('title', 'path', 'description')
        .first()

      if (!page) {
        return {
          content: [{ type: 'text', text: 'Página não encontrada. Chame list-pages para ver os caminhos válidos.' }],
          isError: true
        }
      }

      const content = await $fetch<string>(`/raw${path}.md`, {
        baseURL: siteUrl
      })

      const result = {
        title: page.title,
        path: page.path,
        description: page.description,
        content,
        url: `${siteUrl}${page.path}`
      }

      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      }
    } catch {
      return {
        content: [{ type: 'text', text: 'Falha ao ler a página' }],
        isError: true
      }
    }
  }
})
