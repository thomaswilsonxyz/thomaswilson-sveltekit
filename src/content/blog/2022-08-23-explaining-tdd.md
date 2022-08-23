---
title: Explaining Test Driven Development
author: Thomas Wilson
date: 2022-08-23T06:51:00Z
slug: 2022-08-23-explaining-tdd
draft: false

---

Test Driven Development (TDD) is a way of writing software where the author writes a test first, and *then* writes the "actual" code.

The "actual" code here is the bits of software which do the dirty work.  They might process a payment and then send a receipt e-mail.  Let's call this your **Worker Code**, because you can imagine it like a set of tiny robot workers going about their day and running your business.

The "test" code are bits of software which tell your worker code to do something, and then check the output.  If the tests don't get back the exact thing you told them to expect, then they fail.  Otherwise, they pass.  They're like little Quality Assurance robots, or little robot Miss Trunchbulls, or a room full of little robot NASA workers doing pre-flight checks.  

## TDD's Value

So there's a practice called TDD, where engineers are encouraged to write the test first, and then the worker code second.  This might sound a bit arse-about-face, or like you're doubling the work to do a thing.

Despite this, TDD is good because:

- Tests are good.  They can guarantee your software does what you expect it to do.
- Writing test code is more valuable if you do it before the worker code.

It's more valuable to test before because: 

- It can put the "what" before the "how". It forces you to think about what your worker code should produce, without thinking about how it should produce it. 
- By thinking about the "what", you have to think about the readability of your code.  Computers execute code, but humans read it.  Good code is human friendly.
- It can prevent speculative complexity.  If the code you're writing doesn't get a currently-failing test into a now-passing test, then it's not necessary.  Do only what you need to.
- You write a detailed, strict contract with your worker code.

Worker code adheres to a strict, explicit contract is good because:

- When engineers arrive in an unfamiliar area they have tests as an in-code, up-to-date map.  This includes describing edge cases and unexpected situations.  Your team now spend less time attempting to get a lay of the land.
- When you run through every contract before every deploy you _know_ you're not releasing rogue worker robot behaviours.  Your business now spends less time fixing broken worker robots, and your customers spend less time interacting with them.
- When tests cover far-apart bits of the codebase, your team spends less time context switching to make sure behaviour in one area hasn't affected something far away.  Context switching is very expensive. 
- When fixing a bug, reproducing it within a test (and then fixing it) guarantees the bug has been fixed, and prevents it emerging again in the future (at least in the exact same form).  Confidence is valuable, false confidence is dangerous.

## Malicious Compliance & TDD

Tests aren't inherently good.  Like all robots, your test code only does exactly what you tell it to do.  Robots follow the letter of the law, not the spirit.

Worst case scenario, your engineering team have spent their time time and attention (v. expensive) on a thing with no value to you as a business, or to your customers.  

Even worse, you can do this and show some nice quantitative metrics that everything's a-okay.  Better than okay, thriving.  Perfect.  Industry leading.

What you've got is an expensive way to look busy, where the business pays the cost.  This is borderline malicious compliance.

Malicious compliance is the natural predator of TDD's value.

Good tests give orders to your worker code in the exact same way that a real world customer or user would.  Bad tests give irrelevant or mundane orders.

How can you tell these two things apart?  How can you guarantee you're doing one, not the other?  Not to be flippant, but that's the nuance in TDD.  The discipline comes in over-valuing tests that act like real-life users, and devaluing tests for tests sake.

I won't discuss it here - but it's something I'm working through in my head and with my team.

