---
title: "Cyclone: region-based memory"
description:
  A retrofit that shipped a whole safe dialect of C rather than annotating
  the existing one — region-based allocation and what it forbids
week: 4
date: 2027-03-15
teachers:
  - dev-okonkwo
---

Cyclone (Jim/Morrisett/Grossman et al., early 2000s) took the most direct
route available: rather than annotate C, redesign the parts of C that make
safety hard to check, and ship the result as its own language that still
compiles to fast code. Pointers come in several flavours (never-null,
nullable, fat pointers carrying bounds), and allocation is organised into
regions with statically-checked lifetimes rather than an unstructured heap.

The interesting failure isn't technical — Cyclone works, and directly
prefigures Rust's region-based reasoning. It's adoption. A retrofit that
requires porting your codebase to a new dialect competes with "just rewrite
it in Rust," and by the time Cyclone matured, that's exactly what happened
to its userbase.

## Outline

- fat pointers and the pointer-kind taxonomy Cyclone introduces
- regions as a stack-of-lifetimes model for allocation
- what you give up: a real porting cost, and a language that isn't quite C
  anymore
- why "correct but not free to adopt" is its own failure mode, distinct from
  "doesn't work"
