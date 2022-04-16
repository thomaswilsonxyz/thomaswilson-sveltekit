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
  default: () => _2021_12_12_build_the_platform_ship_the_product,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Ship the product, build the platform",
  "author": "Thomas Wilson",
  "date": "2021-12-12T17:21:00.000Z",
  "slug": "2021-12-12-build-the-platform-ship-the-product",
  "draft": false
};
const _2021_12_12_build_the_platform_ship_the_product = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Imagine you\u2019re part of a new-ish, in-house engineering team working with a legacy codebase.  How do you extend this codebase into new features while discovering and fixing Dark Patches on that same codebase\u2019s map?  I actually don\u2019t know, and myself and the rest of the engineering team at Oxwash have been working hard to think about solving this. </p>
<p>My thinking about shaping and prioritising this work first coalesced around one phrase: <strong>Build The Platform</strong>.  This was shamelessly stolen from Steve Yegge\u2019s <a href="${"https://gist.github.com/chitchcock/1281611"}" rel="${"nofollow"}">Google Platforms Rant</a>.  It\u2019s long and very good, and if you\u2019re leading an engineering team I think you should read it.  </p>
<p>I think engineering teams should be building the platform, or operating system, that runs a business.  The platform should account for the objects/entities, and processes that comprise a business.  Things like Orders and Users.  A Platform can be thought of as a bunch of services, where each service has a single responsibility.  Like letting users register and sign up, or like recording revenue.  </p>
<p>Platforms help company and public users interact with the business.  We do laundry at Oxwash, so the platform is about helping us do more laundry, more efficiently.  You\u2019ll be shocked to learn running a laundry isn\u2019t as simple as it seems. </p>
<p>While I\u2019ve found this a fantastic tool in technical and strategic discussions, it\u2019s not great when you\u2019re talking with end-users, internal or external.  Computers and software are a means to an end for 95% of people.  To those people you can\u2019t say \u201Cthis sounds like we need to alter our internal scheduling engine\u201D.  To these people you have to ask product-focused questions, like \u201Cwhat tools do you need to spread workload so that laundry can be done consistently without being overwhelmed?\u201D </p>
<p>This is product-level thinking.  Behind the scenes we\u2019re building a platform.  When we think about grouping, shaping, and prioritising work it\u2019s about choosing what\u2019s best for the platform.  Front-of-stage, we\u2019re shipping a product.  Many products, actually: internal and external tools, and even more if you think about tests and environments as features.</p>
<p>This way the engineering team can think about adding value to the business by building products which are demonstrably useful to the people who need them.  Separately, they can make the engineering team\u2019s life easier by helping more code be shipped faster and with more confidence that it\u2019s not going to go wrong. </p>
<p>This addresses two core questions I find myself being asked a lot: the <em>what</em> and the <em>how long</em>.  If you\u2019ve got good answers to those questions, you\u2019re doing well (I think).</p>
<p>I\u2019m currently having to re-evaluate this beautifully simple distinction.  That\u2019s caused where problems in the platform cause problems across products.  </p>
<p>A platform composed of separate, business-level services means that when something doesn\u2019t behave as expected, you don\u2019t always get clear and obvious signals.  You might get reports of minor unexpected behaviour here-and-there, or some weirdness occurring in some edge cases.</p>
<p>When these problems are in Platforms, not Products, it can make the <em>what</em> and the <em>how long</em> answers seem wildly disproportionate from a product perspective.  How long to fix this tiny bug?</p>
<p>And now you\u2019re relying on either a) engineering expertise, or b) trust to communicate the source of the problem.  You\u2019re also going to have to use Platform factors in the prioritisation of fixing these problems, which adds another layer of complexity when translating Work In Progress at the engineering-product interface.</p>
<p>Engineering is tough, yo.</p>`;
});
