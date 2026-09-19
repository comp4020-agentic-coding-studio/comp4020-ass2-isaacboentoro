---
title: "Comparative verification report"
description:
  Apply at least two tools from the semester to the same C program and argue
  which one you'd actually ship
week: 12
due: 2027-05-28T12:00:00+10:00
weight: 60
marking:
  mode: holistic
  description:
    Judged as a whole against the brief, weighted most heavily on whether
    the comparison is real (both tools were actually run, on the actual
    same program) and whether the final recommendation follows from the
    evidence rather than from which tool was more fun to use. A report that
    picks a clear winner without acknowledging what that winner still
    misses will not be read as complete, regardless of polish.
spec:
  - submitted by the deadline, in the format named below
  - at least two distinct tools from the semester (e.g. Checked C and
    Frama-C, or Frama-C and MISRA-C/static analysis) are applied to the
    same program, at least one of which you did not use for the retrofit
    case study
  - it states a recommendation — which tool you'd actually use for this
    program, in production — and defends it against the tradeoffs the
    semester covered
related: []
---

## The brief

> Take one program with a real memory-safety history — your retrofit case
> study's function is a reasonable starting point, extended — and verify or
> check it with two different tools from the semester. Then argue which one
> you'd ship with.

This is the semester's argument, made concrete on evidence you produced
yourself. It is not a survey: don't summarise what each tool claims to do
in general. Run both, on the same code, and report what actually happened —
including the annotation cost, the false positives, the properties neither
tool touched, and anything a tool caught that surprised you.

Carrying your case-study tool over as one of the two is fine, and often
sensible — you already know where it fights you. The other has to be one
you haven't driven before, so that across the two assessments you've had
your hands on at least three of the semester's tools rather than two.

## What you submit

A report (1500–2500 words) plus the tool artefacts for both tools
(annotated source, proof logs or analysis reports) as supporting evidence.
The report must be readable on its own — a marker should be able to follow
your argument without opening the supporting files, though the files back
up any specific claim you make about what a tool did or didn't catch.

This assessment uses holistic marking rather than a weighted criterion
table: the site renders the `marking.description` above as a marking
statement instead of a table, because "did the comparison hold up and does
the recommendation follow from it" isn't something a set of independent
weighted criteria captures well.
