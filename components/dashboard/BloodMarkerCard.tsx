import { BloodMarker } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { StatusDot } from '@/components/ui/StatusDot';

interface BloodMarkerCardProps {
  marker: BloodMarker;
}

export function BloodMarkerCard({ marker }: BloodMarkerCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-text-muted">{marker.label}</p>
        <StatusDot status={marker.status} />
      </div>
      <p className="font-metric mt-1 text-xl font-semibold text-text">{marker.value}</p>
      {marker.note && <p className="mt-1 text-xs text-text-muted">{marker.note}</p>}
    </Card>
  );
}
