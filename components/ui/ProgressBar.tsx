import { Status } from '@/lib/types';
import { statusStyle } from '@/lib/status';

interface ProgressBarProps {
  value: number;
  status: Status;
  label?: string;
}

export function ProgressBar({ value, status, label }: ProgressBarProps) {
  const { colorVar } = statusStyle(status);
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
      className="h-2 w-full overflow-hidden rounded-full bg-surface-2"
    >
      <div
        className="h-full rounded-full transition-[width]"
        style={{ width: `${clamped}%`, backgroundColor: `var(${colorVar})` }}
      />
    </div>
  );
}
