# Fase 06 — Seção 4: Modo Tênis

## Objetivo
Rota `/modo-tenis`: guia de partida para dias de jogo longos (até 3h), em três fases.

## Arquivos a criar
- `components/tenis/MatchPhaseCard.tsx`
- `components/tenis/MatchDayFlow.tsx`
- Atualizar `app/modo-tenis/page.tsx`

## Especificação
- Ler `@/data/tennis`.
- **MatchDayFlow**: fluxo horizontal (desktop) / vertical (mobile) com as três fases
  `pre → intra → pos`, conectadas por setas/linha.
- **MatchPhaseCard**: título + `timing`; lista de `actions`; `warnings` em `Callout`.
- Destacar a regra de segurança do pré-jogo: **Burst Café OU T-Hard, nunca ambos** — deixar
  isso visualmente claro (ex.: "OU" em pílula + Callout de aviso).
- Cabeçalho da página explicando que é um guia ativável nos dias de jogo.

## Critérios de aceite
- As 3 fases renderizadas a partir dos dados, com o aviso do pré-jogo evidente.
- Responsivo; build sem erro.

## Prompt sugerido
> Execute a **Fase 06** (`fases/fase_06_modo_tenis.md`). Implemente `/modo-tenis` lendo
> `@/data/tennis`, com o fluxo pré/intra/pós e destaque para a regra "Burst Café OU T-Hard".

## Commit
`feat(tenis): guia de dia de jogo (modo tênis)`
