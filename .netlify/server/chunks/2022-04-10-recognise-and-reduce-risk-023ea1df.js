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
  default: () => _2022_04_10_recognise_and_reduce_risk,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Recognise and reduce risk",
  "author": "Thomas Wilson",
  "date": "2022-04-10T21:10",
  "slug": "2022-04-10-recognise-and-reduce-risk",
  "draft": false
};
const _2022_04_10_recognise_and_reduce_risk = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Answering and executing the question(s) \u201Cwhat do we build and how do we build it?\u201D is an existential challenge for small companies.</p>
<p>What you build is probably more important than how you build it.    But how you build it changes how well you can change it.  And the what <em>is</em> going to change.</p>
<p>Uncertainty and risk are the abstract problems here.  Will an onboarding email sequence increase the number of customers who convert to a paid membership?  Do our users care about keyboard shortcuts?  Should we hire someone new?    </p>
<p>Dan McKinley\u2019s <a href="${"https://boringtechnology.club/"}" rel="${"nofollow"}">Boring Technology Club</a> introduces the the idea of the <em>Innovation Token</em>, a metaphorical token that we spend on \u201Cour limited capacity to do something creative, or weird, or hard\u201D.  A team has very few innovation tokens, and each token spent increases risk.</p>
<p>They increase risk because they make it hard to make a good guess about what will happen next.  Good guesses are sometimes the only fuel that new companies and small engineering teams have.  Longer-lived companies have experience or data to help.  </p>
<p><a href="${"https://basecamp.com/shapeup"}" rel="${"nofollow"}">The Shape Up methodology</a> gets it right: we\u2019re making bets.  </p>
<p>If you\u2019re an engineer you can make a bet more risky by building with newer technologies (frameworks or languages) or infrastructure (databases or cloud providers), relying on manual (not automated) testing or deployment, by prematurely optimising, by building in isolation from customers, and a hundred other smells.</p>
<p>A product person can increase risk by not knowing or understanding their customers, attempting to solve an over- or under-ambitious problem, by pricing things wrong (or not at all).</p>
<p>These types of risk are not separate[^1] </p>
<p>If you know your customer is extremely price sensitive, then building a $99/yr subscription model is going to have risk that even the most boring technology stack (IMO: MySQL, Rails, Bootstrap, Digital Ocean) cannot address.</p>
<p>Risk is risk.  Risk from product (what) and risk from engineering (how) cannot be meaningfully separated once you take more than three steps backwards.  </p>
<p>Your job is to reduce risk for yourself, your boss, or your company.  If you have any interest beyond the pure craft of software, aim to reduce risk for the most number of people possible</p>
<p>[^1]: I think we (I) separate the <em>what</em> from the <em>how</em> because they are often solved by a CEO and CTO.  Just because a problem is solved by two people does not mean it is two problems.</p>`;
});
