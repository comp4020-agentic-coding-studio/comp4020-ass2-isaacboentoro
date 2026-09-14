---
title: "Why C has none of this"
description:
  C's design tradeoffs — speed, portability, no runtime — and the bug classes
  that follow from having no memory safety at all
week: 1
date: 2027-02-22
teachers:
  - marguerite-voss
slides: /decks/week-01/
related:
  - sessions/week-02-break-a-checker
---

C was designed in the early 1970s to write an operating system on hardware
that could not afford a garbage collector, a runtime, or a bounds check it
didn't ask for. Every decision that follows — pointers as raw addresses,
arrays that are just pointer arithmetic in a costume, no notion of an
object's lifetime past its storage duration — was a rational trade against
the machines of the day. Those machines are gone. The trades are still here,
compiled into everything from your kernel to your toaster.

This course is not a tour of why C is bad. It's a tour of what people have
built to keep C's speed and portability while bolting on the one guarantee
its design explicitly refused to make: that a well-typed program can't read
or write memory it doesn't own.

## Outline

- what C's designers optimised for, and what they spent to get it
- the bug classes that follow directly from no bounds/lifetime checking:
  buffer overflow, use-after-free, double-free, uninitialised read
- why "just be careful" doesn't scale — a survey of real-world CVEs that are
  all the same five bugs wearing different clothes
- the shape of the rest of the course: eleven different retrofits, each
  trading something else to close part of this gap

## Before next week

Skim the CVE details for CVE-2014-0160 (Heartbleed) and CVE-2021-3156
(sudo baron samedit). You don't need to understand the exploit chain yet —
just notice which two or three lines, in each case, are doing the damage.
