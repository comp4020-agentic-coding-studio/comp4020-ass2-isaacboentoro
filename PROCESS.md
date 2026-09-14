# Process overview

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

A twelve-week course, "Compile-Time Memory Safety in C" (`SLOP4708`): a tour
of the retrofits engineers have built to bolt spatial and temporal memory
safety onto a language that was never designed to have either, with a
throughline of "what did this specific tool give up to get it" running
through every week. Two assessments — an annotate-a-real-function case
study, and a comparative report where students pit two tools against each
other and argue which one they'd ship — carry that same comparative method
into what students actually do.

## How I got here

I picked the topic by working through a few candidates conversationally
before settling on this one — it's narrow enough that no real degree runs
it standalone, which forced the twelve weeks to be a genuine argument
(retrofit after retrofit, each trading something different) rather than a
generic syllabus with the serial numbers filed off.

Before writing any content I turned the assignment's mechanically-checkable
spec lines into a real test against the platform's generated course API,
grounded by actually running `pnpm build` and reading the resulting
`dist/api/index.json` rather than guessing its shape:
[`1720c9d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-isaacboentoro/commit/1720c9d).
That test checks the allocated SLOP code digits, full week-1–12 coverage
across lectures and sessions, assessment weights summing to 100, and at
least one lecture linking a real (non-placeholder) deck — and it started
red on three of those four, by design, since none of the content existed
yet.

Content landed in the order the platform's collections needed it to build
cleanly, each batch its own commit, `pnpm build` run after each one to
catch dangling `related:`/`teachers:` refs immediately rather than at the
end:

- course identity —
  [`5b3f06b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-isaacboentoro/commit/5b3f06b)
- people (the two placeholder personas replaced with a convenor and tutor
  whose backgrounds match the topic — formal methods and industrial static
  analysis, respectively) —
  [`6267bfd`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-isaacboentoro/commit/6267bfd)
- the full twelve-week curriculum, three studio sessions, and both
  assessments rewritten with real specs and marking criteria —
  [`eacf496`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-isaacboentoro/commit/eacf496)
- home page and policies —
  [`5cd3222`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-isaacboentoro/commit/5cd3222)
- the week 1 deck (needed for the real-deck spec test to go green) —
  [`18b1acc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-isaacboentoro/commit/18b1acc)
- new social-card and hero images, generated rather than sourced as
  photography (a simple box-and-arrow pointer motif, one broken edge,
  matching the course's own visual language) —
  [`a724297`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-isaacboentoro/commit/a724297)
- this harness —
  [`f2e8547`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-isaacboentoro/commit/f2e8547)

By the end of that sequence all five tests in `spec/` (the shipped
invariants plus `course-requirements.test.ts`) pass, `pnpm build` is clean
with no dangling refs, no accessibility violations and no broken links, and
no `STARTER_CONTENT` marker remains under `src/`.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
