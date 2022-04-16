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
  default: () => _2020_04_02_hereabouts_devlog_2,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Hereabouts devblog #2 - March 2020",
  "author": "Thomas Wilson",
  "date": "2020-04-01T00:00:00.000Z",
  "draft": false,
  "slug": "2020-04-02-hereabouts-devblog-2",
  "tags": ["hereabouts"]
};
const _2020_04_02_hereabouts_devlog_2 = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Hi, I\u2019m Thomas Wilson, I\u2019m a web and mobile engineer building <a href="${"https://www.hereabouts.app"}" rel="${"nofollow"}">Hereabouts</a> - an app that\u2019s like a tour guide if the tour guide was like <a href="${"https://99percentinvisible.org"}" rel="${"nofollow"}">Roman Mars</a> after three beers. This is a devblog where I talk about my progress building that app. Also I\u2019m very sorry, Roman, you\u2019re one of a handful of people who I genuinely aspire to be like please don\u2019t take me seriously.</p>
<hr>
<p>Well March 2020 has certainly turned out to be quite the introduction to working on a side project. It\u2019s the month that the UK (and Europe, North America, etc.) started nationwide lockdowns to prevent and slow the spread of Covid-19. Social distancing, self isolation, and quarantine are all in full swing.</p>
<p>Imagine starting a side project based almost entirely on being able to travel somewhere new, or even just go outside and walk around. It\u2019s a strange time, but everyone\u2019s talking about it being a strange time, and honestly we\u2019re all just trying to find a new temporary normal. So with that in mind, here\u2019s an inconsequential update on Hereabouts.</p>
<p>I\u2019m still pretty undecided on the format of a devblog, which makes this one a brain dump, but definitely the kind of brain dump that you should read.</p>
<h2>Notable things</h2>
<ul><li>The Covid-19 Pandemic.</li>
<li>By September-October, I want something that I would be happy for someone to download, and happy to ask them to pay for. Assuming there\u2019s still an App Store to host on, a functioning economy, cities to visit, or people to buy it. Okay that was my last Coronajoke. And that, my last coronamonteau.</li>
<li>Decided on running development in 4-6 week cycles. This is based off what I\u2019ve read from Basecamp, but also a general understanding about how long things <em>actually</em> take to design and build to a certain quality.</li>
<li>Started building more formal documentation (in Notion and Figma) for use case + market summaries, user journeys, business entities, and visual design language.</li></ul>
<ul><li>Purchased hereabouts.app domain, built a <a href="${"https://www.hereabouts.app"}" rel="${"nofollow"}">simple landing page</a> (ReactJS on NextJS, hosted on Zeit\u2019s Now), and created a mailing list that so far only my friends (and not even my parents (?!)) have signed up for (SendGrid, NowJS API routes, and CloudFlare worker).</li>
<li>Started building the app. Started in Swift, moved to React Native. Enrolled in Apple Developer Programme (arguably too early - it\u2019s a motivator)</li></ul>
<h2>What an Emotional Rollercoaster, feat. The Covid-19 Pandemic</h2>
<p>This past month has been one of the most varied emotional months I\u2019ve had in a long time. I my emotions to be strong in number and force at the best of times, but imagine quitting your job to go freelance in what is possibly the worst time in 30 years.</p>
<p>I am not a stranger to self-doubt. I often think I am about to get fired, when in reality I have never been fired, or come close to being fired. Maybe I have and I\u2019ve just instinctively played the \u201Cyou can\u2019t fire me I quit\u201D card.</p>
<p>The big situation here is the SARS-COV-19 pandemic that\u2019s needling through the globe right now, causing unnecessary loss of life and bringing an economic recession and a wake of social crises. What a time to be alive.</p>
<p>Can you imagine finally deciding on a side project you want to carry through to production/publication, and then a <a href="${"https://www.who.int/dg/speeches/detail/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020"}" rel="${"nofollow"}">global pandemic breaks out</a>. Not great for the global community or economy, or for an app specifically built around the idea of being outside. This comes at at time where most of the advice from European governments is to stay inside, with <a href="${"https://www.bloomberg.com/news/articles/2020-03-14/spain-s-coronavirus-cases-jump-36-to-5-753-deaths-rise-to-136"}" rel="${"nofollow"}">increasing</a> policing and <a href="${"https://www.aljazeera.com/news/2020/03/europe-edging-total-coronavirus-lockdown-200316131203376.html"}" rel="${"nofollow"}">enforcement</a>.</p>
<p>I\u2019ve had to seriously think if building this app remains a good idea, and I think it is. I really struggle with shiny-things-syndrome, where I flit between and around ideas and never commit fully to something. Hereabouts is the first side project in 3-4 years that I decided to see through seriously <em>and then did something about</em>. It\u2019s the only one that made it past a line in a note on my iPhone. It\u2019s not the only idea I\u2019ve got rolling around in my phone\u2019s notes, and it\u2019s probably not even the best one. But it\u2019s one that excites me: it\u2019s an app I would like to have and use, and it\u2019s something that I think can offer value to people. It\u2019s also going to teach me a lot about launching an app in the real world.</p>
<p>Yes, a pandemic with strong government response <em>is</em> a good mitigating factor - March 2020 has truly been wild, and I don\u2019t think anyone would blame me if I let the idea go to find something more stable. Like a Zoom alternative or remote yoga teaching software. Or just a Zoom alternative without extremely concerning privacy policies. I\u2019m sure video conferencing can\u2019t be that hard, there\u2019s no reason that all the alternatives are terrible to use.</p>
<p>What\u2019s more, the current economic climate has seen travel and leisure industries basically tank out, and it\u2019s looking a lot like many people this year won\u2019t be able to take holidays. Some of those holidays will be honeymoons, or retirement cruises, or long-overdue personal relaxation time. This pandemic is making a lot of us suffer in a lot of ways, but I digress. There\u2019s a <a href="${"https://www.theguardian.com/business/2020/mar/15/prepare-for-the-coronavirus-global-recession"}" rel="${"nofollow"}">global recession</a> <a href="${"https://www.economist.com/finance-and-economics/2020/03/05/a-recession-is-unlikely-but-not-impossible"}" rel="${"nofollow"}">threatening</a> and although central economic bodies are all trying to act to mitigate these factors, there\u2019s a chance that people don\u2019t have money to spend.</p>
<p>I am aware that I don\u2019t want to continue under the guise of <a href="${"https://www.inc.com/serhat-pala/alexis-ohanian-says-hustle-porn-is-most-dangerous-trend-in-silicon-valley-heres-how-to-eradicate-it.html"}" rel="${"nofollow"}">hustle porn</a> - I don\u2019t want to see this hardship and fight against it <em>just</em> because it\u2019s a struggle and it makes a great narrative. I don\u2019t want to think of myself as a company that was shaped by the COVID-19 quarantine and panic. I don\u2019t really see that as an influential factor in what I\u2019ve decided to do, or how. What\u2019s more, I don\u2019t think end users really care about how or when an app was made, especially as people will (hopefully) start to forget what things were like during these times within months of them ending.</p>
<p>The primary reasons I want to continue development of this idea, at least for now, is how early in development I am and how this remains a side-project. I have other full time work that lets me pay the bills and I don\u2019t <em>need</em> this to take off. I\u2019ve given this project about 6 months, taking it to the end of summer (September-is) which was always going to be just off-peak for summer for tourism. But it looks like we\u2019re not going to get peak tourism anyway on account of the global lockdown. I want Hereabouts to be an app that could be used by someone who already lives in a city, and as a cheap day activity for anyone. I think there remains a market for the app, and the possibility that I learn some interesting things from releasing it to a smaller audience.</p>
<p>In short: I\u2019m going to continue with development. It\u2019s just a weird part of the Hereabouts story - that the worst pandemic in literally 100 years strikes just as I get going with it. What impeccable timing.</p>
<h2>Thinking about development cycle and Topic Lock</h2>
<p>I disagree with common practice of two-week sprints and an endless backlog as the best way to manage and drive software development. I think it\u2019s short sighted and makes you feel comforted by how busy you are and how much work you have to do. If something\u2019s important, it will keep raising itself as important, and I shouldn\u2019t move on without it. If something <em>feels</em> important but I forget about it quickly, and didn\u2019t latch on and flesh it out - it probably wasn\u2019t actually that important.</p>
<p>This is especially true for right now: creating the idea for a new product, and then putting that into concrete UIs and code. What <em>is</em> Hereabouts, what does it do, and how is it used? These questions are the most rabbit-hole kinds of questions, because there\u2019s a lot of edge-cases and what-ifs that can found or ruin a feature idea.</p>
<p>I want to feel I have the freedom to go down these rabbit holes because they are important and I don\u2019t want to spend time and energy justifying that when I could spend that energy exploring them.</p>
<p>To counteract the (very real) chance that I spend all the time designing or thinking of possibilities, and no time actually building them, I am thinking about how I can integrate the <a href="${"https://www.designcouncil.org.uk/news-opinion/what-framework-innovation-design-councils-evolved-double-diamond"}" rel="${"nofollow"}">Double Diamond</a> process which is a needlessly buzzword-y way of saying that I am consciously separating out the processes of a) generating as many ideas as I can, and b) paring these ideas down to find the useful or recurring ideas.</p>
<p>Alongside that, I am thinking about Topic Lock. This is something I first heard from CGP Grey said in the <a href="${"https://www.relay.fm/cortex/95"}" rel="${"nofollow"}">Cortex podcast</a>, in regards to his work as an independent content creator. It\u2019s influenced from the way movie studios produce movies, and the Kanban project methodology: have a fixed number of things that are in progress.</p>
<p>I am striving to build a way of working that allows me to create and shape ideas, but also then critically examine the ideas individually and as a collective.</p>
<p>This is getting abstract and I\u2019m only a month in, so I\u2019m going to save this for another time. But look - I\u2019ve been thinking about how to create a process and environment that works well for me, my brain, and the product.</p>
<h2>User Journeys, Internal Documentation, and Design Language</h2>
<p>This is my party, I\u2019ll do what I want, and I want to start by talking about the tools I used to do this work because I find that more interesting than the work itself. I\u2019m not proud of this part of me, but I love well designed, cool, and hipster apps.</p>
<p><a href="${"https://www.notion.so"}" rel="${"nofollow"}">Notion</a> is hard to describe: it\u2019s like a Google Doc meets a database. I actually wrote about <a href="${"https://thomaswilson.xyz/blog/back-to-bear"}" rel="${"nofollow"}">why I gave up using Notion</a> back in August so this is a little embarrassing - but I stand by what I said: I cannot use Notion to write long form prose, like this. I am writing this blog post in <a href="${"https://bear.app"}" rel="${"nofollow"}">Bear</a>.</p>
<p>Notion does let me capture my thoughts in a much more organised way, compared to plain text and markdown. I\u2019m not going to go into detail about how I use Notion specifically, but I am using it for:</p>
<ul><li>Writing that I don\u2019t intend to share but need to refer back to, e.g. business models, elevator pitch. Like a classic Wiki.</li>
<li>Articulating and formalising the goals I have for a particular development cycle.</li>
<li>Keeping track of the business entities or key \u201Cthings\u201D in the code base, like what is a \u201CTour\u201D and \u201CPlace\u201D, etc.</li>
<li>Noting down research for both the content of Hereabouts (like interesting places), and the meta research around running a business.</li></ul>
<p>Notion gives me freedom but also constrains me a little more than free form text. This is useful when I just need to get my goals and intentions down, and not spend hours worrying about how it looks. Notion\u2019s got great design by default, kudos.</p>
<p>They\u2019ve also fixed the navigation by Smart Keyboard on the iPad THANK GOODNESS. Not being able to move around in a sensible way without using my slow meaty dumb fingers on the screen was infuriating. I didn\u2019t spend dozens of hours of my life forcing vim\u2019s philosophy into my own world view to have it ruined like this.</p>
<h3>User Journeys and Design Language - Another blog post (in Figma and Notion)</h3>
<p>I\u2019ve done a <em>lot</em> of work this month doing visual and UX design. The results, and how I manage these parts of my thinking and planning can\u2019t / shouldn\u2019t be described here because this is a devblog. I\u2019ve made a note to write about them in more detail later.</p>
<h2>React Native</h2>
<p>I wrote a more in-depth post about <a href="${"https://thomaswilson.xyz/blog/2020-03-22-why-i-chose-react-native-for-app-in-2020"}" rel="${"nofollow"}">why I choose React Native</a>, also on my blog. So yeah, I\u2019ll be writing this thing in TypeScript, using React Native, and the <a href="${"https://expo.io"}" rel="${"nofollow"}">Expo platform</a>.</p>
<p>Let\u2019s take a whole paragraph to acknowledge how good a job the Expo team are doing. Honestly, such brilliant tooling.</p>
<p>I started working on this project in Swift: first with SwiftUI then moving to UIKit.As someone\u2019s who\u2019s more fluent in frontend engineering (3 years full-time professionally), having to debug some of the problems and limitations of the new SwiftUI API wasn\u2019t productive. I simply don\u2019t have the frontline experience of using Swift in a production environment that made debugging and interpreting documentation a viable option.</p>
<p>Moving to UIKit very briefly made sense, but SwiftUI is the future of development on Apple platforms so why waste time working through that.</p>
<p>I\u2019d like to come back to SwiftUI in a couple of months/years, when it\u2019s out of beta. I hear good things about it, and it sounds like they\u2019re bringing in an opinionated declarative philosophy. I\u2019m excited to see how this affects the UI development community at large.</p>`;
});
