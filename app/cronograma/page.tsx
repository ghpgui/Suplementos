import { TimelineBlock } from '@/components/cronograma/TimelineBlock';
import { PageHeader } from '@/components/layout/PageHeader';
import { schedule } from '@/data/schedule';
import { supplements } from '@/data/supplements';
import { SupplementInfo } from '@/lib/types';

const supplementsById = supplements.reduce<Record<string, SupplementInfo>>((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export default function CronogramaPage() {
  return (
    <>
      <PageHeader title="Cronograma" subtitle="Cronograma diário de alimentação e suplementos" />
      <ol>
        {schedule.map((block, index) => (
          <TimelineBlock
            key={block.id}
            block={block}
            supplementsById={supplementsById}
            isLast={index === schedule.length - 1}
          />
        ))}
      </ol>
    </>
  );
}
