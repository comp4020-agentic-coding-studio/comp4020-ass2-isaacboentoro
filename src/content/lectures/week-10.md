---
title: "Academic borrow-checking retrofits for C"
description:
  3C, RefinedC, and the current research push to bring ownership-style
  reasoning back into C without leaving the language
week: 10
date: 2027-04-26
teachers:
  - marguerite-voss
---

Weeks 4 and 5 showed two ways of not quite doing this: Cyclone left C behind
entirely, Checked C stayed inside C but only claimed spatial safety. This
week's tools are a more recent attempt at both at once — ownership-flavoured
static reasoning, retrofitted onto real, unmodified C source.

3C (from the Checked C project) automatically infers where Checked C's
pointer types could go in an existing codebase, turning "port your program"
into "review a machine-generated diff." RefinedC goes further, building a
refinement-type system with a separation-logic foundation (week 6's material,
directly) that can express — and mechanically verify — both spatial and
temporal safety properties, at the cost of annotation closer to Frama-C's
than to MISRA-C's.

## Outline

- 3C: automatic inference of Checked C annotations from unmodified source
- RefinedC: refinement types plus separation logic, and what "verified" means
  for a tool still actively being developed
- how much of Rust's guarantee (week 3) either tool actually recovers
- why this is the frontier rather than the mainstream, and what would need
  to change for that to shift
