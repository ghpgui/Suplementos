import { Status } from '@/lib/types';

interface StatusStyle {
  colorVar: string;
  label: string;
}

const statusMap: Record<Status, StatusStyle> = {
  good: { colorVar: '--success', label: 'Na meta' },
  attention: { colorVar: '--warning', label: 'Otimizar' },
  critical: { colorVar: '--danger', label: 'Crítico' },
  neutral: { colorVar: '--text-muted', label: 'Info' },
};

export function statusStyle(status: Status): StatusStyle {
  return statusMap[status];
}
