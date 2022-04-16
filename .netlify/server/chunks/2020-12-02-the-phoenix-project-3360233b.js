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
  default: () => _2020_12_02_the_phoenix_project,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "The Phoenix Project",
  "author": "Gene Kim, Kevin Behr, and George Spafford",
  "score": 4,
  "image": "the-phoenix-project",
  "slug": "the-phoenix-project",
  "book_review": true,
  "date": "2020-12-02T00:00:00.000Z",
  "finished": "2020-11-29T00:00:00.000Z",
  "draft": false,
  "tags": ["non-fiction", "software"],
  "links": [
    {
      "country": "\u{1F1EC}\u{1F1E7}",
      "store_name": "Amazon",
      "link": "https://www.amazon.co.uk/Phoenix-Project-DevOps-Helping-Business-ebook/dp/B00AZRBLHO"
    }
  ]
};
const _2020_12_02_the_phoenix_project = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p><em>The Phoenix Project</em>  (TPP) is a a fiction book for nerds (said the nerd, on his blog). It\u2019s a parable for people who design, build, or deploy software. I want this article to just be about the book itself, not its content. The things I, as an engineer, found interesting about  <em>The Phoenix Project</em> deserve their own post. Instead, this piece takes a more literary, or meta, look at The Phoenix Project.</p>
<p>TPP is set in <em>Parts Unlimited</em>, a (fictional) automobile parts manufacturing company in America. As a company, <em>Parts Unlimited</em> is carrying a great deal of technical debt and business pressures. So it\u2019s set in a very boring, but realistic, scenario - and follows some very boring (but interesting and important) discussions and events which transpire in the process of building software in <em>Parts Unlimited</em>.</p>
<p>TPP follows Bill, an middle-rung operations engineer - someone who is responsible for deploying software to become available to the end users (clients, stores, internal staff). Within the first chapter of the book, Bill is promoted from his comfortable job into a higher management role, which he does not want to take. The rest of the book follows Bill as he slowly realises just how bad the process of building and deploying software has gotten in his own company. The titular Project Phoenix is a long-overdue software product which the company planned and built for the last 12-24 months as a response to increased velocity from their competitors. Bill, with the help of his mysterious sensei (and potential board member) Erik, spends three hundred pages implementing solid working principles and protocols into Parts Unlimited, informed heavily by current manufacturing practices. </p>
<p>It\u2019s actually quite a hard book to explain. While The Phoenix Project is <em>technically</em> fiction, in that the people and places are made up, its goal is to explain a certain (very real) way of building software - and similarly to explain the consequences of other approaches. Where other books may be concerned with exploring relationships, ideas, or language - this one wants you to understand that you <em>really</em>  need to be able to visualise work-in-progress in your engineering teams. It shows you how a lot of people in a business think about both their job in the business, and the job of the business to them.</p>
<p>Look, if you\u2019re a software person, this book has probably already crossed your radar. It\u2019s one of the cornerstones of modern Dev-Ops, at least in the last five years. It spawned a number of other influential books like <em>The Dev Ops Handbook</em>, <em>The Unicorn Project</em>, and <em>The Three Ways</em>. If you\u2019re not aware of this book, or what words like \u201CDev-Ops\u201D and \u201CSofware\u201D mean, then you probably stopped reading half way through the last paragraph (at the latest). </p>
<p>My immediate reaction after finishing this book is that there should be more books like it. It is a fantastic way to introduce people to the forces and constraints in building and managing modern software. If you\u2019re inside of the software bubble, it showcases the nature and scale of business and financial forces; if you\u2019re in on the business front it introduces you to the pressures and complexities that software people are under. If you\u2019re both (like a CTO or CIO) then it will help you think about ways that communication and information flows between IT and other parts of the business. </p>
<p>I build software for the web, an area famous for evolving quickly, for re-inventing the wheel with new technologies, and for being an engineer with a degree in an unrelated subject (like music production or\u2026 environmental science, for example), thick glasses, and a MacBook Pro. There\u2019s a certain culture, at least that I\u2019ve experienced, that engineers should always be on the professional development hype. I don\u2019t think this is unique to web developers, or even to software engineers, but I do know it\u2019s pretty prolific in my field. This can make it very easy to jump from one project, language, framework, or trend to the next - and never stop to consider what you\u2019re building or why. It can mean reading sparse documentation, or just forging ahead and ignoring existing documentation. </p>
<p>TPP brings a much more abstract level of thinking to the process of building software, and places both engineers and software within their wider contexts. Individuals are in teams, which are in departments, which are in businesses. Software projects are managed by teams, and linked to business objectives, etc. etc. TPP shows the value of thinking about these things, and introduces them without ever pointing them out.</p>
<p>A lot of these benefits are emphasised strongly because the book only gives you an overview of the specific technologies used. It becomes almost impossible to get lost in the weeds, the book keeps you firmly out of the garden. In fact, to continue this analogy, the book sits you down with the head grounds-keeper and makes you follow them around for a few months while they do their job.  For engineers, especially those who are closer to the strategic or planning aspects (or who wish to progress there), this is a really good thing. </p>
<p>Engineering tends to attract people who are problem solvers, and a lot of the problems which are presented in TPP are large and fuzzy. For example: how does the business decide what software gets built? When can we say software is \u201Cdone\u201D or requirements have been met? How do you know who needs to be aware of your planned actions and changes to hardware (real or virtualised)?. </p>
<p>You could begin to optimise tiny parts of these specific questions, maybe increasing the efficiency or throughput by 5-10% on a single part; or you could examine the system as a whole. TPP encourages tackling these big questions, and doesn\u2019t assume that people will hear you say \u201Cwe would like to completely redesign this from the ground up\u201D, and the respond with \u201Csounds great, take all the money and time that you need\u201D. These decisions are messy, both personally and for the business. </p>
<p>Something that works really well in the parable format is the introduction of archetypes: certain kinds of personalities or a certain kinds of jobs. Our tiny chimp brains find these things useful for understanding other people. For example it\u2019s why I actually enjoy hearing people talk about the star signs, and it\u2019s why we have so much fun arguing who\u2019s a Carrie, Samantha, or Miranda . TPP introduces us to a relatively small (maybe 10 person) cast of people who work at a company. This is a good number: it\u2019s enough to focus on each of them, their personalities, and the way they contribute to (or block) other people. Hopefully it\u2019s enough to help the reader think, at some point, \u201CAh, this guy\u2019s a bit like Brent\u201D or \u201CAh, she\u2019s a Patty\u201D. This is a hugely useful generic human skill which we encourage in our personal lives, but which we often assume \u201Cyou\u2019ll learn it on the job\u201D when it comes to our working lives. This is a nice little helping hand, especially if you\u2019re newer in your career or come from a smaller or less diverse team. </p>
<p>While I have praised TPP for not being too technical, this does come at the cost of giving us a <em>lot</em> of names and phrases to Google if we want to actually learn the details. This is good though, it gives you the vocabulary to go away and google things that are relevant, and the chance to ignore things which aren\u2019t. It means you can read this book in several sitting and get a good overview, but also to dig deep into anything you find particularly interesting. To this end, TPP knows its role is more of a gentle introduction than a technical primer - it assumes you don\u2019t know anything, and that you may not even be able to diagnose, let alone solve, any of the technical problems. Luckily, that\u2019s largely irrelevant.</p>
<p>With all this said, the book certainly wasn\u2019t one that I simply couldn\u2019t put down. In parts it was tough to read. Notably some of the characters and interactions were a little <em>too</em> caricature-ish, and some of the sections invoked horrible flashbacks of people who knew nothing about software asking something impossible or telling you how to do something in a bad way. I had quite a visceral reaction to these sections, and from conversations / online reviews, I know I am not the only one.  This speaks to the authors\u2019 experience in actual workplaces, and their ability to capture the practical difficulties that enterprises might be facing. </p>
<p>I\u2019ve also got some other questions, primary among them: why has everyone in this book served in the military? Bill, our protagonist, has. So has his boss. And so has his teacher. And so have a couple of other people he meets. Why are all these veterans working at this failing automobile parts manufacturing company? I guess that it\u2019s a good way to signal \u201Cget to know about your colleagues\u2019 lives before their current job\u201D, but also it could be seen as \u201Cassume everyone loves routine, command chains, and discipline\u201D (which they don\u2019t). </p>
<p>Perhaps a more serious critique would be to ask why this book adopts the mystery-thriller literary practice of leaving us out of problem solving. There are plenty of \u201CI screwed my eyes tight and thought about it, I was so close to solving it\u201D and \u201CHe was almost onto something\u201D. It felt a little staged, but also I guess you need something to stop this book descending into some kind of technical swamp.</p>
<p>All in all, The Phoenix Project is a good book, mainly because it knew what it wants to be: an introduction to modern IT practices in an enterprise setting for anyone remotely involved in IT within a business. It\u2019s not got stunning language, considered character work, or a suspenseful plot - but it has a lot of clarity and charm. If you work in software, especially in a position where you can affect change, I would really recommend picking this up and reading it the whole way through - there\u2019s a very high chance that you\u2019ll find something useful to you. 4\u2B50</p>`;
});
