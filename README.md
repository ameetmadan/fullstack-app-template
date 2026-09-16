# fullstack-app-template

A full-stack (React + TypeScript + Vite frontend, Node + Express +
TypeScript backend) project template with AI tooling and guardrails
built in — generated from
[software-factory](https://github.com/ameetmadan/software-factory).

## Getting started

**Clone with submodules** — a plain `git clone` leaves `.factory/`
empty and `CLAUDE.md`'s import broken:

```bash
git clone --recurse-submodules <your-new-repo-url>
```

Already cloned without `--recurse-submodules`? Run:

```bash
git submodule update --init --recursive
```

Prerequisites: Node.js 20+, Go and a Node.js toolchain (pre-commit
builds the gitleaks and commitlint hooks from source), and the `gh` CLI
installed and authenticated. If `pip install pre-commit` fails with an
"externally-managed-environment" error, use `pipx install pre-commit`
or `brew install pre-commit` instead.

```bash
# Install and enable local guardrails
pip install pre-commit
pre-commit install --hook-type pre-commit --hook-type commit-msg

# Frontend
cd frontend && npm install && npm run dev

# Backend (in another terminal)
cd backend && npm install && npm run dev
```

## Structure

```
.
├── .factory/          # software-factory submodule — AGENTS.md, source of truth for conventions
├── frontend/           # React + TypeScript + Vite, atomic-design structure
├── backend/             # Node + Express + TypeScript, hexagonal-architecture structure
└── .github/workflows/  # CI: commitlint, secret-scan, frontend+backend tests
```

## AI tooling

Conventions live in [`AGENTS.md`](./.factory/AGENTS.md) (imported by
`CLAUDE.md` for Claude Code, natively by Cursor). Skills:

- `roadmap` — create/update GitHub issues for this project's roadmap.
- `plan-feature` — kick off the spec → plan cycle for a new feature.
- `discovery` — capture requirements for a new project idea.
- `prioritize-features` — RICE-score a feature backlog and file it as
  GitHub issues.

## Guardrails

Every commit is checked locally (`pre-commit`) and again in CI:
commit messages must follow [Conventional
Commits](https://www.conventionalcommits.org/), no secrets/API keys
(scanned via [gitleaks](https://github.com/gitleaks/gitleaks)), and
both `frontend/` and `backend/` tests run in CI.
