---
title: "Case study: one CVE, every tool"
description:
  A real use-after-free CVE run through several of the semester's tools —
  what each catches, what each misses, and what each cost to try
week: 11
date: 2027-05-03
teachers:
  - dev-okonkwo
related:
  - sessions/week-11-cve-case-study
---

No lecture this week introduces a new tool. Instead we take a single real
use-after-free CVE and put four or five of the semester's approaches against
it side by side: does MISRA-C compliance flag anything nearby? Does the
clang static analyzer catch this specific pattern, or is it exactly the kind
of aliasing it's known to miss? Does a Checked C conversion of the function
even apply, given UAF is out of its stated scope? Does the bug become
provable once you write the separation-logic-flavoured ACSL contract Frama-C
needs?

The point isn't to crown a winner. It's to make the annotation-cost-versus-
guarantee tradeoff from week 2 concrete, on one function, with one bug,
instead of in the abstract — and to give you the comparative method your
final report is going to need.

## Outline

- the CVE: what the bug is, and the exact lines responsible
- running MISRA-C/static-analysis, Checked C, and Frama-C/ACSL against it in
  turn, live
- what each tool actually reports, and what each would have needed to catch
  it earlier
- the comparative-method takeaway for the report due at the end of semester

## This week's studio

You reproduce this triage yourselves, on a second, related CVE, in groups.
