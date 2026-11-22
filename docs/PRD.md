# PRD — Content Directory: base de conhecimento pessoal

| | |
|---|---|
| **Autor** | Anilson Lopes |
| **Status** | Rascunho |
| **Última atualização** | 2026-11-22 |

## 1. Visão

Uma base de conhecimento pessoal sobre engenharia web, publicada como site aberto. Os posts são autorais, apoiados em fontes referenciadas, e ficam disponíveis tanto para pessoas (site com navegação e busca) quanto para assistentes de IA (servidor MCP e `llms.txt`).

## 2. Problema

O conhecimento acumulado no dia a dia de engenharia web fica espalhado em anotações, links e conversas, difícil de reencontrar e de reaproveitar. Falta um lugar único, organizado por tema, onde esse conhecimento seja consolidado em texto próprio e possa ser consultado direto das ferramentas de trabalho, inclusive de dentro de um assistente de IA.

## 3. Objetivos

1. Consolidar o conhecimento em posts autorais, organizados por área da engenharia web.
2. Deixar o conteúdo público e reutilizável, com licenciamento claro.
3. Tornar a base consultável por assistentes de IA via MCP.
4. Manter o custo de escrever baixo: um post é um arquivo Markdown.

## 4. Público

- **O próprio autor**, como referência de consulta e de estudo.
- **Pessoas da área** que chegam pelo site ou por busca.
- **Assistentes de IA** (Claude Code, Cursor, VS Code e outros clientes MCP) que consultam a base durante uma conversa.

## 5. Conteúdo

### 5.1 Áreas

Cada área é um diretório numerado em `content/`:

| Área | Diretório |
|---|---|
| Acessibilidade | `content/1.acessibilidade/` |
| Performance | `content/2.performance/` |
| Sustentabilidade | `content/3.sustentabilidade/` |
| UX Engineering | `content/4.ux-engineering/` |
| Product Discovery | `content/5.product-discovery/` |
| Qualidade e DX | `content/6.qualidade-e-dx/` |

Novas áreas entram como novos diretórios, dentro do contexto de engenharia web.

### 5.2 Princípios editoriais

- **Autoral.** O texto é escrito pelo autor, com as próprias palavras; fontes embasam, não substituem.
- **Fontes referenciadas.** Toda afirmação que vem de uma fonte externa aponta para ela.
- **Licenças respeitadas.** Material de terceiros reproduzido (imagem, figura, trecho longo, código) só entra se a licença da fonte permitir, com a licença indicada junto ao material. Fonte com todos os direitos reservados entra como citação curta com link.

### 5.3 Requisitos de cada post

- Frontmatter com `title` e `description`. São os campos que a navegação, a busca, o SEO e as tools de MCP devolvem.
- Nome de arquivo no formato `N.nome-em-kebab-case.md`, sem espaços nem acentos, espelhando o slug da URL (`1.estrutura-semantica.md` vira `/acessibilidade/estrutura-semantica`). O título exibido vem do frontmatter.
- Seção de referências no final quando houver fontes.

### 5.4 Licenciamento

| O quê | Licença | Arquivo |
|---|---|---|
| Código do site | MIT | `LICENSE-CODE` |
| Textos autorais em `content/` | CC0 1.0 (domínio público) | `LICENSE` |
| Material de terceiros | A da fonte original | Indicada no post |

## 6. Requisitos do produto

### 6.1 Site

- Navegação lateral por área, sumário por página e busca.
- Tema claro e escuro.
- Imagem de Open Graph por página.
- Markdown cru de cada página acessível em `/raw/<caminho>.md`.

### 6.2 Acesso por IA

- **Servidor MCP** em `/mcp` (seção 7).
- **`llms.txt`** e `llms-full.txt` gerados pelo `nuxt-llms`, com seções que espelham as áreas da seção 5.1.

## 7. MCP

### 7.1 Estado atual

O MCP já está ativo. O projeto herdou do template o módulo [`@nuxtjs/mcp-toolkit`](https://nuxt.com/modules/mcp) (v0.24.3), registrado em `modules` no `nuxt.config.ts`, e duas tools:

| Tool | Arquivo | O que faz |
|---|---|---|
| `list-pages` | `server/mcp/tools/list-pages.ts` | Lista título, caminho, descrição e URL de todas as páginas. |
| `get-page` | `server/mcp/tools/get-page.ts` | Devolve o Markdown completo de uma página pelo caminho. |

O servidor responde por HTTP em `/mcp`: `http://localhost:3000/mcp` em desenvolvimento e `https://content-directory.quila.dev/mcp` em produção.

Em um projeto Nuxt sem o módulo, a ativação seria `npx nuxt add mcp` e a criação de tools em `server/mcp/tools/`. Aqui esse passo já está feito.

### 7.2 Como conectar um cliente

Claude Code:

```bash
claude mcp add --transport http content-directory https://content-directory.quila.dev/mcp
```

Cursor (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "content-directory": {
      "type": "http",
      "url": "https://content-directory.quila.dev/mcp"
    }
  }
}
```

VS Code (`.vscode/mcp.json`):

```json
{
  "servers": {
    "content-directory": {
      "type": "http",
      "url": "https://content-directory.quila.dev/mcp"
    }
  }
}
```

### 7.3 O que falta

- **Identidade.** `mcp.name` no `nuxt.config.ts` ainda é `Docs template`.
- **Descrições das tools.** Estão em inglês e citam exemplos do template (`/getting-started/installation`). Reescrever com exemplos das áreas reais, porque é esse texto que o modelo usa para decidir quando chamar a tool.
- **Hospedagem com runtime de servidor.** `/mcp` é uma rota de servidor; um deploy só estático (`nuxt generate`) não a serve. O deploy precisa rodar o servidor Nitro (Node, Vercel, Netlify, Cloudflare ou similar).
- **Página "Usar com IA"** no site, com as instruções da seção 7.2.

### 7.4 Evoluções possíveis

- Tool de busca por palavra-chave, para o modelo não depender de listar todas as páginas.
- Filtro por área em `list-pages`.
- Prompts reutilizáveis em `server/mcp/prompts/` (por exemplo, "revise este componente com base nos posts de acessibilidade").

## 8. Pendências herdadas do template

Itens que ainda carregam a identidade do Nuxt Docs Template:

- Posts sem frontmatter (por exemplo, `content/1.acessibilidade/0.introducao.md`).

## 9. Critérios de sucesso

- Toda área da seção 5.1 tem introdução e ao menos um post com frontmatter completo.
- Um cliente MCP conectado ao site em produção lista as páginas e lê um post.
- Nenhuma referência ao template original aparece no site publicado, exceto o crédito no `LICENSE-CODE` e no README.

## 10. Questões em aberto

- Onde o site será hospedado? (O domínio é `content-directory.quila.dev`.)
