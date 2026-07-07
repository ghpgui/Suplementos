import { WheyOption } from '@/lib/types';
import { Card } from '@/components/ui/Card';

interface WheyComparisonProps {
  options: WheyOption[];
}

function BestValueTag() {
  return (
    <span
      className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
      style={{
        color: 'var(--accent-2)',
        backgroundColor: 'color-mix(in srgb, var(--accent-2) 16%, transparent)',
      }}
    >
      Melhor custo/g
    </span>
  );
}

export function WheyComparison({ options }: WheyComparisonProps) {
  return (
    <>
      <div className="hidden overflow-x-auto rounded-2xl border border-border md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface text-xs uppercase tracking-wide text-text-dim">
              <th scope="col" className="px-4 py-3 font-medium">
                Marca
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Tipo
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Destaques
              </th>
              <th scope="col" className="px-4 py-3 font-medium">
                Onde comprar
              </th>
            </tr>
          </thead>
          <tbody>
            {options.map((option) => (
              <tr key={option.id} className="border-b border-border bg-surface last:border-0">
                <td className="px-4 py-3 align-top font-medium text-text">
                  {option.brand}
                  {option.id === 'growth' && <BestValueTag />}
                </td>
                <td className="px-4 py-3 align-top text-text-muted">{option.type}</td>
                <td className="px-4 py-3 align-top text-text-muted">{option.highlights}</td>
                <td className="px-4 py-3 align-top text-text-muted">{option.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        {options.map((option) => (
          <Card key={option.id}>
            <div className="flex flex-wrap items-center">
              <h3 className="text-base font-semibold text-text">{option.brand}</h3>
              {option.id === 'growth' && <BestValueTag />}
            </div>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-text-dim">
              {option.type}
            </p>
            <p className="mt-3 text-sm text-text-muted">{option.highlights}</p>
            <p className="mt-3 text-xs text-text-dim">Onde comprar: {option.availability}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
