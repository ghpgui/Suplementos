import { Recipe } from '@/lib/types';

interface RecipeBoxProps {
  recipe: Recipe;
}

/**
 * Bloco visual de "receita" (garrafa/shake) reutilizado no Modo Tênis
 * (MatchPhaseCard) e no Cronograma (TimelineBlock).
 */
export function RecipeBox({ recipe }: RecipeBoxProps) {
  return (
    <div className="mt-3 rounded-xl border border-border bg-surface-2 p-4">
      <p className="text-sm font-semibold text-accent">{recipe.title}</p>
      <p className="mt-1 text-xs text-text-muted">Base: {recipe.base}</p>
      <ul className="mt-3 space-y-2.5">
        {recipe.ingredients.map((ing) => (
          <li key={ing.name}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-text">{ing.name}</span>
              <span
                className="font-metric whitespace-nowrap text-sm"
                style={{ color: 'var(--accent-2, #34d399)' }}
              >
                {ing.amount}
              </span>
            </div>
            {ing.note && (
              <p className="mt-0.5 text-xs text-text-muted">{ing.note}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
