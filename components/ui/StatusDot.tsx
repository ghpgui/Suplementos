import { Status } from '@/lib/types';
import { statusStyle } from '@/lib/status';

interface StatusDotProps {
  status: Status;
  className?: string;
}

export function StatusDot({ status, className = '' }: StatusDotProps) {
  const { colorVar, label } = statusStyle(status);
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${className}`}
      style={{ backgroundColor: `var(${colorVar})` }}
    />
  );
}
