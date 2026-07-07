import { Callout } from '@/components/ui/Callout';

interface BehaviorTipProps {
  tip: string;
}

export function BehaviorTip({ tip }: BehaviorTipProps) {
  return (
    <Callout variant="info" title="Mudança Comportamental Crítica">
      {tip}
    </Callout>
  );
}
