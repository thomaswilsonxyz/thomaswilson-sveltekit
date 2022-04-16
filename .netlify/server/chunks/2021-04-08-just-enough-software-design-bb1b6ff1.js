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
  default: () => _2021_04_08_just_enough_software_design,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "How much is just-enough system design for new apps and software?",
  "author": "Thomas Wilson",
  "date": "2021-04-08T00:00:00.000Z",
  "slug": "2021-04-08-just-enough-software-design",
  "draft": false,
  "tags": ["software", "software-architecture"]
};
const _2021_04_08_just_enough_software_design = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>I wrote this because of a paralysing problem in coding: how much should I design my new app\u2019s architecture before I dive into code if I can only learn about my app\u2019s architecture by coding it?</p>
<p>I\u2019m building Dash Dot, an interval timer iOS app from scratch, and this is the problem I\u2019ve been facing this month.</p>
<p>The temptation is to answer all possible questions about your app before you start coding it, but you have to resist. It\u2019s good to have an awareness of what parts make up the whole of your system. If you don\u2019t, you\u2019re going to have to refactor and restructure your code frequently, especially at the beginning. But if you wait too long, if you <em>only</em> answer questions, then you\u2019ve got only theoretical answers.</p>
<p>The issue is keeping your code and your design in-step with each other. If your code gets ahead of your design, it\u2019s a mess and you\u2019ve got to refactor and wrangle chaos. If your design gets ahead of your code, you\u2019ve got a monotonous boring slog to just implement (potentially over-engineering, or outdated) solutions to changing problems.</p>
<p>Code <em>is</em> discovery.</p>
<p>Design <em>is</em> discovery.</p>
<p>But they\u2019re different kinds of learning, and you need them both. You can split the things you know about your software into two buckets:</p>
<ul><li><p><strong>Obvious</strong>: These are properties that you can glean, or deduce relatively quickly, just by thinking through your code. Your core business entities need to be persisted, so you need a way of talking to a persistence layer, and you need a way of communicating data from your persistence layer (like a database) to your code\u2019s logic (like an Entity). You need something to manage the publishers in your system, and you need a way for your other components to subscribe to these publishers.</p></li>
<li><p><strong>Emergent:</strong>: These things become clearer or more important as you start coding. You might notice that your Entity class has reached 400 lines in length, and realise you need a Factory class to take away some of that logic. You realise that you\u2019re passing around data through a lot of initialisers - does it need to be centralised somewhere?</p></li></ul>
<p>As you become a more experienced software engineer and architect, more things are in the Obvious bucket, and less things are in the Emergent.</p>
<p>The problem with Emergent Properties is that they are often Unknown Unknowns. Of course, this is a spectrum too. The more you deal with software architectures, the more you know the kinds of boundaries that become problematic.</p>
<p>Building the code means we learn more, but not knowing enough means the code we write is less useful. There are some lessons we can learn without coding. My advice? <strong>Do just enough design so that you can maximise your learning by building</strong>. How do you know how much is \u201Cjust enough\u201D? That\u2019s the whole problem, mate.</p>
<p>I\u2019ve been working on the meta skill of asking myself \u201Cis this enough design to get going?\u201D, and then accurately answering myself. That\u2019s what I want to share and talk about.</p>
<h2>The Takeaways</h2>
<p>We\u2019re all busy, here\u2019s what I\u2019d recommend:</p>
<ul><li><strong>Work over dogma</strong>: Get the app building and working. Want to list restaurants near you: get that webpage running, that map rendering, and that database queried. It doesn\u2019t matter how beautiful your abstraction if you can\u2019t show your user a list of nearby taco vans.</li>
<li><strong>Design and develop with your brain in mind</strong>: I know that I like to do. I like to dive in and get started, so I have to train myself to wait and think things through for a bit before I start. You might be paralysed by the need to perfect the architecture before you even open your text editor. Whatever technique works for you, use that.</li>
<li><strong>Good systems change fast</strong>: The code you\u2019re writing at the beginning of an app will either a) live forever, or b) live for the next three days. Make sure new code can be, refactored, renamed, extended, and divided easily. If it\u2019s hard to change, you\u2019ll do bad things or workarounds because it\u2019s easier than doing the right thing.</li></ul>
<p>##\xA0Swinging the pendulum</p>
<p>My thoughts and approaches to building a new codebase have swung quite a bit over the last two months. I have been developing <em>a la</em></p>
<ol><li>Test-driven development (TDD): build all code from the ground up with tests first. The satisfying red, green, refactor cycle is very rewarding.</li>
<li>Interpretive movement development: do what feels right in the moment, just validate with the UI, man.</li>
<li>UML-driven development: spent <em>literally</em> hours creating classes, methods, and relationships to understand the system.</li></ol>
<h3>TDD</h3>
<p>TDD was my first approach. It\u2019s how I learned Rails back in the day (or at least how I was encouraged to). I have often bemoaned a lack of <em>any</em> testing in a lot of the professional projects I\u2019ve worked on and I thought to myself \u201Cthis app will have flawless testing. I will be the jealousy of the town\u201D.<br>
Why was I doing TDD? Because I liked the idea of the finished product. I liked having a codebase which I <em>knew</em> worked, it was inarguable. I had green ticks on my CLI, and the knowledge that a particular ticket or branch were complete.</p>
<p>I spent a couple of weeks heavily pursuing this goal. However it fell apart. When you\u2019re building early systems and foundational code it is <em>highlly</em> likely that things will change. In fact, I\u2019d say it\u2019s certain. If you\u2019re writing perfect code on day 1 then bully for you but boy am I not that kind of engineer.</p>
<p>\u201CBut Thomas, write your tests first to help design your API\u201D. Yeah, actually good criticism. I agree - I think having code <em>and</em> tests consume the API of a class forces you to think about abstraction early. It forces you to decouple things. However, <strong>you don\u2019t know everywhere your code is going to be consumed</strong>, especially on day 1. You don\u2019t know when certain parts of the codebase are going to grow in complexity and size (and reduce in readability) and need to be split out. And now you\u2019ve doubled the work required in a refactor: you can\u2019t quickly and easily move code about, chop it up, rename it, etc.</p>
<p>\u201CBut Thomas, the tests mean that your API surface remains stable so that even when you do that kind of refactoring, the end result still acts as expected\u201D. Right again, in theory. This is great when there is other code in your project which already depends on the stuff you\u2019re refactoring, and you want absolute certainty that what you\u2019re doing won\u2019t break a consumer. But that\u2019s just not what\u2019s happening here. This is the first step of whittling away the wood to let the sculpture emerge, I don\u2019t have to be delicate everywhere. I really wanted TDD to work for me here, and maybe if I was more intelligent and could preemptively know my API it would work. Or, if I was further into the project, it would let me know that I\u2019m doing okay with my refactor.<br>
As a tool for writing the first bits of a new project, TDD just did not work for me.</p>
<h3>Interpretive movement design</h3>
<p>Talk about a kickback reaction. Freed of the expectations of TDD and of the need to really write atomic and comprehensive tests, I just went about doing the thing every engineer loves to do: write code.
I created classes, and modules and methods and functions and utilities and it was lovely. I named things in a way that made sense in the moment and things felt right. I wasn\u2019t constrained by anything and could get my ideas onto the screen quickly.</p>
<p>This is a great example of where the \u201Csoftware engineering as a craft\u201D argument gains credibility. This was a swing too far away from discipline and rigour, and towards creativity and reactive-ness. There was no structure to wrangle my code into readable, clear ideas.</p>
<p>It didn\u2019t force me to notice similarities in my codebase. <strong>It didn\u2019t encourage me to make similar solutions for similar problems, and I ended up writing code which was tightly coupled to its context</strong>. Code should be decoupled. The canonical example for this was when I found myself with three Entity classes (the ActiveRecord-like classes which wrapped several persisted entities, like a \u201Ctimer\u201D) and three drastically different approaches to similar behaviours. I had different APIs and implementations for how I validated, persisted, updated/deleted my data - I stored different bits of information about them and under different names.</p>
<p>This was a bad approach - I had let myself get too excited with the joy of writing code, and hadn\u2019t taken a step back. \u201CBut Thomas, couldn\u2019t you have exercised a little bit of self-restraint?\u201D. Look. Yes. I have known for a <em>very</em> long time that I, as a person and professional, would much rather learn and discover while and through doing, rather than plan and prepare beforehand. It\u2019s mixed-blessing. Self-knowledge isn\u2019t about trying to change these things but rather putting myself in positions where this isn\u2019t a problem (wisdom to know the difference, and all that).</p>
<p>The interpretive-movement style of development was useful. It helped patterns emerged and it also helped me <em>do</em> a lot more than I did with TDD. The result was always on the output: I want to see this data on the screen, I want to be able to have these kinds of interaction. Unlike TDD I was thinking a lot more as a real-life human user of my software, not like a software user of my software. But it needed to be paired with a little more forethought, and something which would help me anticipate similarities before they occurred.</p>
<h3>UML-driven development:</h3>
<p>Does anything feel quite so engineer-y as drawing bloody giant UML diagrams. You know the ones, with the boxes and class names and methods and arrows. They\u2019re great. I started drawing these when I came to the next logical part of my app (i.e. how do I, as a user of the app, <em>do</em> a timer).<br>
I sat down with the fantastic (and free) [diagrams.net] (formerly draw.io) tool to draft up the parts of my system, what they would be called, how they would communicate, what was similar and unifying, and what were the distinct parts.</p>
<p>I immediately made the decision to use this diagram as a sketch or an outline. I didn\u2019t want to specify every method, every relationship, every movement. It was about the high-level system design, and not about the specifics. UML diagrams may feel productive, but at the end of the day they\u2019re not code.</p>
<p>For me, facing myself to write this broad-outline UML diagrams was <em>just enough</em> design to make the code I was writing feel productive. It guided the direction and structure of the work I was doing, but it was vague enough that I could split things our and change implementation details. For example in a couple of places, I leaned heavily into the <em>Dependency Inversion</em> or <em>Inversion of Control</em> but these didn\u2019t need to be specified in the diagram before hand</p>
<p><strong>I knew this approach was just-enough design because before I started writing code I noticed when too much responsibility was being put in one place, and when similarities between components started arising</strong>. Just like the frustration of UI/UX design - it was impossible to design a good system by focusing wholly on the components. Components should serve the system and architecture as a whole.</p>`;
});
