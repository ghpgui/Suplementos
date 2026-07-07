'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './navItems';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação principal"
      className="hidden w-60 shrink-0 flex-col border-r border-border bg-surface p-4 md:flex"
    >
      <p className="mb-4 px-2 text-sm font-semibold tracking-wide text-text-dim">
        Suplementação
      </p>
      <ul className="flex flex-col gap-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-surface-2 text-accent'
                    : 'text-text-muted hover:bg-surface-2 hover:text-text'
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
