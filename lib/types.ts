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

/** Bloco de "receita" reutilizado no Cronograma e no Modo Tênis */
export interface Recipe {
  title: string;
  base: string;                 // ex.: "700 ml a 1 L de água bem gelada"
  ingredients: {
    name: string;
    amount: string;
    note?: string;
  }[];
}

/** Seção 2 — bloco do cronograma diário */
export interface ScheduleBlock {
  id: string;
  time: string;           // "07:30"
  title: string;
  focus?: string;
  food: string[];
  recipe?: Recipe;
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
  recipe?: Recipe;
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
