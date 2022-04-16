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
  default: () => _2020_08_23_why_are_you_like_this_javascript,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Why are you like this, JavaScript? Taking a look at JavaScript's single threaded nature.",
  "author": "Thomas Wilson",
  "date": "2020-08-23T00:00:00.000Z",
  "slug": "2020-08-23-why-are-you-like-this-javascript",
  "draft": false,
  "tags": ["javascript", "why-are-you-like-this-js"]
};
const _2020_08_23_why_are_you_like_this_javascript = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Sometimes you hear something so often that you don\u2019t really hear it anymore. One of those things for me is words to the effect of \u201CHow does this JavaScript code even run?\u201C. I choose to interpret this generously as \u201CHow does JavaScript itself run\u201D, and not \u201Chow does this hot garbage code you wrote run?\u201C.[^I really hope I don\u2019t write as much hot garbage JavaScript as I used to]</p>
<p>There\u2019s a lot of ways we could describe JavaScript (including some really colourful adjectives), but objectively it is an asynchronous, single-threaded, dynamic programming language. These characteristics, which are deliberate design decisions, are responsible for a lot of the quirks, gotchas, and design patterns that make being JavaScript developer tricky for anyone just getting started. Luckily it\u2019s almost never tricky for anyone else (<em>he lied</em>).</p>
<p>For example, have you written and run JavaScript code which:</p>
<ul><li>Ran in the browser, got in an infinite loop somewhere, and prevented all interactions with the web page (including the ability to close a tab or the browser)?</li>
<li>Fetched data from another server, tried to access the data, and got an <code>undefined</code> or <code>Promise</code> related error?</li>
<li>Written server-side JS with a callback/promise chain for data processing/cleaning and had your code start, but not finish, its execution of this chain - leaving the request hanging for a response.</li></ul>
<p>These are all common problems which I have encountered, realistically, hundreds of times by now. They\u2019re each a rough result of the design of the JS run time, i.e. how we go from JS you wrote to the commands being executed on the computer. I don\u2019t want to talk about JS run times / environments now, so don\u2019t worry about the details. Just know that the JS code you wrote is executed by the computer in a way that makes these kind of errors possible, and even likely, if you\u2019re not thinking like JS wants you to.</p>
<p>Over the past couple of weeks, I\u2019ve been trying to understand why JS wants us to think in this way. I\u2019ve been asking JS \u201Cwhy are you like this?\u201D and \u201Cdid I do something to upset you? I\u2019m sorry if I did, but please, this really shouldn\u2019t be <code>undefined</code>\u201C.</p>
<h2>A brief aside: on JS\u2019s dynamic-ness</h2>
<p>A brief side note before we get into the rabbit hole here: JavaScript will take an awful lot of mistreatment and still run. That\u2019s largely because it\u2019s a dynamic language (i.e. it isn\u2019t typed), and also partly because it\u2019ll try and do whatever it can with whatever types of data you give it. It\u2019s famous for it: (<code>false == 0</code> or <code>&#39;30&#39; + 10 === &#39;3010&#39;</code>).</p>
<p>But you better believe that you\u2019re renting this flexibility from JavaScript, because at some point it\u2019s going to <code>undefined is not a function</code> you and act like it did nothing wrong - largely because <em>it didn\u2019t</em>.</p>
<p>This is an entirely different type of problems and design decisions in the language, which I\u2019m just not going to talk about in this article.</p>
<h2>JavaScript is Single Threaded</h2>
<p>JavaScript is single threaded, that means that while something is on the <a href="${"https://developer.mozilla.org/en-US/docs/Glossary/Call_stack"}" rel="${"nofollow"}">call stack</a> - JavaScript is unable to run anything else. Any function that gets called by anything in our JS code is going into the call stack - it\u2019s how the internals of our app (specifically the interpreter) knows where it is, and what it needs to do now and next.</p>
<p>So if something long-running is being done on the call stack, like a really long iteration function, then no other functions can be called until that iteration has finished. Say that we have a list of 1 million movies as a massive array of objects, and we want to get all their titles:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token keyword">const</span> movies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'A Knights Tale'</span><span class="token punctuation">,</span> <span class="token literal-property property">rating</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> titles <span class="token operator">=</span> movies<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">movie</span><span class="token punctuation">)</span> <span class="token operator">=></span> movie<span class="token punctuation">.</span>title<span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This <code>map</code> function will go into the call stack, it will start executing. So it\u2019ll go to our <code>movies</code> array, and for each item in it, run our little <em>anonymous function</em> (i.e. function without a name), and then start populating the call stack with a million of these references:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// THIS IS ALL PSEUDO CODE, PLEASE GOLLY PLEASE DON'T TAKE LITERALLY</span>

<span class="token comment">// Find the specific &#96;movie&#96; from the &#96;movies&#96; array</span>
<span class="token keyword">const</span> movie <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span>  <span class="token string">"A Knights Tale"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rating</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// Get a reference to the anonymous function</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">movie</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> movie<span class="token punctuation">.</span>title
<span class="token punctuation">&#125;</span>

<span class="token comment">// Then: Add the above function to the call stack</span>
</code>`}<!-- HTML_TAG_END --></pre>
<p>This operation will block everything else from running until it\u2019s finished. This might sound <em>sort of</em> bad, but if we\u2019re often running JavaScript in the browser, that \u201Ceverything else\u201D can include like: rendering a web page, or allowing a user to interact with the page or browser tab.</p>
<p>At this point you\u2019d want to ask why the lingua franca of the web would allow such a thing to happen. And that\u2019s a great question. Unfortunately, this objection doesn\u2019t do anything to dethrone JS and its utility in the web. The burden falls on us as engineers to design around this single-threaded ness.</p>
<h2>JavaScript is Asynchronous and Event-Based</h2>
<p>So, if JavaScript is single threaded, and blocks everything else from running until it finishes a function - how does it handle asynchronous functions? For example: what happens when I fetch some data remotely (e.g. an updated list of movies) - will it stop everything else from rendering?</p>
<p>This is potentially a really bad design flaw. Especially as the modern web - which can\u2019t seem to help itself from making too many HTTP requests. Imagine if every time you wanted to read a BuzzFeed article you had to wait for bit of content, every external tracker, and every ad to load before anything appeared on the screen. It\u2019d be a nightmare and you\u2019d never find out which kind of Frappicino you are.</p>
<p>JS solves this problem, by having an internal understanding of <a href="${"https://eloquentjavascript.net/11_async.html"}" rel="${"nofollow"}">asynchronous actions</a>. In the previous example, where we wanted to get a million movie titles (for some reason) - our code is <em>synchronous</em> - there is a simple <a href="${"https://www.computerhope.com/jargon/c/contflow.htm"}" rel="${"nofollow"}">Control Flow</a>: the code had a correct understanding that \u201Chere are a million items, I need to do this one thing to each of them, one at a time\u201D. And thus the single JS thread was occupied with those million and one tasks.</p>
<p>To give an async example similar to an example above, let\u2019s try and retrieve a list of movies across ten genres, from a single API:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// NOTE: This code is illustrative, and not perfect, pls ignore edge-cases and separation of concerns problems</span>

<span class="token comment">// Imaginary API</span>
<span class="token keyword">const</span> <span class="token constant">MOVIE_URL</span> <span class="token operator">=</span> <span class="token string">"https://www.mymovieservice.com/api"</span><span class="token punctuation">;</span>

<span class="token comment">// A list of genres</span>
<span class="token keyword">const</span> apiEndPoints <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">"action"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/action-movies"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">movies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token comment">// Imagine 9 others</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Go and fetch remote data and update the array</span>
<span class="token keyword">const</span> updatedEndPoints <span class="token operator">=</span> apiEndPoints<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">endPoint</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token constant">MOVIE_URL</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>endPoint<span class="token punctuation">.</span>path<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">moviesData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span><span class="token operator">...</span>endPoint<span class="token punctuation">,</span> <span class="token literal-property property">movies</span><span class="token operator">:</span> moviesData<span class="token punctuation">.</span>movies<span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code>`}<!-- HTML_TAG_END --></pre>
<p>An intuitive understanding of asynchronous behaviour would be for JS to see a call to <code>fetch</code> and understand that it needs to:</p>
<ol><li>Make an HTTP call to the specified endpoint;</li>
<li>Recognise that a response will come back <em>at some point</em>, so put this function aside, and get on with something else;</li>
<li>Recognise when the data from <code>fetch</code> returns, and then do something with it (in this case, format it with <code>.json()</code> then run the anonymous data handler function to add the movies</li></ol>
<p>It\u2019s worth noting here that JS allows us to have this notion of asynchrony <em>without</em> asking us to manage multiple threads. This is the trade-off we are making with JS\u2019s design: we can have asynchronous behaviour relatively simply in our code, without having to manually manage memory threads.</p>
<p>This post is already too long, I think, and I don\u2019t want to get into the specifics of how this works - but understanding that JS is able to make these kinds of decisions at run time, and when they\u2019re made - is an important part of writing faster, less blocking JavaScript.</p>`;
});
