---
title: "Synthesis: what's actually landing"
description:
  Which of the semester's ideas are shipping in real toolchains today, and
  the course's closing argument about what that means
week: 12
date: 2027-05-10
teachers:
  - marguerite-voss
related:
  - assessments/comparative-verification-report
---

Almost none of the tools covered this semester are, by themselves, what
ships in a mainstream C toolchain in 2027. What's actually landing is
smaller and stranger: Clang's
[`-fbounds-safety`](https://clang.llvm.org/docs/BoundsSafety.html) brings a
Checked-C-like bounds model directly into a compiler millions of programs
already build with — annotate a pointer as `__counted_by(n)` or
`__sized_by(n)` and the compiler inserts the bounds checks and rejects the
unsafe casts that would let you lie about them, opt-in function by function
rather than requiring a whole-program rewrite; Rust-C interop lets teams
rewrite the riskiest 5% of a codebase without touching the other 95%;
hardening flags (stack protectors, CFI, shadow stacks) accept runtime cost
in exchange for catching what static analysis couldn't prove.

The closing argument of the course: there is no retrofit coming that gives
C Rust's guarantee for free. Every tool this semester bought a piece of
safety by spending something else — annotation time, adoption cost,
runtime overhead, or completeness — and the actual state of the art is
teams assembling a combination of these partial trades that fits their
codebase, not waiting for a single tool that closes the gap outright.

## Outline

- `-fbounds-safety`: the annotation model (`__counted_by`, `__sized_by`),
  what it borrows from Checked C (week 5), and why per-function opt-in
  adoption is the whole reason it's shipping and Checked C mostly isn't
- incremental Rust-C interop as an adoption strategy, not a full rewrite
- hardening flags as the "give up on static, buy insurance at runtime"
  option
- the closing argument, and what it means for how you should read the
  comparative-verification report you're finishing this week
