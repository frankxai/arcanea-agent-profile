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

<!-- STARLIGHT:OPERATING:BEGIN v2 sha=9f8fecc91edc source=794db1e51a55a128816f7aa266eb0ac1dbd452c3 -->

## Agent operating guidance

Repository agents use the shared Starlight operating contract in `AGENTS.md` alongside local instructions.
The contract asks agents to establish a useful outcome, select relevant skills, complete authorized work,
verify current sources, refine the actual artifact, and report evidence and remaining gates.
It covers human agency, privacy, rights, resource stewardship and bounded proactivity.
Repository identity, brand, canon, build commands and release gates remain local.

[Pinned contract](https://github.com/frankxai/Starlight-Intelligence-System/blob/794db1e51a55a128816f7aa266eb0ac1dbd452c3/docs/architecture/agents-md/band-a.md)
· [Projection and verification](https://github.com/frankxai/Starlight-Intelligence-System/blob/794db1e51a55a128816f7aa266eb0ac1dbd452c3/docs/architecture/AGENTS-MD-CONTRACT.md)

These files supply operating guidance. They do not activate an agent, grant tool permissions,
schedule recurring work, certify compliance or prove a live capability.

<!-- STARLIGHT:OPERATING:END -->
