---
title: Learning with Large Language Models
date: 2025-03-04T18:52:43.299Z
slug: 2025-03-04-learning-with-large-language-models
author: Thomas Wilson

---
For most mortals, nothing is as beneficial to learning as asking questions and receiving answers.  This is the core of a Socratic Dialogue, a technique made famous by the Ancient Greek philosopher but I'm fairly confident that two people had spoken back-and-forth on a single topic at some point in the millennia preceding Socrates.  In fact some people of that time wrote books (well, not technically "books"), and we still have copies of that writing today, so I'm willing to double-down on this.  People did, in fact, ask questions.

Funnily enough, the idea of back-and-forth conversation was core to what I did my Ph.D. in: can asking people the right questions, at the right time while they do lab work in pre-university level chemistry help them understand what's happening.  How can we get someone to engage in what they're seeing and doing, using the mental models they've learned?

I never really went further with my science education than pre-university level, and even then only *barely*.  Shame really, a lot of people are very convinced my entire industry (that of building and maintaining systems of software) is about to be quite transformed by generative AI, especially the technology of Large Language eModels (LLMs).

… I want to talk about how LLMs have transformed my daily practice as a software engineer. 

In a lot of ways, my first experiences with programming was similar to what I saw science students do in the labs.  So long as they followed (roughly) the right instructions in (more or less) the correct order - The Thing That Should Happen *will* most likely happen: something will change colour, or temperature, or dissolve, or whatever.  This was my experience learning Ruby on Rails.  

For the unfamiliar: Ruby is a programming language, and Rails is a framework for building web applications with Ruby.  Ruby is a great little scripting language, e.g. for moving and sorting your photography files workflows.  Or for making calls to simple REST APIs to get the weather from your command line.  Rails adds a bunch of common use cases for applications into Ruby in a really neat way.  It makes things like generating and rendering HTML, or authenticating users, really easy.

It took me *years* to get as familiar with another language as I did with Ruby.  I almost accidentally learned the language while also using the framework.  It's like saying I learned to use a sewing machine by learning to make clothes.  The fact that I could build an astonishingly rich web app without really knowing how… that's the magic that got me hooked on programming. 

As a side note: looking back, I don't know why I tolerated the relative unproductively of writing software in JavaScript and TypeScript.  Things are better now, we've got tooling and  metaframeworks that string it together to build web-first applications.  Building with JS at that time (2013?) was sparkling wine: fizzy, heady, but not filling.  Although Rails seems to have found its natural ecological niche, the rise of  "old school" frameworks like PHP's Laravel or C#'s .NET show there's an appetite for these Batteries Included (tm) tools.  I digress too far.

For my new job, I am learning a lot of Kotlin and Spring Boot.  Neither of these are wholly new to me, but I haven't had to write production-ready other-people-readable code in a while. 

These are two *very* popular tools.  Spring Boot more so than Kotlin.  And my experience of learning it on the open web has been … awful.  I have read Medium blog posts which have used screenshots of their code (inaccessible, annoying); I have landed on articles in content mills with AI-generated header images and sibling articles on rabbit hutches and double glazing (dubious quality); I have found articles that I am 100% confident a human never proof read, and articles that I am 100% confident *nothing* has ever proof read.

The one, shining example is [Baeldung](https://www.baeldung.com/) - as a reliable source for information here.

This is a problem generated almost in totality by per-view advertisement models, Search Engine Optimisation, and generative AI.  The modern web is sprawling, and curation and editorial quality are invaluable to us humans but discarded by the machines and the middlemen.  Content, click-through onto content, and time on page have been rewarded above all else.  And now the companies that rewarded this behaviour are slowly turning off the tap of traffic they are sending to these websites in favour of viewing their own AI-generated content which they trained on _checks notes_ everyone else's shit.  

This is [Google Zero](https://www.theverge.com/24167865/google-zero-search-crash-housefresh-ai-overviews-traffic-data-audience) and it represents a big challenge to an ever-wounded and anaemic journalism or writing practice.

I worry for the future of the modern information ecosystem.  But also I do need to learn Kotlin so that I can stay employed for three more weeks before six square feet of server farm GPUs take my job.  And I need to get familiar with Spring Boot. Although I am grateful to my employer for providing me with an [O'Reilly subscription](https://www.oreilly.com/), and for the authors in that pool of books for introducing me to the foundations of everything… sometimes I just have questions.  

This is my third or fourth language/framework combo.  Thankfully, I have quite a lot of experience writing, reading, and maintaining software.  So what might start as a really simple question ("what is that `@Bean` decorator doing?") will sometimes become a bit more complex ("how is Hibernate doing all of that with *just* a method name, no but really when?").

Using an LLM (I use [Claude](https://claude.ai/)), I can go  through those depths of questions.  Because Claude was trained on everyone else's shit (see above), and everyone else would love to tell you about this framework called Spring and its best friend Spring Boot - Claude knows a lot of stuff.  Or rather, Claude is able to generate text based on other texts about this stuff, and can pull from anywhere (Kotlin, Spring (Boot), Software Architecture) when the conversation meanders. 

If I was a novice engineer, my experience would be *awful*.  Well, no, my experience would be delightful, but my knowledge would have some quite fatal flaws.  I have caught Claude lying to me far more than any human teacher I ever had.  I don't love how quickly the lies are validated after you make the simplest of observations: "How can those things wire together, you have named them differently?".

LLMs are confident lying machines but so are our brains, so in a sense we've made AI in our own image which is cool because we're handling this volume of information and connectivity quite poorly.  Another digression.  A decade of experience reading, writing, and improving code has made me comfortable with this kind of work - with cross-referencing, identifying patterns or structures, thinking about tradeoffs.  

Even with all of these caveats, with my own mixed feelings on LLMs and learning and programming… this simply *is* the best way for me to learn this new language and framework.  I can't find high quality information on the internet anymore because advertisers and then AI ruined it, and so now I pay for the privilege to part-solve the problem.

I'm building a little toy project and I'm talking with Claude and I'm getting there… I am actually learning.