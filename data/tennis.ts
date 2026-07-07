import { MatchPhase } from '@/lib/types';

export const matchPhases: MatchPhase[] = [
  {
    id: 'pre',
    phase: 'pre',
    title: 'Pré-Jogo',
    timing: '45 min antes',
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
    id: 'intra',
    phase: 'intra',
    title: 'Intra-Jogo — Garrafa Oficial',
    timing: 'Durante a partida',
    recipe: {
      title: 'Garrafa Oficial (Combustível de Quadra)',
      base: '700 ml a 1 L de água bem gelada',
      ingredients: [
        {
          name: 'Hydrolift (Essential Nutrition)',
          amount: '1 scoop / sachê',
          note: 'Repositor de eletrólitos — evita cãibras e fadiga',
        },
        {
          name: 'Palatinose',
          amount: '1 a 2 scoops (21 g a 42 g)',
          note: 'Carboidrato de liberação lenta — energia constante',
        },
      ],
    },
    actions: [
      'Comece a beber em pequenos goles logo após o aquecimento / primeiro game.',
      '2 a 3 goles a cada virada de lado — não espere sentir sede.',
      'Se o jogo passar de 1h30: 1 banana extra no meio da partida.',
      'Se passar de 2h e o dia estiver muito quente: manter uma 2ª garrafa só com água pura para ir intercalando.',
    ],
  },
  {
    id: 'pos',
    phase: 'pos',
    title: 'Pós-Jogo Imediato (RTC)',
    timing: 'Logo após',
    actions: [
      'Shake com 1–2 scoops de Whey Isolado batido com água fria — interrompe o catabolismo e acelera a recuperação.',
    ],
  },
];
