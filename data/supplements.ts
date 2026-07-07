import { SupplementInfo } from '@/lib/types';

export const supplements: SupplementInfo[] = [
  {
    id: 'vitd-k2', name: 'Vitamina D3 + K2', category: 'Vitamina', accent: 'amber',
    mainFunction: 'Elevar níveis séricos de cálcio e imunidade.',
    examJustification: 'Nível atual de 26,8 ng/mL, abaixo do limiar de otimização.',
    usage: '1 dose no café da manhã, junto de gordura (ovos).',
  },
  {
    id: 'creatina', name: 'Creatina', category: 'Ergogênico', accent: 'cyan',
    mainFunction: 'Ressíntese de ATP, ganho de força e volumização muscular.',
    examJustification: 'Preservar os 40,5 kg de massa magra durante o cutting.',
    usage: '3–5 g no pré-treino.',
  },
  {
    id: 'omega3', name: 'Ômega 3 Concentrado', category: 'Cardiovascular', accent: 'emerald',
    mainFunction: 'Ação anti-inflamatória e suporte ao perfil lipídico.',
    examJustification: 'Auxiliar na modulação do HDL (44 mg/dL).',
    usage: '2 cápsulas no almoço.',
  },
  {
    id: 'coq10', name: 'Coenzima Q10', category: 'Mitocondrial', accent: 'emerald',
    mainFunction: 'Energia mitocondrial e controle do estresse oxidativo.',
    examJustification: 'Suporte ao ventrículo esquerdo (disfunção diastólica discreta).',
    usage: '200 mg no almoço.',
  },
  {
    id: '4mag', name: 'Fórmula 4MAG (Magnésio Quelado)', category: 'Sono', accent: 'cyan',
    mainFunction: 'Recuperação neuromuscular e melhora da arquitetura do sono.',
    examJustification:
      'Malato dá suporte energético; taurato e bisglicinato reduzem a atividade ' +
      'simpática à noite, combatendo o cansaço crônico.',
    usage: '1 dose às 23:00.',
  },
  {
    id: 't-hard', name: 'T-Hard (Tribulus + Maca + Tadalafila 5mg)',
    category: 'Vitalidade', accent: 'rose', isPrescription: true,
    mainFunction: 'Vasodilatação periférica e suporte à vitalidade.',
    usage: '1 dose pela manhã (08:30).',
    warnings: [
      'Contém tadalafila 5 mg (medicamento de prescrição) — monitorar pressão arterial.',
      'Nunca combinar com Burst Café (termogênico) na mesma janela: estímulo cardiovascular somado.',
      'Uso sob acompanhamento médico.',
    ],
  },
  {
    id: 'greens', name: 'All In Greens', category: 'Micronutrientes', accent: 'emerald',
    mainFunction: 'Base de micronutrientes e complexo B.',
    usage: '1,5 scoop no café da manhã.',
  },
  {
    id: 'burst-cafe', name: 'Burst Café', category: 'Termogênico', accent: 'amber',
    mainFunction: 'Estimulante e termogênico para foco cognitivo.',
    usage: '1 dose às 16:00.',
    warnings: ['Não combinar com T-Hard na mesma janela (estímulo cardiovascular somado).'],
  },
  {
    id: 'whey', name: 'Whey Protein Isolado', category: 'Proteína', accent: 'cyan',
    mainFunction: 'Aporte proteico rápido; ajuda a bater os 180 g/dia e cortar catabolismo.',
    usage: 'Lanche (16:00) e pós-treino/pós-jogo.',
  },
  {
    id: 'hydrolift',
    name: 'Hydrolift (Essential Nutrition)',
    category: 'Eletrólitos',
    accent: 'cyan',
    mainFunction:
      'Repositor de eletrólitos de alta qualidade (sódio, potássio, magnésio e minerais). ' +
      'Evita desidratação, cãibras e a fadiga muscular extrema que costuma bater após ~1h30 de jogo.',
    usage: 'Intra-treino: 1 scoop/sachê na Garrafa Oficial (700 ml–1 L).',
  },
  {
    id: 'palatinose',
    name: 'Palatinose',
    category: 'Carboidrato',
    accent: 'emerald',
    mainFunction:
      'Carboidrato inteligente derivado da beterraba, de liberação lenta e gradual. ' +
      'Garante energia constante do primeiro ao último game, sem o "crash" da insulina alta.',
    usage: 'Intra-treino: 1 a 2 scoops (21–42 g) na garrafa, junto do Hydrolift.',
  },
];
