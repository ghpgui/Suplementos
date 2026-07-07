# Fase 08 — Polish, Responsividade e Deploy

## Objetivo
Refinar acabamento, garantir experiência mobile (Galaxy Ultra) e publicar na Vercel.

## Escopo
1. **Responsividade / mobile**: revisar todas as rotas em ~380px de largura; alvos de toque
   ≥ 44px; sem overflow horizontal; bottom nav não cobrir conteúdo (padding-bottom no main).
2. **Acessibilidade**: contraste AA, foco visível, `aria-*` em cards expansíveis e navegação,
   `lang="pt-BR"` no `<html>`.
3. **Acabamento visual**: transições suaves, estados de hover/active, consistência de espaçamento,
   ícones lucide coerentes por seção.
4. **Metadados**: `title`/`description` PT-BR, favicon simples, tema dark declarado
   (`theme-color` e `color-scheme`).
5. **Qualidade**: `npm run build` limpo; remover código morto; conferir que nenhum texto do
   plano está hardcoded fora de `/data`.
6. **Deploy Vercel**: conectar o repositório e publicar. Documentar a URL no `README`.

## Critérios de aceite
- Build de produção sem erros/avisos de tipo.
- Navegação e leitura confortáveis no mobile; rodapé de aviso presente.
- App publicado na Vercel.

## Prompt sugerido
> Execute a **Fase 08** (`fases/fase_08_polish_deploy.md`). Revise responsividade mobile,
> acessibilidade e acabamento, garanta `npm run build` limpo e prepare o deploy na Vercel.
> Liste o que ajustou.

## Commit
`chore: polish, acessibilidade e deploy`
