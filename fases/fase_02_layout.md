# Fase 02 — Layout Base, Navegação e Rodapé de Aviso

## Objetivo
Construir o shell do app: navegação responsiva, cabeçalho de página e rodapé de aviso.

## Arquivos a criar
- `components/layout/Sidebar.tsx` (desktop) e `components/layout/BottomNav.tsx` (mobile)
- `components/layout/PageHeader.tsx` (título + subtítulo por página)
- `components/layout/DisclaimerFooter.tsx`
- `components/ui/Card.tsx`, `Badge.tsx`, `StatusDot.tsx`, `ProgressBar.tsx`, `Callout.tsx`
- Atualizar `app/layout.tsx` para compor: nav + `<main>` + rodapé.

## Especificação
- **Navegação** (5 itens, com ícones lucide): Metas (`/`), Cronograma (`/cronograma`),
  Ativos (`/ativos`), Modo Tênis (`/modo-tenis`), Guia Whey (`/guia-whey`).
  - `md+`: sidebar fixa à esquerda, item ativo destacado em `--accent`.
  - Mobile: barra inferior fixa com ícones + rótulo curto; alvo de toque ≥ 44px.
- **Primitivos `ui/`** conforme design system: `Card` (surface/border/rounded-2xl),
  `Badge`/`StatusDot` coloridos por status (usar `lib/status.ts`),
  `ProgressBar` (preenchimento colorido por status), `Callout` (variantes `info`/`warning`/`danger`).
- **DisclaimerFooter** (texto PT-BR, discreto): "Ferramenta pessoal de organização. Não
  substitui orientação médica ou nutricional. Itens de prescrição (ex.: T-Hard/tadalafila)
  devem ser usados sob acompanhamento profissional."
- Container central com largura máx. confortável; padding responsivo.

## Critérios de aceite
- Navegar entre as 5 rotas (mesmo com páginas placeholder) funciona em desktop e mobile.
- Item ativo destacado corretamente. Rodapé de aviso visível em todas as páginas.
- Primitivos reutilizáveis prontos para as próximas fases.

## Prompt sugerido
> Execute a **Fase 02** (`fases/fase_02_layout.md`). Crie a navegação responsiva
> (sidebar desktop + bottom nav mobile), os primitivos em `components/ui`, o rodapé de
> aviso e componha `app/layout.tsx`. Use as CSS vars e o `lib/status.ts`. Crie páginas
> placeholder para as 5 rotas.

## Commit
`feat(layout): navegação responsiva, primitivos de UI e rodapé de aviso`
