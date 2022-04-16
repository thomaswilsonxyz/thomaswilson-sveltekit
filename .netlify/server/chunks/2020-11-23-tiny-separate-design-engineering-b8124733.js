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
  default: () => _2020_11_23_tiny_separate_design_engineering,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Tiny thought: On the separation of design and engineering",
  "author": "Thomas Wilson",
  "date": "2020-11-23T00:00:00.000Z",
  "draft": false,
  "slug": "2020-11-23-on-the-separation-of-design-and-engineering",
  "tags": ["essay", "tinythought", "design"]
};
const _2020_11_23_tiny_separate_design_engineering = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p><em>Tiny Thoughts</em> are little (500 word) essays. They\u2019re concise.</p>
<p>I make user interfaces, and I often participate in, or lead, the process of designing these interfaces. For a while I thought I wanted to transition fully into a design role. Ultimately I am drawn to the certainty and craft of engineering. However, the the mental models, sensibilities, and philosophies of design still appeal to me. I can like both, and businesses need both.</p>
<p>Separating design and engineering is a false dichotomy: design can benefit from the implementation-details of engineering; and engineering benefits from the non-linear and multi-faceted process of design thinking. It\u2019s symbiotic.</p>
<p>A while ago I got the chance to work in an environment where the two <em>were</em> separated. The design process and design thinking were both absent, and there was no appetite to bring them in.</p>
<p>During this time the mentality was to copy the UI of an existing, similar, already-successful product. A lot of people on the frontlines of tech have been told \u201Cjust copy company <em>X</em>\u201D where <em>X</em> is AirBNB, Twitter, LinkedIn, Pinterest, whatever. \u201CJust make the UI look like that\u201D.</p>
<p>At first glance, the thinking is sound: we don\u2019t have the money or time to invest in design, but this other company has. Let the whole design team over at Instagram/Reddit/Uber do the hard work, and we\u2019ll just steal from them.</p>
<p>At a personal level, I did not like working in this environment, because I felt alone. At a professional level, the working process was constrained, and the resulting software generic and left behind when the source material changed.</p>
<p>Some software has to be boring: I wouldn\u2019t want a whacky or zany bank app, menstrual cycle tracking app, government app, or crisis support app. There is a place for boring UI. Borings UI also removes a layer of difficulty in how the product is built. [^1: I would argue that it\u2019s not actually <em>that</em> much easier to build an app with a Boring UI - UI is just one part of any software.].</p>
<p>Behind a lot of boring UIs is a team of individuals who have thought an awful lot about their business, users, and problems. They have considered information architecture, interactions, users, and outcomes.</p>
<p>Just because the end result is boring, does not mean the process of designing it was short and simple.</p>
<p>When you copy <em>just</em> the final product, even a boring one, you diminish your entire business\u2019s ability to iterate, and any insight into the <em>why</em> of the UI are lost. You have limited your engineering team. Sometimes this limitation is significant (a client-facing product), sometimes it is not (an infrastructure service).</p>
<p>The product of engineering should not exist without the process of design. The discussions I have had, facilitated, and witnessed when deciding on UIs have made me a better engineer, and have made the product better.</p>`;
});
