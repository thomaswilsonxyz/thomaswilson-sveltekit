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
  default: () => _2021_03_06_design_workflow_build_components,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "The Frustrating Mismatch of Design by User Journey but Build with Components ",
  "author": "Thomas Wilson",
  "date": "2021-03-06T00:00:00.000Z",
  "draft": false,
  "slug": "2021-03-06-design-workflow-build-components",
  "imageUrl": "preview-images/question-mark-exclamation.png",
  "tags": ["design", "ui"]
};
const _2021_03_06_design_workflow_build_components = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>How do you design a good app?</p>
<p>It\u2019s a charmingly amateurish question, but I\u2019ve spent the past five years primarily trying to design and build web apps and I don\u2019t know the answer.</p>
<p>I regularly get sick of looking at my current and old designs and ask \u201Cwhy don\u2019t these look like a competent adult made them, and can I make them actually good?\u201C. I\u2019ll typically then do two things:</p>
<ol><li>Go to Dribbble and meander around until I find things that look vaguely like what I want and then get frustrated that these mockups are so simplified and informationally un-dense they\u2019re only partly applicable to my current situations, and</li>
<li>Do a web search for \u201Chow to design good UI\u201D, then get given countless \u201Cseven tips to improve your UIs\u201D and \u201CUX fundamentals for UI design\u201D that will tell me that a UI is basically just colour, spacing, and typography which, yeah true, but is incredibly unhelpful in the abstract.</li></ol>
<p>These are two vastly different types of data: one is a finished product for an often fictional or simplified use case, and the other are abstract design principles. Mushing those things together to understand, critique, and then be able to produce your own design <em>is</em> the skill of becoming a better designer. It\u2019s not intuitive or easy and you can\u2019t just search for the answer on the internet.</p>
<h2>Build in Components</h2>
<p>But as an engineer I want to, because that\u2019s how I find a <em>lot</em> of my answers. That and doing it wrong the first time.</p>
<p>Being an engineer I build web, and more recently mobile, interfaces. Both of these technologies have been moving towards the component-model: building self-contained little <em>things</em> or <em>widgets</em> that are composed together to make bigger things, like screens and applications. React, Vue, Svelte, and Angular all use this model. SwiftUI introduced it for iOS and Swift, and Jetpack Compose (seems) to do the same for Android and Kotlin.</p>
<p>This component model is declarative. I\u2019m not 100% convinced I actually know what <em>declarative</em> means because I am not a clever man, but broadly I think of it as <code>f(state) =&gt; ui</code> - which is to say that the UI is a function of state. Given some data, this is what the UI will look like. You get to say \u201Cwhen the data looks like this, do that with it\u201D. For example if an item in a list is selected, make sure this text is underlined, or this string in the cart should be the total cost of every item in the cart with the <code>\xA3</code> character put in front of it.</p>
<p>Components as a first class citizen in building UIs lends itself really well to encapsulation: a component should care only about the data that it needs to present information to the user, and contains the complexities of any internal interactions or logic. It doesn\u2019t need to be aware of anything else.</p>
<p>Let\u2019s illustrate this with a button (I\u2019m sorry, I know it\u2019s tired and over-worked, but it\u2019s simple). Imagine we have a Button component that only takes two bits of data (like a prop, or an input, or an argument): a <code>label</code>, the text that goes in the button, and an <code>onClick</code> function to describe what happens when a user presses/clicks the button. The benefits of encapsulation work for everyone:</p>
<ol><li>The button only has to do what it needs to do. It doesn\u2019t care if a label comes from an internationalisation (i18n) file, a database, or generated dynamically when the user does something (like added above \xA3100 worth of products to their cart).</li>
<li>The page / larger component (like a molecule in Atomic Design) doesn\u2019t need to contain boilerplate code about rendering and event-handling for buttons. If I had four buttons on a screen (which, let\u2019s just be clear, <em>would</em> be madness) the page they\u2019re on doesn\u2019t need to worry about anything but finding a label and an event handler.</li></ol>
<p>These are really great benefits for the engineers building UIs and web software. They can make code easier to understand, more consistent throughout the codebase, and more separated. These are not guaranteed (I can make any code into spaghetti, honestly it\u2019s a super power) but they are easier to achieve with this component-first idea of software architecture.</p>
<h2>Design in User Journeys</h2>
<p>But that\u2019s not how the user of a UI thinks about buttons at all. Nor is it helpful when you\u2019re trying to design your app. The buttons on a screen let our users, guests, customers, patients, staff, <em>whoever</em> achieve something. And as a designer thinking about the specifics of the button is part of the job, but it can\u2019t be done in isolation to every other part of the web page.</p>
<p>It\u2019s so easy to find good advice on building components in code. There are tricky conversations to be had about them, about how to extend them and manage them as the complexity grows, but that advice is pretty specific and concrete. It is so much harder to get someone\u2019s opinion on figuring out how a button integrates with the Sign Up page, a \u201Cbuy now\u201D button on a product card, a \u201Cadd two factor authentication\u201D button, or a \u201Crequest help\u201D button. These are questions about the purpose and intention of the app you are building.</p>
<p>We are taught to build at the focused and specific level of components, but to design with with <em>so much more</em> information in our working memory. What screen am I on, how did I get here, and where can I go? How do I know if my data is saved or (in)valid? What does it look like if I\u2019m browsing versus editing? If these questions aren\u2019t answered properly it creates this weird jilted UI and UX experience as I move around a product. Seeing a mocked up screenshot from a single state of a single page on Dribbble is never going to help me answer these questions, no matter how pleasing the curves, shadow, and pastel colours.</p>
<h2>The Frustration</h2>
<p>I have experienced (and witnessed) the bike shedding meets deer-in-the-headlights moment of designing a new app or website where you\u2019re terrified to make decisions about the label placement on your forms. It genuinely stops me from making decisions and moving forward, especially at the beginning, when your app is an idea and a mostly blank Figma file.</p>
<p>The form inputs aren\u2019t important, but they are when they represent 50% of the screens you have currently designed. I have been terrified to move on from designing my sign up screen until I have perfected the form and form input components. Because I was so aware that they\u2019re components: they\u2019ll be used everywhere. They are perfect lego blocks and if I get them wrong here <em>everything</em> will look terrible.</p>
<p>My fixation (or obsession) with designing by components has limited my ability to focus on anything bigger. But as a user, my fixation on the flow through an application will stop me noticing anything smaller. Yeah, the onboarding was confusing, and I can\u2019t figure out how to access my profile page but <em>holy smokes</em> have you seen the border radius on the cards and the top navigation? They match perfectly!</p>
<p>No matter how perfect your button is, it\u2019s not going to salvage an app with competing or confusing Calls to Action, with disjointed screen layouts, mixed metaphors, or obscured ideas. Similarly, the UX conventions of colour, spacing, and typography won\u2019t help you answer these questions. Yet if you don\u2019t build a system around these basic elements, the visual clarity and rhythm of your UI as a whole <em>will</em> suffer.</p>
<p>Similarly, if you don\u2019t build your codebase with well encapsulated components, you\u2019re going to have a real hard time modifying and extending your app\u2019s code.</p>
<p>Designing an app demands that we ask questions about the app, not the components, that we see the entire blueprint. Building components demands we exclude all thoughts about the app at large and focus solely on this little corner, this one detail. This is the titular frustration of having to build in components, but design by user journey and flow.</p>
<p>That\u2019s it. That\u2019s the end of the article and I\u2019m sorry I can\u2019t close with a unifying theory, or three step framework to build perfect UIs every time. I just want to build actually good apps, and it\u2019s difficult, ya know? The context switching between design and developer brain is hard.</p>`;
});
