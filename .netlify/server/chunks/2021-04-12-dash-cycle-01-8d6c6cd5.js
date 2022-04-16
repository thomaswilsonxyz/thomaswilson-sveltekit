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
  default: () => _2021_04_12_dash_cycle_01,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Dash Cycle #01: (re)organising",
  "author": "Thomas Wilson",
  "date": "2021-04-12T00:00:00.000Z",
  "slug": "2021-04-12-dash-cycle-01-reorganising",
  "draft": false,
  "tags": ["dashdot", "buildinpublic"],
  "imageUrl": "preview-images/C01.png"
};
const _2021_04_12_dash_cycle_01 = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>I\u2019m building DashDot: a privacy-focused interval training app that doesn\u2019t suck. The second cycle of development lasted March 15 - April 12. Let\u2019s look at where we are.</p>
<h2>Goals</h2>
<p>Here are the things I wanted to achieve in this cycle:</p>
<ol><li>\u2705 Finalise the code architecture and restore tests</li>
<li>\u2705 Allow someone to complete a (timed) timer</li>
<li>\u2705 Focus on the persistence of timers and workouts. Make sure that relationships between these entities are persisted.</li>
<li>\u2705 Buy domain names (for app and company)</li>
<li>\u2705 Decide on ticketing / management software and method. JIRA vs. Linear</li>
<li>\u270D\uFE0F Solidify and scale-back the UI design</li>
<li>\u{1F645} Make the UI nice</li>
<li>\u{1F645} Continue with TDD and high test coverage</li></ol>
<h2>Designing Code Architecture</h2>
<p>This cycle I started running into the limitations and assumptions of my previous software architecture. Four weeks ago I did not have any strong opinions or experience on architecture for a SwiftUI app, but now I do. I wrote about my experience with this <a href="${"/blog/2021-04-08-just-enough-software-design"}">pretty extensively</a> elsewhere. In summary, I\u2019ve taken a very Rails-esque approach to the design: splitting my software into models, views, view models, and interfaces. Dividing by function rather than domain model will make some people mad, but it\u2019s actually really helped keep everything clear in my head.</p>
<p>I ended up doing a pretty major refactoring of the architecture, which mean that a lot of my previously-written tests were no longer useful, and had to be deleted. I was only attached to them via the sunk-cost fallacy, so away they went.</p>
<p>I also got to draw some pretty gnarly, sprawling UML-style diagrams in this process to help me really flesh out my thinking. That was cool.</p>
<p>I\u2019ve still not reached the same level of test coverage as I had before, but I <em>do</em> have a much more readable and consistent code architecture so I think the pros outweigh the cons.</p>
<h2>Allow someone to complete a timer</h2>
<p>Creating a timer and doing a workout are the two core workflows in DashDot. This cycle I focused on that user journey: letting someone select a timer they wanted to complete and then start doing it.</p>
<p>There are a couple of complications here (obviously) but this workflow now functions. In DashDot you can now select a pre-existing timer, and start <em>doing</em> it. The app will persist your progress and process as you go, and progress you through the intervals, etc.</p>
<p>So far you can only complete timed intervals (not distance). That\u2019ll be one of two focus points for Cycle#02.</p>
<h2>Persistence and relationships</h2>
<p>I spent a good few days really getting into CoreData, managed object contexts, and the ORM-like way of managing relationships between entities.</p>
<p>DashDot now persists records of your activities, your workouts, and your timers - all without any fuss. This is an essential feature and I\u2019m glad it\u2019s done</p>
<p>I have created an Active Record-like pattern for my business entities, as I didn\u2019t like the idea of manually modifying the generated classes from CoreData. This allows me to have some helper methods on my models to access related data, and to treat what\u2019s in the persisted CoreData layer as DTOs. This is definitely my web influence coming through: treating the data persistence as dumb and largely stateless objects. I\u2019m not sure if this is the best, or most Swifty, way of doing things - but it\u2019s the way that lets me move faster.</p>
<h2>Purchase domain names</h2>
<p>I needed domain names for both the app and for the company I\u2019d be publishing it under. I\u2019ve purchased both of those and I\u2019ll share when there\u2019s actually something on them.</p>
<h2>Project management: JIRA &amp; Linear</h2>
<p>I had previously been using JIRA to manage my tickets and things to do. I discovered Linear (I think because someone on <a href="${"https://www.relay.fm/radar"}" rel="${"nofollow"}">Under The Radar</a> mentioned it).</p>
<p>I\u2019ve completely switched to Linear for managing my tasks. I like it because:</p>
<ol><li>It has a native app, even if it\u2019s just an Electron wrapper, it feels surprisingly native</li>
<li>It\u2019s free (for me a one-person team)</li>
<li>Phenomenal keyboard shortcuts that let you move between tasks and screens, update and create tickets, and do all sorts.</li>
<li>Their idea of \u201Ccycles\u201D fits almost perfectly with how I want to think about software development. They\u2019re essentially four-week sprint-like phases. You pick a four week period, acknowledge what you can/not get done during that, and make sure things stay in scope.</li>
<li>Nice integration with GitHub - generating branch names for tickets and tracking their progress through PR to merge status. Even working as a one-person team, this helps me focus on \u201Cone things at a time\u201D.</li></ol>
<p>Using Linear comes with a lot less friction than JIRA.</p>
<h2>Scale-back the UI</h2>
<p>I had a bloody massive Figma file with a whole bunch of screen prototypes and idea exploration. By the time I had spent four weeks doing more code-heavy tasks I had lost track of what was where, what I liked and didn\u2019t like. There was too much in the Figma file and things were too hard to find.</p>
<p>So I copy-pasted everything into an \u201Carchive\u201D tab in the file, and largely started from scratch. I used a more simple and iOS-like design. It\u2019s a lot more boring, yes - but it\u2019s also a lot more achievable.</p>
<p>Every now and then I go back to the archive and look to see if I had any interesting UI ideas, bits of data, or conventions that I\u2019d like. In general however I am trying to stick to a <em>very</em> simple and limited UI. No fiddly bits or tricky bits, I want to get something out there.</p>
<p>I have started this process of redesign, and it\u2019ll continue into Cycle#02. The UI I have in the app at the moment is\u2026 not good or consistent, but it is functional for testing. So I need to improve it.</p>
<p>I\u2019ve become a lot more involved and aware of the iOS-specific design scene. Reading a lot of app reviews and listening to podcasts so I can get a better sense of \u201Cwhat makes a well-designed app\u201D.</p>
<h2>Make the UI Nice</h2>
<p>I wanted to have a fully redesigned and implemented UI by the end of this cycle. That did not happen, I had other things to do. I\u2019m working on it though.</p>
<h2>Continue TDD</h2>
<p>I wanted to continue to develop with tests are the forefront, however the severe refactoring and reorganisation I\u2019ve done have left a lot of my old tests useless, and I decided to move with greater speed by not having as many tests before I commit code.</p>
<p>This decision will come back to bite me, I\u2019m sure, but I want to focus on producing something usable and interactable. The code is not the message, the code is the vehicle.</p>`;
});
