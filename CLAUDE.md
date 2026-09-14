# Your harness

This is the "Compile-Time Memory Safety in C" course site (`SLOP4708`). The
platform (content collections, build pipeline, checks) is fixed and documented
in `README.md` — nothing about it is repeated here. This file is the rules I
hold the agent to on top of that.

## Content rules

- Every `related:` ref and every `teachers:` ref must resolve. Run `pnpm build`
  after touching frontmatter in any `src/content/**` file — a dangling ref
  fails the build immediately, so there's no excuse for finding it later.
- No hedging or AI-generic filler in course prose ("in today's fast-paced
  world", "it's important to note that"). Every lecture/session/assessment
  page should read like a specific person wrote it about a specific topic.
  If a paragraph could be pasted into a different course unchanged, rewrite
  it.
- Assessment `weight` fields must sum to exactly 100 across the
  `assessments` collection — `spec/course-requirements.test.ts` enforces
  this, but check it by eye before running the test too.
- Every week 1–12 needs at least one dated `sessions` or `lectures` entry —
  don't add a 13th week or skip one; the spec test checks this exactly.
- Keep the SLOP code's last three digits (`708`) — they were allocated when
  the repo was provisioned. Only the leading level digit is ours.

## Process

- Commit as content lands, not in one giant commit at the end — `PROCESS.md`
  cites real commit SHAs, and small commits make that citation meaningful
  instead of decorative.
- Before considering any content batch done: `pnpm build` (catches broken
  refs, a11y violations, broken links, deck compile errors), then
  `pnpm exec vitest run spec` (the invariants plus `course-requirements.test.ts`).
- Don't run `pnpm check:evidence` until `STARTER_CONTENT` is gone everywhere
  under `src/` and both starter images have been replaced — it's the
  submission gate, not a progress check.
