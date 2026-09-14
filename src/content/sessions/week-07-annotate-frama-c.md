---
title: "Studio: annotate a real function in Frama-C"
description:
  Write ACSL contracts for a small, real C function and get Frama-C's WP
  plugin to actually discharge the proof
week: 7
date: 2027-04-05
teachers:
  - dev-okonkwo
spec:
  - your function has a `requires`/`ensures` contract that says something
    non-trivial (not just "the function terminates")
  - Frama-C's WP plugin discharges every proof obligation for your function,
    or you can explain exactly which obligation fails and why
  - you can point at the loop invariant, if there is one, and say what it
    asserts
related:
  - lectures/week-07
  - assessments/retrofit-case-study
---

## Before the session

Read week 7's lecture and week 6's separation-logic lecture. You'll be
writing contracts that lean directly on both.

## In the session

You're given a handful of small C functions (a bounded string copy, a
singly-linked-list `free`) and work in pairs to annotate one, run WP, and
iterate against the solver's feedback until it's green or you've isolated
exactly why it isn't.

## Afterwards

This session is the on-ramp to the retrofit case study, due later this
month — the case study asks you to do this again, alone, on a function you
choose, with the tool you argue is the best fit.
