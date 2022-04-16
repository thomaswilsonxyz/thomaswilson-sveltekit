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
  default: () => _2021_01_31_tiny_thoughts_frontend_is_fullstack,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Tiny Thought: Frontend Engineering is a Fullstack Problem",
  "author": "Thomas Wilson",
  "date": "2021-01-31T00:00:00.000Z",
  "draft": false,
  "slug": "2021-01-31-frontend-is-fullstack",
  "tags": ["tinythought", "essay", "fullstack"]
};
const _2021_01_31_tiny_thoughts_frontend_is_fullstack = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p><em>Tiny Thoughts</em> are little (500 word) essays. They\u2019re concise.</p>
<p>Hypothesis: Frontend engineering cannot exist in isolation from backend technologies.</p>
<p>What sparked this: Thinking about building the next generation of web software at <a href="${"https://www.oxwash.com"}" rel="${"nofollow"}">Oxwash</a>.</p>
<p>All software is either\u2026</p>
<ol><li>Used by a human for a human-scale (i.e. nebulous and larger) task like updating a status on social media, download a bank statement, or send a message.</li>
<li>Used by other software to complete some computer-scale (i.e. smaller and specific) task like upload a file to S3, compress an image, query a database.</li></ol>
<p>Frontend software is, by definition, the bit used by humans. Good frontend software makes the human user aware of what they can(not) do, and what\u2019s going on in the system. How many unread messages do I have? What class do I have at 4pm this Thursday?</p>
<p>This information is communicated in the User Interface (UI). UIs are interpreted by humans. The metaphors and language developed during design then used in UI are intended solely to communicate and explain. Humans can bend, abstract, and change concepts or language. So although UIs <em>should</em> be consistent, they can not be. You can present your blog page as a \u201Crecent articles\u201D page, and as a list view for the <code>posts</code> table in your database. Both are true, but have different ideas about how \u201Ccomputery\u201D an app is.</p>
<p>When a human tells the UI that they wish to <em>do</em> something, the UI then has to talk to another bit of software. Software cannot bend, abstract, or change its ideas. A blog post <em>is</em> a row in a database. Software has a pre-specified language of things it can do: the Application Programming Interface (API).</p>
<p>Frontend engineering is about working with both APIs and UIs. The skill of a frontend engineer can be proxied by their ability to design one or both. It\u2019s a skill because if you make these languages too similar, you risk a UI which is too technical or an API which is too inflexible.</p>
<p>A lot of engineers write code for engineers. I\u2019ve seen (and written) \u201Cclean\u201D code which prematurely optimised and abstracted. This does not guarantee a good Developer Experience (DX) when you actually <em>use</em> the API. Nor does it make the user experience or product quality inherently better.</p>
<p>These are strong code smells if I\u2019m building version 1, or the API only has one consumer.</p>
<p>As a frontend engineers, we have to advocate for users and software, situation depending. We should make better interfaces.</p>
<p>Recognising the need to design singular interfaces (APIs and UIs), and using a shared language is GraphQL\u2019s fundamental distinction from REST. GraphQL acknowledges that provider and consumer need to know about each other.</p>
<p>If your product <em>is</em> an API you should think especially hard about clear concepts and language.</p>`;
});
