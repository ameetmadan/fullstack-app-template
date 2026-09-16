---
name: plan-feature
description: Kick off the spec-to-plan cycle for a new feature or subsystem in this project. Use when starting design work on something non-trivial.
---

# Plan Feature

Any non-trivial new feature or subsystem gets its own spec → plan →
implementation cycle before code gets written.

## Steps

1. Find or create the feature's epic issue: `gh issue list --label epic
--search "<name>"`. If it doesn't exist yet, use the `roadmap` skill
   to create it first.
2. Design the feature: classify scope, ask clarifying questions, propose
   2-3 approaches, and present a design before writing any code. If the
   `superpowers` Claude Code plugin is installed, its `brainstorming`
   skill implements this well — invoke `superpowers:brainstorming`;
   otherwise run the same process manually.
3. When the design doc is written, save it to `docs/specs/` and commit
   it. Update the epic issue: `gh issue comment <epic-number> --body
"Design doc: docs/specs/<file>.md"`.
4. Turn the spec into a task-by-task implementation plan (file
   structure, bite-sized steps, testing per task). If the `superpowers`
   plugin is installed, its `writing-plans` skill implements this well
   — invoke `superpowers:writing-plans`; otherwise write the plan
   directly using the same structure.
5. As the plan produces concrete tasks, file each as a task issue linked
   to the epic via the `roadmap` skill.

## Constraints

- Don't skip straight to implementation for anything non-trivial —
  every feature goes through the same brainstorming → spec → plan
  cycle.
- Don't create a second epic for a feature that already has one; update
  the existing epic instead.
