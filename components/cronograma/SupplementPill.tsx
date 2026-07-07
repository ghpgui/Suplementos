import { AlertTriangle } from 'lucide-react';
import { ScheduledSupplement, SupplementInfo } from '@/lib/types';
import { PrescriptionBadge } from '@/components/ativos/PrescriptionBadge';

interface SupplementPillProps {
  supplement: ScheduledSupplement;
  info?: SupplementInfo;
}

export function SupplementPill({ supplement, info }: SupplementPillProps) {
  const showWarning = !info?.isPrescription && (info?.warnings?.length ?? 0) > 0;

  return (
    <div className="rounded-xl border border-border bg-surface-2 px-3 py-2">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-text">{supplement.name}</span>
        <span className="font-metric text-xs text-text-muted">{supplement.dose}</span>
        {info?.isPrescription && <PrescriptionBadge />}
      </div>

      {supplement.note && <p className="mt-1 text-xs text-text-muted">{supplement.note}</p>}

      {showWarning && (
        <p className="mt-1 flex items-center gap-1 text-xs" style={{ color: 'var(--warning)' }}>
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {info?.warnings?.[0]}
        </p>
      )}
    </div>
  );
}
