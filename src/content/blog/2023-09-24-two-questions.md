---
title: Two questions for insightful technical interviews
date: 2023-09-24T08:22:49.331Z
slug: 2023-09-24-two-questions
author: Thomas Wilson

---
## tl;dr The Questions

1. **Can you give me an example?** If the candidate is using all of the right words ("feedback", "delivery", "tests") - pick (any) one of them, and try to learn as much about an example as possible.
2. **What would *you* do instead?**  If you're hearing a lot of criticisms about products or processes, this is a great question to see if a candidate has spent some time thinking about what could be done.  What I am looking for here is a *generous* interpretation of colleagues and business - or are all the problems because the people around them are incompetent and don't care?

## The Problem

I am currently interviewing for a senior (or lead) software engineer to join the team I am working with.

Interviews are hard for everyone, but for now I'm talking about how they are hard for the folks who are hiring, not the folks who are being hired.

The problem is that you want to learn, quickly, if a candidate meets some competence threshold.  And you want to learn that as fast as you can, so that you don't waste so much time and effort interviewing someone who isn't right.

*But* you also want to give every candidate the chance to show you the best version of themselves.

So how do you learn, as quickly as possible, what the candidate is best at, is most interested in doing, and if they're *actually* good and interested, or if they're just saying the right words.

## What do you talk about?

One of the hard things about this process is looking for specific examples of things to talk about.

You could talk about singular bits of code.  But these are so context-dependent, that going too granular or atomic misses the bigger picture.  Is this code consistent with the things around it?  Is this code even necessary?  

You can talk about bits of architecture.  But these aren't useful without understanding the business and infrastructural demands on the system.  Did we really need a queue here, or is it overkill?  What does "peak" demand look like?

Or perhaps we can talk about the individual and team practices that hold this all together.  But the daily practices of engineering can be Cargo Cult'd or mis-labelled.  Are retros only used when things go wrong?  Do stand-ups go on for *far* too long?  Are code reviews the first time an engineer asks *why*?

The breadth of these questions make it hard to assess knowledge, especially in a thirty-sixty minute phone call.

## Observations, Judgements, Suggestions

On one level, you are trying to learn about the above: the more objective truths and observations.  For example, the team rely heavily on code-reviews, they have a manual testing team, and monthly releases. 

On another, you're also trying to see if the candidate is making any value judgements.  Is the code they and their team write different from another team's, and is that a problem?  Is the CI/CD pipeline successfully shared and always being improved?  Are the agile practices that scaffold the day/week/season of their work too strict?

And then you want to ask *what would you do differently?*

What's interesting is that these three layers (observations, value judgements, suggestions) don't always depend on each other.  Some candidates narrow the scope of what they're looking at, and locally optimise.  These candidates can dig deep into a problem, like building out a whole new authentication flow for the app, and emerge with a very robust solution.

Other candidates might be more concerned with how work is defined, described, and prioritised - either as part of the engineering work, or before it reaches them.  These candidates can empower the whole engineering team to deliver the most valuable features first.

You can imagine how these different kinds of candidates would make different suggestions.  A narrow and technically focused candidate might suggest that clearer infrastructure-as-code practices could make things better.  A more product-flavoured engineer might talk about roadmaps, ownership of tickets, and acceptance criteria. 

These things all have value.  So you need to understand what kind of value is best for you and your team.

## Letting the candidate direct the talk 

There's a thousand flavours of software engineer, and I think you have to accept this, and not go into an interview with too much opinion what what you are/not looking for.  

And you have to accept that these different flavours have different skills.  You're looking to see what makes *this* engineer the most effective they can be.

But you still need to learn if they *actually* do what they say.  I found that if you're not careful, too many engineers have a fantastic introductory phone-call where you're really impressed by all their words.  But then you get to technical interview, and you don't see any evidence for... anything they said they could do.

So I found the most insightful (for me, the interviewer) questions I can ask are:

1. **Can you give me an example?**
2. **What would *you* do instead?**  

### Can you give me an example?

I find this one useful if a candidate starts sounding a little generic.  Maybe they're talking about how important "feedback" is.  But feedback from who, to who, collected when, and integrated how?

When was the last time a candidate *tried* to talk to a user?

Perhaps a candidate is talking an awful lot about how good tests are.  What kind of tests, where do they run in the development process, and what if they're flaky?

### What would you do instead?

It's okay for candidates to be frustrated at their current position.  They are in an interview an another job - people don't just leave jobs that are super fulfilling (most of the time).  I think it's important to understand what things made the candidate feel powerless, and like leaving was their only option.

But sometimes the floodgates open.  The candidate is being incredibly critical of their current team or employer.  Maybe they don't like the way the team is structured, or the work is defined, or bemoan the lack of tests or CI/CD.

What I am looking for is a *generous interpretation* of problems.  Is the candidate able to separate out their personal or theoretical gripes from the real world constraints that affect the (real world, not theoretical) cost of solving a problem, and the benefit of having solved it.

The even better follow-up question is "have you made these suggestions to anyone in your team, or your manager?".

If someone is only interested in calling-out, or in armchair architecting - then they might not be aware of some of the more pragmatic constraints.  

Un-generous or pessimistic attitudes can corrode or rot a team, I think, from the inside-out.

