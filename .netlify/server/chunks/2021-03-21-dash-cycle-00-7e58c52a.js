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
  default: () => _2021_03_21_dash_cycle_00,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Dash Cycle #00 - The Beginning",
  "author": "Thomas Wilson",
  "date": "2021-03-21T00:00:00.000Z",
  "slug": "2021-03-21-dash-cycle-00-the-beginning",
  "draft": false,
  "tags": ["dashdot", "buildinpublic"],
  "imageUrl": "preview-images/C00.png"
};
const _2021_03_21_dash_cycle_00 = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Hello. I\u2019m building an app called Dash Dot, it\u2019s a native iOS app for interval training that is a) well-designed, and b) privacy- and utility-focused. This post covers the first (approx.) six weeks in designing and building the app.</p>
<p>I\u2019ve never made a truly native app before (I have written things in React Native before, though), nor have I ever successfully released a product to the world. Maybe this will be the time \u{1F937}\u200D\u2640\uFE0F</p>
<p>I want to #buildinpublic so this is a proto-changelog for a product that I\u2019m hopeful will exist one day.</p>
<p><strong>Cycle?</strong> I don\u2019t like the \u201Csprint\u201D terminology that agile practices use to describe how features are developed. Nobody sprints all the time, that\u2019s ridiculous, and building a product is a long slow burn. Also, I don\u2019t have a product to iterate on, I\u2019m currently working forwards from \u201Cwouldn\u2019t this be a good idea\u201D. I need longer than two-week springs to make a difference. In line with Basecamp\u2019s six-week \u201Cbets\u201D and Linear\u2019s \u201Ccycles\u201D, I want to work in <em>cycles</em>, as in lunar cycle or life cycle: longer (six-ish) periods of work where I focus on broader goals.</p>
<p>This cycle (#0) lasted seven weeks:</p>
<ul><li>Started: 2021-02-01</li>
<li>Ended: 2021-03-21</li></ul>
<h2>What do I have right now ?</h2>
<ul><li><strong>An idea</strong> of what I want to build, how it offers value, and a route to monetisation</li>
<li><strong>MVP Features</strong> that I want to build before I release (into Test Flight), and a rough shape for the functionality I want to add on after that.</li>
<li><strong>A very messy Figma file</strong> that needs tidying up but <em>does</em> contain screens for a lot of the app: dashboards, timers, config pages, profile pages.</li>
<li><strong>A working swift iOS app</strong> that lets you configure a timer and do some very primitive navigation</li></ul>
<h2>What have I done that I\u2019m proud of?</h2>
<ul><li>Decided to make this app, don\u2019t overlook that</li>
<li>Learned a <em>whole</em> lot about Swift and iOS development. I don\u2019t think I\u2019d written any Swift code before 2021, and I\u2019ve spent the past four years building predominately frontend web software in JS/TS, so I\u2019m pretty proud of this.</li>
<li>Visually designed and prototyped the principle workflow for creating a timer, completing it, and viewing your account</li>
<li>Created code that travels the entire vertical stack (i.e. end-to-end) that allows a user to create, save, update, and delete a timer</li>
<li>Toyed with JIRA and Linear for project management</li></ul>
<h2>What went well?</h2>
<ul><li>I actually built something, I have an idea of the product and I have the first few screens that make this a little bit closer to a reality. That\u2019s a cool feeling</li>
<li>Rapid low and medium fidelity UI prototypes and iteration. I didn\u2019t waste too much time wanting to get the perfect UI done before I started, so I\u2019ve built with a very Spartan UI in Swift, but have worked in parallel in Figma to know what the content (if not the presentation and layout) of my screens will be.</li>
<li>I\u2019m proud to be focusing on UX and UI that actually makes sense for humans. I tried a lot of competitor/existing interval timer apps and wow are they non-intuitive. They just expect you to poke around, do things without confirming them or making clear what they\u2019re about to do, and have unclear iconography and buttons. I\u2019m happy to be building and designing an app that takes these things seriously.</li>
<li>Early validation of the idea from discussing it with friends (which isn\u2019t real validation, I know)</li></ul>
<h2>What didn\u2019t go well?</h2>
<ul><li><strong>UI Design != software design</strong>. Although the two relate closely, I made the mistake of tying my initial software design to the UI/UX design. Although the two should be similar, they shouldn\u2019t be identical. I made my code too strict and tightly linked to the UI implementation. I have been working to combat this in more recent code design.</li>
<li><strong>Better code design</strong> I should make more effort to design systems on paper <em>before</em> I start coding, not code &gt; get stuck &gt; design &gt; delete &amp; rewrite code. Obviously, you can\u2019t just plan to the exclusion of coding, but you can spend 10-15 minutes getting your ideas on paper, yeah?</li>
<li><strong>TDD</strong>. Related heavily to the above: I tried to use test-driven development (TDD) from day 0, but it made it hard to prototype and change things. Maybe if I was a better engineer I would have designed a better system from the get-go, but my style of doing things is a little more \u201Clet\u2019s see what happens if I do this\u201D. - I ended up designing and building one system, then splitting it out, dividing it, and re-naming parts which made my tests redundant and all fail, so I\u2019m basically going to have to go back and re-write tests for everything - This may not have been the best approach - slowly refactoring code and tests in parallel would probably have been a good idea, but I decided I\u2019d rather just go ahead and write the code instead. If this was an established app in production I would definitely have done code and tests together.</li>
<li><strong>Writing in a new language</strong>. I\u2019m having to learn about both Swift and iOS development <em>as</em> I construct the app itself, so there have been several sizable re-shuffles and re-architectures</li>
<li><strong>A messy Figma File that\u2019s hard to navigate</strong>. I haven\u2019t settled on a UI/UX design, there\u2019s been a lot of iteration - which means the business components exist but the UI components are <em>very</em> minimalist and industrial (read: bad)</li></ul>
<h2>What has been most challenging?</h2>
<ul><li>Learning a new language (Swift) for the development</li>
<li>Learning and implementing the architectural patterns for iOS development (e.g. Model-View-View Model)</li>
<li>Having to learn the entire vertical stack before building a feature: persistence, animations, layout &amp; styling, etc. The process feels a lot more like full-stack engineering than frontend, despite thinking otherwise as I went into this.</li>
<li>Shifting from the predominately functional style of building React applications to the more Object-Orientated way in Swift.</li></ul>
<h2>What do I do next?</h2>
<p>In order, here are the things I want to do in the next cycle:</p>
<ol><li><strong>Finalise the current architecture and add tests</strong>: The code that lets you create and configure a timer is functional (it walks), but I can probably do some tidying. In fact I can definitely do some tidying. I absolutely want to have tests in my code, even if TDD didn\u2019t work out this time and I\u2019ve had to write code <em>then</em> tests, that\u2019s still preferable to writing no test.</li>
<li><strong>Solidify the design</strong>: I\u2019ve got a lot of possible UIs and medium-fidelity prototypes, with various colour schemes and mental/visual metaphors in my current Figma file, I need to settle on the Colour Palette &amp; Design Tokens so that I can build consistent UIs. I need to get rid of old ideas (I\u2019ll probably move them to some kind of \u2018Archive\u2019 part of the file so that I can go back to them later). This should create a consistent UI and UX across the various user journeys.</li>
<li><strong>Allow someone to complete a timer</strong>: Design the architecture and UI that would allow someone to select a timer they have made, and actually complete it</li>
<li><strong>Buy some domain names</strong>: I need to start thinking about the keywords and handles I\u2019ll be using online</li>
<li><strong>Decide on JIRA vs Linear</strong>: How to manage software development? What an ever-turning wheel</li></ol>
<p>Note the lack of marketing and advertising here? I\u2019m aware that this should start early but I don\u2019t want to do anything until I\u2019m sure that I\u2019ll have something that I\u2019d be happy letting someone else use.</p>
<p>Hopefully, Cycle #1 will last from now until the beginning of May 2021, but I also expect it could last longer. Right now it\u2019s about making ideas solid and building code - and that happens when it happens.</p>`;
});
