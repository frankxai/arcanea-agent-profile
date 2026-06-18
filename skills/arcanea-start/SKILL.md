---
name: arcanea-start
description: "Start or resume an Arcanea project with task contract, SIS awareness, and provenance."
version: 0.2.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, project, sis, provenance, task-contract]
---

# Arcanea Start

Use when the user wants to begin, resume, or clarify an Arcanea project.

## Steps

1. Identify the project, repo, or creative surface.
2. Load context before asking the user to repeat themselves:
   - `AGENTS.md`, `CLAUDE.md`, `llms.txt`
   - latest `planning-with-files/CURRENT_STATE_*`
   - SIS vaults if `ARCANEA_SIS_HOME` is set
3. Create a task contract: scope, owner, files, non-goals, acceptance, verification, rollback.
4. Route execution:
   - Hermes Desktop for local gateway/profile/MCP
   - Grok Build for image/video
   - Claude/Codex for verified repo surgery
5. Execute only the agreed safe slice.
6. Report provenance and verification evidence.

## Output shape

```text
Project:
Intent:
Context loaded:
Task contract:
Execution surface:
Verification:
Next action:
```