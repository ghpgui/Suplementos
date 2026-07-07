# Fase 04 — Seção 2: Cronograma Diário

## Objetivo
Rota `/cronograma` com a linha do tempo vertical dos blocos do dia.

## Arquivos a criar
- `components/cronograma/TimelineBlock.tsx`
- `components/cronograma/SupplementPill.tsx`
- `components/cronograma/BehaviorTip.tsx` (usa `Callout` variante `info`)
- Atualizar `app/cronograma/page.tsx`

## Especificação
- Ler `@/data/schedule`.
- **Timeline vertical**: coluna com marcador de horário (mono) à esquerda e o bloco à direita,
  conectados por uma linha. No mobile, empilhar com o horário como cabeçalho do card.
- **TimelineBlock**: horário + título + `focus`; lista de `food`; `supplements` como
  `SupplementPill` (nome + dose, com tooltip/nota); se houver `behaviorTip`, renderizar
  `BehaviorTip` em destaque ciano.
- Bloco `08:30` (T-Hard): a `SupplementPill` deve exibir o **PrescriptionBadge** e a nota
  de monitorar PA. Bloco `16:00` (Burst Café): mostrar aviso sutil de não combinar com T-Hard.
- Blocos sem suplemento (treino, jantar, dormir) aparecem mais enxutos.

## Critérios de aceite
- 9 blocos renderizados na ordem cronológica a partir dos dados.
- `behaviorTip` do almoço em destaque; badge de prescrição no T-Hard.
- Responsivo; build sem erro.

## Prompt sugerido
> Execute a **Fase 04** (`fases/fase_04_cronograma.md`). Implemente a timeline vertical em
> `/cronograma` lendo `@/data/schedule`, com `TimelineBlock`, `SupplementPill` e
> `BehaviorTip`. Destaque o `behaviorTip` e o item de prescrição (T-Hard).

## Commit
`feat(cronograma): timeline diária de alimentação e suplementação`
