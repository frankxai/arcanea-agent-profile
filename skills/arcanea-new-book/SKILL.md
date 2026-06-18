---
name: arcanea-new-book
description: "Scaffold a new book — outline, chapters, author voice, publishing handoff."
version: 0.2.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, book, author, publishing]
---

# Arcanea New Book

Use when the user chooses **New Book**.

## Steps

1. Collect: title, genre, target length, series/world link.
2. Scaffold:
   ```text
   book.manifest.json
   outline.md
   chapters/00-prologue.md
   characters/index.md
   ```
3. Write `book.manifest.json`: title, slug, genre, status (`outline`), chapterList.
4. Generate `outline.md` with 3-act or series-appropriate structure (user approves before prose).
5. For prose chapters, use task class `world.character` / `world.canon` — prefer Opus for canon work.
6. Content Studio path: suggest `/studio/author` on arcanea.ai for browser editing.
7. Ship path: offer **Publish Pack** card → `hermes -p publishing-house` for production pipeline.

## Handoff to Publishing House

```bash
hermes profile use publishing-house
publishing-house chat
```

Or stay in arcanea-agent and delegate with explicit task contract.