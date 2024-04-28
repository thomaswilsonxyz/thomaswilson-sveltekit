---
title: 'Tiny project: kindle-md-highlights'
date: 2024-04-28T07:57:03.086Z
slug: 2024-04-28-tiny-project-kindle-md-highlights
author: Thomas Wilson

---
tl;dr [source code](https://github.com/thomaswilsonxyz/kindle-md-highlights) for extracting notes and highlights from a kindle-made `.html` file.

---
 
Since 2020 I've been running [Obsidian](https://obsidian.md/) as my notes app of choice.  The hacker in me likes that it's just `.md` files all the way down (basically).

One of the things I like to do in Obsidian is keep a track of notes I've made from books I've read. 

I'm trying to throw together a book review (for the blog) of Cal Newport's *Slow Productivity*, which I read on Kindle.  so I went to extract the notes from that book (using an community-published extension that had previously worked).  For some reason, it wasn't working. 

The Kindle app lets you export your highlights as a `.html` file (assuming they're <10% of the book), and so I wrote a chipper little package (just one `.js` file) that parses through the HTML file, and `console.log`s out all of your notes.

It's hella brutalist, you have to just copy-paste the output from the terminal, but it took <1hr to throw together, and now my notes from Slow Productivity are in my Obsidian vault, and I can *get on with writing the damned review*.