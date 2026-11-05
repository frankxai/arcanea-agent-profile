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
2. Copy `templates/book.manifest.json` to `book.manifest.json` and fill it. Do not invent a second schema.
3. Scaffold:
   ```text
   book.manifest.json
   outline.md
   chapters/00-prologue.md
   characters/index.md
   ```
4. Generate `outline.md` with 3-act or series-appropriate structure (user approves before prose).
5. For prose chapters, use task class `world.character` / `world.canon`.
6. Content Studio path: suggest `/studio/author` on arcanea.ai for browser editing.
7. Ship path: write a local pack (outline + chapters). Do not publish or send unless the user asks.

## Handoff

Stay in this profile. Do not switch to a `publishing-house` profile — that is not a public product.