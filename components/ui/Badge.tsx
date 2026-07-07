import { ReactNode } from 'react';
import { Status } from '@/lib/types';
import { statusStyle } from '@/lib/status';

interface BadgeProps {
  status: Status;
  children?: ReactNode;
}

export function Badge({ status, children }: BadgeProps) {
  const { colorVar, label } = statusStyle(status);
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{
        color: `var(${colorVar})`,
        backgroundColor: `color-mix(in srgb, var(${colorVar}) 16%, transparent)`,
      }}
    >
      {children ?? label}
    </span>
  );
}
