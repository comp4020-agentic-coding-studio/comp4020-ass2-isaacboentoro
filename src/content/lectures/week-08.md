---
title: "CompCert: what a proven compiler doesn't promise"
description:
  CompCert's formally verified compilation correctness, and the memory-safety
  question it deliberately leaves to you
week: 8
date: 2027-04-12
teachers:
  - dev-okonkwo
---

CompCert is a C compiler with a machine-checked Coq proof that generated
assembly has the same observable behaviour as the source program under the
C semantics it targets. That's a real, hard, valuable guarantee — it rules
out an entire class of miscompilation bugs that every other tool in this
course simply assumes away. It is easy to hear "formally verified compiler"
and infer "produces memory-safe programs." It doesn't, and this lecture
exists to close that gap.

CompCert's correctness theorem is conditional: *if* your source program is
free of undefined behaviour, the compiled binary behaves like the source.
Undefined behaviour — the exact territory buffer overflows and
use-after-free live in — is explicitly outside the theorem's scope. A
CompCert build of a memory-unsafe program is a faithfully, provably
compiled memory-unsafe program.

## Outline

- what "compiler correctness" means as a formal theorem, and how CompCert's
  is stated
- the undefined-behaviour escape hatch, and why it's there by necessity
- why this is the week to be precise about what a proof actually claims,
  against what a press release implies it claims
- what CompCert would need to add to say anything about memory safety
  itself (spoiler: everything from weeks 4–7)
