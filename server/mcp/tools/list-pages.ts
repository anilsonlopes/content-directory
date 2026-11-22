import { queryCollection } from '@nuxt/content/server'

export default defineMcpTool({
  description: `Lista todas as páginas do content-directory, a base de conhecimento de Anilson Lopes (Quila) sobre engenharia web, com título, caminho, descrição e URL.

QUANDO USAR: sempre que a conversa tocar em uma das áreas da base e você ainda não souber o caminho exato da página. Chame antes de responder de memória. Áreas cobertas:
- Acessibilidade: estrutura semântica, navegação por teclado, contraste e cores, formulários.
- Performance: otimização de imagens, JavaScript, caching e CDN, métricas, Progressive Web Apps.
- Sustentabilidade: código eficiente, recursos otimizados, hosting verde, medição.
- UX Engineering: heurísticas de usabilidade, arquitetura da informação, design system, design review, microinterações, handoff, documentação de decisões.
- Product Discovery: design thinking, entrevistas e personas, storyboarding e jornadas, papéis, discovery contínuo.
- Qualidade e DX: pirâmide de testes.

Exemplos de pedidos que devem disparar esta tool: "como deixo esse formulário acessível?", "revisa a performance dessa página", "como conduzir uma entrevista de discovery?", "como documentar essa decisão?".

QUANDO NÃO USAR: se você já tem o caminho exato (por exemplo, "/acessibilidade/formularios"), chame get-page direto.

PRÓXIMO PASSO: escolha as páginas relevantes pelo título e pela descrição e chame get-page com o campo path de cada uma.`,
  cache: '1h',
  handler: async () => {
    const event = useEvent()
    const url = getRequestURL(event)
    const siteUrl = import.meta.dev ? `${url.protocol}//${url.hostname}:${url.port}` : url.origin

    try {
      const pages = await queryCollection(event, 'docs')
        .select('title', 'path', 'description')
        .all()

      const result = pages.map(page => ({
        title: page.title,
        path: page.path,
        description: page.description,
        url: `${siteUrl}${page.path}`
      }))

      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
      }
    } catch {
      return {
        content: [{ type: 'text', text: 'Falha ao listar as páginas' }],
        isError: true
      }
    }
  }
})
