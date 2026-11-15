<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Instruções do projeto

## Padrão de UX (obrigatório)

Todo desenvolvimento neste repositório segue as 18 leis de UX de [`docs/ux-laws.md`](docs/ux-laws.md). Neste repositório, a superfície é o Site institucional (visitante esporádico, desktop e celular, foco em entender a oferta e entrar em contato).

**Antes de criar ou alterar algo visível para quem usa o site, leia `docs/ux-laws.md`.** Antes de entregar, passe pelo checklist desse documento e relate exceções deliberadas (lei e motivo) e o que não foi possível verificar.

Em caso de conflito, a prioridade é: segurança e dados, acessibilidade, conclusão da tarefa, consistência, velocidade e, por fim, refinamento visual.

## Regra de referências externas

Nunca cite concorrentes, inspirações ou produtos de referência em arquivos, commits, PRs ou nomes de branch. Descreva recursos em termos da All In. Bibliotecas e APIs de terceiros realmente usadas são exceção. A regra completa está em [`.cursor/rules/no-competitor-references.mdc`](.cursor/rules/no-competitor-references.mdc).

## Plataforma All In

A plataforma de gestão (console, workspaces e portal do cliente) mora em um repositório separado, `~/all-in-platform`, com especificação, plano técnico e regras próprias. Este repositório é só o site institucional.
