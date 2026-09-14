---
title: "Frama-C and ACSL: deductive verification"
description:
  Annotating real C with ACSL contracts and discharging the resulting proof
  obligations against the source, not a model of it
week: 7
date: 2027-04-05
teachers:
  - marguerite-voss
related:
  - sessions/week-07-annotate-frama-c
  - assessments/retrofit-case-study
---

Frama-C runs on unmodified C, extended with annotations written in ACSL (a
specification language embedded in comments) that state preconditions,
postconditions, loop invariants, and — this is the part that connects
straight back to last week — separation assertions between pointers. Its WP
plugin turns an annotated function into a set of proof obligations and hands
them to an SMT solver; a green result means the function provably meets its
contract, for every input, not just the ones you tested.

The cost is annotation burden, and it's steep: a loop usually needs an
explicit invariant before WP can say anything about it at all, and a
function that isn't already separation-logic-shaped in your head is hard to
annotate correctly on the first try. This week's studio has you feel that
cost directly, on a function small enough that the whole proof fits on one
screen.

## Outline

- ACSL contracts: requires/ensures/assigns, and what each actually
  constrains
- loop invariants as the annotation that makes or breaks a WP proof attempt
- reading a discharged proof obligation, and reading one that fails
- where this sits on the soundness/completeness spectrum from week 2: sound,
  but only as complete as your invariants are strong
