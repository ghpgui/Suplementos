# Fase 05 — Seção 3: Enciclopédia de Ativos

## Objetivo
Rota `/ativos` com grid de cartões expansíveis explicando cada suplemento.

## Arquivos a criar
- `components/ativos/SupplementCard.tsx` (expansível)
- `components/ativos/PrescriptionBadge.tsx`
- Atualizar `app/ativos/page.tsx`

## Especificação
- Ler `@/data/supplements`.
- **Grid** responsivo de `SupplementCard`. Cabeçalho: nome + `category` + acento de cor
  (`accent`). Corpo expansível (clique/tecla) revelando `mainFunction`, `examJustification`,
  `usage` e `warnings`.
- **PrescriptionBadge**: pílula âmbar "℞ Prescrição" quando `isPrescription`.
- **warnings**: renderizar em `Callout` variante `warning`/`danger`. Para o T-Hard, os avisos
  (monitorar PA; não combinar com termogênico; uso sob acompanhamento médico) devem ficar
  evidentes ao expandir.
- Acessibilidade: card expansível com `button`/`aria-expanded`, foco visível.

## Critérios de aceite
- Todos os ativos de `data/supplements` renderizados; expandir/recolher funciona.
- Badge de prescrição no T-Hard; avisos visíveis; build sem erro.

## Prompt sugerido
> Execute a **Fase 05** (`fases/fase_05_enciclopedia.md`). Implemente `/ativos` lendo
> `@/data/supplements` com `SupplementCard` expansível e `PrescriptionBadge`. Destaque
> os `warnings` (especialmente do T-Hard) em Callout.

## Commit
`feat(ativos): enciclopédia de suplementos com cards expansíveis`
