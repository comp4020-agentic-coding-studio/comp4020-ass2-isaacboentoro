---
title: "MISRA-C and industrial static analysis"
description:
  What Coverity, the clang static analyzer, and cppcheck actually check for,
  and how that differs from the formal guarantees of weeks 5–7
week: 9
date: 2027-04-19
teachers:
  - dev-okonkwo
---

Almost no shipping C codebase uses Checked C or Frama-C. Almost every safety-
critical one runs MISRA-C compliance checking plus a commercial or open
static analyzer, because those tools trade soundness for something the
formal tools don't offer: they run on your actual, unmodified, un-annotated
codebase, today, and tell you something useful before you've written a
single contract.

MISRA-C is a coding-standard subset of C (no unbounded recursion, restricted
pointer arithmetic, and dozens more rules) designed to make the language
easier for a static analyzer to say something true about. Coverity and the
clang analyzer then run heuristic, deliberately unsound analyses on top:
they find real bugs, they miss real bugs, and they occasionally flag correct
code. That's the industrial bet — a checker that catches most of the cheap
bugs for near-zero annotation cost beats a checker that catches all of them
for an annotation cost nobody will pay.

## Outline

- what MISRA-C restricts, and why each restriction makes analysis easier
- how Coverity/clang-analyzer/cppcheck actually work: pattern-based and
  heuristic dataflow, not proof
- false positives and false negatives in practice, and how teams triage them
- why "no annotation cost" is the entire reason these tools have the market
  share the previous four weeks' tools don't
