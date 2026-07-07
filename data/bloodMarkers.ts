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
