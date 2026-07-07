import { ScheduleBlock, SupplementInfo } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { BehaviorTip } from './BehaviorTip';
import { SupplementPill } from './SupplementPill';

interface TimelineBlockProps {
  block: ScheduleBlock;
  supplementsById: Record<string, SupplementInfo>;
  isLast: boolean;
}

export function TimelineBlock({ block, supplementsById, isLast }: TimelineBlockProps) {
  return (
    <li className="relative flex gap-4">
      <div className="hidden w-16 shrink-0 justify-end pt-5 sm:flex">
        <span className="font-metric text-sm text-text-muted">{block.time}</span>
      </div>
      <div className="hidden flex-col items-center sm:flex">
        <span className="mt-5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        {!isLast && <span className="mt-1 w-px flex-1 bg-border" aria-hidden="true" />}
      </div>
      <div className="flex-1 pb-6">
        <Card>
          <p className="font-metric mb-1 text-xs text-text-muted sm:hidden">{block.time}</p>
          <h3 className="text-base font-semibold text-text">{block.title}</h3>
          {block.focus && <p className="mt-0.5 text-xs text-text-muted">{block.focus}</p>}

          {block.food.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-text-muted">
              {block.food.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {block.supplements.length > 0 && (
            <div className="mt-3 flex flex-col gap-2">
              {block.supplements.map((supplement) => (
                <SupplementPill
                  key={supplement.supplementId}
                  supplement={supplement}
                  info={supplementsById[supplement.supplementId]}
                />
              ))}
            </div>
          )}

          {block.behaviorTip && (
            <div className="mt-3">
              <BehaviorTip tip={block.behaviorTip} />
            </div>
          )}
        </Card>
      </div>
    </li>
  );
}
