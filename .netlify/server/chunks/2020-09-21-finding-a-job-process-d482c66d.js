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
  default: () => _2020_09_21_finding_a_job_process,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "My experience finding a new job as a software engineer in summer of 2020",
  "author": "Thomas Wilson",
  "date": "2020-09-20T00:00:00.000Z",
  "draft": false,
  "slug": "2020-09-20-interviewing-experience-2020",
  "tags": ["interviewing"]
};
const _2020_09_21_finding_a_job_process = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>In late summer of 2020 I moved from freelance software engineer to a full-time position. I want to outline this process for literally anybody who\u2019s interested because I\u2019ve found it useful when other people have done the same - like <a href="${"https://habr.com/en/post/489698/"}" rel="${"nofollow"}">this post</a> about interviewing at Google, <a href="${"https://css-tricks.com/interviewing-front-end-engineer-san-francisco/"}" rel="${"nofollow"}">this front-end</a>, and <a href="${"https://meekg33k.dev/what-i-learned-from-doing-60-technical-interviews-in-30-days-ckda9sn7s00iftss13b0wd0ky"}" rel="${"nofollow"}">this more generic post</a>.</p>
<p>Web development is a joyfully open community. There\u2019s a lot of sharing, most often we share code, but we also share details about the wider context of our field. Navigating a career is hard, and that\u2019s not made easier when people don\u2019t talk about their experience of moving (up, down, sideways) within and between companies.</p>
<p>It can be hard to talk about these things with your current colleagues without sounding like you\u2019re planning on leaving. It\u2019s also just a weird industry, where applying for jobs can take a long time, require a lot of standardised hoop-jumping and box ticking, and just generally feels pretty daunting. Not to mention the global pandemic and economic down-turn that hit us in 2020.</p>
<p>Anyway, I\u2019ve managed to find a new job that I\u2019ll be starting in October 2020. I\u2019m (secretly) very excited and hopeful for it, and I want to share what it was like interviewing for a frontend / fullstack software engineering role in the summer of 2020.</p>
<p><strong>A note on honesty:</strong></p>
<p>I want to be as honest as possible here, and not skip over mistakes or hurtful events (like being rejected). I still have to be purposefully vague in some places. Honestly, the specifics don\u2019t really affect the trends and takeaways as a whole.</p>
<p>I\u2019m also not going to go into detail about my salary here. I would (and do) discuss salary in person with trusted peers because people and companies have (and do) get away with discriminatory (e.g. by gender) pay for people in similar positions. But this is the internet, yo - I\u2019m not going to talk about this right now.</p>
<p>If no one around you is willing or able to talk about salary, it\u2019s fairly easy to find average data for your city and job position. For example, the average salary for an engineer (which is a broad definition) in London in 2020 is about \xA350-60k:</p>
<ul><li><a href="${"https://www.linkedin.com/salary/search?countryCode=gb&geoId=102257491&keywords=software%20engineer"}" rel="${"nofollow"}">LinkedIn</a> says \xA350k</li>
<li><a href="${"https://www.glassdoor.co.uk/Salaries/london-software-engineer-salary-SRCH_IL.0,6_IM1035_KO7,24.htm"}" rel="${"nofollow"}">Glassdoor</a> says \xA352k</li>
<li><a href="${"https://hired.com/blog/highlights/2020-state-of-salaries-report/"}" rel="${"nofollow"}">Hired.com</a> says \xA360k</li></ul>
<h2>Being open to opportunities</h2>
<p>I am a software engineer with 3-5 years[^1] of front-end and full-stack experience. I have worked in academia, in large (&gt;500 person), scaling (50-150 people), and small (~5 people) companies. I spent 2.5 years in companies, and about 8 months freelance.</p>
<p>I signalled myself as open to new opportunities for related positions around July-August of 2020. Around the middle of September I accepted a full-time position as a front-end engineer. In all, it took me ~10 weeks from first thinking \u201CI should see what\u2019s out there\u201D to signing a contract.</p>
<p>Much of my job hunting was through \u201Cpassive\u201D platforms, where recruiters and companies would come to me with information about positions. I used LinkedIn, <a href="${"https://hired.com/x/bec1ebaca8237ac16389e129029c0c0b"}" rel="${"nofollow"}">hired.com</a>, and <a href="${"https://www.talent.io/ref/iyhqVAh7"}" rel="${"nofollow"}">talent.io</a>[^2]. On the latter two platforms, you have the ability to set salary expectations and create a list of technology stack/work environment preferences.</p>
<p>[^1]: Depending on if you count my PhD as \u201Cprofessional\u201D experience or not.
[^2]: Each of those links are referrer links, we both get a rewarded if you find a job with that platform. If you feel weird about using a referral link it\u2019s very easy to get started on both platforms without them.</p>
<p>I also used various job boards, notable hacker new\u2019s monthly \u201CWho\u2019s Hiring\u201D (which are <a href="${"https://hnhiring.com/"}" rel="${"nofollow"}">consolidated here</a>) post, to look for jobs maybe once a week. There\u2019s a lot of nonsense, unclear, non-applicable job postings out there, and it\u2019s easy to spend too much time searching the noise for signal.</p>
<p>I want to be in my next position for ideally 3+ years so I was very selective about the companies I wanted to work with. I did not <em>need</em> a new job, and so I could be afforded this luxury.</p>
<p>In that time I had introductory phone calls with 10-15 companies, and interviewed with seven (i.e. arranged a follow-up from the introduction call). I ended up accepting an offer from one, was rejected by one, ghosted by two others, and declined three at the point where they asked me to complete some kind of code challenge.</p>
<h2>The interview process</h2>
<p>The interview process for all companies who I spoke with (more than the seven mentioned here) looked surprisingly similar:</p>
<ol><li><strong>A pre-interview interview</strong>. Have a 30-45 minute one-to-one chat with a recruiter or product-person. The point of this chat is for both parties to get a sense for each other. I am good enough at faking extroversion to actually enjoy these, to chat with interesting people about interesting problems. If you\u2019re roughly qualified in the technologies, and find yourself actually engaging with the problems the startup are facing, then you\u2019ll normally be screened through these calls an invited to the next stage.</li>
<li><strong>A technical chat</strong>. If you make it through the introduction call, a few days later you\u2019ll probably have a more focused conversation with somebody, or somebodies, more technical. These chats are about drilling down on the kind of work you\u2019ve done recently, and examples of your character. Be prepared to have a few case studies for specific projects you\u2019ve worked on, things which have made you proud, and things which you have done wrong. Smaller companies tend to have more free-form interviews but larger/scaling companies will have a more formalised process with more set criteria. Try to stick to your time, don\u2019t ramble (but don\u2019t be too short), be honest, and be kind to yourself, your colleagues, and the industry as a whole. If the company think you\u2019re as qualified as you say you are, and you\u2019re a good \u2728cultural fit\u2728 then you\u2019ll make it through this stage.</li>
<li><strong>A code-based test</strong>. At some point they\u2019re going to want to see you write code, and you\u2019re going to want to show off how able to write code you are. The format of these varied, and I\u2019m really happy to see a move away from take-home tests as the only thing they ask you to do. Methods I either experienced, or would have experienced, include:<ul><li>Walking someone through a codebase I had written, or was familiar with.</li>
<li>Taking a look at the company\u2019s codebase, and running a think-aloud style interview where I explain what I\u2019m seeing and what I think about both syntax and architecture.</li>
<li>A time-boxed take-home problem, i.e. being given a specific coding challenge but with an explicit deadline or limit on time (in the order of days, not hours). The company would tell you ahead of time if you needed to set anything up in particular (e.g. libraries, virtual environments, software).</li>
<li>The classic homework take-home problem, i.e. being given a problem and asked to submit a solution when it\u2019s ready.</li></ul></li>
<li><strong>An on-site interview</strong>. If you can write the code, and the company like how you write code - then you\u2019ll probably be invited to an on-site interview. All companies I spoke to (which weren\u2019t 100% remote) had an on-site part of their interview, and all made concessions given the COVID-19 pandemic (only meeting a certain number of people, social distancing measures, etc.)</li></ol>
<h2>The companies</h2>
<p>In all, over the summer (6-8 week period) I interviewed with seven companies. I\u2019ve grouped them by outcome, the order other than that is completely random.</p>
<p>###\xA0Sustainable Laundry company</p>
<p>\u{1F38A} Accepted an Offer</p>
<p><strong>What do they do?</strong> They wash clothes, I guess, with the USP of being zero carbon.</p>
<p><strong>What happened</strong>: one-on-one intro chat with head of tech, two-on-one chat with CEO and head of tech, then an on-site with the wider team. Offer made the following day and accepted two days after that.</p>
<h3>Hospitality/Services adjacent company</h3>
<p>\u{1F64F} Declined before code-test</p>
<p><strong>What do they do?</strong> They work with companies in the hospitality and services industry to increase efficiency.</p>
<p><strong>What happened?</strong> After a productive chat with someone product-focused I had another productive chat with someone in the tech team. I was offered a take-home code test which I declined because I accepted the other job. I was offered contract work at a later date, and would have accepted it if I had the time, they were genuinely a good bunch of people.</p>
<h3>Civil Infrastructure company</h3>
<p>\u{1F64F} Declined before code-test</p>
<p><strong>What do they do?</strong> The company use novel software to reduce losses and increase efficiency on civic infrastructure (think roads, water, sewage, power lines).</p>
<p><strong>What happened?</strong> A successful introduction call with a product person, then a one-on-one with a C-level person. I declined the take-home coding test as I accepted the above offer, additionally their tech stack was far outside my current area of expertise.</p>
<h3>Productivity software company</h3>
<p>\u{1F64F} Declined after first interview</p>
<p><strong>What do they do?</strong> A very early stage (almost-finished internal MVP worked on by small team) team building a real-time, collaboration-focused, web productivity tool for teams.</p>
<p><strong>What happened?</strong> I declined a code-based assessment because I did not believe in the company\u2019s mission, especially in a crowded marketplace - they couldn\u2019t verbalise a strong, coherent USP or value proposition in a busy marketplace.</p>
<h3>Logistics company</h3>
<p>\u{1F645} Rejected</p>
<p><strong>What do they do?</strong> A growth-stage startup with a vibrant and varied tech team who handle global-level logistic chains.</p>
<p><strong>What happened?</strong> I was rejected after a personal fit interview with a number of employees. I received specific and targeted feedback.</p>
<h3>HR company</h3>
<p>\u{1F47B} (Almost) Ghosted</p>
<p><strong>What do they do?</strong> They\u2019re working in the talent acquisition space to help recruiters find talent and streamline the process from applicant and recruiter side.</p>
<p><strong>What happened?</strong> After ~4 weeks I got an e-mail back saying the position had been filled, but was offered short-term contract work with the team.</p>
<h3>Data Privacy Company</h3>
<p>\u{1F47B} Ghosted</p>
<p><strong>What do they do?</strong> An international data-privacy company who were looking for frontend engineers to improve the UI of their products.</p>
<p><strong>What happened?</strong> I saw the job advertised online and reached out to the contact e-mail address given (who was the CEO). The CEO asked for a CV and a cover letter which I sent in and never received an acknowledgement or reply.</p>`;
});
