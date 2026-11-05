---
name: arcanea-canon-qa
description: "Audit a draft world, character, or chapter for cost, contradiction, and generic-fantasy slop. Use before treating anything as canon."
version: 0.3.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, canon, qa, review]
---

# Arcanea Canon QA

Use when the user says canon audit, review this world, or before elevating a draft.

## Steps

1. Read the actual files. Do not review from chat memory.
2. Score each finding as **block**, **fix**, or **note**.
3. Check:
   - Function: what does this element *do* in the story?
   - Cost: what does using it take (body, time, relationship, world)?
   - Emotion: what pressure does it put on a character?
   - Contradiction: does it fight the premise or another file?
   - Slop: glowing crystals, vague destiny, generic chosen-one, unlicensed franchise echo
4. Write `canon-qa.md` next to the draft with the table below.
5. Do not change locked files the user marked canonical unless they ask.

## Output table

```text
| Item | Verdict | Why | Fix |
|---|---|---|---|
```

End with: **keep as draft** or **ready to promote** (user still promotes).
