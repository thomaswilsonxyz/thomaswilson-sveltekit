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
  default: () => _2020_11_01_js_runtimes_and_environment,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Why are you like this JavaScript? JavaScript Runtimes and Engines",
  "author": "Thomas Wilson",
  "draft": false,
  "book_review": false,
  "date": "2020-11-01T00:00:00.000Z",
  "slug": "2020-11-01-js-runtimes-and-engines",
  "tags": ["javascript", "why-are-you-like-this-js"]
};
const _2020_11_01_js_runtimes_and_environment = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Sometimes you keep hearing words but you\u2019re not actually sure what they mean, but you\u2019re too afraid to ask and keep forgetting to Google it. For me, two of those phrases have been \u201CJavaScript runtime\u201D and \u201CJavaScript engine\u201D. I\u2019ve never studied Comp Sci at uni, and I\u2019ve never practically needed to be able to define either of them.</p>
<p>If that sounds similar to you, then buckle up cowboys and cowgirls because you\u2019re about to go \u201Coh, yeah, cool\u201D a lot at some pretty basic distinctions that you probably intuitively knew but didn\u2019t have the words for.</p>
<p>I think there\u2019s innate value in understanding more about where and how your code actually runs. It\u2019s rarely directly applicable, but at some point in writing a large-enough app in JS, especially if it\u2019s full-stack, you\u2019re going to need to know these things. It\u2019ll also help you understand why Node.JS and client-side JS are different, and appreciate the overall portability (if not the performance) of JS in the wider context of software engineering. Or throw it out there in your next engineering interview and sound smart and informed, and hope they don\u2019t ask any deeper questions \u{1F937}\u200D\u2640\uFE0F</p>
<h2>TL;DR</h2>
<p>The JS runtime is the place where JS (or its machine-readable counterpart) is actually run. The browser is a runtime and it\u2019s how JS has access to things like the <code>window</code> object. Server-side JS runtimes also exist, like Node.JS.</p>
<p>Engines are the bit of software which take our source code, e.g. the human-readable JS code, and transform them to computer-executable instructions. There are a number of ways that engines can do this, some of them use Just in Time (JIT) compilation, but JS is an interpreted (i.e. non-compiled) language.</p>
<h2>JavaScript Runtimes</h2>
<p>I just assumed that the JS runtime was the browser or server where the JS actually ran, i.e. where the commands (like <code>console.log(&#39;hello&#39;)</code>) were executed. And I was right, but there\u2019s a little more detail to this answer.</p>
<p>JS runtimes get a bit of flack for causing bad performance, whatever that generic term means. Take this <a href="${"https://sebastiandedeyne.com/going-deep"}" rel="${"nofollow"}">critique from Sebastian De Deyne</a>:</p>
<blockquote><p>We\u2019re adding heavy runtimes to support multiple platforms instead of staying close to the metal, and we pay the price in performance.</p></blockquote>
<p>This criticism brings us a little closer to a useful definition of a Runtime: it <strong>includes the libraries and frameworks which act as the intermediary between the code you\u2019ve written, and the operating system it is running on</strong>. So if we take this mental model a little further, a runtime is the abstractions that sit between the bare metal and the running program (<a href="${"https://softwareengineering.stackexchange.com/questions/304427/what-really-is-the-runtime-environment"}" rel="${"nofollow"}">StackOverflow source</a>).</p>
<p>Programming languages haven\u2019t always needed, or come with, a runtime. Some of the earlier languages, like FORTRAN and COBOL have such a limited set of features and syntax that the language <em>is</em> the runtime (at least conceptually). The difference between the source code (i.e. the code written by an author) and the machine-executable compiled code which are created from the source code, is pretty minimal in these languages. The code you write details explicit manual control over memory allocation, garbage collection (and a bunch of other features) that the source code doesn\u2019t need to bring in anything else. The computer can run that file just fine by itself. Obviously this shifts the role of a program from not only its intended computation, to include also the memory allocation and logistics around these computations.</p>
<p>The C programming language is a good example of when we bought in runtimes. C came with the ability to call other libraries or functions to achieve certain things. For example, the <code>malloc</code> function allows an author to allocate memory and get a pointer to its location. <code>malloc</code> is defined in <code>stdlib</code> of C - in a separate C file to the one the author is currently writing. The <code>stdlib</code> library defines exactly <em>how</em> memory is allocated through and the correct address is returned. This allows us, the authors, to focus on the logic of our code specifically, and not to have to re-write a memory allocation function in pretty much every bit of C code we write. This speeds us up, reduces errors, creates conventions\u2026 all good things in software engineering at scale.</p>
<p>That means that if we were to write a simple C script which invoked <code>malloc</code>, when we came to execute our code it would need to also have some way of gaining it access to the <code>stdlib</code>, as <code>malloc</code> is defined there, not in our code. The <code>malloc</code> function is <em>not</em> syntax in the language, in the way that <code>if</code>, <code>char</code>, and <code>static</code> are. The runtime of our C script would include access to the <code>malloc</code> function. These libraries would need to be <em>linked</em>.</p>
<p>Subsequent languages, famously Java and C#, came with a very heavy runtime - their Virtual Machine (VM). This is what allows both languages to boast portability between architectures and OSs - the source code runs inside of a VM, and the VM abstracts away all the complexity of interacting with the bare metal.</p>
<p>To return to JavaScript briefly, this is how browser-executed JS has access to objects like <code>window</code> - which we never define, and which wouldn\u2019t be defined if we ran our JS in a non-browser like environment (e.g. Node.JS). <strong>The runtimes of browser Javascript provide our source code with access to these APIs and libraries. They\u2019re not part of the core JS language</strong>, like <code>Function</code> and <code>Object</code> are.</p>
<p>When we talk about JavaScript runtimes we\u2019re talking about the environment in which the executing code lives and works.</p>
<h2>Javascript Engines</h2>
<p>A JS engine is what gets us from the human-readable JS code into a computer-interpretable set of instructions. E.g. <code>const name = &#39;Thomas&#39;</code> isn\u2019t an instruction that an operating system or browser would understand. Instead, we need some way of letting our program find and manage memory, link things together, etc.</p>
<p>Let\u2019s take a moment to just cover some technical terms:</p>
<ul><li><strong>Source Code</strong> is the original code in JS, e.g. written by a human author. It may also be valid JS which has been minified by a build step.</li>
<li><strong>Machine Code</strong> is a set of instructions for CPUs for loading memory, performing specific tasks etc. Machine code is not human readable (<a href="${"https://en.wikipedia.org/wiki/Machine_code"}" rel="${"nofollow"}">wikipedia</a>)</li></ul>
<p>Different JS engines go from source code to machine code in different ways, which vary with their target environment and can affect the performance of a script. For examples, the <a href="${"https://v8.dev/"}" rel="${"nofollow"}">V8</a> engine compiles to machine code, whereas <a href="${"https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino"}" rel="${"nofollow"}">Rhino</a> compiles JS to Java classes. Let\u2019s not talk about the implications of this - just assume that they\u2019re comparable but different\u2026 ya know?</p>
<p><strong>The JS engine is what lets our JS code just\u2026 run</strong>. Engines are responsible for several low-level machine operations which are necessary on the journey from source code to machine code. They load the script into the computer\u2019s memory, link all the necessary libraries together so all parts of the program have access to each other (remember runtimes?), and then find the entry point (i.e. the instructions in the <code>index.js</code> file) and start executing those.</p>
<p>Unlike Java or C#, JavaScript is not a compiled language. Compiled languages are transformed to machine-readable code <em>before</em> the program is started or executed. Instead, <strong>JS is an interpreted language</strong>. This means that the code isn\u2019t compiled or prepared ahead of execution. It\u2019s building the runway as it takes off. The role of the JS interpreter is to take the source code and call the instructions on the processors and CPU of the computer where the code is running.</p>
<p>This is the source of one of the most defining \u201Cfeatures\u201D for novice and experienced JS authors alike, the <code>cannot read property X of undefined</code> error, caused by the fact that we have tried to access a property (<code>X</code>) of something which does not exist (<code>undefined</code>). This is a classic kind of error which a compiled language may be able to catch - by checking for potentially undefined variables. But we\u2019re getting off track.</p>
<p>With that said, the highly performant V8 engine uses Just in Time (JIT) compilation of JS to machine code. This means the JS source code <em>is</em> compiled, but as close to its execution as possible. I\u2019m not going to go into JIT compilation here because it\u2019s a little long, but <a href="${"https://hacks.mozilla.org/2017/02/a-crash-course-in-just-in-time-jit-compilers/"}" rel="${"nofollow"}">Mozilla have a great summary on it</a>.</p>
<p>So yeah - the engine is what takes our <code>.js</code> files, and allows a computer to do the relevant computer-y things with them. And here we all are, trying to remember which way round the Boolean logic works on <code>filter()</code>.</p>`;
});
