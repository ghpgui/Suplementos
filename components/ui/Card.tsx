import { HTMLAttributes } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-5 shadow-sm transition-colors hover:bg-surface-2 ${className}`}
      {...props}
    />
  );
}
