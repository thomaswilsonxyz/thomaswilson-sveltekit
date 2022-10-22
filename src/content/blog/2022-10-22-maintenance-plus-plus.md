---
title: "Making your software opinionated is maintenance++"
date: 2022-10-22T12:18:45Z
slug: 2022-10-22-maintenance-plus-plus
author: Thomas Wilson

---

Good software adds value to the people who use it. 

So good software engineers make software that adds value to peoples' lives.

People get value from what software does for them, not how it does it (obvious caveats about correctness aside).

It's possible for highly valuable software to be terrible in quality.  

Valuable software can have a hard to navigate codebase, heavily duplicated or inefficient code, low test coverage, and a deployment process that sounds like "we have to use Terri's laptop but they're on holiday so we'll deploy in two weeks".

A lot of engineers will tell you that poor quality software _is_ low value software.  I think this is most common in journeyman craftsperson (2-5 years).  I've worked hard to stop being that person.

It's a hard voice to not listen to because it's so righteous.  I like things that are pure in concept and execution.  I think a lot of engineers (and knowledge workers) feel this way.

Anyway.  Over time though, poor quality software will impact users.  It is slow to change and has a higher-than-average chance of containing bugs. 

Over time, poor quality software can become low value software.  It is our job to stop, or at least slow, this.

The two words in my head for this are *Rot* and *Maintenence*.  

[Software Rot](https://en.wikipedia.org/wiki/Software_rot) was introduced to me by [The Pragmatic Programmer](https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135956977/f_0020.xhtml).  It's a sibling of the idea of "Technical Debt".  Unlike deb, rot is always bad.  Debt is a useful tool.  Telling your venture captial backed start up that you've taken debt to move faster isn't going to convince them you did a bad thing.  

Rot is a more primal word.  You sense rot.  

If you leave parts of your software alone for long enough, they will rot.

Maintenance is the **active** process of preventing or undoing  code rot.  I think this really entered my mind in following an episode of the *Freakonomics* podcast, [Praise of Maintenance](https://freakonomics.com/podcast/in-praise-of-maintenance/).

If you've ever taken care of a garden, machinery, or your body, you know  maintenance *is* active.  It means pulling things out of the ground, delimescaling, oiling, doing squats and stretching.  

Maintenance is what you'll spend the vast majority of time doing.  

Over the seasonal (quarterly) time period, maintenance isn't enough.  There's a strong flavour of maintenance in my head that I'm calling *maintenance++*.

Maintenance++ is the act making pre-existing bits of software more opinionated about the business domain.  

This can mean things like moving bits of code away from abstract or unopinionated locations and towards either a centre or an edge.  It can mean using different words to describe things (*draft* and *archive*, as opposed to `isPublished` and `deletedAt`).  

If the source code of software doesn't mirror the business or problem domain, the software is not of good quality. 

You will learn more about a problem or process by writing the code.  Code often does not come out of the oven with opinions.

Unlike the above judgement from the journeyman developer ("software of poor quality is of poor value"), this is a judgement based on the software's wider place within a business.  

Part of maintaining software should be to introduce or refine business-level opinions within the software.
