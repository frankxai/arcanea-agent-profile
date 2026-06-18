# Arcanea Agent Profile

Hermes Agent Desktop profile for Arcanea — worlds, characters, books, research, and Content Studio workflow cards.

## Quick install (Plan B — ship now)

### 1. Install Hermes Agent + Desktop

Download from [Hermes Agent](https://hermes-agent.nousresearch.com/) (Windows EXE, macOS DMG, or Linux terminal install).

### 2. Install this profile

From the Arcanea monorepo (dev):

```bash
hermes profile install ./profiles/arcanea-agent --name arcanea-agent --alias --force -y
```

From GitHub (users):

```bash
hermes profile install github.com/frankxai/arcanea-agent-profile --name arcanea-agent --alias --force -y
```

### 3. Launch

```bash
arcanea-agent chat
# or
hermes -p arcanea-agent desktop
```

One-shot Windows installer (from Arcanea repo):

```powershell
.\scripts\install-arcanea-agent.ps1
```

## Session types

| Launcher | Skill |
|----------|-------|
| New World | `arcanea-new-world` |
| New Character | `arcanea-new-character` |
| New Book | `arcanea-new-book` |
| New Research | `arcanea-new-research` |
| Workflow card | `arcanea-workflow-cards` |

## Model defaults

- **grok-4.3** — default chat + fast research
- **grok-build** — image/video (via skills)
- **claude-opus-4-7** — canon/character (when user has Anthropic auth)

## What ships

- `SOUL.md` — identity + session launcher
- `config.yaml` — safe defaults
- `cards.yaml` — Content Studio workflow cards
- `skills/` — six Arcanea skills
- `mcp.json` — optional registry MCP reference

## Relationship

- Product page: https://arcanea.ai/agent
- Upstream: https://github.com/NousResearch/hermes-agent
- Profile repo: https://github.com/frankxai/arcanea-agent-profile