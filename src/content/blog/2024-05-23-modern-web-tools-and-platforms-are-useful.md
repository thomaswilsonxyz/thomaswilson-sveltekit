---
title: Modern web tools and platforms are useful.
date: 2024-05-23T07:12:06.583Z
slug: 2024-05-23-modern-web-tools-and-platforms-are-useful
author: Thomas Wilson

---
My very first serious software product was built in Ruby on Rails, around 2014.  [Ruby](https://www.ruby-lang.org/en/) is a programming language with a relatively small, but happiness-oriented, community around it, and Rails is a framework for building web applications in Ruby.  Around 2010, [Rails](https://rubyonrails.org/) was *the* framework to build things in.  Twitter and GitHub (among others) ran for many years on Rails. 

Rails is a monolith that Does Everything™.  It's one big bit of software that does database things, data validation, user  authentication, HTML rendering, logging, etc. etc.  You pop your Rails app on a server with a database, pay $0-5/month for hosting, and you have a *full* piece of software.  

Rails is also famously opinionated.  It believes in [Convention Over Configuration](https://rubyonrails.org/doctrine#convention-over-configuration), meaning that the framework has a right way to do things, and your job as a developer is to follow those ways.  In return, you gain productivity.

Pretty early in my career, I started building building software for the web (semi-accidentally).  I found that I had an appetite for front-end work, i.e. building things you *see* when you go to a website.  This gently turned into building the tools for other engineers to build those little rectangles.  

Around this time, some of the very largest technology companies, Google and Facebook, released a framework and a library (Angular and React respectively) for building web interfaces.  The idea of these tools was "hey, user interfaces are getting more complex, why don't we have tooling for building the visual part of a website, and not worry about the other bits, like databases and servers?"

I have complicated feelings about this shift from monolithic full-stack software (like Rails), and separated smaller software (like React).  I really want to love them, I really want the simplicity of them, but like... the user-experience of modern web can be (but is not always) *so* good.  And also, the developer experience of newer tools is *so* much better.

I miss how "simple" things were when working with Rails.  In web development there's the CRUD operations: Creating, Reading, Updating, or Deleting.  This is everything you can do with data: make it, view it, change it, or get rid of it.  Full-stack frameworks like Rails make these operations real easy: from rendering the "edit" page, to submitting the form, and updating the data in the database - it's a solved convention.

When you eject from big, opinionated frameworks, you still need to do your CRUD operations.  But you end up having to build your own conventions.  Similarly, you now need to have opinions about form validation, HTTP authentication,  database adapters, erroring and logging, testing and routing,  naming conventions.  By accident, each company ended up building their own Whole Thing™.

I've not had *loads* of time in the last year, mostly because I'm planning a wedding for this summer, but I have been able to build some side projects.  For example: I built the website for our wedding.   I also tried to build out a couple of Cool Ideas, specifically in Ruby (with and without Rails).

I'm going to be honest, the developer experience of working with tool like Rails just... wasn't good. 

Before I speak a bit more about the web in specific, I want to clarify that I rediscovered how much I love working with Ruby.  The syntax reads so well.  I wholly recommend [Why's (Poignant) Guide to Ruby](https://poignant.guide/).  If I start talking here about what makes Ruby Legitimately Elegant™, I'll loose everyone.

There are two things that made working with Rails frustrating to me:

1. Working with your own source code, namely a lack of types / intelli-sense; and
2. Working with other people's source code, namely a lack of documentation and/or examples

It's not a coincidence that two currently relatively popular languages (TypeScript and Kotlin) are maintained by companies who also build tools for working with the source code.  Microsoft manage TypeScript and build the VSCode editor, and Kotlin is managed by JetBrains of Intelli-J fame.

As a developer, working with either of those languages in those editors is a *delight*.  Both run Language Servers, i.e. little bits of software that parse through the source code you're editing, and allow you to navigate your way around the codebase (go to where something is defined or used), and let you preview the in-code documentation without leaving a file.

These are nerdy-ass details, yes, but man, I got one of them small brains.  I'm trying to express an idea in code.

And these benefits aren't limited to accessing your own source code.  When you pull down a package or dependency to work with, it's just as easy to snoop around the code that someone else wrote, and figure out what's going on. 

Working with some Ruby packages made me feel pretty bad that I couldn't "just figure it out".  Luckily, co-pilot had seen it all before, so was able to make pretty useful suggestions.  But the quality of documentation for some of these packages, some of them with hundreds of millions of downloads, was varying and scarce.  They each assumed that you already knew what you were doing.  Imagine Google's worst, auto-gen'd Cloud Platform docs, but everywhere all of the time. 

And then there's the dozen or so paper cuts: modern web tooling has hot-reloading (where your preview in a browser changes as your source files change), so it's easy to see the impact of a change you've made.  There's template-style files (where your markdown, styling, and script are all in the same place).  There's ad hoc support for css/js imports.

I don't really know why we didn't see a "Rails for X" emerge, where X is a modern language with a community and company that are responsible for the developer experience.  Maybe we're... happy?  Each of us building our own horrible jenga towers.  

But that feels frustrating and I don't like that.  I want to build cool shit and deliver value.  Life is short, too short, hardly long enough, and spending it tinkering with co-pilot or trawling 7+ year old threads on Stack Overflow doesn't fill my cup.

Maybe I'm not smart enough or too impatient for it, but I think on some level, the grumbling about how modern web tooling is too complex and "I miss Rails" is really just  "I miss when I had to do fewer things" or "I miss when the web was used by fewer people and those people were mostly nerds". 

Yes, modern web tools are very prone to unnecessary complexity.  But so is pretty much anything humans do (see also: bureaucracy, product design, customer support with any large company)
