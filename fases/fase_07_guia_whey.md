# Fase 07 — Seção 5: Guia de Compras de Whey

## Objetivo
Rota `/guia-whey`: tabela comparativa de decisão entre as três marcas.

## Arquivos a criar
- `components/whey/WheyComparison.tsx`
- Atualizar `app/guia-whey/page.tsx`

## Especificação
- Ler `@/data/whey`.
- **Desktop**: tabela com colunas Marca | Tipo | Destaques | Onde comprar.
- **Mobile**: colapsar em cards (uma linha vira um card) para não quebrar o layout no
  Galaxy Ultra.
- Cabeçalho lembrando o objetivo: sustentar **180 g de proteína/dia**.
- Opcional: destacar levemente a Growth como melhor custo/g (é o critério de estoque mensal).

## Critérios de aceite
- 3 opções renderizadas a partir dos dados; tabela no desktop, cards no mobile.
- Build sem erro.

## Prompt sugerido
> Execute a **Fase 07** (`fases/fase_07_guia_whey.md`). Implemente `/guia-whey` lendo
> `@/data/whey` com `WheyComparison` (tabela no desktop, cards no mobile).

## Commit
`feat(whey): guia comparativo de compra de whey`
