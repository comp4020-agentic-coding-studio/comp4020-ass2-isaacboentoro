---
title: "What compile-time can even prove"
description:
  Undecidability, alias analysis, and the soundness/completeness tradeoff
  every static memory-safety check has to make
week: 2
date: 2027-03-01
teachers:
  - marguerite-voss
related:
  - sessions/week-02-break-a-checker
---

"Prove at compile time that this program never dereferences a dangling
pointer" is, in general, an undecidable question — it's a hop away from the
halting problem. So no tool in this course actually does that. Each one
instead picks a smaller, decidable question that implies the bigger one for
some subset of programs, and accepts one of two failure modes for the rest:

- **unsound**: it can say "safe" about a program that isn't (it misses bugs)
- **incomplete**: it can say "I don't know" or reject a program that's
  actually fine (it rejects correct code)

Every tool for the rest of the semester sits somewhere on that spectrum, and
knowing where is the single most useful lens for judging any of them. A
checker that's unsound is a lint, not a safety guarantee, no matter how
convincing its output looks. A checker that's sound but wildly incomplete
gets disabled by the first engineer it blocks from shipping.

## Outline

- why perfect static memory-safety checking is undecidable in general
- alias analysis as the load-bearing subproblem: if you can't tell whether
  two pointers can point at the same object, you can't reason about either
- soundness vs completeness, with worked examples of each failure mode
- a preview: which of weeks 4–10's tools chose which tradeoff, and why

## This week's studio

Bring a laptop. The studio session hands you a deliberately naive
alias-analysis pass and asks you to find the program it gets wrong.
