---
name: arcanea-new-world
description: "Bootstrap a new creative world — manifest, geography, factions, magic, mythology echoes."
version: 0.2.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, world, worldbuilding, create-world]
---

# Arcanea New World

Use when the user chooses **New World** or wants to scaffold a creative universe.

## Steps

1. Ask for world name, genre, and one-sentence premise (skip if already given).
2. Choose target directory (default: `./<slug>-world` or user's active project).
3. Copy `templates/world.manifest.json` into the project and fill it. Do not invent a second schema.
   ```text
   world.manifest.json
   worldbuilding/geography.md
   worldbuilding/factions.md
   worldbuilding/magic-system.md
   worldbuilding/timeline.md
   characters/.gitkeep
   chapters/.gitkeep
   ```
4. Write `world.manifest.json` with: name, slug, premise, genre, createdAt, canonStatus (`draft`).
5. Offer **Mythology Echo** research card — pull inspiration from real myth/lore and tag echoes.
6. Register in SIS if available: `world.created` event with path + manifest hash.
7. Suggest next: New Character, World Art card, or Canon Audit.

## world.manifest.json template

```json
{
  "name": "",
  "slug": "",
  "premise": "",
  "genre": "",
  "canonStatus": "draft",
  "createdAt": "",
  "entities": { "characters": [], "locations": [], "factions": [] }
}
```

## CLI shortcut

If `@arcanea/create-world` is available:
```bash
npx @arcanea/create-world <directory>
```