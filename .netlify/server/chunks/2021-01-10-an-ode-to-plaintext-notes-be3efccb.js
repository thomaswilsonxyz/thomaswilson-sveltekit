var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _2021_01_10_an_ode_to_plaintext_notes,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "author": "Thomas Wilson",
  "date": "2021-01-10T00:00:00.000Z",
  "draft": false,
  "slug": "2021-01-10-an-ode-to-plaintext-notes",
  "title": "An ode to note taking with markdown files",
  "tags": ["notes", "markdown"]
};
const _2021_01_10_an_ode_to_plaintext_notes = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>This is based off a <em>sesh</em> (think <em>lightning talk</em>, but\u2026 cooler?) I gave at <a href="${"https://www.oxwash.com"}" rel="${"nofollow"}">Oxwash</a>, where I am a frontend software engineer. I wanted to give an overview for how I take notes in pretty much every area of my life, including my job but also for holidays, notes from books I am reading, and for writing posts like this.</p>
<p>Over the past twelve months my thinking has converged towards the idea that plaintext files (like Markdown) are a great choice for note making and keeping. Please, let me explain why.</p>
<p>I\u2019m not going to talk about any particular software in this post, just explaining why I think plaintext is cool. God I love the internet.</p>
<h2>What do I want in notes ?</h2>
<p>The entire argument I am about to make relies on a couple of assumptions. The first is that you want some kind of personal productivity or knowledge management infrastructure in your life. You might not want any, or you might be okay with the default <em>Notes</em> and <em>Tasks</em> apps on your phone. That\u2019s fine.</p>
<p>The second is that this is the kind of thing you can get down and nerdy about.</p>
<p>Now that I\u2019ve weeded out anybody remotely cool, let\u2019s talk note taking and productivity.</p>
<p>No matter what tool I am using to take notes, I am trying to optimise for a couple of non-negotiable things:</p>
<ol><li>The <strong>speed</strong> of getting an idea out of my brain. My brain can get a little cluttered, and ideas can sometimes clamber over each other as they try to get out.</li>
<li>The ability to <strong>find</strong> a note after I\u2019ve written it. I don\u2019t care how it works, I can adapt, but normally at least one of the following things will stick around in my brain to let me find something:<ul><li>A bit of the filename</li>
<li>A rough time when I made the note</li>
<li>A list of directories it\u2019s probably in</li>
<li>I remember that I mentioned the file in another file</li></ul></li>
<li>I am able to <strong>integrate</strong> my meta-work easily into my actual work, as:<ul><li>A software engineer</li>
<li>Someone who writes blog posts that no one reads</li>
<li>Part of my ongoing professional development and research</li>
<li>Reading / reviewing / keeping notes on books</li></ul></li>
<li>A note can be <strong>deleted</strong> (or discarded) when I\u2019m done with them, without impacting anything else.</li>
<li>I want the reasonable ability to <strong>own</strong> my data and I don\u2019t want it to be in a <strong>proprietary format</strong></li></ol>
<h2>Atomic vs. Ecosystem productivity tools</h2>
<p>I\u2019ve gone through a lot of productivity tools and techniques in the past ten-ish years, where I\u2019ve gone from undergraduate, to doctorate student, to software engineer in small and large companies. Right now, plaintext, specifically markdown (<code>.md</code>), account for maybe 90% of my productivity and meta-work. I rarely find myself needing to move outside of them.</p>
<p>Previously, I flitted between two productivity ideals:</p>
<ol><li><strong>Atomic tools</strong> where one job is done by one thing - task managers for TODOs, spreadsheets for data, notes for\u2026 notes. I have previously used apps like <a href="${"https://bear.app/"}" rel="${"nofollow"}">Bear</a> (markdown-like notes), Google Sheets, and <a href="${"https://todoist.com/"}" rel="${"nofollow"}">Todoist</a> (task manager).</li>
<li><strong>Ecosystem tools</strong> where one tool should contain everything: TODO lists should be aware of personal budgets, should be linkable to meeting notes and product designs. <a href="${"https://www.notion.so/"}" rel="${"nofollow"}">Notion</a> is the current Platonic ideal of this philosophy.</li></ol>
<p>I found atomic tools difficult to manage in practice, because you have to figure out how to tie multiple disparate systems together. You\u2019ve also got to learn how multiple tools think about data and workflows.</p>
<p>I didn\u2019t like ecosystem tools as much as I wanted to, because in practice they\u2019re trying to be a consumer-friendly operating system for information and workflows. As an engineer, I didn\u2019t like how ridged they are. Nor did I like how proprietary they are. I\u2019m good to not put all of my valuable information onto a boat captained by an engineer out in San Fransisco who doesn\u2019t particularly want to resist the siren call of VC funding.</p>
<p>Plaintext isn\u2019t an atomic tool, because it can contain a variety of different kinds of information. Nor is it an ecosystem, because it can\u2019t (ergonomically) contain every kind of information. Previewing tables and images in markdown is\u2026 not particularly user friendly.</p>
<p>That said, plaintext notes are simple and accessible - every smart device I own can download files from the cloud, and has a way of editing them. Sure the editing experience is inconsistent, sharing external web pages or files into them is also a bit of nightmare, but the file format is present. And how much of success is just turning up?</p>
<h2>Plaintext is kinda like Lego</h2>
<p>The fact that plaintext is <em>just</em> text <em>is</em> a disadvantage. But plaintext still lets you put different kinds of information together in the same place. They\u2019re composable and combinable. One note can contain TODO lists, links to web pages, single-sentence thoughts, headings for structure in the document. That means I can have a file that represents a single day, a project, or a planned period of work - I don\u2019t have to divide everything off arbitrarily. And I can do this differently for every note.</p>
<p>You can also link things together at the file level. By naming convention or location of the file, or just calling a file out - things can link together easily.</p>
<p>A single plaintext note can easily support most things from infancy to adolescence. Some things, like data-heavy lists or tables, have practically no room to grow (at least not without software-based enhancements). Others, like a collection of notes and quotes from books I am reading, are able to expand almost infinitely. Most things, sit somewhere in the middle.</p>
<p>Importantly, when something outgrows the medium of a plaintext document I am able to link the two. Even if this only a one way link, from markdown to a URL, or a copy-paste job from an e-mail. Is it perfect? No, but it\u2019s just plaintext. It\u2019s open source, it\u2019s human readable, and it makes sense to me. The computer doesn\u2019t need to understand everything I do and say, it just needs to remember what I say and let me do the figuring out.</p>
<h2>Notes are a tool that serve you</h2>
<p>Digital note taking brings together two very opinionated groups: people who think about software or digital systems, and people who work in research or communication. It is easy to find a lot of zealous doctrine online about what makes \u201Cgood\u201D notes.</p>
<p>Take their ideas as inspiration. Or ignore them. They\u2019re not going to hunt you down to ask why you don\u2019t implement their note template, and if they do they\u2019re probably weak from sunlight deficiency and lack of social awareness.</p>
<p>If you\u2019re serious about creating and then maintaining a habit, it has to offer some clear benefit to your life. Following an additional set of rules and guidelines for their own sake may work for some people who love following rules. <strong>You do not serve the monolith of your notes archive - it serves you.</strong></p>
<p>If your notes are long and sprawling, that\u2019s fine. If they\u2019re short and clipped, cool.</p>`;
});
