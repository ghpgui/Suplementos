# Fase 01 — Camada de Dados

## Objetivo
Materializar a fonte da verdade: tipos em `lib/types.ts` e dados em `/data/*.ts`,
exatamente como em `docs/DADOS_FONTE.md`.

## Arquivos a criar
- `lib/types.ts`
- `lib/status.ts` (helper: `statusStyle(status)` → `{ colorVar, label }`)
- `data/metrics.ts`, `data/bloodMarkers.ts`, `data/schedule.ts`,
  `data/supplements.ts`, `data/tennis.ts`, `data/whey.ts`

## Especificação
- Copiar interfaces e objetos **literalmente** de `docs/DADOS_FONTE.md`.
- `lib/status.ts` mapeia `good/attention/critical/neutral` para a CSS var correspondente
  (`--success/--warning/--danger/--text-muted`) e um rótulo PT-BR
  ("Na meta" / "Otimizar" / "Crítico" / "Info").
- Nenhum componente de UI nesta fase.

## Critérios de aceite
- `npm run build` passa; todos os imports `@/data/*` e `@/lib/types` resolvem.
- Os dados batem 1:1 com `DADOS_FONTE.md` (nenhum valor inventado).

## Prompt sugerido
> Execute a **Fase 01** (`fases/fase_01_dados.md`). Materialize `lib/types.ts`,
> `lib/status.ts` e os arquivos em `/data` exatamente conforme `docs/DADOS_FONTE.md`.
> Sem UI. Confirme com `npm run build`.

## Commit
`feat(data): tipos e dados do plano de suplementação`
