---
title: "Little Project: Oddbox Scraper"
date: 2023-01-12T19:59:32Z
slug: 2023-01-12-2023-01-12-little-project-oddbox-scraper
author: Thomas Wilson
---

tl;dr : I wrote a serverless app (AWS, terraform) that scrapes the Oddbox "upcoming deliveries" page once a day, and sends me an e-mail with the contents so that I never have to check manually.  [Here's the github link](https://github.com/thomaswilsonxyz/oddbox-scraper).

For the past two years I've been an Oddbox customer.  It's great: once a week a little box full of fruit and vegetables turns up at my door.  It's food that farmers all over the world weren't able to sell through their usual channels, because there's too much of it, it looks weird (or *odd*), or there's too much to sell.

One thing I didn't like about was how they let you know about upcoming deliveries.  In order to know what would be arriving so I could, for example, plan my meals - I would have to do the same ritual every week: search for `oddbox upcoming deliveries`, and be taken to the [same page](https://www.oddbox.co.uk/box-contents) on their website, have to figure out which of the two (identical) options was the one I wanted, and find a list of the fruit and veg.  Then move that to my note taking / meal planning app *du jour*. 

So now a robot does that annoying dance for me.  The code is JavaScript (built from TypeScript) that runs on a lambda, on a schedule (once per day).  It goes to the web page and scrapes the HTML, determines what fruit/veg are coming.  It uses DynamoDB to check to see if there's new data in today's scrape.  New data is persisted in DynamoDB, and an e-mail notification is sent to me by SES.  I also use SQS in there, but mostly because I was curious about queueing.

All of the infrastructure is defined in Terraform (with sensitive information variablised) and can be deployed on AWS.

Once again, [here's the GitHub link](https://github.com/thomaswilsonxyz/oddbox-scraper).
