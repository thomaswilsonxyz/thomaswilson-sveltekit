---
title: 2023 - Tools for Making Software / Default Apps
date: 2023-12-22T11:31:32.303Z
slug: 2023-12-22-2023-tools-for-making-software-default-apps
author: Thomas Wilson

---
Since at least 2019 I have done [Yearly Themes](https://www.themesystem.com/), which I heard of from the fine folks at Cortex Brand.

2023 was the *Year of Tools*, where I wanted to focus on the tools I use to do things (work things, fun things, any things).

I spend a lot of time building software: mostly with other people at companies, and sometimes for myself.  I've been doing this for about a decade, and I had found myself into a bit of a rut with the tools.  

I made good efforts this year to find the right tools for the job of building, testing, and using software.  It was a good challenge, and made me realise just how

About a month or so ago the *Default Apps* blog post idea emerged (I saw it from [Chris Coyier](https://chriscoyier.net/2023/11/25/default-apps-2023/), who got it from [Matt C.](https://mattcool.tech/posts/default-apps-2023/), who credits [Tracy D.](https://tracydurnell.com/)'s meeting in the Homebrew Website Club)

## Desktop Apps

- Warp ([warp.dev](https://www.warp.dev/)) is a terminal.  It does a few things really well: visually it's very pleasing; a non-historic text editing experience; the idea of 'blocks' which capture the output from a single command (and make them easy to copy/paste, and navigate between); and the built in AI chat-style interface for asking questions like "how can i do X".
- JetBrains IDEs ([jetbrains.com](https://www.jetbrains.com/)) are a suite of modern Integrated Developer Environments (IDEs).  I spend about 80% of my code-time in these editors (VSCode and vim take the rest), and they're just great tools.  Two main reasons: i) the refactoring tools are *incredible* - for renaming, moving, extracting code.  ii) the integrated testing experience (running single tests and whole suites inline).  Doing that in the IDE reduces both feedback time, and the effort it takes to get to problematic code.  I know you can do all these things with $YOUR_FAVOURITE_EDITOR, I know the JetBrains isn't free. 
- Tuple ([tuple.app](https://tuple.app/)) is simply the best pair programming tool and experience I have ever used.  Love it.

## AI

2023 was the year of generative AI.  We (humanity) are still finding what these tools are good for (summarising and re-wording) and useless at (creating new things).  But we *are* using them.

It's not as controversial as it was, but I use AI every day that I am writing code.  

I find these tools make two things *much* better: i) writing very generic boilerplate code, and ii) explaining previously-written code, and suggesting alternatives.  I use them every day, and they help me understand.

- Copilot ([github.com](https://github.com/features/copilot)) - Code suggestions (and recently chat-like interfaces) right in your VSCode and Jetbrains editors.
- ChatGPT ([openai.com](https://chat.openai.com/auth/login)) - Y'all know what ChatGPT is by now.  A chat-style interface for a Large Language Model.


## Command Line Tools

- jq ([github.com](https://github.com/jqlang/jq)): parse, filter, format JSON from the command line.  For example - I use this to format results from GitHub's CLI to get information about PRs and contributions etc.
- the silver searcher ([github.com](https://github.com/ggreer/the_silver_searcher)) is an ack-like tool for finding text.  It sounds basic to say "use this to find text in files".  I use it for finding TODOs in certain parts of code, or finding specific function/variable names across large parts of a codebase (for namespace collisions or similar patterns).