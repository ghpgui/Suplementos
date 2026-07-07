import { ArrowDown, ArrowRight } from 'lucide-react';
import { MatchPhase } from '@/lib/types';
import { MatchPhaseCard } from './MatchPhaseCard';

interface MatchDayFlowProps {
  phases: MatchPhase[];
}

export function MatchDayFlow({ phases }: MatchDayFlowProps) {
  return (
    <div className="flex flex-col items-stretch gap-4 md:flex-row md:gap-3">
      {phases.map((phase, index) => (
        <div key={phase.id} className="contents">
          <div className="md:flex-1">
            <MatchPhaseCard phase={phase} />
          </div>
          {index < phases.length - 1 && (
            <div className="flex items-center justify-center" aria-hidden="true">
              <ArrowDown className="h-5 w-5 text-text-dim md:hidden" />
              <ArrowRight className="hidden h-5 w-5 shrink-0 text-text-dim md:block" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
