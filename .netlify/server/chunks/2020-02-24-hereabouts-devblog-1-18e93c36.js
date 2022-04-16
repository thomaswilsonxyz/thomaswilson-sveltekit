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
  default: () => _2020_02_24_hereabouts_devblog_1,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Hereabouts devblog #1",
  "author": "Thomas Wilson",
  "draft": false,
  "date": "2020-02-24T00:00:00.000Z",
  "slug": "2020-02-24-hereabouts-devblog-1",
  "tags": ["hereabouts"]
};
const _2020_02_24_hereabouts_devblog_1 = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Hi, my name\u2019s Thomas Wilson but I often go by my just my surname. I\u2019m 28 years old, currently based in London, England, and I design and build software for a living through my small independent studio <a href="${"https://www.tinyfox.studio"}" rel="${"nofollow"}">tinyfox studio</a>. At the beginning of 2020 I quit my job to do this independently, and now I\u2019m building <em>hereabouts</em> - an app that provides self-paced walks, tours, hunts, and races for travel adventurers
In this devblog series I want to record to the process of building something modern and beautiful from the ground up.</p>
<h2>My problem/frustration</h2>
<p>I love being in places. I love walking around the streets of London, and especially love how London feels like 30-40 little villages that you can find yourself in at any moment. I love learning things about the people who lived and made this place what it is today. It\u2019s my favourite part about travelling solo - is that I can walk around a new city at my own pace.</p>
<p>The Pre-Raphaelites had studios in Bloomsbury, Virginia Woolf lived and wrote some of her work just south of King\u2019s Cross, Sherlock Holmes got coked up just east of Regent\u2019s Park. You could maybe walk between all of these locations in 60 minutes, and comfortably within an afternoon. Maybe you\u2019d notice something things if you read the <a href="${"https://www.english-heritage.org.uk/visit/blue-plaques/"}" rel="${"nofollow"}">blue plaques</a> but really what\u2019s a sentence to describe a life\u2019s work?</p>
<p>When someone visits London from somewhere else, or when they move here, or even if they just need a good idea for a fourth date - I want them to feel connected to the place and idea of London. Not caught up in frustration at the man who get on the tube before letting other people off, or the blind panic when you misjudge the timing of the turnstiles coming into the tube station. But these are both very real experiences of London, everyone who visits should have them. But there\u2019s so much more in a place.</p>
<h2>Hereabouts: self-paced walks, tours, hunts, and races for travel adventurers</h2>
<p>Hereabouts is the name of the app I am building to address this problem. I want to create an app that lets people explore a new or old city by giving them guided tours, stories, puzzles, and races.
I want to reach adventurous travellers and sate their appetite to learn more about what makes a place beautiful.</p>
<p>I don\u2019t know what exactly it will look like or do. That\u2019s part of the development process.</p>
<h2>What I want to achieve</h2>
<p>By building this idea out there are two things I want to achieve, neither of which are overtly technical:</p>
<ol><li>I want people to experience joy and connection form the place they\u2019re in or connected to</li>
<li>I want to provide high quality story telling and information resources</li></ol>
<p>For a while I\u2019ve wanted to build an app that helps people discover a place by being in it. I want to help people discover the same feeling I have when I\u2019m somewhere and I learn something about it. I want people to have fun in the real world, in real spaces without being tied to their screen, or a paper guide, or part of a pack of tourists.</p>
<p>I love storytelling, and humans keep re-inventing how the do it. Oral stories, pictures, words, theatre, tv, movies, podcasts. Storytelling is probably the least talked about oldest profession. So I want to share the stories of the people who frequented, built, ruined, or just passed the streets.</p>
<p>I hate that when I go to learn about a certain place, or person, or idea - the information is scattered and made distant. It is made boring - because it is hard work, very skilled and professional work to weave together narratives of people, places, movements, and ideas. But you create value by providing high quality, unique resources that appeal to <em>humans</em> (not <em>users</em>.)</p>
<h2>Why build an app?</h2>
<p>Something I keep re-learning about myself is that I have this drive to build and create things for me any myself. I first learned this about myself during my Ph.D. where I taught myself software development so I could make a web app for my education research. In the three years since I finished that, I have worked for a large company and a growth-stage VC-backed startup. I happily sacrificed a lot of myself into these jobs because I learned a lot from other people. Being self-taught is a good start but it\u2019s a terrible middle.</p>
<p>And to be honest, I think the things I want to achieve can <em>only</em> be done on modern handheld technology (i.e. phones) because I want to bring multimedia (picture, audio, text) to someone based on the place they\u2019re in. I think it <em>could</em> be done by being walked/shown around by a professional. However that\u2019s not an idea that excited me, and I also think it\u2019s too much like forced fun. Part of being an explorer or adventurer is being able to go down side streets, get surprise ice cream, or spend twice as long somewhere you find interesting. There should be guidelines, not fences/rails.</p>
<p>This is also overlooking the fact that I am a software developer by trade/craft. It influences to way I see the world, solve problems, and build solutions. I enjoy designing and building software, and I\u2019m sure that\u2019s affecting my decisions.</p>
<p>I also want to call out a couple of very influential sources to me when thinking about if this is something that I <em>can</em> or <em>should</em> even be doing:</p>
<ul><li><a href="${"https://basecamp.com/books"}" rel="${"nofollow"}">Basecamp\u2019s books</a> - specifically \u201CRework\u201D and \u201CIt doesn\u2019t have to be crazy at work\u201D have shown me the kind of company it is possible to build, and the way you can go about making something.</li>
<li>The <a href="${"https://www.indiehackers.com/start"}" rel="${"nofollow"}">indie hacker</a> movement have been excellent at showing me countless examples of people who have built businesses at various speeds and with various goals.</li></ul>`;
});
