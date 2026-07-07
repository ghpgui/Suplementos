# Arquitetura & Design System

> Documento de referência lido em **todas** as fases. Define stack, estrutura de pastas,
> convenções e o design system. A fonte da verdade do **conteúdo** está em `DADOS_FONTE.md`.

## 1. Stack

- **Next.js 14+ (App Router)**, **TypeScript** (strict), **Tailwind CSS**.
- Sem backend/DB: tudo estático e client/server components renderizando dados locais.
- Ícones: `lucide-react`. Animações leves: CSS/Tailwind (evitar libs pesadas).
- Deploy: **Vercel**.

## 2. Estrutura de pastas

```
app/
  layout.tsx              # shell: nav + <main> + rodapé de aviso
  page.tsx                # Home = Painel de Metas (Seção 1)
  cronograma/page.tsx     # Seção 2
  ativos/page.tsx         # Seção 3
  modo-tenis/page.tsx     # Seção 4
  guia-whey/page.tsx      # Seção 5
  globals.css             # tokens (CSS variables) + base
components/
  layout/                 # Nav, Sidebar, TopBar, DisclaimerFooter, PageHeader
  ui/                     # primitivos: Card, Badge, ProgressBar, StatusDot, Callout
  dashboard/              # MetricCard, BloodMarkerCard, MetricsGrid
  cronograma/             # TimelineBlock, SupplementPill, BehaviorTip
  ativos/                 # SupplementCard (expansível), PrescriptionBadge
  tenis/                  # MatchPhaseCard, MatchDayFlow
  whey/                   # WheyComparison (tabela responsiva)
data/
  metrics.ts  bloodMarkers.ts  schedule.ts  supplements.ts  tennis.ts  whey.ts
lib/
  types.ts                # todas as interfaces
  status.ts               # mapa status -> cor/label (helper)
docs/                     # estes .md
```

### Decisão: multi-rota vs. página única
Adotar **multi-rota** (App Router) — mais "app-like" e fácil de manter. A Home é o painel
de metas (consulta mais frequente). No mobile a navegação vira barra inferior (você usa
Galaxy Ultra; o polegar precisa alcançar). Alternativa de página única com âncoras é
válida, mas não é o padrão aqui.

## 3. Convenções

- **Data-driven**: componentes recebem dados via props tipadas; nada de texto do plano
  hardcoded em JSX. Se um número muda, muda-se **só** o arquivo em `/data`.
- Nomes de arquivos de dados e tipos em inglês; **todo texto de UI em PT-BR**.
- Componentes pequenos e reutilizáveis; primitivos em `components/ui`.
- Sem `localStorage`/estado persistente nesta v1 (é um guia de consulta). Se futuramente
  quiser "check-off diário", adicionar via camada de estado à parte.
- Acessibilidade: contraste AA, foco visível, `aria-*` em elementos interativos.

## 4. Design System (Dark Mode)

Tema: charcoal/slate profundo, texto claro, acentos ciano/verde para suplementos.
Definir como **CSS variables** em `globals.css` e mapear no Tailwind via classes utilitárias.

### Tokens de cor (globals.css)
```css
:root {
  --bg:          #0B0F14;  /* fundo base (charcoal) */
  --surface:     #131A22;  /* cartões */
  --surface-2:   #1B242E;  /* cartões elevados / hover */
  --border:      #263140;
  --text:        #E6EDF3;
  --text-muted:  #94A3B8;
  --text-dim:    #64748B;

  --accent:      #22D3EE;  /* ciano — cor de marca / suplementos */
  --accent-2:    #34D399;  /* esmeralda — energia/positivo */

  --success:     #34D399;  /* dentro da meta */
  --warning:     #FBBF24;  /* atenção / otimizar */
  --danger:      #FB7185;  /* crítico (ex.: Vit. D baixa) */
}
```

### Semântica de status (usar em métricas, exames e badges)
| status      | cor         | uso |
|-------------|-------------|-----|
| `good`      | `--success` | dentro da referência/meta (ex.: glicemia 93) |
| `attention` | `--warning` | otimizar (ex.: HDL 44, testosterona no limite) |
| `critical`  | `--danger`  | fora da meta e prioritário (ex.: Vit. D 26,8) |
| `neutral`   | `--text-muted` | informativo (ex.: altura) |

Helper em `lib/status.ts` retornando `{ color, label, ring }` a partir do status.

### Tipografia
- Fonte de texto: **Geist Sans** (padrão do Next) ou Inter.
- Números de métrica/exame: fonte **mono** (Geist Mono/JetBrains Mono) com
  `font-variant-numeric: tabular-nums` — dá o ar de "dashboard" e alinha dígitos.

### Componentes visuais — padrões
- **Card**: `bg-[--surface]`, `border border-[--border]`, `rounded-2xl`, `p-5`,
  sombra sutil; on hover eleva para `--surface-2`.
- **MetricCard**: label + valor atual grande (mono) + meta + **ProgressBar** colorida
  pelo status + nota curta. Uma fina borda/topo na cor do status.
- **StatusDot / Badge**: bolinha ou pílula colorida pelo status.
- **PrescriptionBadge**: pílula âmbar "℞ Prescrição" para itens como o T-Hard.
- **Callout**: bloco destacado para "Mudança Comportamental Crítica" (ciano) e para
  "Alerta" (âmbar/vermelho) — usado em cronograma, ativos e modo tênis.
- Espaçamento generoso, cantos `rounded-2xl`, transições suaves (`transition-colors`).

### Layout responsivo
- Desktop (`md+`): sidebar fixa à esquerda + conteúdo em grid (2–3 colunas nos cards).
- Mobile: header compacto no topo + **barra de navegação inferior** com ícones.
  Cards empilham em 1 coluna. Alvos de toque ≥ 44px.

## 5. Qualidade
- `npm run build` sem erros de tipo (TS strict).
- Lighthouse mobile: sem quebras óbvias de contraste/tap target.
- Cada seção lê seus dados de `/data` — nenhum texto do plano duplicado em JSX.
