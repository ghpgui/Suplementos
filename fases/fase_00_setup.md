# Fase 00 — Setup do Projeto

## Objetivo
Criar o projeto Next.js + TypeScript + Tailwind com a estrutura de pastas e os tokens de
design definidos em `docs/ARQUITETURA.md`.

## Pré-requisitos
- Node LTS instalado. Ler `docs/ARQUITETURA.md`.

## Passos
1. `npx create-next-app@latest` com: TypeScript **sim**, Tailwind **sim**, App Router
   **sim**, ESLint **sim**, alias de import `@/*` **sim**, `src/` a seu critério
   (as fases assumem raiz sem `src/`; se usar `src/`, ajuste os caminhos).
2. Instalar `lucide-react`.
3. Criar as pastas vazias: `components/{layout,ui,dashboard,cronograma,ativos,tenis,whey}`,
   `data/`, `lib/`.
4. Substituir `app/globals.css` incluindo os **CSS variables** do design system
   (bloco de tokens de `ARQUITETURA.md`), fundo `--bg` e cor de texto `--text` no `body`.
5. Configurar a fonte mono (Geist Mono ou JetBrains Mono via `next/font`) e expor uma
   classe utilitária `.font-metric` com `tabular-nums`.
6. Limpar o boilerplate de `app/page.tsx` (deixar um placeholder simples "Painel de Suplementação").

## Critérios de aceite
- `npm run dev` sobe sem erro; página com fundo charcoal e texto claro.
- `npm run build` passa (TS strict).
- Estrutura de pastas criada conforme `ARQUITETURA.md`.

## Prompt sugerido
> Leia `docs/ARQUITETURA.md` e execute a **Fase 00** (`fases/fase_00_setup.md`).
> Crie o projeto Next.js (App Router) + TS + Tailwind, a estrutura de pastas, os tokens
> de cor como CSS variables e a fonte mono. Não implemente seções ainda.
> Ao final, rode `npm run build` e confirme os critérios de aceite.

## Commit
`chore: setup Next.js + Tailwind + design tokens`
