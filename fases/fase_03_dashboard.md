# Fase 03 — Seção 1: Painel de Metas e Biometria

## Objetivo
Home (`/`) exibindo métricas de composição corporal e marcadores de exame como cartões.

## Arquivos a criar
- `components/dashboard/MetricCard.tsx`
- `components/dashboard/BloodMarkerCard.tsx`
- `components/dashboard/MetricsGrid.tsx`
- Atualizar `app/page.tsx`

## Especificação
- Ler `@/data/metrics` e `@/data/bloodMarkers`.
- **MetricCard**: label; valor atual grande em fonte mono (`tabular-nums`); meta ao lado/abaixo;
  `ProgressBar` colorida por status quando houver `progress`; nota curta; fina borda de topo
  na cor do status.
- **BloodMarkerCard**: valor + `StatusDot` + nota; layout mais compacto que a métrica.
- **MetricsGrid**: grid responsivo (1 col mobile, 2–3 cols `md+`).
- Página organizada em dois blocos com `PageHeader`:
  1. "Metas & Composição Corporal" (metrics)
  2. "Exames de Referência" (bloodMarkers) — subtítulo indicando contexto clínico.
- Destacar visualmente os itens `critical` (Vit. D, gordura corporal) — são a prioridade.

## Critérios de aceite
- 6 métricas e 5 marcadores renderizados a partir dos dados (nada hardcoded).
- Cores de status corretas; responsivo; build sem erro.

## Prompt sugerido
> Execute a **Fase 03** (`fases/fase_03_dashboard.md`). Implemente o painel de metas na
> Home lendo `@/data/metrics` e `@/data/bloodMarkers`, com `MetricCard`, `BloodMarkerCard`
> e `MetricsGrid`, seguindo o design system. Destaque os itens `critical`.

## Commit
`feat(dashboard): painel de metas e biometria`
