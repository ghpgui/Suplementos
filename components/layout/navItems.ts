import { CalendarClock, FlaskConical, GlassWater, Target, Trophy, type LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { href: '/', label: 'Metas', icon: Target },
  { href: '/cronograma', label: 'Cronograma', icon: CalendarClock },
  { href: '/ativos', label: 'Ativos', icon: FlaskConical },
  { href: '/modo-tenis', label: 'Modo Tênis', icon: Trophy },
  { href: '/guia-whey', label: 'Guia Whey', icon: GlassWater },
];
