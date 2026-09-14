---
title: "Ownership as a foil"
description:
  Rust's borrow checker as the design target every C retrofit in this course
  gets measured against, even though it isn't itself a C tool
week: 3
date: 2027-03-08
teachers:
  - marguerite-voss
---

Rust doesn't appear on the syllabus after this week, and it's the only
lecture where the tool under discussion can't be applied to a line of C.
It's here anyway, because every retrofit from week 4 onward is implicitly
answering the question "how much of what Rust gets for free can you claw
back inside a language that was never going to have it built in?"

Ownership types give you spatial and temporal memory safety as a static,
sound, zero-runtime-cost property of the type system — at the cost of a
much more restrictive language, and years of programmer retraining. That
cost is exactly what the rest of this course is about: no C retrofit gets
that whole guarantee, and each one is legible as a specific, deliberate
partial refund.

## Outline

- ownership, borrowing, and lifetimes as a static answer to aliasing
- what "zero-cost abstraction" actually costs (compile time, expressiveness,
  the learning curve)
- why this can't just be bolted onto C: the guarantee needs the type system
  to have been designed around it from the start
- the framing for the rest of semester: each retrofit as a point in the
  design space between "no safety, full C" and "full safety, not C anymore"
