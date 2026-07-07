import { SupplementCard } from '@/components/ativos/SupplementCard';
import { PageHeader } from '@/components/layout/PageHeader';
import { supplements } from '@/data/supplements';

export default function AtivosPage() {
  return (
    <>
      <PageHeader title="Ativos" subtitle="Enciclopédia de suplementos" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {supplements.map((supplement) => (
          <SupplementCard key={supplement.id} supplement={supplement} />
        ))}
      </div>
    </>
  );
}
