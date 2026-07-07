import { MatchPhase } from '@/lib/types';

export const matchPhases: MatchPhase[] = [
  {
    id: 'pre', phase: 'pre', title: 'Pré-Jogo', timing: '45 min antes',
    actions: [
      '1 banana',
      'Creatina',
      'Burst Café OU T-Hard (escolher apenas um)',
    ],
    warnings: [
      'Nunca misturar Burst Café e T-Hard na mesma janela — estímulo cardiovascular combinado.',
    ],
  },
  {
    id: 'intra', phase: 'intra', title: 'Intra-Jogo (em quadra)', timing: 'Durante a partida',
    actions: [
      'Água mineral intercalada com água de coco (máx. 500 ml no jogo) — repõe potássio e magnésio',
      'Na metade do jogo (~1h30): 1 banana ou gel de carbo p/ evitar depleção de glicogênio',
    ],
  },
  {
    id: 'pos', phase: 'pos', title: 'Pós-Jogo Imediato (RTC)', timing: 'Logo após',
    actions: [
      'Shake com 1–2 scoops de Whey Isolado batido com água fria — interrompe o catabolismo',
    ],
  },
];
