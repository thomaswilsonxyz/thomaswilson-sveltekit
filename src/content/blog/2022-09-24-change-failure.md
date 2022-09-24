---
title: Is it a bug, or do you just not like it?
author: Thomas Wilson
date: 2022-09-24T11:09:00Z
slug: 2022-09-24-change-failure
draft: false

---

tl;dr Do everything you can to understand the bugs your software team introduce, and the cost of fixing them.  If you over-index on bugs, things might get called a "bug" when it's not.  Deploying a change to recently introduced features doesn't mean there was a bug, it might mean there was a wrong guess or idea.  Responding to these quickly is healthy development. Have good words for this work, like "tweak" or "alteration".

---

The more a team ships software (deploys a new version of software), the better.

Some deploys are going to introduce bugs, i.e. problematic and unexpected behaviour.

This is called *Change Failure*, because a change to the system was proposed but incorrectly implemented.

Change failure *should* be 0%.  

Change failure will rarely be 0%, because designing and crafting software is hard.

Change failure and deploy frequency are related, and do you want to trade off one for the other.

Nevertheless, it's important to know how much of the work your team does releases bugs.

So you need to know:

1. how often the team ships, and 
2. how often the team ships bugs.

Best case scenario: your team ships N times a day which includes 0 bugs.  

Worse case scenario, the team ships N times a day and introduces >N bugs (i.e. each deploy contains multiple bugs).

Bugs are bad for users for obvious reasons.

Bugs are bad for engineering teams because they take time to fix.  Let's call the effort it takes to fix a recently introduced bug *Recovery Effort* (though time != effort != work != complexity).

Change Failure and Recovery Effort should be low and/or trending down.

Getting accurate figures for Change Failure and Recovery Effort rely on knowing what a *bug* is.

When we define and measure terms like Change Failure and Recovery Effort, we incentivise people to make those numbers low.

People can learn if you can something a "bug", they can get it through the pipeline quickly and seriously.

Engineers might consider a bug anything which throws an unhandled exception. 

Product might consider a bug anything which deviates from the flow they imagined or documented.

Users might consider a bug anything that deviates from their expectations.

Strategy might consider a bug anything which doesn't align to macro business directions.

Sometimes somebody turns over a rock and discovers a bug introduced two years ago.  Is something a bug if it's been unreported and unproblematic for two years?

Sometimes a customer might expect to see a confirmation toast pop up, but don't.  Is this experienced ambiguity a bug?

Sometimes a designer might report a bug that the shadow or shade of a certain card or button isn't the same as the mock up, but the engineering team were limited by their design system.  Is this a bug?

Sometimes product report the lack of an "undo" action as a bug, which they only realised after using the product.  Is this lack of functionality a bug?

The spirit of bugs, change failure, and recovery effort is  something which _should_ work, but did not.  

Bugs are undesirable in an unambiguous way.

Some of the other examples above are unambiguous, but that's a fuzzy word.

Some of the above can be framed as learning.

We have learned something about the product, or about the process of building.

Paired with rapid incremental deployments, and empowered team members - this learning is part of development nirvana.

Development nirvana happens when a lot of people push the overall quality and reliability of final product uphill.

Calling everything a bug isn't the way to get there.

Make sure you have words in your collective vocabulary to describe these kinds of (necessary) changes.  I've used the following:

* Tweak
* Alteration
* Feature iteration 
* 1% improvement 
* Quality of Life change
* Missing feature

I've not found any one of these to be especially good or resonant just yet.