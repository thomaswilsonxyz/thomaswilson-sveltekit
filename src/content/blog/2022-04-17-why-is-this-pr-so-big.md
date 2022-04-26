---
title: "'How did this PR get so big?' – Advice for separating aesthetic and functional changes in code"
author: "Thomas Wilson"
date: 2022-04-17T09:48:00Z
slug: "2022-04-17-why-is-this-pr-so-big"
draft: false
tags:
  - engineering
---

A few weeks ago I was working on some change in our codebase.  One thing lead to another and the diff I submitted spanned eighty-some files, and over a thousand lines of modified code (adds, removes, and modifies).  

The first question I was asked in the sync code review was "how did this PR get so big?".  The short answer is that I mixed functional and aesthetic changes into the codebase:

- **A functional change:** changes the behaviour of the system, by adding functionality or modifying existing behaviour.  This might include adding a field to an API response, or some framework changes to database persistence.  
- **An aesthetic change:** changes how the code looks or feels, without altering functionality.  This is refactoring, or ergonomic changes.  It might look like renaming something, moving functions around.

It's a good question, though ("why is this PR so big?").  It implies that smaller, more frequent changes to the codebase, and subsequent automated deploys, are the goal (they are) and that  the natural enemy of this goal is large, many-file changes (it is).  That's mostly because they consume human attention, which is finite and valuable.

PRs (pull requests) represent a change the team wants to make to the codebase.  It's common practice that you have someone double-check the changes to the code _before_ the change goes to the `main` branch (a code review), and less-common, but higher value imo, to have someone double check your workings as you go (pairing / mobbing).  I previously thought that PRs represented a feature, but I don't think they do anymore.  I think they represent a safe change to the codebase in the direction of a feature.

As a rule of thumb, more regular changes to the codebase is better.  Big PRs make regular changes more effort, so probably decrease their frequency.  The alternative is less diligent review (easy), or higher reliance on tests (hard).

## So just make functional changes, then?

You can't just _not_ do either of these kinds of changes, though.  Either your code will never add new features (your product team and users hate you) or your code is horrible to work with and speed of iteration slows down (your engineers and users hate you).  

They're both parts of the code rainforest, like bugs and fungus.  The problem is that aesthetic changes take quite a bit of human understanding and produce quite a bit of visual noise to a diff.  If something's been renamed globally, there could be a lot of files affected.  Likewise if you edit the arguments to a function, or move something from one place to another.

In a visual diff (like you get on GitHub or BitBucket) these kinds of changes are given just as much visual weight as adding a function or changing its name.  It's up to the human doing the review to recognise this as noise over signal.

## Okay, so do them both but separately

I want to work on stricter segregation of functional vs. Aesthetic changes in a PR.  Martin Fowler ([in his book *Refactoring*](https://martinfowler.com/books/refactoring.html)) would encourage us to i) plan the change, ii) refactor to make the change easily, and iii) make the change.  

Pragmatically, and I'm sorry, Martin, I find it easier to recognise a lot of the necessary aesthetic changes _while_ I make the functional ones.  That's why I code with a notepad in front of me, to write down things I need to change or things which pop up.

This has the added values of:

- More immediate attention goes to solving the functional change than the aesthetic one.  
- Conversely, if immediate attention cannot effectively be poured into solving the functional problem, you've got a strong signal that you need some aesthetic changes.
- Sometimes writing down a grievance with the code is enough to get my frustration out.  I've said the thing's bad, I've recognised why, but I've got to move on.
- Putting time between thinking "I should refactor this" and "I am going to refactor this" filters out unimportant changes.
- You get a notebook full of largely indecipherable comments.  I review this every morning and at the end of every week, to refresh the pains I felt and ideas I had.  


## What now?

You can separate out your work via commit or via PR.  I'd advise by PR, because you can pick different reviewers for each.  That can spread knowledge about your codebase, and about general refactoring principles.  This can be really helpful for more junior engineers.

When opening multiple PRs, you will have to address the visceral feeling of shipping a feature to production and leaving your little JIRA card in "in progress".  I'm sorry.  If you've got feature-focused product teams or management, you might also find this a politically difficult move.  In which case: open a PR with changes stored by commit.  You can encourage reviewers to review a PR by commit, and do a mob review if you want to share the knowledge.





