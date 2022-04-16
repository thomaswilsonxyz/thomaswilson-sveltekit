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
  default: () => _2020_03_22_chosing_react_native_for_hereabouts,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Why I chose React Native to build a new app in 2020",
  "author": "Thomas Wilson",
  "date": "2020-03-22T00:00:00.000Z",
  "slug": "2020-03-22-why-i-chose-react-native-for-app-in-2020",
  "draft": false,
  "tags": ["react-native", "react"]
};
const _2020_03_22_chosing_react_native_for_hereabouts = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>I am currently in the process of building herabouts - an app that\u2019s like a tour guide, only cooler. Most of my previous engineering work has been web-based (react and vue) because the internet is an accessible and very capable system for building modern applications. However hereabouts needed certain native functionality - like location, reliable offline data access, battery status, and access to the camera. Yes some of these things are <em>possible</em> on the web, but they\u2019re much more native functionality.</p>
<p>I\u2019ve made the decision to write the app in <a href="${"https://reactnative.dev"}" rel="${"nofollow"}">React Native</a> - a library for creating applications for native platforms (like iOS and Android) using React and JavaScript.</p>
<p>I wanted to share the reasons I made this decision because despite having worked with React Native for clients in the past, I was cautious about adopting it for a personal project. AirBNB famously <a href="${"https://medium.com/airbnb-engineering/sunsetting-react-native-1868ba28e30a"}" rel="${"nofollow"}">abandoned React Native in 2018</a> citing a couple of pretty damning reasons: long initialisation and first-render times; lack of code-sharing between platforms; mixed developer experience.</p>
<p>In the same post, however, they say that most (80%) of their devs found the experience at least slightly \u2018positive\u2019 (subjective as that is), and acknowledged that a lot of their problems may relate to the the size and complexity of their team and product, alongside the early nature of React Native at the time. In the years since that was published, React Native and the surrounding ecosystem (like <a href="${"https://expo.io/"}" rel="${"nofollow"}">expo</a>) have made the development experience of making a native app a <em>lot</em> better. Big tech companies, like <a href="${"https://www.theregister.co.uk/2020/01/30/shopify_shifts_its_mobile_development_to_react_native/"}" rel="${"nofollow"}">Shopify, have also adopted</a> React Native.</p>
<p>It\u2019s never a clear choice what tech to use, and it\u2019s especially difficult when you\u2019re starting something new and have no constraints. So I wanted to make sure I was making an informed decision, and this article outlines that process.</p>
<h2>Why not native-native?</h2>
<p>I initially started working on hereabouts as a native iOS application, written in Swift. At present (March 2020) Apple are transitioning the way UIs are written in Swift to use <a href="${"https://developer.apple.com/xcode/swiftui/"}" rel="${"nofollow"}">SwiftUI</a>. The API for SwiftUI is still in beta (currently beta 4) and still has a few quirks (e.g. see <a href="${"https://www.reddit.com/r/iOSProgramming/comments/fd7mpz/holy_shit_how_the_hell_do_i_use_swiftui_its_the/"}" rel="${"nofollow"}">this Reddit post</a>) that made the process of building an app cumbersome and awkward. I was unsure of the relationship and split of responsibilities between the existing UIKit, storyboard, and SwiftUI. Given how SwiftUI is largely <a href="${"https://www.macrumors.com/2019/06/03/apple-unveils-swiftui-framework/"}" rel="${"nofollow"}">seen as the future</a> of iOS development (and its declarative philosophy shared by react), I didn\u2019t want to tie myself to supporting an app written without it, nor did I like the possibility of having to maintain a hybrid UIKit/SwiftUI app where the roles and responsibilities of both parts were changing regularly.</p>
<p>This opened up the possibility of creating my app using a cross-platform library - not because I wanted a cross-platform app, but because I wasn\u2019t happy with the native tooling. This just happened to open up the Android market. Previously I made the decision to focus on iOS over Android because a) I am personally all in on the Apple ecosystem, and b) <a href="${"https://www.businessofapps.com/data/app-revenues/"}" rel="${"nofollow"}">more money</a> <a href="${"https://sensortower.com/blog/average-publisher-revenue"}" rel="${"nofollow"}">is spent</a> in Apple\u2019s App Store and in the Google Play store. Although I\u2019m not making hereabouts to get rich, I\u2019d certainly like some gin money.</p>
<h2>Reason #0: I already know React</h2>
<p>The simplest reason for me choosing React Native, over say <a href="${"https://www.nativescript.org/"}" rel="${"nofollow"}">NativeScript</a> or <a href="${"https://flutter.dev/"}" rel="${"nofollow"}">Flutter</a>, is that I already know React. I\u2019ve got experience writing production and personal static websites and enterprise apps in it. The declarative and data-bound nature of writing React, especially with <a href="${"https://www.typescriptlang.org/"}" rel="${"nofollow"}">TypeScript</a>, comes quite naturally to me now.</p>
<p>NativeScript supports Angular and Vue as first class citizens, which I simply don\u2019t use as much as React. I started off my Frontend Engineering career writing apps in Angular, and I\u2019ve written a couple of fast and easy websites in Vue. They\u2019re good frameworks, but right now I think React has a large (if not consistently <em>good</em>) community. I know how to handle complexity in React, and I have opinions about styling and architecture that React doesn\u2019t fight.</p>
<p>Additionally, Google has a reputation for sunsetting projects with little notice, which makes me a little apprehensive about Flutter.</p>
<h2>Reason #1: React Native isn\u2019t a hybrid WebView app</h2>
<p>Many people\u2019s gut reaction to creating a cross-platform app is to think of something laggy, and distinctly <em>un-native</em>. One of the simple and earliest approaches to adopting cross-platform mobile development was to use web technologies, which are famously cross-platform and system agonistic, and have the native app render the web app (in its own HTML, CSS, JS) through a WebView. This is how platforms like <a href="${"https://ionicframework.com/"}" rel="${"nofollow"}">Ionic</a> and <a href="${"https://cordova.apache.org/"}" rel="${"nofollow"}">Cordova</a> work - and they\u2019re great for very simple apps, but they\u2019re notoriously <a href="${"https://www.netguru.com/blog/why-you-should-migrate-your-app-from-ionic-cordova-or-phonegap-to-react-native"}" rel="${"nofollow"}">not very performant</a>.</p>
<p>Native apps are better than, and distinguished from, websites by how \u201Csnappy\u201D they feel - how responsive the app is to a button being pressed, giving haptic feedback, and then navigating somewhere. It\u2019s hardly noticeable when done right, but when there\u2019s a 400ms delay between pressing a button and seeing something happen - you <em>will</em> notice.</p>
<p>However, React Native works differently: you write your views using JSX, and these are then bridged to native code for iOS and Android - meaning, at some point, it becomes native, and is not just a DOM.</p>
<p>Let\u2019s just take a second to clarify some of these words: first <strong><a href="${"https://facebook.github.io/jsx/"}" rel="${"nofollow"}">JSX</a></strong> is an extension to JavaScript (or to give it its full title: ECMAScript) that introduces XML-like syntax for creating structured data. It looks an awful lot like HTML, but with a few syntactic differences, and the ability to include data in the structure:</p>
<pre class="${"language-undefined"}"><!-- HTML_TAG_START -->${`<code class="language-undefined">import React from \u2018react\u2019

const Message = () =&gt; &#123;
	return (
		&lt;div style=&#123;&#123;colour: \u2018blue\u2019&#125;&#125;&gt;
			&lt;h1&gt;Hello!&lt;/h1&gt;
			&lt;p className=\u201Cmessage__text\u201D&gt;Welcome, friend&lt;/p&gt;
		&lt;/div&gt;
	)
&#125;

export default Message</code>`}<!-- HTML_TAG_END --></pre>
<p><strong>JSX</strong> is <a href="${"https://en.wikipedia.org/wiki/Syntactic_sugar"}" rel="${"nofollow"}">syntactic sugar</a> - its goal is to makes the code easier to write and parse by the humans who have to read and write it. It\u2019s also a separate library from React and React Native, but is used by both libraries by default as a way to construct a virtual representation of view elements, like HTML Elements or DOM Nodes. It compiles down to something different, and instructs React to do React-y things like <code>createElement()</code> but we\u2019re not talking about that here.</p>
<p>The second term I want to bring out and talk about is <strong>bridging</strong>. For an application to run natively, it has to be able to talk to the system in a language and API it understands: e.g. UIKit and Objective-C/Swift for iOS, and android.View with Java/Kotlin for Android. This is a distinguishing factor between cross platform apps (like those in React Native) and the hybrid WebView Apps - we can use a cross platform application to communicate with native APIs, like maps or device orientation.</p>
<p>The part of the architecture that lets a JS thread, where a React Native application runs, talk to the native Threads, <a href="${"https://hackernoon.com/understanding-react-native-bridge-concept-e9526066ddb8"}" rel="${"nofollow"}">is called the Bridge</a>. The details of how this works are covered for both <a href="${"https://reactnative.dev/docs/communication-ios"}" rel="${"nofollow"}">iOS</a> and <a href="${"https://reactnative.dev/docs/native-modules-android"}" rel="${"nofollow"}">Android</a> in the React Native docs and aren\u2019t really relevant for this discussion - just know they happen.</p>
<p>This article isn\u2019t an explainer about JSX (but JSX is a interesting idea, regardless of what you think about React itself) or Bridges - but they\u2019re two big technological differences between React Native and other libraries that let you use web technologies to write apps.</p>
<h2>Reason #3: The performance and benchmarking discussions are nuanced</h2>
<p>One of my core beliefs (read: something I work very hard at, but am not necessarily always good at) is only releasing/selling products that I would be happy for someone to pay for. Above all other things, I want hereabouts to have a native feel - to be responsive and feel intuitive to use. It needs to hit that magical 60fps bar, and <em>feel</em> like a first class citizen on a mobile phone because that is what I would expect from an app that I paid for.</p>
<p>I\u2019ve seen a couple of blog posts that (like <a href="${"https://medium.com/swlh/flutter-vs-native-vs-react-native-examining-performance-31338f081980"}" rel="${"nofollow"}">this one</a> from inVerita, and <a href="${"https://thoughtbot.com/blog/examining-performance-differences-between-native-flutter-and-react-native-mobile-development"}" rel="${"nofollow"}">this one</a> from Thoughtbot) about the performance of React Native that had me worried that I\u2019d be fighting an uphill battle to get performance two where I wanted it.</p>
<p>Fundamentally, though, good performance in React Native <em>is</em> possible. It requires a <a href="${"https://reactnative.dev/docs/performance"}" rel="${"nofollow"}">thoughtful consideration around what you\u2019re doing</a>, and building with the tools that let you investigate and profile your app to let you know when there\u2019s a problem.</p>
<p>It\u2019s much easier to read an article and see how React Native (or any tech) \u201Chas bad performance\u201D but this depends too much on what you\u2019re doing and how you\u2019re doing it. It\u2019s a nuanced discussion and it also gets at the whole \u201Csoftware engineering is a skilled profession\u201D thing. The research I did in this area was enough to assure me that I can code myself into a bad situation, but I can code my way (at least mostly) out of it.</p>
<p>So I\u2019m not overly concerned about poor performance in hereabouts <em>just</em> because it\u2019s written in React Native. Of course I am concerned about it, but I don\u2019t think this is a problem unique to the platform.</p>`;
});
