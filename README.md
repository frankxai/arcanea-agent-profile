# Arcanea Agent Profile

Installable Hermes profile distribution for Arcanea Agent.

This repo intentionally contains only the profile layer: Arcanea identity, safe config defaults, optional MCP wiring, and Arcanea skills. It does **not** include Hermes core code, provider credentials, sessions, memories, logs, or private Arcanea secrets.

## Install

```bash
hermes profile install github.com/frankxai/arcanea-agent-profile --name arcanea-agent --alias --force -y
arcanea-agent chat
```

If you do not want a shell alias:

```bash
hermes profile install github.com/frankxai/arcanea-agent-profile --name arcanea-agent --force -y
hermes -p arcanea-agent chat
```

## What ships

- `distribution.yaml` — Hermes profile distribution manifest
- `SOUL.md` — Arcanea Agent identity and operating doctrine
- `config.yaml` — safe local-first defaults
- `mcp.json` — optional Arcanea MCP reference config
- `skills/arcanea-start/SKILL.md` — starter project-resume/task-contract workflow

## Arcanea Registry MCP

The profile includes an `arcanea_registry` MCP entry in `config.yaml`, but it is disabled by default until the local registry MCP package and environment are ready.

Expected local dev artifact:

```text
C:/Users/frank/Arcanea/packages/arcanea-registry-mcp/dist/cli.js
```

Build it from the Arcanea monorepo:

```bash
cd C:/Users/frank/Arcanea/packages/arcanea-registry-mcp
pnpm install
pnpm run build
```

Then enable/test from the installed profile after setting any required env vars:

```bash
hermes -p arcanea-agent mcp list
hermes -p arcanea-agent mcp test arcanea_registry
```

## Relationship to Arcanea Agent

This repo is the installable profile-distribution companion to the full Arcanea Agent fork:

- Fork/product surface: https://github.com/frankxai/arcanea-agent
- Upstream foundation: https://github.com/NousResearch/hermes-agent

The strategic rule remains: profile/skills/MCP/plugins first, thin desktop fork later only if the product loop proves it needs one.
