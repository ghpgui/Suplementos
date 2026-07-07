import { WheyComparison } from '@/components/whey/WheyComparison';
import { PageHeader } from '@/components/layout/PageHeader';
import { wheyOptions } from '@/data/whey';

export default function GuiaWheyPage() {
  return (
    <>
      <PageHeader
        title="Guia Whey"
        subtitle="Comparativo de opções para sustentar 180 g de proteína/dia"
      />
      <WheyComparison options={wheyOptions} />
    </>
  );
}
