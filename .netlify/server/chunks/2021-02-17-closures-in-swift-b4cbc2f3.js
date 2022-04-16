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
  default: () => _2021_02_17_closures_in_swift,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Swift Closures: Inline functions explained by a web developer",
  "author": "Thomas Wilson",
  "date": "2021-02-17T00:00:00.000Z",
  "draft": false,
  "slug": "2021-02-17-closures-in-swift",
  "tags": ["swift"]
};
const _2021_02_17_closures_in_swift = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Hi, I\u2019m Thomas. I\u2019m a frontend engineer who\u2019s learning swift. Let\u2019s talk about <em>closures</em> in Swift from a very (very) introductory level. I\u2019m assuming you\u2019ve got some familiarity with JavaScript. You should definitely check out <a href="${"https://docs.swift.org/swift-book/LanguageGuide/Closures.html"}" rel="${"nofollow"}">Apple\u2019s documentation on Closures</a>, it\u2019s <em>so</em> much better than this page but also, like, less funny?</p>
<p>Closures are inline function definitions.</p>
<p>We have inline functions all over the place in JavaScript. Callback functions, including those in promises, are often declared in JavaScript:</p>
<pre class="${"language-js"}"><!-- HTML_TAG_START -->${`<code class="language-js"><span class="token comment">// Ever written an express routers?</span>
router<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span>

<span class="token comment">// Ever write a promise?</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://www.google.com"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Like JavaScript, Swift has functions as a first-class citizen. That means they can be passed around like any other variable. That\u2019s pretty cool, and if you come from a pure JS background you might not realise it. You might think it\u2019s pretty annoying. But it\u2019s not. Try filtering a dataframe into a subset in Python using Pandas without the <code>filter</code>-like function syntax (don\u2019t @ me).</p>
<p>We use closures in Swift in exactly the same use case: when we need to pass a function as an argument to a function. For example, if we are passing a custom <code>sort</code>, <code>map</code>, or <code>sorted</code> function on an array.</p>
<p>In the same mental model that React uses, a SwiftUI View is like a React component: it\u2019s fundamentally a function: <code>f(state) =&gt; ui</code> - UI is a function of state.</p>
<p>Understanding Closures in swift will help you write, and read, SwiftUI examples.</p>
<p>The name\u2019s a little confusing. In JavaScript a <em>closure</em> is the scope at which a function is declared and its relationship to the surrounding variables. Coming from JS, I had a little trouble getting my head around them.</p>
<h2>Ground 0: Function Declarations</h2>
<p>Defining inline, full-blooded functions in Swift is pretty standard, and could probably be intuited by any engineer with one or two languages under their hat:</p>
<pre class="${"language-swift"}"><!-- HTML_TAG_START -->${`<code class="language-swift"><span class="token keyword">func</span> <span class="token function-definition function">multiply</span><span class="token punctuation">(</span>number<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">,</span> by<span class="token punctuation">:</span><span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Int</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">return</span> number <span class="token operator">*</span> b
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>It would be perfectly valid syntax to pass this function around by simply referencing its identifier (<code>multiply</code>).</p>
<h2>Removing some syntax</h2>
<p>But what if we don\u2019t want to have to declare named functions everywhere. Especially if we\u2019re literally just going to use it once?</p>
<p>In JavaScript you define the function inline with the same syntax as you would anywhere else. BUT NOT IN SWIFT. Why? I don\u2019t know, friend, by let\u2019s explore the <em>what</em> not the <em>why</em> first.</p>
<p>Swift comes with a set of <strong>syntactical sugar</strong> for declaring closures. Syntactical sugar is a way of making code shorter or more readable. Syntactical sugar often replaces boilerplate or verbose code, and results in identical functionality to its un-sugared sibling.</p>
<p>This syntactical sugar looks like:</p>
<pre class="${"language-swift"}"><!-- HTML_TAG_START -->${`<code class="language-swift">	<span class="token punctuation">&#123;</span> <span class="token punctuation">(</span>parameters<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">ReturnType</span> <span class="token keyword">in</span>
		<span class="token comment">// expression</span>
	<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Let\u2019s give a <em>real</em> simple example. We\u2019re going to take an array of <code>Int</code> and convert it to an <code>Array&lt;String&gt;</code>:</p>
<pre class="${"language-swift"}"><!-- HTML_TAG_START -->${`<code class="language-swift"><span class="token keyword">let</span> strings<span class="token punctuation">:</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token punctuation">(</span>n<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">String</span> <span class="token keyword">in</span>
	<span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"The number is </span><span class="token interpolation-punctuation punctuation">(</span><span class="token interpolation">n</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<h2>The <code>in</code> keyword</h2>
<p>This syntax looked odd to me. The key (pun intended) to me grokking it was understanding the <code>in</code> keyword. Typically I have only seen this associated with iterators (in languages like python and JS):</p>
<pre class="${"language-python"}"><!-- HTML_TAG_START -->${`<code class="language-python"><span class="token comment"># This is Python code</span>
<span class="token keyword">for</span> name <span class="token keyword">in</span> list_of_name<span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"Hello, </span><span class="token interpolation"><span class="token punctuation">&#123;</span>name<span class="token punctuation">&#125;</span></span><span class="token string">"</span></span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>In Closures, in Swift, <strong>the <code>in</code> keyword signifies that we\u2019ve reached the end of our parameter and return type. Everything after the <code>in</code> is the action function expression.</strong></p>
<h2>Implicit Types for Even Less Syntax</h2>
<p>You better believe that\u2019s not all the syntactic sugar. There\u2019s still stuff we\u2019re going to get rid of.</p>
<p>Once we declare types in one place, e.g. in a variable, generic, parameter, then we don\u2019t need to duplicate that typing. We <em>can</em> but we don\u2019t have to.</p>
<p>Swift is able to find the implied types elsewhere in the code, and therefore we can remove them in the closure.</p>
<p>In the following example the <code>boastfulString</code> variable is declared as the <code>Array&lt;String&gt;</code> type, so the map function doesn\u2019t need to be told twice:</p>
<pre class="${"language-swift"}"><!-- HTML_TAG_START -->${`<code class="language-swift"><span class="token keyword">let</span> boastfulStrings<span class="token punctuation">:</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">&#123;</span> n <span class="token keyword">in</span> <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"I have </span><span class="token interpolation-punctuation punctuation">(</span><span class="token interpolation">n</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> tacos!"</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>By using implicit types we can get rid of two redundant parts of the closure declaration.</p>
<ul><li><p><strong>The surrounding parentheses for the parameters:</strong> <code>(n: Int)</code> becomes <code>n</code>). We can do the same with multiple parameters: Say we had an argument that took three parameters: <code>(name: String, age: Int, averageScore: Float) ..</code> could become <code>name, age, averageScore ..</code></p></li>
<li><p><strong>The return type of the closure</strong>: We know the function needs to return us a <code>String</code>, it\u2019s in the variable declaration. So <code>(n: Int) -&gt; Int in ..</code> can become <code>n -&gt; ..</code></p></li></ul>
<p>Swift is super ready for you to give it an <code>Array&lt;String&gt;</code> and will actually get pretty mad if you dont\u2019. You\u2019ll run into compile-time errors with anything else.</p>
<h2>Implicit Returns</h2>
<p>Man, talking of redundancies, that <code>return</code> doesn\u2019t look like it\u2019s doing much on that one line there. JS, Ruby, and Rust all have implicit return types - and so does Swift. That means you don\u2019t need to use the <code>return</code> keyword to tell Swift \u201Cthis is the bed that the function should hand back\u201D.</p>
<p>This is more syntactic sugar: we\u2019re choosing conciseness and simplicity over explicit and verbose. Having <code>return</code> or omitting it in this example does exactly the same thing. You don\u2019t have to like this, or us it in your code. It\u2019s your choice, but you should definitely know about it. Also it\u2019s probably useful in those scenarios where you <em>just need something to work</em>:</p>
<pre class="${"language-swift"}"><!-- HTML_TAG_START -->${`<code class="language-swift"><span class="token keyword">let</span> boastfulStrings<span class="token punctuation">:</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">&#123;</span> n <span class="token keyword">in</span> <span class="token string-literal"><span class="token string">"I have </span><span class="token interpolation-punctuation punctuation">(</span><span class="token interpolation">n</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> taco!"</span></span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>Look how concise that statement is.</p>
<h2>Shorthand Argument Names: spend those \\$</h2>
<p>But we can be more concise.</p>
<p>What else can we get rid of?</p>
<p>That named parameter, <code>n</code>:</p>
<pre class="${"language-swift"}"><!-- HTML_TAG_START -->${`<code class="language-swift"><span class="token keyword">let</span> regretfulStrings<span class="token punctuation">:</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">&#123;</span> <span class="token string-literal"><span class="token string">"I ate </span><span class="token interpolation-punctuation punctuation">(</span><span class="token interpolation"><span class="token short-argument">$0</span></span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> too many tacos ):"</span></span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`}<!-- HTML_TAG_END --></pre>
<p>These are <strong>shorthand arguments</strong>. Where <code>$0</code> refers to the first argument in the function. <code>$1</code> to the second argument, <code>$2</code> to the third\u2026</p>
<p>Now we\u2019re <em>really</em> favouring conciseness over explicitness.</p>`;
});
