---
title: "Complicated and Maybe Not That Useful – Modern frontend tooling"
author: "Thomas Wilson"
date: 2022-04-26T06:03:00Z
slug: "2022-04-26-complicated-and-not=-that-useful"
draft: false
tags:
  - web
  - product
  - rails
---


**Prologue** Hi there, this is 🔮 Future Thomas 🔮 here.  I'm re-reading this post while editing and, my friend, a lot of the first-draft of this post sounded like borderline heresy and also like the Remix framework and its team had personally wronged me.      It's not and they haven't.  I've taken out some of the spicier takes (but left in a few cusses, for flavour) - but a pinch of salt and a generous interpretation would be great on this one.

---

Nearly ten years ago I was gifted a book called _Agile Web Development with Ruby on Rails_ by a guy called Mark.  That book was a gateway drug to an (ongoing) career in software engineering.  About five years ago I left the Rails pen (wen off the rails?) in favour of building modern frontend applications, first in Angular and then in React.  

Stop me if you've heard this one: but I like Frontend Engineering because it gives me immediate feedback from building products and features.  But I learned I just liked building products and features, which usually need a UI.

I have a pretty good knowledge of these UIs.  But now, in 2022, I couldn't use this knowledge, in its totality, to throw together a functioning side project of medium complexity in a few months.  I'm a product engineer who couldn't build a product.  Admittedly I had other things going on, but wow.  

I don't think I've been set up for success.

A lot of modern frontend tooling is secretly platform tooling without the grizzled veneer of other platform tooling.  Just replace yaml for json or .config.js files.   Get Jest, TypeScript, WebPack, Prettier, and ESLint to play nicely together. These are some of the most popular tools in the ecosystem.

As one engineer, very few of the tools I use and build (data fetching, client-side caching, systemic design) help me build and ship something meaningful.  They're parts of a platform.

I've never had more tools help me do less.

*Nah, software is just hard to build*.  Nope, I think we made it too complicated.  There's more to this than "man who learns frontend can't do backend", I promise.

## Complexity!

I'm enjoying my time as a Serious FrontEnd Engineer(TM), I've built satisfying things that I am proud of.  I've built design systems and product prototypes, I've become very fluent in TypeScript and JavaScript and even up-skilled new and mid-level engineers.  I've helped teams think about product and design in a more serious way.  I've grappled with Webpack and played spin-the-bottle with Package version bumps, I've set up mono-repos, minifiers, and css modules. 

How many of these labours are in service to an end user?  And how many are in service of engineering?  How much necessary complexity have I introduced but shifted around?  How much unnecessary complexity have I introduced?

I'm starting to think that some of the ways I've built software before is complex but not that useful.  The UI-Server anti-monolithic architecture might not be the first place to start.  It might not even be the second step after that.  

When I've seen the attempts to break apart a monolith, it's more often been because of the needs of the company or engineering team making the product - not the user.  

The structure of software mimics the structure of the organisation that creates it, that's [Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law).

I think it's weird that the solution to product and organisational complexity is to create technical complexity.  I think it's weird that I thought you had to *start* building as though you were a rapidly scaling team.

I think there are more ground-level questions like "does this feature exclude any of our users?" or "how will we know if this feature fails?".  I think we build software in service of our users *despite* this complexity.  We might even be able to build  better software without it.

## I want to build something 

These aren't just five-dollar words.  Three months ago I became concerned that the thing that got me into being a software engineer (building cool shit) isn't something I do these days.  Especially as one human engineer with a full-time job (doing work I enjoy with people I respect), and having a specialised knowledge of frontend tooling.  

The last side project I attempted in earnest was a native iOS app (RIP [Dash](/blog/2021-04-12-dash-cycle-01-reorganising)) in which I learned that native development is _not_ for me ("SwiftUI is production ready").  After that, I got a promotion (🎉), and after that I decided I might have the bandwidth to build something else.

Recently I've been trying to improve my French proficiency (*la pandémie ne m'a encuragé pas de tout*).  So let's build a tool I can use to help me do that.  Something to help me track the word's I'm learning and then maybe even use them to test me.  Nothing groundbreaking, stuff you do in your notebook.  Bread and butter language learning tools.

I figured that to do this I'd need:

1. **UI/Client Side**: A modern-looking UI built using standard(ish) web tools, which can handle moderate complexity (like comboboxes and interactive search)
2. **Server Side**: A server to run code which i) is secure, ii) can separate secrets/credentials from the client, iii) doesn't require me to reinvent the wheel for basic API conventions (versioning, routing)
3. **Inevitable Integrations**: things like transactional email, authentication stories, and media CDNs will always creep up on you.
3. **Data**: Persisted data storage, like a database
4. **Infrastructure & Tests**: Simple infrastructure and automated CI/CD, to run tests and automatically deploy.  I'm too far gone into TDD-land, I need a good testing story.

So I went looking for the tools or frameworks that could help me do that, while not completely disregarding everything I've learned (and got good at) recently.  Surely I'll be more productive if I write software in the language I'm really fluent in?

The problem is that a lot of very clever people and successful companies have demonstrated that divorcing client from server can result in some great tools and experiences.  There's a lot of libraries and frameworks that'll do this for you.

Anyway, I looked for a framework.  A popular and easy choice for many would be a [NextJS](https://nextjs.org/).  I used Next as a  freelancer, and found the whole un-opinionated API route story an unsatisfying answer to a moderately complex server app and also to testing.  

After looking around, I found [Remix Run](https://remix.run/):

> a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience

I gave Remix the college try.  But things didn't work out between us.  I've got a thousand-some opinionated words about it (which I might publish after the mind-dust settles).  

Tl;dr is that it didn't let me build things the way I wanted, but wasn't great at offering alternatives or forewarnings about what would/wouldn't work.  There was a lot of "try it and see".  Plus maybe having React as the _only_ way to generate a DOM isn't an unconditional advantage.

## Back to the Checklist 

That technical / component checklist above could read the same for any medium+ complex application with a web-powered GUI.  

If you're a team of two or less, and you want to ship medium+ complex products at medium+ speed, then you need a framework to do it.  Or a lot of patience.  You can't just piecemeal solve each of these problems as they arise by smashing together different libraries.  Because now you're building a web framework _and_ a product and you're only a team of two.

Any JS-backed framework invites people to add their favourite card to the house of cards. Which means some complicated build tooling to get 10+ years of JS to place nicely together.  But complicated doesn't mean good or useful.  

If you want someone to make a decision faster and without regret, give them fewer choices and have them make their decision faster.  If you want someone to make a better decision, make it the only decision they have to make and have them make it first.  These are psychological truisms that help us design better products (and lives) but apparently we forget them in our own homes (in this metaphor, the codebase is my home).

Diversity and optionality in open source software are so so essential to the ecosystem, but as an individual I have to ignore all but the 0.001% that I'm using to build my tiny thing.  Which I have to use to clump together the same functionality everybody else is writing: authentication, routing, logging, etc.

The JS ecosystem gives you so many options.  I don't think lack of options is a problem in software in 2022.  The problem is deciding what, *exactly* what, you're going to make 1% better today.  If the answer is always something like "my state management library" then you should ask who's making things better for the user, because it might not be you.

The energy I put into gluing pieces of the ecosystem together isn't energy I'm putting into building cool shit.  It's the exact opposite, it's energy into building really boring shit.

And that's why I've started exploring Rails again.

Because nothing since Rails has made me feel so empowered as one person to build such a complete product.  I'm sure people feel similarly about PHP and Laravel, or Python and Django.  The opportunity and coolness cost is high, but I think it's worth it.  Because it lets me build cool shit. 
