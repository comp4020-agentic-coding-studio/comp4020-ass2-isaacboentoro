---
title: "Separation logic: reasoning about the heap"
description:
  The theory that makes it possible to talk about disjoint ownership of heap
  memory at all, ahead of two weeks that lean on it directly
week: 6
date: 2027-03-29
teachers:
  - marguerite-voss
related:
  - assessments/retrofit-case-study
---

Every deductive tool later in this course — Frama-C included — is standing
on separation logic, so this week is theory on its own rather than attached
to a specific tool. Ordinary Hoare logic struggles with the heap because
`{P} c {Q}` says nothing about which memory `c` is and isn't allowed to
touch; two calls that are individually correct can still invalidate each
other's assumptions if they alias.

Separation logic's core move is the separating conjunction `P * Q`: "P holds
of some part of the heap, Q holds of a disjoint part, and together they
describe all of it." That one connective is what lets a proof about
`free(p)` say, soundly, "nothing else in scope could have been pointing at
what `p` pointed at" — which is precisely the guarantee a use-after-free bug
violates.

## Outline

- why ordinary Hoare logic doesn't scale to heap-manipulating programs
- the separating conjunction and the frame rule it enables
- reading a small separation-logic proof of a `free`-then-reuse pattern
- why this week feeds directly into Frama-C (week 7) and the retrofit case
  study you start this week
