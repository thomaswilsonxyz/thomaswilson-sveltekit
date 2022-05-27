---
date: 2022-05-27T19:17:00
author: Thomas Wilson
title: Taking the test suite from 100 to 1,000 tests at Oxwash
slug: 2022-05-27-one-thousand-tests.md
draft: false
---

When I joined the company (2020) there were less than a hundred tests across three codebases.  This week, we hit one thousand tests.  We've increased the pathways in our code covered by tests from one in five (~20%) to one in two (~50%).

Here are the five most important practices and beliefs that helped get us from 100 to 1,000 tests.  These are things I believe as someone leading an engineering team, and also as someone writing code daily with seniors, mids, and junior engineers.  

- Write tests (just start)
- Tests never don't run (or: tests always run)
- Measure tests by one metric (we picked % of branches reached)
- Writing and reviewing start at the tests (prove to yourself that it reads well, and works)
- Write code to help you write tests (if tests are hard to write or verbose to read, you won't do either)


## But first, Tests?

Tests are bits of code that interrogate others bits of code.  They've helpful because computers are famously ungenerous in their interpretation of our intentions (or we're famously bad at communicating our intentions).  They make it undeniable that "when I do exactly this, you do precisely that".

Tests give us a long list of things to double-check and let us say things like "I haven't broken these parts of the codebase".  Even better: they give the computer a long list of things to double-check for us.  When software gets to a certain point, it's easy to accidentally break something nearby or downstream.

Tests also like a draft for writing software.  You can tinker with your wording, or your ordering.  They help clarify my thinking _while_ I'm writing code.

Tests are great.  All production systems should have tests.

## Write Tests

If you want to more tests, you have to write tests.  Assume that if you don't do this then it won't get done.  Do not assume divine intervention or accidental just-for-fun tests.

Start wherever you are, or wherever is easiest.  Just start now, and improve them later.

## Tests never don't run

Your tests now always run.  You're going to run them all the damn time.  Or more specifically, a computer is going to run them.

It was just a one-line fix?  The tests are running.

Just bumped a package version, or re-named one thing?  The tests are running.

Pushed a commit?  The tests are running.

Opened a PR?  The tests are running.

PR approved and code being built to deploy?  The tests are running.

Tests always run.  They decide if the changes you made were important or erroneous.

## Measure tests by one metric

Now you've got tests and they're running, how do we know how far we've come?

We chose the percentage of branches in our codebase reached by at least one test.  I really believe this is the best metric because: 

1. If an engineer is deciding to branch the code, it's important that _all_ eventualities are explored in a test.  Especially when we think "this will never happen".
2. It's the right balance between too granular (lines of code hit by a test) and too fuzzy (functions/methods hit by a test)
3. It was the lowest initial metric we had, and I'd rather artificially depress than exaggerate our test coverage

Pick one number that you care about and use that to measure progress.  What do you want from testing right now?  A faster CI/CD process?  More readable code?  Go from there.

Maybe it's total time to run tests, or total number of tests.  If you're worried about the number being gamed, don't.  Not yet.

## Writing and reviewing start at Tests

Are you altering existing code?  Start at the test for that part of the codebase.

Can't start at a test because one doesn't exist?  _Mazel Tov_ you're bringing a test into the world.  

Think you understand the problem, but your brain hasn't got the concrete solution yet?  Start making a code sketch, but in a test (ignore the red squigglies in your IDE).  

Are you coming in to review someone else's code?  Go immediately to the tests.  Everything else is probably re-arranging furniture.  Start the conversation at the tests and ask

## Write code to help you write tests

Your tests will bloat and become repetitive.  You'll find yourself doing (near-)identical things in various places.  Or worse, you'll find other people trying to do identical things in very non-identical ways.

Tests that are hard to write don't get written, and tests which are hard to read don't get read, choices that are hard to make don't get made.

Treat your tests like any other code, and carefully consider how you're going to:

1. New up models or objects in your codebase (we use builders with some nice human-readable chaining methods)
2. Replicate file- or network-based data storage in memory (we hanse't settled between spies and in-memory stubs)
3. Mock external server APIs (custom-built mocks or HTTP-level spying and mocking)



