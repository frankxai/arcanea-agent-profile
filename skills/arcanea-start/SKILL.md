---
name: arcanea-start
description: "Start or resume an Arcanea project with task contract, SIS awareness, and provenance."
version: 0.1.0
author: Arcanea
license: MIT
metadata:
  hermes:
    tags: [arcanea, project, sis, provenance, task-contract]
---

# Arcanea Start

Use when the user wants to begin, resume, or clarify an Arcanea project.

## Steps

1. Identify the project, repo, or creative/workflow surface.
2. Check local context before asking the user to repeat themselves:
   - repo `AGENTS.md`, `CLAUDE.md`, `llms.txt`
   - latest planning/current-state docs
   - SIS or Arcanea memory surfaces if available
3. Create a task contract:
   - Scope
   - Owner
   - Files
   - Non-goals
   - Acceptance criteria
   - Verification
   - Rollback
4. Choose the right execution surface:
   - Hermes for local desktop/gateway/profile/MCP workflows
   - Codex for verified repo surgery
   - Claude/Arcanea Flow for higher-order swarms
   - Arcanea Code/OpenCode for native coding CLI flow
   - Gemini/Antigravity for long-context/multimodal synthesis
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

## Guardrails

- Do not invent shipped capabilities.
- Do not write secrets into files.
- Do not replace native harnesses with Hermes when a native harness is clearly better.
- Prefer extension points over Hermes core patches.
