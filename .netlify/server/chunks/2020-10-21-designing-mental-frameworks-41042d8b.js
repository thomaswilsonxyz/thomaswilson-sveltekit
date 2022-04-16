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
  default: () => _2020_10_21_designing_mental_frameworks,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Think in Frameworks, build with Libraries - Thinking about CSS in Web Development",
  "author": "Thomas Wilson",
  "date": "2020-10-21T00:00:00.000Z",
  "draft": false,
  "slug": "2020-10-20-mental-frameworks-in-design-engineering",
  "tags": ["design", "css"]
};
const _2020_10_21_designing_mental_frameworks = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>I\u2019m a few weeks into starting a new job as a frontend software engineer, and I\u2019ve been moving around our (Angular) codebases to make a few smaller changes, and bump a number of our core dependencies through a couple of major (e.g. <code>1.0.0</code> -&gt; <code>2.0.0</code>) versions.</p>
<p>This caused a few visual changes, and in fixing, or at least understanding, what\u2019s happened I was rooting around a lot of the component-scoped style files (which are SASS files). I noticed that a lot of the selectors, including nested selectors, are using elements to create queries, for example:</p>
<pre class="${"language-scss"}"><!-- HTML_TAG_START -->${`<code class="language-scss"><span class="token comment">// random-component.scss</span>
<span class="token selector">main </span><span class="token punctuation">&#123;</span>
  <span class="token selector">h1 </span><span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">img </span><span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">p </span><span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.15em<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 120%<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>

    <span class="token selector">span </span><span class="token punctuation">&#123;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 1.1rem<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is completely valid SCSS - it had done its job of styling <code>random-component</code>. There\u2019s a million ways to style a modern web app, plus <a href="${"https://daverupert.com/2020/06/tradeoffs-and-shifting-complexity/"}" rel="${"nofollow"}">there\u2019s just a set amount of complexity in a design</a>\u2026 good CSS won\u2019t make it go away, it\u2019ll just help you manage it.</p>
<p>But I didn\u2019t like it. My gut feeling is that it feels very clinical - there\u2019s no notion of what exactly is <em>in</em> <code>random-component</code>. It\u2019s easy for a computer to read, but not for a human. Sure, it\u2019s easy to know that <code>h1</code> is probably the page title, but what about that <code>&lt;span&gt;</code> nested in the <code>&lt;p&gt;</code> - is that an inline name of a product, a code sample, contact information? I wouldn\u2019t be comfortable changing this SCSS quickly - because I don\u2019t know how limited in scope that <code>p &gt; span</code> styling is - is used <em>only</em> for contact information, or for contact information <em>and</em> inline code?</p>
<p>More technically speaking, is my concern that it ties our design specification and our DOM structure very tightly: we need a <code>main &gt; p &gt; span</code> in order to apply those styles. This might sound perfectly intentional, but what happens when you want to apply exactly the same styles in a <code>main &gt; block quote &gt; span</code> ? Do you copy-paste the code?. What happens if I add a wrapping <code>div</code>, <code>caption</code>, or another <code>span</code> before the actual for-real <code>span</code> that we want to give a background colour of <code>#f1f1f1</code>? Suddenly our implementation, i.e. our HTML/DOM structure, has changed, which has caused the need for our stylesheet to change.</p>
<p>At the root of these problems is a lack of abstraction between design, i.e. visual metaphors and language we\u2019re trying to show our users, and the implementation, i.e. the HTML code we\u2019re rendering into a web browser. When you\u2019re a small team, or when everyone has good functional knowledge of all the technologies involved, this is perhaps favourable - the code communicates to your audience. But what happens when someone more specialised in design, HTML accessibility, or responsive layouts comes in and starts changing things? The strict coupling of design and implementation could either a) slow down effective change, or b) cause unintended visual changes or regression.</p>
<p>This raises alarm bells in my little engineer brain: a change in HTML structure should not cause a breaking visual change. <strong>The structure of the DOM is largely for computers</strong>: to include the right information in the right format (an image, a header, a table) - and then let the browser render that out, allow accessibility tools to correctly understand it, and even allow other software to parse it to extract data.</p>
<p><strong>Design, however, is entirely and selfishly for humans</strong>. We style on the web to make them clear and understandable to the human being who is viewing that document. There are, of course, a million other reasons why you\u2019d style something: increase legibility, brand consistency, pure aesthetics, and so on. And when you look at some of the most widely used CSS philosophies, e.g. <a href="${"https://bradfrost.com/blog/post/atomic-web-design/"}" rel="${"nofollow"}">Atomic Design</a>, <a href="${"http://getbem.com/introduction/"}" rel="${"nofollow"}">Block Element Modifier (BEM)</a>, or <a href="${"https://github.com/stubbornella/oocss/wiki"}" rel="${"nofollow"}">Object Oriented CSS</a>\u2026 they\u2019re about creating opinionated names.</p>
<p>When I design, I am designing entirely for humans. I am creating visual metaphors, rhythm, conventions, and predictability which is linked to the content of the website, the structure of the page, the intended audience. The same applies to when I am writing CSS: I am trying to write verbally consistent, and mentally clear CSS. <strong>But I have never designed or written CSS for HTML elements</strong>.</p>
<p>When I design, I am asking questions like:</p>
<ul><li>What kind of data are we showing the user here?</li>
<li>Do we show this data anywhere else in the application?</li>
<li>How can the user interact with this screen, and how would I <em>like</em> them to interact with the screen</li>
<li>Where can the user go from this screen?</li></ul>
<p>Things I am <strong>not</strong> thinking about include:</p>
<ul><li>How can I trim the user\u2019s name so there\u2019s minimal whitespace in this <code>a</code> tag?</li>
<li>Will this <code>p</code> tag by <code>flex-grow: 1</code> ?</li>
<li>Does this <code>div</code> tag need to inherit <code>display: none</code> from its parent?</li></ul>
<p>I think of design more as a framework than a library. In technical terms, a library is smaller, focused, single-purpose bit of code or tech that does one thing. There is typically one way to do one thing. A framework, however, comes with more opinions and scope: it\u2019s possible to have a \u201Cright\u201D and a \u201Cwrong\u201D way of doing things (sometimes called the \u201Cblessed path\u201D).</p>
<p>There are definitely more framework-esque approaches to design. Tailwind CSS and other atomic- or utility-first CSS libraries are increasingly popular. And also incredibly useful or clear for a lot of people. However here we see the CSS classes bundled together into a single <em>component</em> to encapsulate the complexity - you\u2019re making a framework based on Components, not CSS class names.</p>
<p>I see a lot of my role as a designer as taking various bits of tech and an understanding of a business context, and using both to create frameworks, and their associated mental models. <strong>I think that in-house design benefits when it comes with its own mental models</strong>. They\u2019re bigger, they\u2019re tied to a specific business/product - so they\u2019re not really sharable or useful to anybody else. But that\u2019s okay - because they\u2019re <em>very</em> useful to the people who need them.</p>
<p>So that\u2019s what I\u2019ve been thinking about this week: how some SCSS files made me realise that my role as an engineer and designer is to create mental models and frameworks, sometimes using tiny libraries.</p>`;
});
