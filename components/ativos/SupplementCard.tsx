'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SupplementInfo } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Callout } from '@/components/ui/Callout';
import { PrescriptionBadge } from './PrescriptionBadge';

interface SupplementCardProps {
  supplement: SupplementInfo;
}

const accentColorVar: Record<NonNullable<SupplementInfo['accent']>, string> = {
  cyan: '--accent',
  emerald: '--accent-2',
  amber: '--warning',
  rose: '--danger',
};

export function SupplementCard({ supplement }: SupplementCardProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const colorVar = accentColorVar[supplement.accent ?? 'cyan'];
  const hasWarnings = (supplement.warnings?.length ?? 0) > 0;

  return (
    <Card style={{ borderTopColor: `var(${colorVar})`, borderTopWidth: 3 }}>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((value) => !value)}
        className="flex w-full items-start justify-between gap-3 rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div>
          <p
            className="text-xs font-medium uppercase tracking-wide"
            style={{ color: `var(${colorVar})` }}
          >
            {supplement.category}
          </p>
          <h3 className="mt-1 text-base font-semibold text-text">{supplement.name}</h3>
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-text-dim transition-transform ${
            expanded ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {supplement.isPrescription && (
        <div className="mt-3">
          <PrescriptionBadge />
        </div>
      )}

      {expanded && (
        <div id={panelId} className="mt-4 space-y-3 border-t border-border pt-4 text-sm">
          <p className="text-text-muted">{supplement.mainFunction}</p>

          {supplement.examJustification && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">
                Por que (exame)
              </p>
              <p className="mt-1 text-text-muted">{supplement.examJustification}</p>
            </div>
          )}

          {supplement.usage && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Uso</p>
              <p className="mt-1 text-text-muted">{supplement.usage}</p>
            </div>
          )}

          {hasWarnings && (
            <Callout variant={supplement.isPrescription ? 'danger' : 'warning'} title="Avisos">
              <ul className="list-disc space-y-1 pl-4">
                {supplement.warnings?.map((warning) => <li key={warning}>{warning}</li>)}
              </ul>
            </Callout>
          )}
        </div>
      )}
    </Card>
  );
}
