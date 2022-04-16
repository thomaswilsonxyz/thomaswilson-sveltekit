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
  default: () => _2020_03_15_ux_with_components_screens_state_and_actions,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Kickstarting UX Design with ugly working documents: Screens, Components, Actions, and State.",
  "author": "Thomas Wilson",
  "date": "2020-03-15T00:00:00.000Z",
  "slug": "2020-03-15-ugly-but-functional-ux-design",
  "draft": false,
  "tags": ["ux", "design", "figma"]
};
const _2020_03_15_ux_with_components_screens_state_and_actions = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>UX design resists standardisation or templates. It can\u2019t be a one-size-fits-all approach, and the nature of the product, audience, and production team all mean that something different is needed each time. Whenever I get past the early stages of UX design (like understanding what a product does, and who it does it for) - I find myself with a different working document and process than I\u2019ve needed before.</p>
<p>I wanted to share the things I do that give me the momentum to get to a place where I can do this more specific kind of document.</p>
<p>I am a very visual person, so this starts with low-fidelity UI mockups: clunky boxes and text, that I can setup and tear down quickly. My process is built around forcing me to move through all the parts of an app quickly. This means I force myself to encounter all the information an app needs,every way that it\u2019s displayed, and everything a user can do with it. Seeing these things within a short time makes repetition and patterns more obvious - and helps me make connections and similarities.</p>
<h2>Tl;dr</h2>
<ol><li>You are going to make a list of all the Screens &amp; Components in your app. You\u2019re going to do it in an ugly-ass looking document that you\u2019re never going to share and actively should not spend time to make pretty. Make this document however makes sense for you - Figma, Sketch, Paper, whiteboard, plaintext, WHATEVER I DON\u2019T CARE AND NOR SHOULD YOU - YOU\u2019RE NEVER GOING TO SHARE IT</li>
<li>First, make a list of all the <strong>Screens</strong> in your app, and lay them out (roughly, don\u2019t fiddle with arrows) in an order that someone could realistically move through your app. I like to group similar screens closely together, and I also look for common screen patterns (e.g. screen with a header and a footer nav).</li>
<li>You\u2019re going to make a note of all the high level <strong>Components</strong> on the screens. Start by just making a boring old box with really clear terms on it: e.g. \u201CAccount Details\u201D, \u201CSign in form\u201D, \u201CCreate account form\u201D, \u201CRecent transactions\u201D.</li>
<li>Go through these high level components and start making the low level, more abstract/utility ones: \u201CTextField\u201D, \u201CButton\u201D, \u201CIcon\u201D, \u201CLabel\u201D. And begin to compose these together in your higher level components.But <strong>do not lay them out nicely</strong>.</li>
<li>Take your Screens and Components, and list all the variants in <strong>State</strong> that you can have: can a TextField be <code>selected</code> or <code>disabled</code> ? Can an event in a calendar be <code>upcoming</code> or <code>passed</code> ? Can the Screen for editing an article be in <code>edit</code> mode or <code>read</code> mode ?</li>
<li>You\u2019re going to look at all the components you have that are <strong>Actions</strong> - i.e. can I click it, slide it, interact with it in a way that does something: navigates me somewhere, opens a modal, logs me out. Use this as a chance to understand all the ways a user can navigate around the app - going from one screen to another.</li>
<li>Look at all this amazing information you have about your app or product, and how you can organise it to help your team design and build a product in a way that creates the most value most quickly.</li></ol>
<h2>Why even do UX?</h2>
<p>I mean, honestly, if you don\u2019t think it will serve you, your product, or your team, don\u2019t do it. Don\u2019t invest in work uncritically, if you don\u2019t see how it ultimately makes you more money or a better product. If you think what I\u2019m saying is dumb, don\u2019t listen or read - I think plenty of people have useless opinions, especially on the internet.</p>
<p>For clarity, when I talk about UX design, I am talking broadly at developing an understanding of an app or service from the end-user\u2019s perspective. How will they interpret the thing we put in front of them, and what can a design/engineering team to do make sure that the creative vision is the same as the user\u2019s experience?</p>
<p>It\u2019s like viewing a miniature model of a town: you can see distinct regions, connections between them, and kinds of buildings in each. But you don\u2019t get bogged down in the specifics, like \u201Cis that store a pharmacy or a grocery store?\u201D.</p>
<p>More concretely, this understanding is useful in making a product that actually does what you want it to. It\u2019s no good having an app that does something \u201Cin theory\u201D - because truly most of your users don\u2019t care about \u201Cin theory\u201D. They want to learn a another language, make a claim on their insurance, or get a new beautiful handmade scarf. This is similar to the Jobs to be Done mentality.</p>
<p>From an engineering perspective, as someone who <em>makes</em> apps, doing UX design helps break a \u201Csimple\u201D app into exactly how many things need to be built, and what they need to do. It lets me build the necessary things, in a sensible order, and gives me a shared language/understanding that then lets me communicate effectively with a team.</p>
<h2>0: Screens &amp; Components, State &amp; Actions</h2>
<p>Everything I do in this early UX process is designed to help me understand my app along four heuristics: Screens, Components, State, and Actions. These are the things that I find it useful to break an app into - they might be useless to you and that\u2019s okay. Do read on, and see what sticks.</p>
<ul><li><strong>Screens</strong> - these are easy to intuitively grasp but hard to define. Assuming prior knowledge of the internet: they\u2019re like URLs of a website, which will take you to a specific page, like a profile, sign-up form, or edition of a newsletter. More abstractly, they\u2019re discrete, separate views into an application which are containers of other content (i.e. Components).</li>
<li><strong>Components</strong> - are also really hard to define - they\u2019re visual <em>things</em> on the screen. The <a href="${"https://reactjs.org/docs/components-and-props.html"}" rel="${"nofollow"}">ReactJS</a> docs calls them \u201Cindependent, reusable pieces, [that let you] think about each piece in isolation\u201D. The most commonly thrown-around example of components are Buttons or Cards - they\u2019re just reusable bits of UI, that can be really small (like a button) or larger (like a log-in form).</li>
<li><strong>State</strong> - is a way of modelling what information/data the app will store, it usually affects what will be displayed or how it will appear. For example, what\u2019s the name of the current logged-in order, what are the details of the current search/filter being set by the user?</li>
<li><strong>Actions</strong> - are the things a user can <em>do</em> on a screen, what can they press, swipe, toggle, move, type into, etc. The consequences of these actions can be things like opening a modal (a Component, by the way) or navigating to a new Screen .</li></ul>
<h3>You are creating a low-fidelity working document.</h3>
<p>To help identify these things, we\u2019re going to make a visual representation of each. At the early stage on the UX design process I have to remind myself often that <strong>I am creating a working document</strong> - one that won\u2019t be shared widely (or at all) within my team, let alone outside of it. This is just a way for me to organise my thinking. This isn\u2019t about making any kind of mockup that looks pretty, or crafting meaningful naming conventions.</p>
<p>Your working document will probably be ugly. Mine <em>definitely</em> are. I have intentionally put ugly images / mockups in this article so you can feel better about how bad yours look and how little you want to share them. Anything you create during this process is meant to serve you, not Dribbble or Instagram. Embrace the brutality and Spartan utility of your UX diagrams.</p>
<p>Trying to optimise for visual and semantic consistency at this stage makes you <em>feel</em> busy, without having to address the important questions. So long as I know what a component or screen means, then it doesn\u2019t matter.</p>
<p>I also really encourage you to <strong>work with pencil and paper next to you</strong>. Even if you\u2019re prototyping on paper - have more paper ready just to jot down questions, sketches, ideas as they arise to your brain. You can\u2019t go chasing down every rabbit hole - it will break your flow, and I really think it\u2019s important to build up a good flow, in this process. This flowcess. But you also don\u2019t want to lose any legitimate ideas or questions you have, they can help you a lot when you\u2019re doing higher-fidelity design.</p>
<h3>Oh my plants</h3>
<p>In this article I\u2019ll be using the example of an app that helps you keep track of all of your houseplants. I\u2019ve called it \u201Call my plants\u201D and I\u2019ve given it a very predictable green theme.</p>
<h2>1: Identify Screens</h2>
<p>So let\u2019s imagine the following user journey in <em>oh my plants</em> - I want to get to a page that has a whole bunch of details about a specific herb. I can get there by searching for it, by seeing it in a list of plants I\u2019ve said I own, and perhaps by an automatically created list of plants (like what\u2019s in season). This gives us five screens: starting at <em>Home</em> we can end up at <em>Plant Details</em> by going through either of the three possible routes.</p>
<p><img src="${"/assets/blog-images/FF9A9D2E-BB92-4334-8EE6-67BE6F85B14C.png"}"></p>
<p>This kind of layout, with the arrows drawn between them, is useful at some points, but it\u2019s exactly the kind of over-optimisation I just warned against. Because what happens if I need to add in a new screen or remove one? I have to re-structure all of the positions and arrow flow.</p>
<p>Robust software architecture is about fighting rigidity and letting developers change individual parts quickly - because requirements are always changing. Good UX design can learn from this - build a working document is about rapid change - the tool you use should work as close to the speed of your thought process as possible so that one isn\u2019t lagging behind the other.</p>
<p>I\u2019ll end up with something like this: simply a list of screens, in some semblance of order that make sense to me. In Figma I make each of these into its own Component (or Symbol in Sketch) so that when I begin fleshing out user journeys later on (like the pretty arrow diagram above) - we\u2019ll see something less abstract than just white boxes and black text to represent a screen.</p>
<p><img src="${"/assets/blog-images/E8AEAC0A-FAE2-40B9-AABB-3BDA358F6167.png"}"></p>
<h2>2: Identify the Components</h2>
<p>Once you\u2019ve got all the screens, start going one-level deeper by identifying Components - distinct bits of UI. I find it most useful to start with the high-level components - i.e. Start with high-level components - things driven by their use cases. I name these in very opinionated ways: \u201CUser Owned Plants\u201D is a list of plants the user has said they one, and \u201CIn Season Plants\u201D might be a list of plants that are ripe for planting.</p>
<p>After I\u2019ve done that, I start identifying the lower level components: things which are not so closely tied to specific use cases. Prime examples are Lists and List Items, as well as Buttons or Cards. Use your own discretion and opinions here: is a <code>SearchBar</code> component distinct from a <code>TextField</code> - or should they be the same thing? I would advise leaning towards how you communicate things to the user: do you want them to conceptualise a search bar as the same thing as a field in a form? For me, I would keep them as different components, but I could very easily see it argued either way.</p>
<p><img src="${"/assets/blog-images/34B9248A-544A-424A-8047-AE1A2AD07CB4.png"}"></p>
<h2>3: Identify State</h2>
<p>With your new list of screens and components, you\u2019re going to want to go through and make a note of every possible variant based on state.</p>
<p><img src="${"/assets/blog-images/FD4E6849-5A3C-49FA-90E6-578E0754C050.png"}"></p>
<p>This is when things start to get a little complex/tedious, because it can massively increase the sheer number of screens and components that it looks like you\u2019re going to have to design. It\u2019s also worth paying attention here to the kinds of State - chances are there aren\u2019t that many discrete ones, and they can come in groups and are conceptually related: selected/disabled, read-only/edit, locked/available, active/not-active.</p>
<p>When it comes to the actual design, you\u2019ll be able to share visual metaphors here. In fact I would suggest that kind of consistency can make complex business logic or states feel much more simple than their implementation details. If things are disabled/inactive/locked, for example, the result in very similar to a user: there\u2019s a thing on the screen that I can\u2019t interact with right now.</p>
<h3>Wait, why do I need state on my components AND screens?</h3>
<p>Yeah, this is a very fine line - and totally <em>is</em> a matter of opinion. This is one of the points that makes product and UX design a skilled profession.</p>
<p>For me, it comes back to what I said at the beginning: UX is about understanding how the user will perceive the product. Even if the information we\u2019re presenting is correct, it\u2019s the <em>way</em> it\u2019s presented that makes the difference between a good and a great experience.</p>
<p>Enough talk, let\u2019s give an example. Imagine <em>oh my plants</em> knows when\u2019s the perfect time to plant each garden herb. It has a <code>PlantList</code> screen - which is a simple list view of <code>PlantListItem</code>s.</p>
<p>A <code>PlantListItem</code> represents one individual plant - which is the thing that\u2019s in season. Following that logic, we want to flag each plant as in \u201Cin season\u201D.</p>
<p><img src="${"/assets/blog-images/9AA37981-1E94-4C85-8923-4E183CEB439E.png"}"></p>
<p>In practice, however, the fact that all the plants are highlighted means that none of the plants are highlighted. It also just looks weird and cluttered and busy. Instead, what if the <code>PlantList</code> was highlighted with some special way of saying that it is in-season?</p>
<h2>4: Identify Actions</h2>
<p>An action is normally something that changes the state of a component or screen, or that navigates the user around the app.</p>
<p>If you identify actions at this point in the design process, it should be really easy for you. It\u2019s probably anything that uses a component like <code>button</code> or <code>select</code> or <code>switch</code> or <code>tab</code>\u2026 you get the idea.</p>
<p><img src="${"/assets/blog-images/EB659E9B-3FC1-4A0F-B6C2-E1C2622159FB.png"}"></p>
<p>Conversely, if you recognise there are actions that are triggered by clicking non-typical components, like undecorated <code>text</code> or <code>header</code> - then maybe these are interaction patterns you need to make discoverable to your users.</p>
<p>What\u2019s considered \u201Ctypical\u201D depends on the conventions of the platform, e.g. long-press and double-tap on mobile don\u2019t really have equals on the web.</p>
<h2>5: Go forth</h2>
<p>Look, you made it all this way, congrats because even I struggled to make it this far down when I was proof-reading. Hopefully at some point along this journey you\u2019ve thought \u201Cwait, why am I doing this next bit, surely I should go off and do something else instead\u201D - then good. Go do that other thing, like thinking about adding new features or, even better, removing others, or making clearer visual metaphors or condensing many metaphors into one.</p>
<p>You\u2019ve hopefully got a much more complete and accurate (read: big and scary) picture of your product: all the things it needs to do, what you need to build, and exactly how many designs you\u2019ve got to flesh out and then build. Or throw over the wall to the developers and hear them argue over for the next 2-9 months.</p>
<p>Take this blueprint forward and make something you\u2019re proud of, or ignore my opinions and become successful anyway - I truly do not mind.</p>`;
});
