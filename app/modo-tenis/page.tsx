import { MatchDayFlow } from '@/components/tenis/MatchDayFlow';
import { PageHeader } from '@/components/layout/PageHeader';
import { matchPhases } from '@/data/tennis';

export default function ModoTenisPage() {
  return (
    <>
      <PageHeader
        title="Modo Tênis"
        subtitle="Guia para dias de jogo longos (até 3h) — ative antes de entrar em quadra"
      />
      <MatchDayFlow phases={matchPhases} />
    </>
  );
}
