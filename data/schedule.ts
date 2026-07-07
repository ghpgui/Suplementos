import { ScheduleBlock } from '@/lib/types';

export const schedule: ScheduleBlock[] = [
  {
    id: 'cafe', time: '07:30', title: 'Café da Manhã',
    focus: 'Foco mental e controle de insulina',
    food: [
      'Pão francês com 3 ovos mexidos (colina p/ o cérebro)',
      'Café preto sem açúcar (no lugar do capuccino de 700ml)',
    ],
    supplements: [
      { supplementId: 'greens', name: 'All In Greens', dose: '1,5 scoop',
        note: 'Micronutrientes base + complexo B' },
      { supplementId: 'vitd-k2', name: 'Vitamina D3 + K2', dose: '1 dose',
        note: 'Tomar com os ovos (precisa de gordura p/ absorção)' },
    ],
  },
  {
    id: 'manha-vitalidade', time: '08:30', title: 'Vitalidade (manhã)',
    focus: 'Fluxo de nutrientes otimizado',
    food: [],
    supplements: [
      { supplementId: 't-hard', name: 'T-Hard', dose: '1 dose',
        note: '℞ Contém tadalafila — monitorar pressão arterial' },
    ],
  },
  {
    id: 'almoco', time: '13:00', title: 'Almoço',
    focus: 'Proteção vascular e fim da letargia pós-prandial',
    food: [
      'Arroz, feijão e 150g de proteína magra (tilápia ou frango grelhado)',
    ],
    behaviorTip:
      'Trocar 1L de suco de laranja por água com limão ou água com gás — ' +
      'corta o excesso de frutose e evita a sonolência à tarde.',
    supplements: [
      { supplementId: 'omega3', name: 'Ômega 3 Concentrado', dose: '2 cápsulas',
        note: 'Anti-inflamatório e suporte ao HDL' },
      { supplementId: 'coq10', name: 'Coenzima Q10', dose: '200 mg',
        note: 'Suporte mitocondrial e proteção cardiovascular' },
    ],
  },
  {
    id: 'lanche', time: '16:00', title: 'Lanche da Tarde',
    focus: 'Quebra de jejum e vencer o "crash" de energia',
    food: [
      'Whey isolado com água ou café gelado',
      '1 punhado de castanhas (gorduras boas)',
    ],
    supplements: [
      { supplementId: 'burst-cafe', name: 'Burst Café', dose: '1 dose',
        note: 'Termogênico / foco cognitivo e preparação p/ treino' },
    ],
  },
  {
    id: 'pre-treino', time: '19:30', title: 'Pré-Treino Imediato',
    focus: 'Saturação e energia rápida',
    food: ['1 banana (glicogênio rápido)'],
    supplements: [
      { supplementId: 'creatina', name: 'Creatina', dose: '3 g a 5 g',
        note: 'Força e hidratação intracelular' },
    ],
  },
  {
    id: 'treino', time: '20:00 – 21:30', title: 'Treino',
    focus: 'Musculação de alta performance (Academia Gaviões)',
    food: [], supplements: [],
  },
  {
    id: 'jantar', time: '22:00', title: 'Jantar / Pós-Treino',
    focus: 'Reposição estrutural',
    food: [
      'Lanche proteico prático (frango desfiado, carne moída ou atum)',
      'Refrigerante zero',
    ],
    supplements: [],
  },
  {
    id: 'sono', time: '23:00', title: 'Higiene do Sono',
    focus: 'Relaxamento neuromuscular',
    food: [],
    supplements: [
      { supplementId: '4mag', name: 'Fórmula 4MAG (Rituária)', dose: '1 dose',
        note: 'Magnésio malato, bisglicinato, taurato e citrato — sono REM profundo' },
    ],
  },
  {
    id: 'dormir', time: '24:00', title: 'Dormir',
    focus: 'Janela de 7 horas de sono reparador',
    food: [], supplements: [],
  },
];
