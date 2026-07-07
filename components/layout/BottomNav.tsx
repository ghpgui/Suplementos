'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './navItems';

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="fixed inset-x-0 bottom-0 z-10 flex border-t border-border bg-surface md:hidden"
    >
      {navItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={`flex min-h-[44px] flex-1 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium transition-colors ${
              isActive ? 'text-accent' : 'text-text-muted'
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
