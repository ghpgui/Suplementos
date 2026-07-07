import { ReactNode } from 'react';
import { AlertOctagon, AlertTriangle, Info, LucideIcon } from 'lucide-react';

type CalloutVariant = 'info' | 'warning' | 'danger';

interface CalloutProps {
  variant: CalloutVariant;
  title?: string;
  children: ReactNode;
}

const variantConfig: Record<CalloutVariant, { colorVar: string; icon: LucideIcon }> = {
  info: { colorVar: '--accent', icon: Info },
  warning: { colorVar: '--warning', icon: AlertTriangle },
  danger: { colorVar: '--danger', icon: AlertOctagon },
};

export function Callout({ variant, title, children }: CalloutProps) {
  const { colorVar, icon: Icon } = variantConfig[variant];
  return (
    <div
      className="flex gap-3 rounded-2xl border p-4"
      style={{
        borderColor: `var(${colorVar})`,
        backgroundColor: `color-mix(in srgb, var(${colorVar}) 10%, transparent)`,
      }}
    >
      <Icon
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0"
        style={{ color: `var(${colorVar})` }}
      />
      <div className="text-sm text-text">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div className="text-text-muted">{children}</div>
      </div>
    </div>
  );
}
