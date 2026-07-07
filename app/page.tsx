import { BloodMarkerCard } from '@/components/dashboard/BloodMarkerCard';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { MetricsGrid } from '@/components/dashboard/MetricsGrid';
import { PageHeader } from '@/components/layout/PageHeader';
import { bloodMarkers } from '@/data/bloodMarkers';
import { metrics } from '@/data/metrics';

export default function Home() {
  return (
    <>
      <PageHeader title="Painel de Metas" subtitle="Composição corporal e marcadores" />

      <section>
        <h2 className="mb-3 text-lg font-semibold text-text">
          Metas &amp; Composição Corporal
        </h2>
        <MetricsGrid>
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </MetricsGrid>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-text">Exames de Referência</h2>
        <p className="mb-3 mt-1 text-sm text-text-muted">
          Contexto clínico dos exames de sangue mais recentes — não é meta de acompanhamento
          diário.
        </p>
        <MetricsGrid>
          {bloodMarkers.map((marker) => (
            <BloodMarkerCard key={marker.id} marker={marker} />
          ))}
        </MetricsGrid>
      </section>
    </>
  );
}
