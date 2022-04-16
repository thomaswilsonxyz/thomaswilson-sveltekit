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
  default: () => _2021_10_25_the_handbrake_has_come_off,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "It feels like the handbrake has come off",
  "author": "Thomas Wilson",
  "date": "2021-10-25T18:11:00.000Z",
  "slug": "2021-10-25-the-handbrake-has-come-off",
  "draft": false
};
const _2021_10_25_the_handbrake_has_come_off = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Over the past two months I have inherited leadership of an engineering team I have worked in for the last twelve months.  In the last two weeks I\u2019ve seen the speed of development go from not-slow, to almost inarguably fast (given current resource constraints).</p>
<p>I\u2019ve spent months slowly attempting to unpick the parts of the team and company which were bottlenecks.  There\u2019s actually some very interesting conversations around what makes a bottleneck, and how do you spot one.  But I want to talk about the feeling of not moving fast, and then all of a sudden moving quickly. </p>
<p>The analogy I\u2019ve been giving is that it\u2019s like I\u2019m in a car facing down hill, and then the handbrake came off.  </p>
<p>At first I was like <em>ahhhhhh!</em>, but now I\u2019m more like <em>ahhhh?</em>.  Ya know?</p>
<p>For the year before this I had been a member of a very small engineering team, where I had written or reviewed 90% of the code that went into production.  I, broadly, knew all of the projects, and what was happening. </p>
<p>Now, with a larger team (six) and some well-experienced hands in and incoming, things are starting to happen that I don\u2019t <em>fully</em> understand.  Sure, I understand the what and the why, but the how isn\u2019t as in focus.  I\u2019m a frontend engineer by trade, dev-ops is\u2026 <em>hand-wavy</em> it works?</p>
<p>This is the <em>ahhhhhhh!</em> moment.  The fear that things are happening, decisions are being made, changes to passing, and I\u2019ve had full visibility on the result but far less on the process.  And that scares me because what if things start going wrong? </p>
<p>I trust all the engineers in my team implicitly, you have to, but it\u2019s still scary.  Things still go wrong.</p>
<p>And the <em>ahhhhh?</em> ? That came when I saw the cadence of our releases going up, the quality and security of our software being cemented (test-driven development and refactoring), and both deeper and wider features being shipped.</p>
<p>Yes, it\u2019s terrifying and I feel a little out of control, but it\u2019s been about two years since I\u2019ve felt like I\u2019m part of such a productive engineering organisation.  It feels like the value proposition of engineering is apparent, not promised. </p>
<p>There are lot of parts to this improvement, including but not limited to:</p>
<ul><li><strong>Test-driven development</strong> at unit, functional, and integration level</li>
<li><strong>A simple git workflow</strong> for <code>main</code> -&gt; <code>feature</code> -&gt; PR -&gt; <code>main</code></li>
<li><strong>Pair programming</strong> for 10-50% of my day</li>
<li><strong>Feature-driven tickets</strong>, by moving to a monorepo and unifying development &amp; deployment, engineers ship an entire (cross-cutting) feature all at once</li></ul>
<p>I\u2019d love to talk in detail on each of these, but for now I\u2019ll just say that I am confident each of these highly correlate to better developer productivity. </p>`;
});
