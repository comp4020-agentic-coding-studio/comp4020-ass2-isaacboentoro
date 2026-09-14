---
title: "Studio: break a toy checker"
description:
  Hands-on with a deliberately naive alias-analysis pass — find the program
  it silently gets wrong
week: 2
date: 2027-03-01
teachers:
  - dev-okonkwo
spec:
  - you can explain, in one sentence, what the toy checker is trying to prove
  - you produce a C snippet the checker accepts but that actually violates
    memory safety (an unsoundness), or one it rejects but that is actually
    fine (an incompleteness)
  - you can say which of the two you found, and why the checker's alias
    model missed it
related:
  - lectures/week-02
---

## Before the session

Read week 2's lecture first. You need the soundness/completeness
distinction going in, not discovered halfway through.

## In the session

You get the checker (a ~150-line alias analysis over a toy pointer
language) and thirty minutes of quiet time to try to break it, alone or in
pairs. Then a group compare: who found an unsoundness, who found an
incompleteness, and whose counterexample was smallest.

## Afterwards

No mark is attached to this session directly, but the technique — finding
the smallest program that exposes a tool's blind spot — is exactly the
method the week 11 case study and the comparative report ask you to reuse
on real tools.
