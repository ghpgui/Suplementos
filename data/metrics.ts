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
