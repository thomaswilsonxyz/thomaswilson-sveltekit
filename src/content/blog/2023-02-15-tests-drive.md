---
title: Will what drove you here drive you away from here?
date: 2023-02-15T20:37:35.854Z
slug: 2023-02-15-tests-drive
author: Thomas Wilson

---
Tests should drive the development of software (*caveat caveat backtrack backtrack*).  That means if you find yourself somewhere in the codebase making some kind of change, it should be because the test took you there.

If you're not careful, you're somewhere because it was nearby and it looked or smelled off.

Unfortunately, this looks an awful lot like tidying up after yourself or moving things around to make an incoming change easier.

Tests give you a ride out of where you are.  They give you a point of reference to understand, really, how far away from the path you are.  By doing something as simple as re-running the test you're working on, you might be able to hit the ejector seat, or let the bungie cord pull you back up.

Sometimes you're driven somewhere because without a clear answer to that question \"when am I done?\".  What drove you there won't necessarily drive you back, at least reliably or directly.

It's very easy to let a *this didn't quite feel right* feeling take you down the [Yak Shaving](https://en.wiktionary.org/wiki/yak_shaving) route.  

Unlike my favourite theory of Software Engineering as a RuneScape Quest, when you're Yak Shaving you might not even be doing something that makes the next thing easier.  

You might be improving things, but it's happening by random sprawl.  

Tests are a vehicle that drive you, and they're also a tool to get you out.