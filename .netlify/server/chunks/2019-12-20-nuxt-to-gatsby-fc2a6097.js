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
  default: () => _2019_12_20_nuxt_to_gatsby,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Moving my personal site to Gatsby",
  "author": "Thomas Wilson",
  "date": "2019-12-31T00:00:00.000Z",
  "draft": false,
  "slug": "moving-from-nuxt-to-gatsbyjs",
  "tags": ["javascript", "gatsby", "vue", "react"]
};
const _2019_12_20_nuxt_to_gatsby = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>A few weeks ago I was having a conversation with someone about modern web design, and we spoke about web fonts and variable fonts. In my experience, people who work in software development have a couple of hills that they will die on, if so required. For this person - the idea of not using system fonts (i.e. typefaces which are already installed on a user\u2019s device) was completely baffling. Why are we increasing the time-to-load and packet size required to display a web page - just for a typeface. What about that horrible (re)appearing text, or worse, shifting text which happens when the browser finally loads the typeface.</p>
<p>System fonts, I had argued to me, are designed and considered specifically for the device viewing the page. They\u2019re curated in a way that we, as site authors, cannot easily curate.</p>
<p>Ever since they introduced that tiny bit of doubt into my mind, I couldn\u2019t help thinking that maybe I should just be using system fonts. Long story short, I rewrote my entire personal site (<a href="${"https://thomaswilson.xyz"}" rel="${"nofollow"}">https://thomaswilson.xyz</a>) from <a href="${"https://nuxtjs.org"}" rel="${"nofollow"}">Nuxt</a> (a Vue.JS application framework) into <a href="${"https://www.gatsbyjs.org"}" rel="${"nofollow"}">Gatsby</a> (a React.JS static site generator). It took me like to evenings and I\u2019m happy with my decision.</p>
<p>Look, there were a couple of other factors in this. Like, I had just taken the jump to go freelance so I needed to move my increasing portfolio over to my professional site. I wanted to move some of my older pieces of writing from Medium onto pages on this site. I was creating a beautiful list of my <a href="${"/albums-2019"}">favourite albums of 2019</a>. There was a lot going on, and I was finding a lot of friction in the process of writing blog posts for this site.</p>
<h2>Why React, not Vue ?</h2>
<p>Fundamentally, I have more personal and professional experience with React. I have created a lot of static sites and dynamic apps with React, I\u2019ve used a lot of styling solutions, state management libraries, application architectures, and third-party packages. I know my way around the ecosystem, around React-ive thinking. We should be careful of using tech <em>just</em> because we\u2019re comfortable with it, but when it\u2019s your personal website which no one else will see or touch - familiarity is a major benefit.</p>
<p>It definitely didn\u2019t help that I was having <em>big</em> problems getting my codebase to build on a new Laptop (a 2019 MacBook Pro, not even something obscure). It couldn\u2019t get the Nuxt -&gt; TypeScript build chain to work, despite hours of debugging. I\u2019m not a dev-ops or build-chain kind of developer, but really this shouldn\u2019t have happened, and should not have been so obscure to solve.</p>
<p>Additionally, at the time of writing, the proposed <a href="${"https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf?ref=madewithvuejs.com"}" rel="${"nofollow"}">V3 of Vue.JS</a> will contain a lot of changes to the library and recommended practices. I am excited to see these changes, and I think Vue.JS is a better web application framework out-of-the-box than React and Angular - I believe V3 will bring a lot of hard-learned lessons about web apps into the framework. However, right now I didn\u2019t fancy re-writing most of a failing Vue app to have to re-write it again in a few months. <em>A la</em> AngularJS vibes.</p>
<h2>Why Gatsby?</h2>
<p>I\u2019ve used Gatsby a few times to build quick/simple sites for friends. It\u2019s very fast, both in development process, build process, and then loading times. I was looking for something I could be productive in quickly, at Gatsby was that.</p>
<p>I want to give a special shoutout here to the <code>gastby-image</code> package for lazy-loading images (alongside the GraphQL support and <code>image-sharp</code> library for image processing. This kind of support for blur-up images, and an easy ability to control image size at build time are incredible, and a great step forward for the modern web.</p>
<p>Speaking of GraphQL (smooth, I know) - I think GraphQL is going to play a big part in web development in the next 3-5 years. No, not everything is going to be re-written to be GraphQL endpoints, obviously. That would be a bad idea, obviously. Yet, as a front-leaning full-stack developer, GraphQL is powerful and expressive enough to make me take notice. Gatsby gives you a GraphQL layer to query for all your data (local files, site metadata) - the chance to get familiar with this tech is something I am appreciative of.</p>
<p>Recently the core-team has been pushing <a href="${"https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/"}" rel="${"nofollow"}">Gatsby Themes</a> (as I heard about on <a href="${"http://www.fullstackradio.com/115"}" rel="${"nofollow"}">here</a>, <a href="${"https://syntax.fm/show/150/gatsby-themes"}" rel="${"nofollow"}">here</a>, and <a href="${"https://syntax.fm/show/150/gatsby-themes"}" rel="${"nofollow"}">here</a>). I love web design (have I mentioned that yet?) - and I love seeing the core-team take such an interesting, systematic approach to design as a core part of their framework\u2019s architecture. It looks like I\u2019ll be able to learn a lot about systemised design through Gatsby.</p>
<p>Lastly, I wanted to quickly/easily deploy my personal site on <a href="${"https://www.netlify.com"}" rel="${"nofollow"}">Netflify</a> - a service which can build, deploy, and host static sites incredibly easy. It took, and I am not exaggerating, about 120 seconds to go from creating a git repo to having this website available on the World Wide Web.</p>`;
});
