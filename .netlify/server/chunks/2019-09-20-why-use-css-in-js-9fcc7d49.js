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
  default: () => _2019_09_20_why_use_css_in_js,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "author": "Thomas Wilson",
  "title": "What is CSS-in-JS and why do people keep using it?",
  "date": "2019-09-20T00:00:00.000Z",
  "slug": "what-and-why-use-css-in-js",
  "draft": false,
  "tags": ["css-in-js", "javascript", "frontend"]
};
const _2019_09_20_why_use_css_in_js = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>The elders tell us of a time where you would build websites by literally writing your <code>.html</code> files. If you wanted to add some styles, you\u2019d write them in a <code>.css</code> file and then <code>&lt;link rel=&quot;stylesheet&quot;&gt;</code> the two together. So you\u2019d write your entire site in semantic HTML, about whatever it is people did back then (like mammoth hunting or pyramid building) and then you would <code>ftp</code> that onto your server, and other people could view it. At least as long as they could fight off polio or resist rebelling against the bourgeoisie. Maybe you\u2019d go out and celebrate at the tavern afterwards, but actually that one sounds pretty relevant today.</p>
<h2>Component-orientated architectures arrive</h2>
<p>In the modern (but still terrifying) world of 2019 - HTML, CSS, and JS remain three central tenants of the internet: HTML providing content, CSS styling it, and JS adding functionality on top of everything. The way we get the result of these technologies, HTTP, has remained pretty constant too.
However, at some point people started to realise that writing <em>just</em> HTML could make it difficult to edit parts of their website. Say you have a navigation header, and you want to add a new page to your website. Well now you need to go through every <code>.html</code> file, find the navigation header, and add an item. And what happens if you miss one file by accident?
This is the problem which facilitated the evolution of component-centred architecture: a component being some pre-defined visual element, simply a \u201Cthing\u201D on a website: a tweet in a list of tweets, a list of currently trending articles on BBC News, a user\u2019s avatar image.<br>
This lead to building websites as a set of components which you compose together, as opposed to single monolithic pages. This practice evolved, and more responsibility was handed over to JS and other technologies. People started writing Single Page Applications (SPAs), and static-site generators increased in popularity - where we could define and update components in a single place, and see them updated across our site without having to delve into the nested HTML ourselves. It doesn\u2019t matter if the site is actually just a single JS function or runtime which hooks into the browser\u2019s URL (e.g. a SPA written in React or Vue) or if it generates a set of HTML files (a static site generator). Component-based architecture is the practice of breaking out our visual element by their role, not their location.
Pairing components with external data sources, like in a CMS or a databases, means that a website does not need to be rebuilt or re-made whenever a new product is added to a store, or the price of an item changes. It has given a lot of power to people in the business, but who weren\u2019t developers. And it\u2019s freed up developer time to focus on more developer-y things, like complaining about meetings and fixing their parents\u2019 wi-fi.</p>
<h2>Where does CSS come into this?</h2>
<p>Look, the point I\u2019m making is that modern web development considers a web page as composed of many components, which can be shared across pages (and even sites). But the way we do styling with CSS didn\u2019t immediately go through a similar revolution. In a lot of cases we were still left with one global CSS file, which we would simply <code>&lt;style ref=\u201Cstylesheet&gt;</code> into our application.
This isn\u2019t to say it was still 1998 - we developed build chains and pre-processors - tools which would generate CSS, but gave us more advanced features - like inheritance and extension, and functions and variables. This made it much easier to update CSS, and quicker to write in general.
Despite this, these processes often output a single global stylesheet. In the past couple of years, some web developers have created technologies which remove this separation between components and styling - allowing developers to declare styles in the same way they declare components.</p>
<h2>Why not CSS-in-CSS?</h2>
<p>(First off, let\u2019s acknowledge the fact that it\u2019s now completely valid to specify that I\u2019m talking about CSS as in a <code>.css</code> file - how weird is web development?)
CSS is incredibly powerful, with a lot of nuance. It\u2019s a great technology and some people really love it - it can make websites beautiful and fast and just joyful. Despite what I\u2019m about to say, I really like CSS, and I\u2019ll use it by default where it makes sense.
Despite this, there are very legitimate criticisms being levelled at CSS. Principally, these criticisms are due to the way that CSS is authored, managed, and generated - and the sprawling, dynamic, and unpredictable HTML content tree which is tightly coupled to it.
There are a couple of problems which emerge from these large, single, often append-only stylesheets. These problems become more apparent, and costly, as an application reaches a certain size, and exists in the real world, where maybe several developers are authoring styles and creating different bits of the website. Even as a solo dev on side projects, I\u2019ve felt some of these negatives:</p>
<ul><li><strong>Name collision:</strong> Different parts of you application share the same logical name, like <code>.navigation-item</code> - but is that the nav item in your footer, side bar, or header ? All of a sudden, css is vying to apply the same styles to three three separate navigation items, which you might not necessarily want to look the same. This can lead to\u2026</li>
<li><strong>Over-specific selectors:</strong> To combat the above, you might start chaining your selectors (e.g. <code>header &gt; .navigation-item</code>) which is fine, until you have to chain 2, 3, 4 selectors - at which point re-structuring your HTML introduces visual regression and style changes, because your css nesting no-longer matches your HTML.</li>
<li><strong>Keeping styles in just-in-case:</strong> It can be surprisingly hard to know which styles in css you are using, especially when paired with the above: it\u2019s easy to see if a single class name is being used, but much harder to know, reliably, at a glance, if you have <code>header &gt; .navigation &gt; .navigation-item &gt; .navigation-icon</code>. Imagine the complexity you add in when you start dynamically rendering elements with a JS library, or just using JS to add or remove classes from elements. This can lead to bloated CSS files which no one wants to touch or modify, for fear of introducing unforeseen regressions. Which is basically\u2026</li>
<li><strong>Unpredictable side effects from modifying or deleting code</strong>: This affects the developer experience and process - well-architected software presents a clear process for change, refactoring, or extension. When you cannot make changes with the knowledge of what you\u2019re going to affect, or at least <em>where</em> you\u2019re going to affect - it is hard to maintain and extend software into the future. You end up with long, append-only style sheets, and worse, the cursed <code>!important</code> tag.</li>
<li><strong>Source order specificity</strong>: With more of our client-side applications being rendered, loaded, and managed by JS frameworks or libraries - we cannot reliably predict the order which CSS styles will be loaded into the DOM, because it may be loaded only for a specific page - either intentionally, or from automated code-splitting. Files which load later have higher <em>source order specificity</em> and can override styles declared earlier. So styles can be unpredictably overridden by the way our users use the application.</li></ul>
<h2>CSS-in-JS as a solution ?</h2>
<p>As the name suggests, CSS-in-JS is the process of using JS to generate valid CSS style syntax. This is opposed to managing their styles by creating separate <code>.css</code> files (or <code>.less</code> and <code>.scss</code> for that matter). It is typically defined alongside a component, e.g. the JSX in a React component, or the template in VueJS. This is strongly related to the component-first architecture of modern web development - an extension of the idea that everything about the View of the application (capital V as in MVC) should be defined in one place - not two (a .js file and a .css)
It\u2019s briefly worth mentioning here that CSS <a href="${"https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e"}" rel="${"nofollow"}">can be scoped</a> to single files - meaning that not all of this functionality is specific to JS. However, the ability to generate and modify styles with the JS language offers a lot of the power of CSS to the hands of those without intimate knowledge of the CSS syntax. Dangerous indeed.
CSS-in-JS is <em>not</em> a singly library or package, and it is not an agreed syntax. A number of approaches have emerged from the community to address this problem. Some example libraries include:</p>
<ul><li><a href="${"https://www.styled-components.com"}" rel="${"nofollow"}">styled-components</a></li>
<li><a href="${"https://cssinjs.org/?v=v10.0.0-alpha.25"}" rel="${"nofollow"}">JSS</a></li>
<li><a href="${"https://emotion.sh/docs/introduction"}" rel="${"nofollow"}">Emotion</a></li>
<li><a href="${"https://styled-system.com"}" rel="${"nofollow"}">Styled-System</a></li></ul>
<h2>Why do people keep using CSS-in-JS ?</h2>
<p>Fundamentally: <strong>It\u2019s a component-first way of thinking</strong>. it takes the way modern web development thinks about web pages, and the widgets on them - and applies that philosophy to way we write our styles. It gives us a one-to-one relationship between our components, and their styling declaration (as opposed to one global stylesheet and many components.) This means your selectors aren\u2019t traversing the DOM to find the <code>.navigation-item</code> that they <em>really</em> mean.
This makes it easy and familiar to think about, and it <strong>centralises our visual code into one place</strong>. This is a nice philosophical benefit, but it pragmatically helps us by constraining where a set of styles are used. This means <strong>they could be edited or deleted with more certainty that we aren\u2019t about to accidentally change styles across the DOM</strong>.
For me, the strongest advantage of CSS-in-JS is the addition of functionality from a programming language, like JS. <strong>This allows you to set styles based on global variables (e.g. a theme) or local state and props, and use functions and conditional statements.</strong> This adds a huge range of flexibility and functionality, without having to manually add or remove class names from a DOM element. This drastically reduces the cost of creating complex or delightful user experiences (e.g. having cards hover when they\u2019re under the cursor, or a button glow if it\u2019s toggled on) without tightly coupling it to specific css classes or selectors. UI libraries and frameworks should abstract the author from the implementation details (i.e. managing the DOM), and CSS-in-JS fits this philosophy.
When we declare styles at author time, our library of choice (e.g. styled-components) handles the transformation into valid CSS, and inserts it into the DOM. As part of this, the library will likely generate a unique (hashed) classname, this means <strong>developers don\u2019t have to worry about creating unique, or strictly-structured class names for their css</strong> - they can just declare styles, and assume they will be correctly scoped.
What\u2019s more, <strong>the build chain which does all of these is integrated into the existing build process for the website</strong>. We can keep our JS project as purely JS, and don\u2019t have to worry about building and bundling <code>.scss</code> or <code>.less</code> files.</p>
<h2>Articles I found useful</h2>
<p>I came across a couple of really nicely written articles when I was researching this piece. I\u2019d recommend them if you\u2019re curious:</p>
<ul><li><a href="${"https://mxstbr.com/thoughts/css-in-js/"}" rel="${"nofollow"}">Why I Write CSS in JavaScript</a></li>
<li><a href="${"https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757"}" rel="${"nofollow"}">What actually is CSS in JS?</a></li>
<li><a href="${"https://2019.stateofcss.com/technologies/css-in-js/"}" rel="${"nofollow"}">The State of CSS 2019: CSS-in-JS</a> - Just pretty cool</li></ul>`;
});
