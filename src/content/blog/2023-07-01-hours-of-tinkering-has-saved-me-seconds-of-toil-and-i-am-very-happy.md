---
title: Hours of tinkering has saved me seconds of toil (and I am very happy)
date: 2023-07-01T14:16:21.605Z
slug: 2023-07-01-hours-of-tinkering-has-saved-me-seconds-of-toil-and-i-am-very-happy
author: Thomas Wilson

---
In January, [I wrote about](/blog/2023-01-12-2023-01-12-little-project-oddbox-scraper) a tiny bot that I built in a week which goes to the "Upcoming Deliveries" page on ODDBOX (a fruit & veg delivery company in the UK), does some simple HTML scraping to find what fresh food I can expect to have delivered, and then format that in an email to me.  Once a week I get an email telling me to expect beetroot or whatever.

I had to build this because despite receiving a weekly email from ODDBOX themselves, those emails would always redirect me to some marketing landing page, and I'd have to click around from there to find what I wanted.  I'd have to do the same dance every week, where I would have to look at two unordered date ranges in my head and think about "wait, is this this week or next week?  What date will next Monday be".  It was 10 seconds once a week and it was maddening.

I suppose there's a KPI somewhere for website engagement or conversion to other e-commerce services.  Having someone land on your website means you can probably upsell them a little better.

But I have a KPI in my life for "amount of time spent doing toil" and I want that to be basically zero.  I wish to decide how to waist my own time.

The great time wheel turned over within ODDBOX and they shipped a redesign on their marketing site.  It looks okay, as these things go.  But it broke my fragile path selectors.  Won't some poor software engineering team member think of my fragile path selectors.  

I _guarantee_ you that the time I spent debugging and fixing this far exceeds any time this bot has saved, but it didn't feel like toil.  It felt like fun tinkering.

Another thumbs-up for terraform here, too.  I checked my README for the deploy commands, ran them, and they worked.  IaC is cool.  Anyway, I'm going to go resume waisting my time.