---
title: When should tests fail ?
date: 2024-03-29T20:56:30.238Z
slug: 2024-03-29-when-should-tests-fail
author: Thomas Wilson

---
This is a blog post about automated testing in software.

One of the most useful thoughts I've had about testing [is that](/blog/2023-09-27-test-driven-development-is-like-meditation) writing tests is like meditation: 

> The goal isn't to be good at it.  The goal is to do it.

I had an interesting interaction at work the other day: when co-designing some software, somebody said something like "Oh, I did it that way because then the tests didn't fail".

For me, tests should fail as often as necessary (but not more often).  Changing some code to make it better (faster, slimmer, more legible, whatever) is great - and that's what this engineer was doing.  Deciding to not/do something *only* because it will make tests fail doesn't feel right to me.

It got me thinking: when *should* the tests fail ?

There's obviously no right answer, but for me tests should fail because:

1. You've changed the observable behaviour of some code, or
2. You've changed the expectation of some tests (e.g. you're being more strict or specific in how you're testing your code).

But also, I wanted to think about when tests offer the best bang/buck ratio.  I arrived at wanting tests to fail most when:

1. I am reproducing or isolating a bug, or
2. When I am writing newer code, or code without much precedent.

The first point feels pretty intuitive: if there's a problem somewhere, write code that reproduces the scenario.  Then fix the root cause, then watch the test pass.  Leave the test in the codebase and it'll never regress in the same way ever again.  Unconditional success, 0% failure chance, unanimous praise from your whole team.  

But the second point, about writing newer code, or refreshing older code - that feels *especially* high value to me.

## ...it's like going to dinner with pedantic friends

I think if you're scared of tests failing, you're probably trying to minimise your interaction with them, in case you break something. 

I see the tests as a group of emotionally-resilient, but incredibly pedantic, friends who you have to take everywhere.  They'll go out with you, but you *will* be getting the 11:27 train, and the bill *will* be split perfectly fairly.

The thing is, you still sort of have to engage with them, even if you know they're going to be a stickler about splitting the £3.49 sweet potato fries.  For whatever reason it's worth having these friends in your life, *despite*, these obvious trivial nuisances. 

But also imagine that you have to tell these friends *everything* that you're doing.  You cannot lie to them.  You have to tell them you were in the bathroom for ten minutes because you were scrolling Instagram, not because there was a family emergency.

They wouldn't judge you for it, but you feel sort of gross as you scrolled alone instead of socialising.

Tests force us to be honest and explicit, so the analogy doesn't quite stretch to every friendship you'll ever have.  

## ...or getting a second chance

The other thing we gain when we engage with tests, is a bunch of  do-overs or just-one-more tries at writing. 

One of the simple take-aways I got from John Ousterhout's *A Philosophy of Software Design* is: 

> Rather than implementing the first idea that comes to mind, try a couple of alternative designs and pick the cleanest one.

When you work in tests *first* you're getting a preview of what the "real world" will look like, without having to go to the real world. 

You might decide that the change you've implemented looks ugly, or that it just about breaks a threshold for doing "too much".  

Or maybe you make the change you wanted, and it slots in perfectly.  A success signal for previously well-designed software.

You might not need it if you're making small changes.  But for more complex, choreographed code - I bet good money that your third or fourth will be a lot better than your first.  [I actually wrote about this recently too.](/blog/2024-03-23-try-again)

## The alternative 

Also, the alternative is worse: imagine if the tests *never* failed.