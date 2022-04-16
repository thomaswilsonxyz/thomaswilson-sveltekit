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
  default: () => _2021_06_13_infinite_coast_of_problem_solving,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "The infinite coast of problem solving",
  "author": "Thomas Wilson",
  "date": "2021-06-13T19:48:00.000Z",
  "slug": "2021-06-13-infinite-coast-of-problem-solving",
  "draft": false,
  "tags": ["lexicon", "design", "product"]
};
const _2021_06_13_infinite_coast_of_problem_solving = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>I\u2019m currently designing and building the lexicon, ambitiously explained as \u201Cthe most useful language learning resources in the world\u201D.</p>
<p>The problem is that there\u2019s a lot involved in that, you know? There\u2019s theoretical questions like \u201Cwhat does most useful mean?\u201D and \u201Chow do humans learn languages\u201D?</p>
<p>Then there\u2019s small problems like \u201Cwhat is the shape of the JSON I send to the client?\u201D and \u201Chow do I generate prompts &amp; questions for language learning?\u201D.</p>
<p>I\u2019ve been thinking about these problems, in some capacity, for legitimately years. So it\u2019s no wonder that I come to them with so much gusto.</p>
<p>A lot of the questions are nebulous. \u201CBest\u201D is subjective, and learning is a spectrum. Proposing theories and ideas is okay, but making something and finding out is even better.</p>
<p>The questions are big, and important to me, and so I don\u2019t want an imperfect solution. The tech has to scale, the processes have to be automated, everything has to be <em>just so</em>. I\u2019m building tools for problems I haven\u2019t encountered but know I will encounter. Or would encounter, if I just got on with the work.</p>
<p>Problem solving is fractal. Every step you propose to get from A to B has a whole subset of steps if you look at it closely. If you\u2019re not careful it goes from A -&gt; B, to A1 -&gt; A2, to A1.i -&gt; A1.ii.</p>
<p>It\u2019s like how [the coastline has theoretically infinite length].</p>
<p>What I\u2019m saying is that this week I challenged myself: no code, just design. Just product problems and questions. No infinite coastlines, no cartography.</p>
<p>So I made some designs. They\u2019re down below. This is what happens when I ask the question \u201Cwhat could the future of language education <em>actually</em> look like\u201D and then demand a concrete answer from myself.</p>
<p><img src="${"/assets/blog-images/2021-06-13/dashboard.png"}" alt="${"the lexicon dashboard"}"></p>
<p><img src="${"/assets/blog-images/2021-06-13/guess-empty.png"}" alt="${"guessing a word"}"></p>
<p><img src="${"/assets/blog-images/2021-06-13/guess-answers.png"}" alt="${"guessing a word with answers"}"></p>`;
});
