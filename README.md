# Painel de Suplementação — Pacote de Planejamento

**App publicado:** https://suplementos-opal.vercel.app/

Este pacote transforma o `Plano_001.txt` em um projeto executável pelo **Claude Code**,
seguindo a convenção de fases sequenciais (`fase_00` → `fase_08`) e o princípio de que
**todo o conteúdo e regra de design vive em arquivos versionados**, de modo que o projeto
seja 100% reconstruível do zero.

## O que é o projeto

Um painel pessoal (dashboard) para acompanhar, no dia a dia e em tarefas específicas
(ex.: dias de jogo de tênis), o plano de suplementação, metas de composição corporal,
cronograma diário e estratégias esportivas.

## Stack recomendada

- **Next.js (App Router) + TypeScript + Tailwind CSS**, deploy na **Vercel**.
  Mesma stack do seu Trend Portal → zero atrito de setup e deploy.
- Alternativa mais leve: Vite + React + Tailwind (SPA pura). Só vale a pena se você
  quiser algo ainda mais enxuto e sem necessidade de rotas server-side. As fases abaixo
  assumem Next.js, mas são triviais de adaptar.

## Princípio central de arquitetura: **data-driven**

Todo o conteúdo do plano (métricas, exames, cronograma, ativos, guia de tênis, whey)
é modelado como **dados tipados em `/data`**. Os componentes de UI são apenas
renderizadores. Vantagens:

- Atualizar o plano = editar um objeto TypeScript, não caçar texto em JSX.
- Fonte única da verdade (`docs/DADOS_FONTE.md` → `/data/*.ts` + `/lib/types.ts`).
- Reconstruível do zero, como você já faz nos seus projetos.

## Como dirigir o Claude Code com este pacote

1. Suba estes arquivos para a raiz do repositório (ex.: `docs/` e `fases/`).
2. Execute uma fase por vez. Cada `fases/fase_XX_*.md` tem:
   - **Objetivo**, **Pré-requisitos**, **Arquivos a criar/editar**,
     **Especificação**, **Critérios de aceite** e um **Prompt sugerido**.
3. Sugestão de prompt genérico por fase:

   > Leia `docs/ARQUITETURA.md`, `docs/DADOS_FONTE.md` e `fases/fase_0X_*.md`.
   > Execute **apenas** o escopo desta fase, respeitando o design system e os tipos já
   > definidos. Ao terminar, liste os arquivos criados/alterados e confirme os critérios
   > de aceite.

4. Faça commit ao final de cada fase (mensagens sugeridas em cada arquivo).

## Ordem das fases

| Fase | Escopo |
|------|--------|
| 00 | Setup do projeto (Next.js + TS + Tailwind + estrutura de pastas + tokens) |
| 01 | Camada de dados (`/lib/types.ts` + `/data/*.ts` a partir do plano) |
| 02 | Layout base, navegação responsiva e rodapé de aviso |
| 03 | Seção 1 — Painel de Metas e Biometria |
| 04 | Seção 2 — Cronograma Diário |
| 05 | Seção 3 — Enciclopédia de Ativos |
| 06 | Seção 4 — Modo Tênis |
| 07 | Seção 5 — Guia de Compras de Whey |
| 08 | Polish, responsividade (Galaxy Ultra), acessibilidade e deploy Vercel |

## Aviso importante (ler antes de codar)

Este é um **organizador pessoal**, não uma ferramenta clínica. Duas observações que
convém deixar explícitas dentro do próprio app (a Fase 02 já prevê um rodapé de aviso):

- O plano contém decisões baseadas em exames de sangue e um item de **prescrição médica**
  — o **T-Hard (Tribulus + Maca + Tadalafila 5 mg)**. Tadalafila diária é medicamento
  controlado e o próprio plano já pede monitoramento de pressão arterial. O app deve
  **marcar itens de prescrição** e trazer o alerta de "não combinar com termogênico
  (Burst Café) na mesma janela", que é uma regra de segurança relevante.
- Nada aqui substitui acompanhamento médico/nutricional. O rodapé de aviso cobre isso.

Isso não muda o escopo técnico — só garante que o app seja honesto sobre o que é.
