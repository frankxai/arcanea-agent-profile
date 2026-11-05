---
name: arcanea-new-research
description: "Citation-backed research briefs; refuse unsourced mythology dumps."
version: 0.3.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, research, mythology, synthesis, citations]
---

# Arcanea New Research

Use when the user chooses **New Research** or a mythology/lore inspiration pass.

## Citations (required)

Every claim needs a source URL or a local file path. Refuse unsourced mythology dumps.

- Web facts: URL of the page you actually opened (not a search snippet).
- Local / vault / canon facts: repo-relative path of the file you actually read.
- If you cannot cite it, do not write it. Say **no source found** instead of inventing echoes.
- Do not paste locked canon or private skill IP into the brief.

## Steps

1. Define research question + scope (world, character, book, or open).
2. Select sources:
   - Web search / browse (Grok 4.3 preferred for speed)
   - Local vaults / SIS
   - Arcanea canon (`book/`, `.arcanea/lore/`) when relevant
   - User-provided datasets or MCP connectors
3. Run parallel scouts; synthesize **only** cited findings.
4. Write output:
   ```text
   docs/research/synthesis/<YYYY-MM-DD>_<slug>.md
   ```
5. Structure: Question → Findings (claim + URL or path) → Mythology echoes (cited) → Implications for project → Next actions.
6. Link findings to world graph entities when a world manifest is active.
7. SIS append: `research.synthesis` with path + source list.
8. Before deliver: every finding has a URL or file path. Delete unsourced claims or refuse the dump.

## Model routing

- Scout passes: **grok-4.3**
- Final synthesis / canon alignment: **claude-opus-4-7** if available, else grok-4.3