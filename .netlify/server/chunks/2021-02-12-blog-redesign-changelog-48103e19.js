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
  default: () => _2021_02_12_blog_redesign_changelog,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Website Design 2.0 Changelog",
  "author": "Thomas Wilson",
  "date": "2021-02-12T00:00:00.000Z",
  "draft": false,
  "tags": ["redesign", "technical"],
  "slug": "2021-02-12-website-design-2-0-changelog"
};
const _2021_02_12_blog_redesign_changelog = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>I\u2019ve redesigned the blog. This post just covers the technical whats and hows of it all.</p>
<h2>What\u2019s changed ?</h2>
<ul><li><strong>New Dark theme colours</strong>: Look around. Look at this dark purply-grey. Look at the same brand-orange, and the deliciously crisp white text. New colours!</li>
<li><strong>100% More Portfolio</strong>: I completely revamped the homepage so that it actually showcases my writing and my work. The content isn\u2019t hidden behind anything anymore.</li>
<li><strong>50% Less Bio</strong>: I\u2019ve shortened bios and text on the home page, they made the site feel a lot more static and like a placeholder site than I wanted.</li>
<li><strong>Blog Series Highlight</strong>: I\u2019ve highlighted, and made accessible, certain series on my blog (like my \u201CThings Week I Learned\u201D series). You can now filter for just these posts on the blog page.</li>
<li><strong>Personal Brand</strong>: The site sizzles a little bit more with personal brand and little \u201Cmoments\u201D in the UI. It\u2019s a \u201Cwebsite experience\u201D. This includes little self-aware UI labels which seem very post-modernist and bring me joy.</li>
<li><strong>Tags</strong>: I added tags to blog posts. They don\u2019t do anything right now though lol.</li></ul>
<h2>Yeah but how?</h2>
<p>I bloody love talking about workflows and processes. By brevity here is a mercy and a kindness:</p>
<ul><li><strong>Design</strong>: Any and all visual design was done in <a href="${"https://www.figma.com/about/"}" rel="${"nofollow"}">Figma</a>. I bloody love Figma.</li>
<li><strong>Code</strong>: This site was, and remains, a static site built with <a href="${"https://www.gatsbyjs.org/"}" rel="${"nofollow"}">Gatsby</a> (and therefore on <a href="${"https://reactjs.org/"}" rel="${"nofollow"}">React</a> and <a href="${"https://graphql.org/"}" rel="${"nofollow"}">GraphQL</a>)</li>
<li><strong>Deployment</strong>: <a href="${"https://www.netlify.com/"}" rel="${"nofollow"}">Netlify</a>, and they do a <em>stunning</em> job.</li>
<li><strong>Writing</strong>: Everything is Markdown (<a href="${"https://thomaswilson.xyz/blog/2021-01-10-an-ode-to-plaintext-notes"}" rel="${"nofollow"}">markdown is cool</a>). I write with <a href="${"https://ia.net/writer"}" rel="${"nofollow"}">iA Writer</a> for longer pieces (like this) and <a href="${"https://ia.net/writer"}" rel="${"nofollow"}">Obsidian</a> for research and emergent writing.</li></ul>`;
});
