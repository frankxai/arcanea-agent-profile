---
name: arcanea-new-research
description: "Research synthesis — mythology, lore datasets, MCP sources, citation-backed briefs."
version: 0.2.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, research, mythology, synthesis]
---

# Arcanea New Research

Use when the user chooses **New Research** or a mythology/lore inspiration pass.

## Steps

1. Define research question + scope (world, character, book, or open).
2. Select sources:
   - Web search / browse (Grok 4.3 preferred for speed)
   - Local vaults / SIS
   - Arcanea canon (`book/`, `.arcanea/lore/`) when relevant
   - User-provided datasets or MCP connectors
3. Run parallel scouts; synthesize with citations.
4. Write output:
   ```text
   docs/research/synthesis/<YYYY-MM-DD>_<slug>.md
   ```
5. Structure: Question → Findings → Mythology echoes → Implications for project → Next actions.
6. Link findings to world graph entities when a world manifest is active.
7. SIS append: `research.synthesis` with path + source list.

## Model routing

- Scout passes: **grok-4.3**
- Final synthesis / canon alignment: **claude-opus-4-7** if available, else grok-4.3