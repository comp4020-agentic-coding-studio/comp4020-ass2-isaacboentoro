---
title: "Checked C: bounds without a new language"
description:
  Bounds-checked pointer types added to ordinary C, and the spatial-only
  safety guarantee that buys
week: 5
date: 2027-03-22
teachers:
  - dev-okonkwo
---

Checked C (Microsoft Research) takes the opposite bet from Cyclone: stay
inside standard C, and add new pointer types (`ptr`, `array_ptr`,
`nt_array_ptr`) that carry their bounds and are checked at the point of
dereference — either statically, where the compiler can prove it, or with
an inserted runtime check where it can't. Ordinary and checked pointers can
coexist in the same file, so a codebase can be converted one function at a
time.

That incrementality is the whole pitch, and it comes with a matching
limitation: Checked C is spatial-safety only. It stops you reading past the
end of a buffer; it does nothing at all about use-after-free, because
that's a temporal problem and bounds annotations don't touch lifetimes.

## Outline

- the checked pointer types and where the bounds information actually lives
- static vs. inserted-runtime-check enforcement, and when each kicks in
- incremental adoption: converting one function, one file, at a time
- the scope boundary: why spatial safety alone still leaves UAF and
  double-free completely unaddressed
