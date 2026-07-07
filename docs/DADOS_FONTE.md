# Fonte da Verdade — Tipos e Dados

> Extração estruturada do `Plano_001.txt`. Na **Fase 01**, o Claude Code deve materializar
> os tipos em `lib/types.ts` e os dados em `/data/*.ts` **exatamente** com este conteúdo.
> Atualizações futuras do plano acontecem editando estes objetos.

---

## 1. `lib/types.ts`

```ts
export type Status = 'good' | 'attention' | 'critical' | 'neutral';

/** Seção 1 — métricas de composição corporal / metas */
export interface BiometricMetric {
  id: string;
  label: string;
  current: string;        // valor exibido, ex.: "94,0 kg"
  target?: string;        // ex.: "18,0%"
  progress?: number;      // 0–100, opcional (barra)
  status: Status;
  note?: string;
}

/** Seção 1 — marcadores de exame de sangue (contexto clínico) */
export interface BloodMarker {
  id: string;
  label: string;
  value: string;
  status: Status;
  note?: string;
}

/** Suplemento agendado dentro de um bloco do cronograma */
export interface ScheduledSupplement {
  supplementId: string;   // referência a SupplementInfo.id
  name: string;
  dose: string;
  note?: string;
}

/** Seção 2 — bloco do cronograma diário */
export interface ScheduleBlock {
  id: string;
  time: string;           // "07:30"
  title: string;
  focus?: string;
  food: string[];
  supplements: ScheduledSupplement[];
  behaviorTip?: string;   // "Mudança Comportamental Crítica"
}

/** Seção 3 — enciclopédia de ativos */
export interface SupplementInfo {
  id: string;
  name: string;
  category: string;         // ex.: "Vitamina", "Ergogênico", "Sono"
  mainFunction: string;
  examJustification?: string;
  usage?: string;
  warnings?: string[];
  isPrescription?: boolean;
  accent?: 'cyan' | 'emerald' | 'amber' | 'rose';
}

/** Seção 4 — fase do dia de jogo */
export interface MatchPhase {
  id: string;
  phase: 'pre' | 'intra' | 'pos';
  title: string;
  timing: string;
  actions: string[];
  warnings?: string[];
}

/** Seção 5 — opção de whey */
export interface WheyOption {
  id: string;
  brand: string;
  type: string;
  highlights: string;
  availability: string;
}
```

---

## 2. `data/metrics.ts` (Seção 1 — Biometria & Metas)

```ts
import { BiometricMetric } from '@/lib/types';

export const metrics: BiometricMetric[] = [
  { id: 'altura', label: 'Altura', current: '1,90 m', status: 'neutral' },
  { id: 'peso', label: 'Peso Atual', current: '94,0 kg', status: 'neutral',
    note: 'Estável' },
  { id: 'gordura', label: 'Gordura Corporal', current: '24,5%', target: '18,0%',
    progress: 40, status: 'critical', note: 'Foco em cutting / definição' },
  { id: 'massa', label: 'Massa Muscular Esquelética', current: '40,5 kg',
    target: 'Manter', status: 'good', note: 'Preservação de massa magra' },
  { id: 'proteina', label: 'Proteína Diária (alvo)', current: '180 g/dia',
    status: 'attention', note: 'Crucial p/ metabolismo e saciedade' },
  { id: 'vitd', label: 'Vitamina D (marcador crítico)', current: '26,8 ng/mL',
    target: '40–60 ng/mL', progress: 45, status: 'critical',
    note: 'Abaixo do limiar de otimização de energia' },
];
```

## 3. `data/bloodMarkers.ts`

```ts
import { BloodMarker } from '@/lib/types';

export const bloodMarkers: BloodMarker[] = [
  { id: 'testo', label: 'Testosterona Total', value: '271,47 ng/dL',
    status: 'attention', note: 'Na referência, mas no limite inferior' },
  { id: 'glicemia', label: 'Glicemia de Jejum', value: '93 mg/dL',
    status: 'good', note: 'Ótimo / estável' },
  { id: 'insulina', label: 'Insulina', value: '9,3 µUI/mL', status: 'good',
    note: 'Boa sensibilidade; controlar picos de carboidrato' },
  { id: 'hdl', label: 'HDL-Colesterol', value: '44 mg/dL', status: 'attention',
    note: 'Desejável elevar p/ proteção cardiovascular' },
  { id: 'cardio', label: 'Função Cardíaca (Eco)', value: 'Normal', status: 'attention',
    note: 'Discreta disfunção diastólica isolada — suporte mitocondrial' },
];
```

## 4. `data/schedule.ts` (Seção 2 — Cronograma)

```ts
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
```

## 5. `data/supplements.ts` (Seção 3 — Enciclopédia)

```ts
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
];
```

## 6. `data/tennis.ts` (Seção 4 — Modo Tênis)

```ts
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
```

## 7. `data/whey.ts` (Seção 5 — Guia de Compras)

```ts
import { WheyOption } from '@/lib/types';

export const wheyOptions: WheyOption[] = [
  {
    id: 'dux', brand: 'Dux Nutrition', type: 'Isolado / Cappuccino',
    highlights: 'Palatabilidade excelente; vira cappuccino proteico matinal sem açúcar.',
    availability: 'Acesso físico fácil em Alphaville.',
  },
  {
    id: 'essential', brand: 'Essential Nutrition', type: 'Cacao Whey',
    highlights: 'Saúde intestinal e digestibilidade; adoçantes naturais (stevia/taumatina).',
    availability: 'Shopping Iguatemi / Mundo Verde.',
  },
  {
    id: 'growth', brand: 'Growth Supplements', type: 'Concentrado 80%',
    highlights: 'Melhor custo por grama; ideal p/ estoque mensal e bater 180 g/dia.',
    availability: 'Venda exclusiva pelo site.',
  },
];
```
