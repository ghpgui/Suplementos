import { CSSProperties } from 'react';
import { BiometricMetric } from '@/lib/types';
import { statusStyle } from '@/lib/status';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';

interface MetricCardProps {
  metric: BiometricMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  const { colorVar } = statusStyle(metric.status);
  const topBorderStyle: CSSProperties = {
    borderTopColor: `var(${colorVar})`,
    borderTopWidth: 3,
  };

  return (
    <Card style={topBorderStyle}>
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-text-muted">{metric.label}</p>
        {metric.status === 'critical' && <Badge status={metric.status} />}
      </div>

      <p className="font-metric mt-2 text-3xl font-semibold text-text">{metric.current}</p>

      {metric.target && (
        <p className="mt-1 text-xs text-text-dim">Meta: {metric.target}</p>
      )}

      {typeof metric.progress === 'number' && (
        <div className="mt-3">
          <ProgressBar
            value={metric.progress}
            status={metric.status}
            label={`Progresso de ${metric.label}`}
          />
        </div>
      )}

      {metric.note && <p className="mt-3 text-xs text-text-muted">{metric.note}</p>}
    </Card>
  );
}
