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
  default: () => _2021_05_27_weekly_42,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "The Weekly #42: Metaphors for Design - Brutalist Architecture, Gardens, and Video Games",
  "author": "Thomas Wilson",
  "date": "2021-05-28T18:14:00.000Z",
  "slug": "2021-05-28-the-weekly-42-metaphors-for-design",
  "draft": false,
  "tags": ["weekly"]
};
const _2021_05_27_weekly_42 = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p><em>The Weekly</em> is a weekly essay on something I\u2019ve been thinking about in the last seven days. They\u2019re less than a thousand words long. This week I want to talk about the metaphors we use when we talk about designing for the web.</p>
<p>I read two (fantastic) pieces on the web this week:</p>
<ol><li><a href="${"https://manuelmoreale.com/thoughts/what-even-is-a-website-anyway"}" rel="${"nofollow"}">What even is a website anyway?</a> by Manuel Moreale, who cited,</li>
<li><a href="${"https://cmhb.de/brutalist-web-design"}" rel="${"nofollow"}">Brutalist Web Design</a> by Carl Barenbrug</li></ol>
<p>Sometimes I have no time for Medium-style self proclaimed \u201Cthink pieces\u201D about the web and technology. They\u2019ll expound self-indulgently on non-actionable points, while the rest of us get on with the mundane tasks of building things. This is a criticism I throw un-ironically from the glass house of my personal website.</p>
<p>The above pieces are good. Very good, actually. They remind you it doesn\u2019t have to be like this. We don\u2019t have to design and build websites and web apps against a feature list that never stands still. That we\u2019re building for <em>our</em> audience, not the public.</p>
<p>When I started web development, I internally compared what I was doing to Google\u2019s work. Now it\u2019s Stripe\u2019s (their designers are ~ artists ~ though) and a milieu of other web apps. Every user, we tell ourselves, is expecting an experience which rivals AirBNB, and Reddit, and Etsy. Even when they land on our dinky little personal site.</p>
<p>I don\u2019t think they are. I think we, the people who design and build things on the internet, are. Not every blog needs a load-balanced Elastic Search instance against it. Heck, not every website needs Card or a Menu component.</p>
<p>You can build a feature complete website with maybe a dozen html tags and a single CSS file. Does it even need JavaScript? It\u2019d be heckin\u2019 fast and SEO optimised to boot.</p>
<p>It doesn\u2019t matter what other people are doing. Your website probably won\u2019t turn into the next Reddit or Tumblr. A website can be feature complete. A feature list can <em>not</em> grow.</p>
<p>Barenbrug\u2019s piece (mentioned at the top) argues that we can see websites like Brutalist Architecture: created and inhabited by humans\u2026</p>
<blockquote><p>Brutalist architecture not only reduces construction to its basic materials, but it also finds beauty in that simplicity.</p></blockquote>
<p>I like being reminded of this. I like the Brutalist Architecture metaphor.</p>
<p>There are two other metaphors which I think about a lot when I step back from building.</p>
<h2>That Garden Metaphor</h2>
<p>I heard about <a href="${"https://www.goodreads.com/quotes/749309-i-think-there-are-two-types-of-writers-the-architects"}" rel="${"nofollow"}">this quote</a> this from George R R Martin, in the context of writing:</p>
<blockquote><p>I think there are two types of writers, the architects and the gardeners. The architects plan everything ahead of time, like an architect building a house. They know how many rooms are going to be in the house, what kind of roof they\u2019re going to have, where the wires are going to run, what kind of plumbing there\u2019s going to be. They have the whole thing designed and blueprinted out before they even nail the first board up. The gardeners dig a hole, drop in a seed and water it. They kind of know what seed it is, they know if planted a fantasy seed or mystery seed or whatever. But as the plant comes up and they water it, they don\u2019t know how many branches it\u2019s going to have, they find out as it grows.</p></blockquote>
<p>I like this metaphor because it is chaotic and unpredictable. It\u2019s non-committed and it changes. I think these are good qualities to have in technology, and life.</p>
<p>Gardening acknowledges the life of a project is out of your control. Something you can guide, and give suggestions to, but eventually something that will thrive best when given good conditions and space.</p>
<h2>The Video Game Metaphor</h2>
<p>I can\u2019t remember where I heard this first. I found some <a href="${"https://evilmartians.com/chronicles/level-up-for-ux-design-lessons-from-videogames"}" rel="${"nofollow"}">good</a> <a href="${"https://www.nngroup.com/articles/usability-heuristics-applied-video-games/"}" rel="${"nofollow"}">articles</a><a href="${"https://www.invisionapp.com/inside-design/the-ux-lessons-i-learned-from-video-games/"}" rel="${"nofollow"}">on</a> it, though.</p>
<p>Video games are expertly and intentionally designed. Everyone who designs things can learn something from them. I like the analogy for two main lessons:</p>
<ol><li>Your design needs to get out of the way</li>
<li>Design can reduce friction, not make everything easy</li></ol>
<p><strong>Get out of the way.</strong> No one plays a game for the User Interface (UI) or Heads Up Display (HUD) design. But a bad design will ruin your experience as a player. Because it gets in your way.</p>
<p>Nobody goes to QuickBooks because they just want poke around. People go to QuickBooks to make sure their receipts, invoices, and payroll are up to date then they <em>get the hell out of there</em>. Nobody opens the inventory in Diablo II to browse, you open it to check the stats on your fire staff and equip or sell it.</p>
<p>I work at a laundry company. I agonise over creating the best user experience and interface elements I can. People don\u2019t go to our website because they want to look at a list of things they <em>could</em> get cleaned. They go there to get their things cleaned then get out. People don\u2019t want to notice my new Receipt component design.</p>
<p><strong>Reduce friction.</strong> Video games are challenging. It makes them rewarding. Hollow Knight is maybe the most frustrated I have felt in 2021 so far and <em>we are in a pandemic</em>. Hades is so frustrating I could cry at times.</p>
<p>If QuickBooks\u2019 goal was to remove all stress and difficulty from a user\u2019s life, they\u2019d just say \u201Cpay us \\$1/mo and we\u2019ll do all your accounting and filing and you\u2019ll never have to worry about it\u201D. The business fails but the customer succeeds.</p>
<p>Your website or app is one thing your user will do today. Then, if you\u2019re lucky, they\u2019ll forget about you completely, and move on. They\u2019re okay with the friction of the task at large. Taxes are annoying, bank statements are annoying. But you can\u2019t solve that unless you become a government or bank.</p>
<p>Don\u2019t solve the puzzle, be a good puzzle piece.</p>`;
});
