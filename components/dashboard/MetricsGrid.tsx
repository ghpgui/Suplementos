import { ReactNode } from 'react';

interface MetricsGridProps {
  children: ReactNode;
}

export function MetricsGrid({ children }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}
