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
  default: () => _2020_09_06_js_promise_introduction,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Why are you like this, JavaScript? An introduction to Promises by using Fetch.",
  "author": "Thomas Wilson",
  "date": "2020-09-06T00:00:00.000Z",
  "slug": "2020-09-06-javascript-promises-introduction",
  "draft": false,
  "tags": ["javascript", "why-are-you-like-this-js"]
};
const _2020_09_06_js_promise_introduction = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Let\u2019s start with a correct, but pretty dense, definition: JavaScript Promises are a first-class abstraction for handling asynchronous actions, like:</p>
<ul><li>Fetching data from a remote API.</li>
<li>Reading or writing (i.e. opening or saving) a file to the filesystem (in a server-side environment, not in a browser).</li>
<li>Retrieving a <a href="${"https://css-tricks.com/the-blur-up-technique-for-loading-background-images/"}" rel="${"nofollow"}">non-blurred-up</a> version of an image based on a page-scroll event.</li>
<li>Using network or system utilities in native mobile frameworks like <a href="${"https://reactnative.dev/"}" rel="${"nofollow"}">react-native</a> or <a href="${"https://expo.io"}" rel="${"nofollow"}">expo</a>.</li></ul>
<p>First class? That\u2019s a programming term to say that this kind of value (i.e. Promise) can be stored in a variable or passed as an argument. Other first-class citizens in JavaScript include booleans, arrays, and functions. This means that JavaScript has an internal way of representing and understanding Promises, and we don\u2019t have to do any kind of coaxing, coercion, or pollyfilling to use them since ECMAScript2015.</p>
<p>Asynchronous actions? Promises represent the <em>eventual value</em> returned from a function (or more broadly, an <em>action</em>). This means that when we ask for the value of a Promise, JavaScript can distinguish between what is the value at the time you requested, and is this the last, unchanging value of the Promise. In JavaScript Promises, we call these two states:</p>
<ol><li><code>pending</code> - where we\u2019ve described and started the async operation, but it\u2019s not completed, or</li>
<li><code>settled</code> - that async operation has completed (successfully or not) and the value we have isn\u2019t going to change again.</li></ol>
<p>Let\u2019s take an example and show how we can use Promises. Actually, no, let\u2019s show how we can\u2019t/shouldn\u2019t use them. Imagine we own a taco truck, and we have a menu that changes every day. This means we don\u2019t want to build a fully static site, and we want to use JS to add a little dynamic behaviour. To make sure our website always shows us today\u2019s menu we:</p>
<ol><li>Run a <code>fetch</code> function as soon as the page loads which retrieves today\u2019s Taco Menu as an array of tacos from an API end point,</li>
<li>Parse that data to extract the <code>id</code> and the <code>name</code> for each taco in that array, and</li>
<li>Iterate through this parsed list and insert new DOM Elements onto the page using any number of JavaScript libraries or frameworks.</li></ol>
<p>Which in some code would look like[^1] :</p>
<p>[^1]: There are some problems with this example (namely that it\u2019s actually using Promises under the hood, but please ignore those)]:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// \u26A0\uFE0F Code is purposefully error-ful, don't run</span>
<span class="token comment">// \u26A0\uFE0F gollyilovetacos doesn't exist (yet) - this is illustrative</span>

<span class="token keyword">const</span> menuItems <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.gollyilovetacos.com/v1/menu_items"</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parsedMenuItems <span class="token operator">=</span> menuItems<span class="token punctuation">.</span>data<span class="token punctuation">.</span>menu_items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> item<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>This is going to throw us an error (something like <code>Uncaught TypeError: can&#39;t access property &quot;menu_items&quot;, fetch(...).data is undefined</code>). Why? No legit, it you genuinely don\u2019t know, please think about why.</p>
<p>It\u2019s because <code>fetch</code> returns us a Promise. The code above applies a synchronous way of thinking onto the Promise: we declare it, parse it and parse it (on those two last lines) exactly as if it was synchronous (i.e. the data would resolve immediately) - so on that last line we\u2019re looking to get the <code>data</code> attribute of the Promise, as if the Promise was an object representing the API response.</p>
<p>Promises are references to the <em>eventual values</em>, which is different to storing the value itself. We were trying to access the <code>data.menu_items</code> on the Promise which doesn\u2019t exist.</p>
<p>The only things that exist on a Promise are: <code>then</code> and <code>catch</code>. This is the most technical definition of a function: Promises are Objects in JavaScript which have a <code>then</code> function, <a href="${"http://wiki.commonjs.org/wiki/Promises/A"}" rel="${"nofollow"}">so says the spec</a>.</p>
<p>Before we dig more into promises, I think it\u2019s important to ask <em>why bother</em>? Especially when the JS community had a way of handling things like this before ECMAScript2015. Promises aren\u2019t technically anything new.</p>
<h2>Can\u2019t I already do that in JavaScript?</h2>
<p>So what? Can\u2019t I just use event handlers or callback functions? Yeah, you absolutely can. In fact, these are two ways that we handled async processes in the land before promises. They\u2019re both a little bit problematic, however. Events, for example, <a href="${"https://web.dev/promises/#events-aren't-always-the-best-way"}" rel="${"nofollow"}">can fire before</a> we (or rather, the control flow of our program) can assign event handlers to them. This means that can\u2019t always guarantee that an event will be handled using the event handler we define.</p>
<p>Alternatively you can use callback functions. Callbacks are kind of like events and handlers, only because you pass pass a function as an argument to a function (possible because functions are a first-class object in JavaScript btw, just like promises) - you don\u2019t run the risk of the event firing outside the scope of the event handler function. The problem with callback functions is they can easily get out of hand - as soon as you start chaining data through more than a couple of asynchronous functions, you can end up in <a href="${"http://callbackhell.com/"}" rel="${"nofollow"}">Callback Hell</a>: where you\u2019re calling callbacks in callbacks in callbacks.</p>
<p>Callback hell is actually a really good example of a particular kind of code smell: technically correct, but difficult for a human to parse, or interpret. We should always be thinking about how code reads to someone new, or even to ourselves if we context switch for five days or six months.</p>
<h2>Using somebody else\u2019s Promise: Fetch</h2>
<p>I want to round off this introductory post by using the Fetch function: which is one of the more common ways that JS devs interact with promises.</p>
<p>Fetch is (browser[^2]) JavaScript\u2019s own in-built function for making HTTP requests, and it uses promises. If you\u2019ve ever used <code>XMLHttpRequest</code> in browser JavaScript, it\u2019s a bit like that. If you\u2019ve not, then you\u2019ve not got anything to unlearn to alright, let\u2019s go.</p>
<p>For now, let\u2019s just get our hands on one, and not worry about what it looks like under the hood (as in, medieval fantasy hood not car hood, obviously).</p>
<p>This is one of the benefits of coding to an interface, and if you\u2019re really deep into JavaScript land and lost without a map I just want you to know how useful interfaces can be. If you\u2019re much newer to JavaScript Land or Software Continent, don\u2019t worry I\u2019m just throwing some playful shade.</p>
<p>[^2]: The <code>fetch</code> function is <a href="${"https://caniuse.com/#feat=fetch"}" rel="${"nofollow"}">available in most browsers</a>. If you\u2019re going to do this in the Node /server environment, you\u2019ll probably need a package like <code>node-fetch</code> or some other polyfill.</p>
<h3>Sidenote: Emojis in code snippets</h3>
<p>I like Emoji, I think they can quickly signify meaning. In the code snippets below I use the following emoji in code snippets to explain things:</p>
<ul><li>\u270F\uFE0F to signify that you\u2019re about to write something, and this is what it is.</li>
<li>\u2139\uFE0F to signify that I\u2019m about to explain an output from the console.</li></ul>
<h3>Back to the show</h3>
<p>If you\u2019re on a Desktop, I want you to go to Chrome[^3] and open the dev tools (<code>\u2318 + \u2325 + I</code> on a Mac, <code>Control + Shift + I</code> on Windows) and go to the Console tab. We\u2019re going to go ahead and get a random <em>Game of Thrones</em> quote because the kind people of the internet have not only created, but made freely available, servers which will serve us wonderful data like this for free (<a href="${"https://github.com/shevabam/game-of-thrones-quotes-api"}" rel="${"nofollow"}">GitHub link</a>).</p>
<p>[^3]: It does actually have to be Chrome, I tried on Firefox and some errors get thrown. Don\u2019t worry about them.</p>
<p>We\u2019re going to do all of this using Promises and I need to you shut your jaw, I know it\u2019s amazing but flies will get in there.</p>
<p>We\u2019ll be using an API endpoint to get a random Game of Thrones quote, it\u2019s a GET request to <code>https://game-of-thrones-quotes.herokuapp.com/v1/random</code>, and it\u2019ll return data that looks like:</p>
<pre class="${"language-json"}"><!-- HTML_TAG_START -->${`<code class="language-json"><span class="token comment">// \u2139\uFE0F An example quote from the Game of Thrones Quote API</span>
<span class="token punctuation">&#123;</span>
  <span class="token property">"sentence"</span><span class="token operator">:</span> <span class="token string">"Fighting bravely for a losing cause is admirable. Fighting for a winning cause is far more rewarding."</span><span class="token punctuation">,</span>
  <span class="token property">"character"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Jaime Lannister"</span><span class="token punctuation">,</span>
    <span class="token property">"house"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"House Lannister of Casterly Rock"</span><span class="token punctuation">,</span>
      <span class="token property">"slug"</span><span class="token operator">:</span> <span class="token string">"lannister"</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Actually, if you\u2019re really new here, go ahead and just copy-paste that URL into Chrome\u2019s address bar. Because it\u2019s a GET request, we don\u2019t need to worry about anything fancy. You\u2019ll get back a plain-old bit of (unformatted and un-syntax-highlighted) text with the data right there in your browser window. This is just like any other HTTP request (the same as going to <code>https://www.reddit.com</code>), it\u2019s nothing special.</p>
<h2>Calling Fetch</h2>
<p>Let\u2019s crank the HackerMan dial up a notch and fetch that same data using the console in Chrome\u2019s dev tools. In the console type:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// \u270F\uFE0F Go to the Game of Thrones quotes server and get a random quote</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://game-of-thrones-quotes.herokuapp.com/v1/random"</span><span class="token punctuation">)</span>

<span class="token comment">// \u2139\uFE0F The console will log you something like:</span>
<span class="token comment">// Promse &#123;&lt;pending>&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Oh.</p>
<p>That\u2019s actually a little disappointing, no?</p>
<p>So what have we done here? I\u2019m being serious - read the gosh darn code and console output and think about what you did then try and explain it to yourself. I\u2019m being serious, say it aloud or write it out - actually go through with the words that you would need to say.</p>
<p>If you did it, I\u2019m proud of you. If you didn\u2019t then <em>gee golly,</em> friend I wish I had your confidence in my knowledge. Here\u2019s what we did:</p>
<ol><li>We instantiated the <code>fetch</code> function with a URL for the Game of Thrones quote API. By default, <code>fetch</code> knew that we wanted to make a <code>GET</code> HTTP request (and not a <code>POST</code> or <code>PUT</code>, etc.).</li>
<li>The console then logged out the implicit return value of our statement (which was to call <code>fetch</code>). From this log statement we can see that <code>fetch</code> returns us a Promise.</li></ol>
<p>And that little <code>&lt;pending&gt;</code> sitting there? Why that just means it\u2019s not <code>fulfilled</code> - remember earlier where you learned about the possible states of Promises in JavaScript (<code>fulfilled</code> or <code>pending</code>. You know, like 500 words ago. That\u2019s that! An unfulfilled promise in the wild.</p>
<h2>Storing the Promise in a variable</h2>
<p>So how do you actually get the quote in the response, when it comes back?. Well, we didn\u2019t store the Promise we generated in the above code-sample, which means we have no way to do anything with it - like check if it\u2019s back yet.</p>
<p>Let\u2019s fix this, and take a look at the settled promise value:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// \u270F\uFE0F Go to the Game of Thrones quotes server and get a random quote, and save it to the &#96;quote&#96; variable</span>

<span class="token keyword">const</span> quote <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://game-of-thrones-quotes.herokuapp.com/v1/random"</span><span class="token punctuation">)</span>

<span class="token comment">// \u2139\uFE0F The console will log you something like:</span>
<span class="token comment">// undefined</span>

<span class="token comment">// \u270F\uFE0F Wait a few seconds, then let's look at the value of &#96;quote&#96;</span>
quote

<span class="token comment">// \u2139\uFE0F Will log</span>
<span class="token comment">// Promise &#123;&lt;fulfilled>: Response&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Oh cool, we made the request and it returned\u2026 now what? How do we get the data out of it.</p>
<p>You know what\u2019s really cool about Promises? When you create them, you don\u2019t have to specify what to do on their success/failure right away. You can create the promise, then handle it later. So assuming you did the above, and you\u2019ve got a variable called <code>quote</code>:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// \u270F\uFE0F Add the onFulfilled event handler to the promise</span>

quote
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>sentence<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token comment">// \u2139\uFE0F Will return something like:</span>
<span class="token comment">// "Fighting bravely for a losing cause is admirable. Fighting for a winning cause is far more rewarding."</span></code>`}<!-- HTML_TAG_END --></pre>
<p>You know the drill: tell me what you did here. In a list, out loud, what\u2019s happening?</p>
<p>Oh, there\u2019s not inline list this time. There\u2019s a lot going on here that we\u2019ve go to break down. Are you ready?</p>
<h3>1: Call the <code>then</code> function</h3>
<p>We take the Promise which has a <em>Game of Thrones</em> quote in it (somewhere) and <strong>we call the <code>then</code> function</strong>. This is really important: <code>then</code> is a function on a Promise.</p>
<p><code>then</code> is a function that takes one or two functions as arguments:</p>
<ol><li>Argument #1 : The <code>onFulfilled</code> function - which runs when the async operation behind the promise is successfully completed.</li>
<li>Argument #2 : The <code>onRejected</code> function - which runs when (or if) there\u2019s a problem completing the async action.</li></ol>
<p>Here, we\u2019re only giving it one argument, so we\u2019re only defining the <code>onFulfilled</code> part. JavaScript is cool with us leaving the <code>onRejected</code> argument as <code>undefined</code> so now everyone who didn\u2019t like that thing about Interfaces has smug little smiles on their joyous faces.</p>
<p>So we\u2019re calling the <code>then</code> function with one argument: an anonymous arrow function (i.e. a function that we\u2019ve not assigned to a variable somewhere else) which takes one argument: which we\u2019ve called <code>response</code> - which represents the HTTP Response that fetch returned to us.</p>
<h3>2: The <code>json</code> function</h3>
<p>We call the <code>json()</code> method, the return value from which is returned implicitly[^4]. The <code>json</code> function is defined on the <code>Body</code> of the <code>Response</code> object that <code>fetch</code> returned to us- so don\u2019t worry about where it\u2019s coming from.</p>
<p><code>json()</code> essentially takes the HTTP response body that <code>fetch</code> got, and parses it like JSON, so that we can treat it like an Object in JavaScript.</p>
<p>One last thing: <code>json()</code> is an async function, so it returns another promise.</p>
<p>If you\u2019re curious about <code>json()</code>, <a href="${"https://developer.mozilla.org/en-US/docs/Web/API/Body/json"}" rel="${"nofollow"}">here\u2019s the MDN docs</a></p>
<p>[^4]: Implicit returns in arrow functions in JavaScript don\u2019t have the curly (<code>{ }</code>) braces. For example <code>() =&gt; 5</code> will return <code>5</code>, whereas <code>() =&gt; { 5 }</code> will return <code>undefined</code></p>
<h3>3: Promise Chaining</h3>
<p>Because that first <code>then</code> function (implicitly) retuned a Promise (from the <code>json()</code> function), we can then call the <code>then</code> function on that <em>that</em> Promise so that we can actually handle the data from the API. This is called <strong>Promise Chaining</strong> - because you are flowing the result of one async action into another async action handler.</p>
<p>All this work for a damned quote.</p>
<p>Promise chaining is an application of Functional Composition: the way we compose together individual functions into production lines, or conveyor belts, which take in raw data at one end, and produce formatted data at another.</p>
<p>So we take the result of the fulled Promise that the <code>json()</code> function invocation returned - which is a plain-old-javascript object. We refer to this as as <code>data</code> in that second <code>then</code> function - where we read and enjoy with humour or dread, or whatever it is that GRRM was going for.</p>
<p>This isn\u2019t the place to talk about functional composition, but if you\u2019re already familiar with JS, you can learn more about it <a href="${"https://www.freecodecamp.org/news/function-composition-in-javascript/"}" rel="${"nofollow"}">here</a>.</p>
<h2>Doing the same thing at author-time for Promises</h2>
<p>Now that we\u2019ve covered each of the individual parts of a promise, and you\u2019ve either got confused and left or scrolled to the bottom, I just want to mention that normally you\u2019ll declare your <code>then</code> functions in the same place you create your Promise.</p>
<p>This will give you code which looks like:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// \u270F\uFE0F Go to the Game of Thrones quotes server and get a random quote, then process the data in-situ (so don't take it anywhere else)</span>

<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://github.com/shevabam/game-of-thrones-quotes-api"</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>data<span class="token punctuation">.</span>character<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> says:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>sentence<span class="token punctuation">)</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
