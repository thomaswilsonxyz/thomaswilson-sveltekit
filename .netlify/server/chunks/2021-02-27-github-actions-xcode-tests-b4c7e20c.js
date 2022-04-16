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
  default: () => _2021_02_27_github_actions_xcode_tests,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "How to run Xcode tests for a SwiftUI iOS codebase with GitHub Actions",
  "author": "Thomas Wilson",
  "date": "2021-02-27T00:00:00.000Z",
  "draft": false,
  "slug": "2021-02-27-github-actions-xcode-tests",
  "tags": ["swift", "github-actions"]
};
const _2021_02_27_github_actions_xcode_tests = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Tl;dr</p>
<ol><li>Make sure you\u2019ve got a repo on GitHub.</li>
<li>Make sure you\u2019ve got at least one set of tests in your Xcode codebase.</li>
<li>Create the file below in <code>yourproject/.github/workflows/main.yml</code>:</li>
<li>Replace the <code>yourproject</code>s and <code>YourProject</code>s with your file name</li>
<li><code>git add .github/workflows/main.yml &amp;&amp; git commit -m &quot;Add test GitHub action&quot; &amp;&amp; git push</code></li></ol>
<pre class="${"language-yml"}"><!-- HTML_TAG_START -->${`<code class="language-yml"><span class="token comment"># Run My App's tests whenever someone pushes to &#96;main&#96; or creates a PR into &#96;main&#96;</span>

<span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># Triggers the workflow on push or pull request events but only for the main branch.</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> main <span class="token punctuation">]</span>

<span class="token comment"># We're only going to have one job, &#96;test&#96; but you can add this</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> macOS<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
	    <span class="token comment"># Checkout the code to the working directory</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token comment"># Install xcbeautify so the logs are human-friendly</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install xcbeautify
        <span class="token key atrule">run</span><span class="token punctuation">:</span> brew install xcbeautify
	    <span class="token comment"># Run the tests</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run the xcode tests
        <span class="token key atrule">run</span><span class="token punctuation">:</span> xcodebuild clean test <span class="token punctuation">-</span>project YourProject.xcodeproj <span class="token punctuation">-</span>scheme YourProject <span class="token punctuation">-</span>destination "platform=iOS Simulator<span class="token punctuation">,</span>name=iPhone 12" <span class="token punctuation">|</span> xcbeautify

</code>`}<!-- HTML_TAG_END --></pre>
<h2>What are Github Actions</h2>
<p>They\u2019re bits of code you write which are executed whenever <em>something</em> happens on your GitHub repo. These bits of code can do whatever (they\u2019re just functions that run on a container), like:</p>
<ol><li>Run the tests in your repo (what we\u2019ll be doing today)</li>
<li>Build an artefact from source code then publish that to a directory</li>
<li>Send out an e-mail or hit a web-hook whenever something happens</li>
<li>Build your static site and upload it to S3, GitHub pages, or wherever.</li></ol>
<p>If you\u2019ve used other tools, GitHub actions are like TeamCity, CircleCI, Jenkins, or any other CI/CD pipeline tool, but built right into GitHub. If you\u2019ve not heard of, or used those tools, <a href="${"#do-it-locally"}">I explain a bit more about it below</a>.</p>
<h2>The working parts</h2>
<p>We don\u2019t actually write \u201Cactions\u201D, we write <strong>workflows</strong>, which contain one or more <strong>jobs</strong>, which contain one or more <strong>steps</strong>.</p>
<p>The details for a single workflow is written in <a href="${"https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html"}" rel="${"nofollow"}">yaml</a>, as common plaintext format used by a lot of DevOps tools.</p>
<p>We put the yaml file in <code>yourproject/.github/workflows/workflow-name.yml</code> where <code>yourproject</code> is the root directory of your project and <code>workflow-name</code> is the name you wish to give the workflow.</p>
<p>There are three root-level yaml properties we\u2019re going to set:</p>
<ol><li><code>name</code> Is the human-readable name for the entire workflow. Call this \u201CCI\u201D or \u201CRun all tests\u201D or \u201CSend e-mail\u201D.</li>
<li><code>on</code> configures what exactly needs to happen for this workflow to run. By default, every job and step will run on every event.</li>
<li><code>jobs</code> Is a list of the jobs we\u2019ll be doing. In this example there\u2019s just one: running the tests</li></ol>
<pre class="${"language-yaml"}"><!-- HTML_TAG_START -->${`<code class="language-yaml"><span class="token key atrule">name</span><span class="token punctuation">:</span> CI
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># Triggers the workflow on push or pull request events but only for the main branch.</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
<span class="token key atrule">test</span><span class="token punctuation">:</span>
<span class="token key atrule">runs-on</span><span class="token punctuation">:</span> macOS<span class="token punctuation">-</span>latest</code>`}<!-- HTML_TAG_END --></pre>
<p>Not how we\u2019re telling the <code>test</code> job that we\u2019re going to run on <code>macOS-latest</code>. Github gets us a container running that environment, which is cool.</p>
<h3>Checking out the code so we can access it in our tests</h3>
<p>By default, a job in a GitHub action just gives us an empty container, so we need to tell it to copy the code into our current working directory.</p>
<p>There\u2019s an easy way to do that: the <code>checkout</code> action is a third-party GitHub action that checks out our current working branch to the current working directory. <a href="${"https://github.com/actions/checkout"}" rel="${"nofollow"}">Here are the Checkout docs</a>.</p>
<p>By adding the following we make sure we have access to our code:</p>
<pre class="${"language-yaml"}"><!-- HTML_TAG_START -->${`<code class="language-yaml"><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> macOS<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
	    <span class="token comment"># Checkout the code to the working directory</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</code>`}<!-- HTML_TAG_END --></pre>
<h3>Installing xcbeautify</h3>
<p>The default Xcode logs are horrible: they\u2019re verbose and unintelligible. Xcbeautify is a CLI tool that formats them to give us more readable useful information.</p>
<p>Luckily the <code>macOS-latest</code> platform comes with homebrew, the MacOS package manager, already installed, so we just need to tell our <code>test</code> job to install it:</p>
<pre class="${"language-yaml"}"><!-- HTML_TAG_START -->${`<code class="language-yaml"><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> macOS<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
	    <span class="token comment"># Checkout the code to the working directory</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install xcbeautify
	      <span class="token key atrule">run</span><span class="token punctuation">:</span> brew install xcbeautify</code>`}<!-- HTML_TAG_END --></pre>
<p>This step in our job has two things:</p>
<ol><li><code>name</code> is a human-readable name, useful for us and the UI in GitHub</li>
<li><code>run</code> is the thing you want to type onto the CLI. When that\u2019s done, the job will move on to the next step</li></ol>
<h3>Run the Test</h3>
<p>The last step in the job is to run the tests using the <code>xcodebuild</code> CLI tool. This is actually pretty easy and simple, just make sure you clean-up the names and details in the script below.</p>
<p>Node how we\u2019re <strong>piping</strong> (i.e. the <code>|</code> character) the results from <code>xcodebuild</code> through the <code>xcbeautiful</code> command. That\u2019s a unix-ism, it\u2019s pretty powerful (or so I\u2019m told, I\u2019m just a frontend engineer here).</p>
<pre class="${"language-yaml"}"><!-- HTML_TAG_START -->${`<code class="language-yaml"><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">test</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> macOS<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
	    <span class="token comment"># Checkout the code to the working directory</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      <span class="token comment"># Install xcbeautify so the logs are human-friendly</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install xcbeautify
        <span class="token key atrule">run</span><span class="token punctuation">:</span> brew install xcbeautify
	    <span class="token comment"># Run the tests</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run the xcode tests
        <span class="token key atrule">run</span><span class="token punctuation">:</span> xcodebuild clean test <span class="token punctuation">-</span>project YourProject.xcodeproj <span class="token punctuation">-</span>scheme YourProject <span class="token punctuation">-</span>destination "platform=iOS Simulator<span class="token punctuation">,</span>name=iPhone 12" <span class="token punctuation">|</span> xcbeautify</code>`}<!-- HTML_TAG_END --></pre>
<h3>Commit, baby</h3>
<p>You\u2019re good to go, let\u2019s add the file we made to our git repo, make a single commit and push it up <code>git add .github/workflows/main.yml &amp;&amp; git commit -m &quot;Add test GitHub action&quot; &amp;&amp; git push</code></p>
<p>(We\u2019re assuming the <code>main.yml</code> file is the one you made, if you called it something different, change that).</p>
<h3>Go check GitHub</h3>
<p>Go to your GitHub repo, click the \u201CActions\u201D tab, and watch with glee.</p>
<h2 id="${"do-it-locally"}">Why can&#39;t I just run these things locally?</h2>
<p>You can. If you already know why, you can skip this section.</p>
<p>I come from a frontend engineering background, where having test coverage has typically been difficult or different to the backend world. So answering this question is as much about learning facts/words as it is about understanding that the software design, development, and deploy process can be different. I know. I\u2019m sure some engineers are tutting or shaking their heads at me. TUT AWAY, FRIENDS I\u2019m standing in my truth here.</p>
<p>GitHub\u2019s actions are part of a broader practice of CI/CD (continuous integration and delivery) in software. The idea of CI/CD is to commit code frequently, and have automated processes in place to detect the introduction of errors to the codebase.</p>
<p>CI/CD can also automate any other previously manual processes, like building, deploying, or publishing software. The roles of CI/CD and automation can grow and expand as your team or product become more complicated. In this example we\u2019re just using it to run tests because <strong>well written tests give you confidence that your code does what you think it does</strong>.</p>
<p>As teams grow, having actions run automatically means that institutional and team policies (like having all tests pass before anything goes into <code>main</code>, formatting code, running a smoke-test before publish) are adhered to without manual intervention. This reduces the barrier to actually publishing code.</p>
<p>Integrating the CI/CD pipeline right where your code is hosted is different to having a third-party service watch your git repo. It\u2019s first-party and also probably cheaper (maybe).</p>
<p>GitHub actions are versatile \u201Csomething\u201D that triggers these bits of code to run can be:</p>
<ol><li>Someone pushes to your <code>main</code> branch</li>
<li>Someone opens, closes, or comments on an issue</li>
<li>Someone creates a PR from any branch to any branch</li></ol>
<p>For a full list, see Github\u2019s <a href="${"https://docs.github.com/en/actions/reference/events-that-trigger-workflows"}" rel="${"nofollow"}">full list of events</a> that can trigger a workflow.</p>`;
});
