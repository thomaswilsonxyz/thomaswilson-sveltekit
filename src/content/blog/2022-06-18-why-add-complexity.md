---
title: "If simple is good, why do we add complexity?"
author: Thomas Wilson
date: 2022-06-18T18:18:00Z
draft: false
slug: 2022-06-18-why-add-complexity
---

Five years ago when I was writing software I was working around the question "what should go in this file?".  Now it's more often "what _thing_ am I making, and where does it fit with the other _things_?".

As a more experienced engineer, my decisions about what *things* we have, and where they live, start sticking around.  Sometimes people do what I do because they're *good* ideas (my fave), sometimes because they're the *better* ideas (not ideal, but fine), and sometimes because they're *my* ideas (worst, do not do).

I'm describing software architecture.  The code garden ecosystem grows, from the helpful-est little utility functions to the scariest (wobbliest) experimental orchestrators.  Software architecture is about naming and grouping things, acknowledging complexity and putting it in the right (least worse, most obvious) place, and making sure all the beautiful creatures play nicely and the earth-worms don't over-aerate the soil or whatever.

I learned to do this by writing code with very thoughtful people, and reading books written by very thoughtful people.  Do both.  Do not do one without the other.  

Still, I make a lot of choices based on intuition, or smell.  Some approaches smell right, others feel wrong and make me feel nervous.  When a less experienced member of the team asks for an explanation when I raise these feelings, that's often all I can say: "this feels better".

The most useful conversations happen when I say something like "I don't like the alternative".

"The alternative", a lot of the time, is something more complex.  Some layer of abstraction (*what if we had a `Currency` class that could format this string?*) or indirection (*what if this Uploader service called an S3 service which called the logging service, and we handled progress monitoring there?*).

Simple architecture is better.  If it's easier to explain to someone, it speeds up onboarding.  If it's easier to keep in your head when you're writing code, it speeds up the individual/pair.  If it's easier to spot a broken or misplaced _thing_, it speeds up debugging.  If it's clearer where new code should be added, or existing code modified, work is faster.

We have two phrases for when we forget that simple is better: Speculative Complexity and Premature Optimisation.  

Do whatever you can to recognise and prevent speculative complexity and premature optimisation.  If you do not, you are committing your future self to more hours, and probably more suffering.  You are increasing the amount of future work.

Yet, when I arrive at an architectural points for discussion with a less experienced engineer, their gut reactions are often towards adding complexity.  I'd put good money on it being at least 60/40 bad-good, with a higher frequency of bad choices when code is farthest from a feature.

If simple systems are better, why are they something we have to learn?  Why aren't they self evident, like weak coffee or bad paintings?  

I've had enough of these conversations now to recognise patterns. Knowing these patterns helps me guide conversations towards a resolution.

1. **It makes us feel clever.**. Honestly, who doesn't love a really gnarly, technical solution to a problem.  This is prime form-over-function, or a belief that our job as  engineers is to write code (not solve problems). **Resolution:** build a shared understanding of "good" as something which solves the problem, and is readable and comprehensible to other engineers.
2. **Understanding the problem is hard.**. If you're writing software to solve a problem, it's probably a non-trivial problem.  Even worse, long-lived systems quickly become Edge Case Central (*what happens when the user is an admin using the same email address as a non-admin user where the non-admin user signed up first?*).  **Resolution:** fingers off the keyboard immediately.  Do whatever it takes for both engineers to internalise the problem, its cause, and its effects.  Whiteboard, write a document, build a glossary, whatever you need to do.  Once you've done that, fingers can approach the keyboard.
3. **"It will help us in the future".** This is the premature optimisation/speculative complexity case.  It's easy when we're in the weeds to think "well this works now, but what happens when we have 100x the concurrent users?", and then build for that.  The problem is: that world isn't the one we're in, and we don't know how fast we'll get there.  **Resolution:** get data on the current state of play, e.g. how many concurrent users do we have now?  Look at how (un)likely your supposed growth is, talking to a non-engineer if you need to.   I've never had this conversation and realised "oh shit, we do actually need to buff this of 100x growth in the next two days".
4. **It's easier to write than modify.**.  Reading someone else's (old, probably imperfect) code is hard.  It is easier to add than it is to subtract or modify.  Worse, engineers mistake imperfections and best-efforts as best-practices which can't be touched.  **Resolution:** dig into the code around the current feature work from start to end (soup to nuts).  Do not write anything except missing tests around existing functionality until you have done this.  When you publish code you know is imperfect and early-draft, leave a comment and communicate to your team.

