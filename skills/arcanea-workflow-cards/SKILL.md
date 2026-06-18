---
name: arcanea-workflow-cards
description: "Run Arcanea Content Studio workflow cards — canon audit, art, research, publish."
version: 0.2.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, studio, workflow, cards]
---

# Arcanea Workflow Cards

Use when the user picks a workflow card or says "run card", "Content Studio", or names a pipeline.

## Available cards (read `cards.yaml` in profile root)

| Card | Action |
|------|--------|
| **Canon Audit** | Validate against canon; diff report |
| **Mythology Echo** | Research → echo mapping |
| **Character Portrait** | Image gen via Grok Build |
| **World Art** | Location/faction visual |
| **Chapter Draft** | Outline → scene prose |
| **Publish Pack** | Hand off to publishing-house profile |
| **Research Synthesis** | Multi-source brief |

## Steps

1. List cards if user hasn't picked one.
2. Load card from `cards.yaml` by id.
3. Invoke the card's linked skill with card-specific acceptance criteria.
4. Apply `task_class` model routing from card metadata.
5. For `profile: publishing-house`, switch or delegate explicitly.
6. Return: card id, outputs written, verification, next card suggestion.

## Image / video cards

Route to **Grok Build** (`grok-build` / xAI image tools). Include TASTE gates: no generic fantasy cliché, Atlantean Teal accent discipline when brand-bound.