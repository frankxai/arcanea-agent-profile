---
name: arcanea-workflow-cards
description: "Run Arcanea Content Studio workflow cards — canon QA, art, research, local ship pack."
version: 0.3.2
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
| Canon Audit | Findings table via `arcanea-canon-qa` |
| Canon QA | Cost / contradiction / slop audit |
| Mythology Echo | Cited research → echo mapping |
| Character Portrait | Image gen via the user's media model |
| World Art | Location/faction visual |
| Chapter Draft | Outline → scene prose |
| Local Ship Pack | Write files locally. Do not publish. |
| Research Synthesis | Cited multi-source brief |

## Steps

1. List cards if the user hasn't picked one.
2. Load the card from `cards.yaml` by id.
3. Invoke the card's linked skill with card-specific acceptance criteria.
4. Apply `task_class` model routing from card metadata.
5. For publish or send, stop. This profile does not switch to another unpublished profile.
6. Return: card id, outputs written, verification, next card suggestion.

## Image / video cards

Use the user's configured media model. No generic fantasy cliché. Do not invent a brand color system the project does not already use.
