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
