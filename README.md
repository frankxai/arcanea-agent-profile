# Arcanea Agent

Local-first creative intelligence companion for [Hermes Agent](https://hermes-agent.nousresearch.com/). Worlds, characters, books, research, and Content Studio cards — on the official desktop, not a fork.

This repo is a **Hermes profile distribution**. Install it. Keep your own keys and memory.

## Install

1. Install [Hermes Desktop](https://hermes-agent.nousresearch.com/).
2. In a terminal:

```bash
hermes profile install github.com/frankxai/arcanea-agent-profile --alias
```

3. Launch:

```bash
arcanea-agent chat
# or, from Hermes Desktop, open the Arcanea Agent bot
```

Update later without losing your chats:

```bash
hermes profile update arcanea-agent
```

Independent of Nous Research. Runtime behavior belongs to [hermes-agent](https://github.com/NousResearch/hermes-agent).

## What you get

| Piece | Role |
|---|---|
| `SOUL.md` | Companion identity + session launcher |
| `skills/` | Start, world, character, book, research, workflow cards |
| `cards.yaml` | Content Studio pipelines |
| `skins/arcanea.yaml` | Arcanea look on CLI / TUI / desktop |
| `config.yaml` | Safe BYOK defaults (no secrets) |

## Session types

Say **new session** or pick one:

| Path | Skill | Creates |
|---|---|---|
| New World | `arcanea-new-world` | world manifest + scaffold |
| New Character | `arcanea-new-character` | 12-field character sheet |
| New Book | `arcanea-new-book` | book scaffold + chapter graph |
| New Research | `arcanea-new-research` | brief + cited synthesis |
| Workflow card | `arcanea-workflow-cards` | one Content Studio pipeline |

## Defaults

- Chat / fast research: the model you configure (bundle hint: Grok)
- Image / video: your media model (bundle hint: Grok Build)
- Canon / voice: your strongest writing model when available
- Approvals: **manual** until you change them

Bring your own keys. This distribution never ships `.env` or `auth.json`.

## Related

- Hosted product: [arcanea.ai](https://arcanea.ai)
- Deeper skill packs: private `frankxai/arcanea-agent-skills` (when you have access)
- Doctrine: Starlight Hermes Agent Product OS (`starlight-agent-config/core/products/`)
- Do **not** install `frankxai/arcanea-agent` — that is a dormant runtime fork, not this product
