---
title: "Seven Days with Terraform – Building Serverless Applications and their Infrastructure"
date: 2023-01-15T19:45:37Z
slug: 2023-01-15-seven-days-with-terraform
author: Thomas Wilson
---

Earlier this month I wrote about a side project I built which tells me about my upcoming vegetable box delivery ([link](https://thomaswilson.xyz/blog/2023-01-12-2023-01-12-little-project-oddbox-scraper)).

99% of software I have ever deployed (non-professionally) has been monolithic.  It has been a single process that spins up a web server (Rails, Express, Spring Boot).  If they're not monolithic servers, they're monolithic frameworks that generate HTML, CSS, and JavaScript that ship to the user *somehow* (this site just generates then serves those files via Netlify).

The Oddbox Scraper application makes it into the 1% of deployed code which isn't running inside of a monolith.   

I think it's the first bit of code I ever designed and wrote alongside the code that would deploy it.  Previously I'd spin up a Digital Ocean or Render or Linode virtual machine and away I'd go.  

Why?  Because it felt like a blind spot, and because there's a difference between knowing something and *knowing* something.  One of those things you only learn by doing.

I wrote the app for the AWS serverless environment, and managed the necessary infrastructure with [terraform](https://developer.hashicorp.com/terraform/intro):

> an infrastructure as code tool that lets you define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share.

Terraform has been happening around me for at least the last three years, but it's never been the right tool for the problems I'm facing.  But I wanted to give it a go.  

I gave myself seven (non-consecutive) days to build and deploy _something_ in a serverless/distributed way, without rushing past important AWS or Infrastructure decision/concepts.

This post is a (tiny) tidy up of the log I kept during those seven days.


## Known unknowns

I left this project with things that I now know that I don't know enough about:

- **Roles, Policies, Accounts, Permissions, and Assuming Roles in AWS**.  My intuitive understanding of these things, the way they're used in the docs, and the things I had to do to get something to work all felt very unfamiliar to me.  And also very high cost: get this wrong and this (or a future) system could be vulnerable to exploitation.
- **Testing AWS Services**:  The core of this application is very simple: a lambda scrapes data, data is put on a queue, another lambda takes the data off the queue and sees if it's new.  So much of the detail here relies on the *implementation* of the AWS services (like DynamoDB) which were developed/tested with a lot of manual (using human eyes and the AWS Console) to see if things had worked.  I didn't like that.  


## Things I didn't do but would want to

I intentionally limited myself to seven days of working on this project.  That meant there are things I didn't get a chance to do yet:

- CI/CD Deployment with GitHub: It would be great to do a dry run (and tear down) of the project in a test environment as part of every CI/CD push.  This involved some account setup work that I didn't want to do, just yet. 
- Find the specific day in a date range: the results for a specific delivery are given as a range (e.g. "11th - 17th January") but I know my delivery will always come on a given day (e.g. on the Tuesday between that range).  So I would want to find that specific date in the range, and use that.  [GitHub Issue Link](https://github.com/thomaswilsonxyz/oddbox-scraper/issues/2). 


## Day One: Terraform quick start

We mostly use AWS at work, so I got going with Terraform's [Get Started - AWS](https://developer.hashicorp.com/terraform/tutorials/aws-get-started) guide.

It takes you down the EC2 instance path, i.e. setting up a virtual server.  If I wanted a virtual server I'd use Digital Ocean or Linode and deploy an Express or Rails application.  

So I immediately went about hacking together a Lambda, using Medium articles (many low quality posts), GitHub's co-pilot (some high quality suggestions), and GitHub examples (pretty high quality).

By the end of an hour or so I had a function written in TypeScript (compiled to JS with esbuild), and deployed to AWS.

I also had a lot of fun figuring how AWS credentials are stored locally, using [AWS's docs on the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

## Day Two: Triggering the Lambda on a Schedule

Today I decided on _what_ I would build: a serverless application which could (automatically) look to the upcoming delivery of Oddbox, the fruit-and-veg box provider who deliver me delicious food every week.

I spent maybe twenty minutes creating a TypeScript (learn one thing at a time, Wilson) project, and wrote a script that used axios to fetch the HTML, and cheerio to parse and query it to get the data I wanted.  I used esbuild to bundle typescript to self-contained JS files, suitable for a lambda.

I spent a lot of today (hours) attempting to get a Lambda to trigger on a schedule by using EventBridge Scheduler.  I wasn't able to, but was able to set up an EventBridge Rule with a Target of the Lambda.

## Day Three: Lambda => SQS Communication

I managed to get the scheduled Lambda running in <20 minutes by using Cloudwatch Events.  From what I can tell it's using EventBridge under the hood, but it was available in `eu-west-2` and also worked first time without complaint.

My focus other of this day way getting the results from a web scraping operation into a known format, converting that to JSON, then sending that over to SQS.

I'd then use another Lambda to process this object: check to see if it's new information or not (by checking some persistence layer, likely DynamoDB, but I'm delaying that decision).

I then want to trigger some kind of notification (probably an e-mail, maybe a WhatsApp/Signal/Telegram message if I can get that working).

I spent most of today learning about all the granular activities, like pushing and reading messages from an SQS queue.   

While reading around Terraform's docs I noticed they have a nice pattern for storing AWS Policy documents (bits of code that grant permission to a resource to do a certain thing, e.g. allow a specific lambda to read messages from a specific queue).  They declare them as `data` objects (?) in terraform them, then JSON-ify them out in the resources (e.g.a `aws_iam_policy`).  This felt a lot cleaner than defining inline JSON with `EOF` markers


## Day Four: DynamoDB

In order to know if the result from a particular scrape of the Oddbox website was new, I needed some level of persistence.  DynamoDB (AWS' no-SQL serverless database) seemed to be the most sensible place start start.  It feels a little like using a race car to drive to the end of the road.  DynamoDB can do _huge_ volumes of data and staggering speed, and I'm popping some data in there once a day.

This was the first day where I felt I had a clear mental model about deploying a particular kind of resource (a DynamoDB table), and how to use both AWS' and Terraform's AWS Provider documentation pages to get the information I needed.

I learned that you cannot have multiple `aws_iam_role_policy_attachment` resources targeting the same IAM role (thanks, [StackOverflow](https://stackoverflow.com/questions/45486041/how-to-attach-multiple-iam-policies-to-iam-roles-using-terraform)) so I got to do my first programatic for-each loop in Terraform, which was cool. 

It also felt pretty nice being able to debug the above problem by clicking around the AWS Console and actually being able to (intuitively) see what the problem is

## Day Five:  Lambda-SQS-DynamoDB-SES 

This was the day I managed to get an end-to-end workflow for the software working (Lambda-SQS-Lambda-DynamoDB-SES).  The software went to the Oddbox website, checked for upcoming deliveries, and sent me an e-mail about new ones.  This is the motivating feeling of writing software: seeing a thing you _wanted_ turn up in your e-mail inbox.

Domain validation for SES (Simple E-mail Service), so that I could use `@thomaswilson.xyz` addresses, went super smooth.  The new DomainKeys Identified Mail (DKIM) meant just adding some CNAME records against my DNS records, and within 15 minutes I got my first e-mail to send.

I had some issues doing (an intuitively simple) query on DynamoDB to see if the data coming through from Oddbox was new or not.  Once again: read the _whole_ error message, The role I had set up did not have permission to read an index on a DynamoDB table.  Granting access to a Table does not grant access to that table's indices.

I also learned the difference between a Query and a Scan ([official docs](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-query-scan.html)) in DynamoDB.  I found the [DynamoDB Guidebook](https://www.dynamodbguide.com/key-concepts) useful for explaining some of the big words.

DynamoDB is the least abstracted interaction I've had with a database.  It's good to get exposed to some of these things.

## Day Six: GitHub repo

I spent today getting the [code onto GitHub](https://github.com/thomaswilsonxyz/oddbox-scraper).  

This largely meant following [Terraform's own docs](https://developer.hashicorp.com/terraform/tutorials/configuration-language/sensitive-variables) on removing sensitive information from the code, and variable-ising all of it.

Getting rid of the worst of the hackiness from the code, and parameterising the sensitive information took as long as I expected, but it's easy to underestimate. 

## Day Seven: AWS IAM Identity Centre

More reading that coding today.  I haven't quite grokked some of the core ideas around authentication and identity in AWS.  I want to deploy this app inside of its own AWS account so it doesn't pollute one which I might end up using for other projects.

The words I *see* used, but struggle *to* use are roles, policies, users, accounts, and credentials.

So I dragged up the AWS [documentation on the AWS IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/users-groups-provisioning.html) and started reading.  

I also found the [Best Practices in IAM page](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) quite useful.

The question in specific I wanted to answer was: could I create a completely separate *place* (account? environment?) for integration testing.  I don't think I'll have time to address in the seven day countdown. 

I ended up creating a sub-account inside of my own Organisational Account/Unit, which seems to have done the job.  The code deploys in a completely separate place than previously.   Don't forget to blast out any cached terraform data in the directory, as switching the credentials and target AWS account caused some ruckus.
