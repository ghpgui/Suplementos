import { ReactNode } from 'react';
import { MatchPhase } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Callout } from '@/components/ui/Callout';

interface MatchPhaseCardProps {
  phase: MatchPhase;
}

function renderAction(action: string): ReactNode {
  const choiceMatch = action.match(/^(.+?)\s+OU\s+(.+?)(?:\s*\((.+)\))?$/);
  if (!choiceMatch) {
    return <span className="text-text-muted">{action}</span>;
  }

  const [, optionA, optionB, note] = choiceMatch;
  return (
    <span className="flex flex-wrap items-center gap-2">
      <span className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-sm font-medium text-text">
        {optionA}
      </span>
      <span className="text-xs font-bold uppercase" style={{ color: 'var(--warning)' }}>
        ou
      </span>
      <span className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 text-sm font-medium text-text">
        {optionB}
      </span>
      {note && <span className="text-xs text-text-dim">({note})</span>}
    </span>
  );
}

export function MatchPhaseCard({ phase }: MatchPhaseCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <p className="font-metric text-xs text-text-dim">{phase.timing}</p>
      <h3 className="mt-1 text-base font-semibold text-text">{phase.title}</h3>

      <ul className="mt-3 space-y-2 text-sm">
        {phase.actions.map((action) => (
          <li key={action} className="flex gap-2">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            {renderAction(action)}
          </li>
        ))}
      </ul>

      {phase.warnings && phase.warnings.length > 0 && (
        <div className="mt-4">
          <Callout variant="warning" title="Atenção">
            <ul className="list-disc space-y-1 pl-4">
              {phase.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          </Callout>
        </div>
      )}
    </Card>
  );
}
