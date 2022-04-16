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
  default: () => _2021_06_05_weekly_43,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "The Weekly #43: Vision, problem, and action",
  "author": "Thomas Wilson",
  "date": "2021-06-05T10:16:00.000Z",
  "slug": "2021-06-05-weekly-43-vision-problem-action",
  "draft": false,
  "imageUrl": "preview-images/43.png",
  "tags": ["weekly"]
};
const _2021_06_05_weekly_43 = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>The Weekly is a weekly essay where I write about something I\u2019ve been thinking about in the last seven days. They\u2019re under 1000 words, and this week I want to talk about vision and problems when you\u2019re building a new product.</p>
<p>I\u2019m building <a href="${"https://www.thelexicon.app"}" rel="${"nofollow"}">the lexicon</a>, where I am (un-ironically) trying to build the world\u2019s most useful language learning resources. I like Duo Lingo, but I don\u2019t think it helps you much in the real world \u2122\uFE0F. It\u2019s born out of my desire (and previous moderate success) to be come proficient in French. The pandemic slashed my French proficiency, though.</p>
<p>Over the past few weeks I\u2019ve been thinking more about this product idea. I think there\u2019s enough scope in the vision of \u201Cbest language learning resources in the world\u201D that I can meaningfully do something new. I think I know enough about computers and learning to do something impactful.</p>
<p>The first thing I did? Set up a landing page with a sign-up form for a mailing list, and released two (free) sets of flash-cards with the most common words. If you want them, you know where to find them.</p>
<p>None of these things (which took real time and energy) solve any of the core problems that I\u2019m trying to solve, though. I\u2019ve got a vision for the company, and these things move me generally in the direction of it. I can\u2019t sell anything if people can\u2019t find where to buy it.</p>
<p>But I don\u2019t think I solved the high value problems.</p>
<p>In his essay <em>how to get startup ideas</em> Paul Graham says:</p>
<blockquote><p>You should only work on problems that exist. And yet by far the most common mistake startups make is to solve problems no one has\u2026 The verb you want to be using with respect to startup ideas is not \u201Cthink up\u201D but \u201Cnotice\u201D\u2026 The most successful startups almost all begin this way.</p></blockquote>
<p>I created this vision because I noticed a problem: I want to learn a language in an efficient way, that gets me to real-world use quickly. Having a landing page does nothing to solve that particular problem.</p>
<p>What Graham says is (probably) true, but I also think they miss out on another dimension of problems: the specificity / uniqueness of them.</p>
<h2>Getting Specific: Flashcards</h2>
<p>Let\u2019s get specific.</p>
<p>I produced some flashcards sets. These keeps within the vision, but what problems do flashcards solve?</p>
<ol><li>Target-language translations of words (<em>\xEAtre</em> \u27A1\uFE0F \u201Cto be\u201D)</li>
<li>They decide what word\u2019s you\u2019re learning</li>
<li>The can be used in <a href="${"https://en.wikipedia.org/wiki/Active_recall"}" rel="${"nofollow"}">Active Recall</a></li></ol>
<p>This list, broadly, runs from most generic to most opinionated solutions.</p>
<p><strong>1. Bilingual translation</strong> Could you learn French with resources which <em>just</em> showed you the words in the target language. <em>Verser</em>, <em>manifestation</em>, et <em>vaccin</em>.</p>
<p>Have you just learned <em>to pour/contribute</em>, <em>protest</em> (noun), and <em>vaccine</em> ? No. You maybe could have guessed the latter, though.</p>
<p>To remove the bilingual elements of language-learning flashcards would be an unexpected feature. Maybe replacing them with image/sound <a href="${"https://link.springer.com/article/10.1007/s11145-018-9906-x"}" rel="${"nofollow"}">can help</a> (an auditory component for French \u2194\uFE0F English translations would be beneficial) but largely, you need the bilingual text. This isn\u2019t a high-value problem.</p>
<p><strong>2. Decide what words</strong>What words should I learn? This is a more interesting problem. It\u2019s actually one of the core problems that lead me to think about the lexicon. I don\u2019t think we teach useful words to new language-learners.</p>
<p>The problem of \u201Cwhat words do we learn, and in what order\u201D is a problem worth solving. So I used data-backed findings to decide on the most common verbs. This is a higher-value problem.</p>
<p><strong>3. Encourage Active Recall\xA0</strong>Active Recall is, almost irrefutably, a core component of any language-learning practice. When you use flashcards, you should see the prompt and guess the answer (actually guess it, like, say it aloud) before viewing the answer. Anything else is passive recall or lying to yourself.</p>
<p>Active recall is essential to any effective language learning practice, and I was leaving it as optional. \u201CHere\u201D, I said, \u201Care some flashcards. You know how to use them effectively, right?\u201D.</p>
<p>A foolish assumption that was probably false (no one teaches these skills <em>de facto</em> in schools) which essentially let the user determine exactly how effective or useful the language-learning resource was going to be</p>
<p>I had a chance to solve an important and unique problem (how to pair the \u201Cright\u201D words with the \u201Cright\u201D learning method) and I delivered it in static flashcards. I moved towards the vision without solving the particular problems: actually increasing your French vocabulary.</p>
<p>I left the hard work of solving the problem to the customer. I shifted responsibility.</p>
<h2>Visions are slopes, problems are places</h2>
<p>I was guided by a vision, without thinking about the unique and important problems.</p>
<p>A vision is like a slope. It\u2019s easy to know when you\u2019re heading up or down hill, and you can conform to a vision by degree: head directly down hill, or go diagonally.</p>
<p>If a vision is a slope, a problem is a place. Or a least a region. The further away from the problem you are, the easier it is to head towards it. When you haven\u2019t started, doing almost anything will get you closer. Setting up a landing page and a mailing list, for example.</p>
<p>But you get a bit closer and you\u2019ve got to change bearing. You were heading east, but now you\u2019ve got to head north-east. And then north-north-east. Anything other than that and you start veering away your destination. Maybe you\u2019ll find a different problem along the way (the infamous <em>pivot</em>) or maybe you won\u2019t.</p>
<p>A mailing list, a landing page, and some static flashcards are not the world\u2019s most useful language learning resources. They\u2019re part of the vision but not the product,</p>
<p>Set vision, solve problems.</p>`;
});
