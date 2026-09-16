---
name: roadmap
description: Create or update GitHub issues for this project's roadmap (epics) and concrete work (tasks). Use when starting new roadmap work, breaking an epic into tasks, or updating issue status.
---

# Roadmap

GitHub Issues are the persistence layer for this project's roadmap — not
chat history, not local todos. Use this skill any time roadmap state
needs to change.

## Creating an epic

One epic per major feature or subsystem. Check for an existing one before
creating a duplicate: `gh issue list --label epic --search "<name>"`.

```bash
gh issue create \
  --title "[Epic] <name>" \
  --label "epic" \
  --body "$(cat <<'EOF'
## Scope
<what's in / out for this epic>
EOF
)"
```

## Creating a task under an epic

```bash
gh issue create \
  --title "<concrete task>" \
  --label "task" \
  --body "Part of #<epic-issue-number>"
```

## Updating status

Comment on the issue rather than editing the body, so history is
preserved:

```bash
gh issue comment <number> --body "<status update>"
```

Close with `gh issue close <number> --comment "<why>"` once the task or
epic's deliverable is verified working, not just implemented.

## Listing current roadmap state

```bash
gh issue list --label epic --state all
gh issue list --label task --state open
```

## Labels

Only two labels: `epic`, `task`. Create them if they don't exist yet:

```bash
gh label create epic --color 5319e7 --description "Top-level roadmap item" --force
gh label create task --color 1d76db --description "Concrete unit of work under an epic" --force
```
