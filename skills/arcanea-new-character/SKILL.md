---
name: arcanea-new-character
description: "Forge a canon-consistent character using the 12-field Arcanean template."
version: 0.2.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, character, character-forge]
---

# Arcanea New Character

Use when the user chooses **New Character**.

## Steps

1. Collect: name, role (protagonist/antagonist/supporting), world link (if any).
2. Create `characters/<slug>.md` with 12 fields:

| Field | Content |
|-------|---------|
| Name | |
| Epithet | |
| Origin | |
| Motivation | |
| Fear | |
| Desire | |
| Flaw | |
| Gift | |
| Voice | 3 sample lines |
| Arc | beginning → turn → end |
| Relationships | |
| Sacred Gear | one iconic item |

3. Cross-check against active world manifest if present.
4. Offer **Character Portrait** card (Grok Build image gen).
5. Link character slug into `world.manifest.json` entities.characters if world exists.
6. SIS append: `character.created`.

## Guardrails

- One Sacred Gear per character (PFP DNA rule when NFT-bound).
- Voice must be distinguishable in dialogue samples.