---
title: "Retrofit case study"
description:
  Verify a small, real C function memory-safe with one tool from the
  semester, and argue why that tool was the right fit
week: 6
due: 2027-04-12T12:00:00+10:00
weight: 40
marking:
  mode: weighted
  criteria:
    - name: The verification actually holds
      weight: 40
    - name: Justification of tool choice
      weight: 35
    - name: Honest accounting of what the tool doesn't cover
      weight: 25
spec:
  - submitted by the deadline, in the format named below
  - the chosen function is verified (or, for MISRA/static analysis, checked)
    against a specific memory-safety property using one of Checked C,
    Frama-C/ACSL, or MISRA-C-style static analysis
  - the report states, precisely, which memory-safety property the tool
    checked and which properties it did not
  - the work is yours, with any assistance declared
related:
  - comparative-verification-report
---

## The brief

> Take one small, real C function with a plausible memory-safety concern,
> and use exactly one tool from weeks 4–9 to check it.

"Small" means the whole function and its context fit on a couple of
screens — this is not the CVE case study's scale. "Real" rules out toy
examples invented to make the tool look good; pull from an actual open-
source project (a small utility, a parser, a data-structure library).
Pick the tool whose guarantee actually matches the concern you found: a
spatial-only concern is a Checked C job, a use-after-free is a Frama-C job,
and if you can't get formal tooling to say anything useful in the time
available, a well-argued MISRA-C/static-analysis pass is a legitimate
answer too. The judgement being tested is whether you can match a tool to
the actual shape of the bug, not whether you can operate the fanciest one.

## What you submit

The annotated/checked source, the tool's output (a Frama-C proof log, a
Checked C conversion diff, or a static-analysis report), and a short
written argument (under 800 words) covering: what property you checked,
why this tool was the right one for it, and what the same result would
*not* tell you about the function's safety more broadly.

The `marking:` block above renders as a weighted criterion table. The
largest weight is on the verification itself actually holding — a fluent
argument attached to a proof that doesn't discharge, or a static-analysis
run that never actually executed, does not satisfy this brief.
