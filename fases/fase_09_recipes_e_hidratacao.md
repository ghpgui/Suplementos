# Fase 09 — Receitas + Hidratação (Hydrolift, Palatinose, RecipeBox)

> **Passo único.** Este documento substitui as instruções fragmentadas anteriores.
> Implementa de uma vez: os ativos Hydrolift e Palatinose, a Garrafa Oficial no Modo Tênis,
> e o mesmo bloco de receita reutilizado no Cronograma — via um componente compartilhado.

## Visão geral (7 arquivos)

| # | Arquivo | Mudança |
|---|---------|---------|
| 1 | `lib/types.ts` | Nova interface `Recipe`; campo opcional `recipe` em `MatchPhase` e `ScheduleBlock` |
| 2 | `components/ui/RecipeBox.tsx` | **Novo** componente compartilhado |
| 3 | `components/tenis/MatchPhaseCard.tsx` | Renderiza `RecipeBox` |
| 4 | `components/cronograma/TimelineBlock.tsx` | Renderiza `RecipeBox` |
| 5 | `data/tennis.ts` | Fase intra-jogo com a Garrafa Oficial |
| 6 | `data/schedule.ts` | Bloco 16:00 vira um shake com receita |
| 7 | `data/supplements.ts` | + Hydrolift e Palatinose |

---

## 1. `lib/types.ts`

Adicionar a interface `Recipe` e o campo opcional `recipe` nas duas interfaces:

```ts
export interface Recipe {
  title: string;
  base: string;                 // ex.: "700 ml a 1 L de água bem gelada"
  ingredients: {
    name: string;
    amount: string;
    note?: string;
  }[];
}
```

Em `MatchPhase`, adicionar:
```ts
  recipe?: Recipe;
```

Em `ScheduleBlock`, adicionar:
```ts
  recipe?: Recipe;
```

> Observação: onde antes eu havia chamado de `MatchRecipe`, agora é `Recipe` (nome neutro,
> pois é usado no tênis **e** no cronograma). Se já tiver criado `MatchRecipe`, renomeie.

## 2. `components/ui/RecipeBox.tsx` (novo)

Usar o arquivo `RecipeBox.tsx` fornecido junto. Ele recebe `recipe: Recipe` e renderiza
o box (título + base + ingredientes com dose em `font-metric`), no mesmo estilo dos seus pills.

## 3. `components/tenis/MatchPhaseCard.tsx`

Substituir pelo `MatchPhaseCard.tsx` fornecido junto — agora importa `RecipeBox` e faz
`{phase.recipe && <RecipeBox recipe={phase.recipe} />}` logo após o título. O `renderAction`
(padrão "X OU Y") permanece intacto.

## 4. `components/cronograma/TimelineBlock.tsx`

Adição mínima. No topo, importar:
```ts
import { RecipeBox } from '@/components/ui/RecipeBox';
```
E, dentro do bloco (sugestão: **depois** da lista de alimentos e **antes** das pills de
suplementos), renderizar quando houver receita:
```tsx
{block.recipe && <RecipeBox recipe={block.recipe} />}
```

## 5. `data/tennis.ts`

Substituir o arquivo inteiro pelo `data_tennis.ts` fornecido. A fase `intra` passa a ter
`recipe` (Garrafa Oficial: água gelada + Hydrolift + Palatinose) e as `actions` de consumo
(goles a cada virada de lado, banana extra pós-1h30, 2ª garrafa de água acima de 2h em dia
quente). Sai a água de coco. Pré-jogo e pós-jogo inalterados.

## 6. `data/schedule.ts` — bloco das 16:00

Substituir o bloco `id: 'lanche'` por esta versão (whey vira receita, castanhas seguem em `food`):

```ts
{
  id: 'lanche', time: '16:00', title: 'Lanche da Tarde',
  focus: 'Quebra de jejum e vencer o "crash" de energia',
  food: ['1 punhado de castanhas (gorduras boas)'],
  recipe: {
    title: 'Shake da Tarde',
    base: 'Água ou café gelado',
    ingredients: [
      { name: 'Whey Protein Isolado', amount: '1 dose',
        note: 'Aporte proteico + foco no fim do expediente' },
    ],
  },
  supplements: [
    { supplementId: 'burst-cafe', name: 'Burst Café', dose: '1 dose',
      note: 'Termogênico / foco cognitivo e preparação p/ treino' },
  ],
},
```

## 7. `data/supplements.ts`

Adicionar ao array `supplements`:

```ts
{
  id: 'hydrolift',
  name: 'Hydrolift (Essential Nutrition)',
  category: 'Eletrólitos',
  accent: 'cyan',
  mainFunction:
    'Repositor de eletrólitos de alta qualidade (sódio, potássio, magnésio e minerais). ' +
    'Evita desidratação, cãibras e a fadiga muscular extrema que costuma bater após ~1h30 de jogo.',
  usage: 'Intra-treino: 1 scoop/sachê na Garrafa Oficial (700 ml–1 L).',
},
{
  id: 'palatinose',
  name: 'Palatinose',
  category: 'Carboidrato',
  accent: 'emerald',
  mainFunction:
    'Carboidrato inteligente derivado da beterraba, de liberação lenta e gradual. ' +
    'Garante energia constante do primeiro ao último game, sem o "crash" da insulina alta.',
  usage: 'Intra-treino: 1 a 2 scoops (21–42 g) na garrafa, junto do Hydrolift.',
},
```

---

## Critérios de aceite
- `/modo-tenis`: fase intra-jogo mostra a **Garrafa Oficial** (base + Hydrolift + Palatinose);
  nenhuma menção a água de coco; regra "Burst Café OU T-Hard" preservada no pré-jogo.
- `/cronograma`: bloco das 16:00 mostra o **Shake da Tarde** usando o mesmo `RecipeBox`.
- `/ativos`: Hydrolift e Palatinose aparecem.
- `RecipeBox` é o **único** lugar com o markup da receita (sem duplicação).
- `npm run build` limpo (TS strict).

## Prompt único (Claude Code)

> Leia `docs/ARQUITETURA.md`, `docs/DADOS_FONTE.md` e `fases/fase_09_recipes_e_hidratacao.md`.
> Execute a Fase 09 inteira, na ordem:
> 1. Em `lib/types.ts`, adicione a interface `Recipe` e o campo opcional `recipe?: Recipe`
>    em `MatchPhase` e em `ScheduleBlock` (se existir `MatchRecipe`, renomeie para `Recipe`).
> 2. Crie `components/ui/RecipeBox.tsx` conforme o arquivo entregue.
> 3. Atualize `components/tenis/MatchPhaseCard.tsx` para importar e renderizar `RecipeBox`.
> 4. Em `components/cronograma/TimelineBlock.tsx`, importe `RecipeBox` e renderize
>    `{block.recipe && <RecipeBox recipe={block.recipe} />}` após os alimentos e antes das
>    pills de suplementos.
> 5. Substitua `data/tennis.ts` pela nova versão (Garrafa Oficial; sem água de coco).
> 6. Em `data/schedule.ts`, substitua o bloco `id: 'lanche'` (16:00) pela versão com `recipe`.
> 7. Em `data/supplements.ts`, adicione os ativos `hydrolift` e `palatinose`.
> Ao final, rode `npm run build`, corrija erros de tipo se houver, e liste os arquivos
> alterados confirmando os critérios de aceite.

## Commit
`feat: RecipeBox compartilhado, Garrafa Oficial (Hydrolift+Palatinose) e shake no cronograma`
