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
  default: () => _2020_06_11_deploy_rails_in_render,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Deploying an MVP Rails App with Render like it's 2020 ",
  "author": "Thomas Wilson",
  "date": "2020-06-11T00:00:00.000Z",
  "draft": false,
  "slug": "2020-06-11-deploy-rails-in-render",
  "tags": ["devops"]
};
const _2020_06_11_deploy_rails_in_render = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>\u{1F4DA}tl;dr - I used <a href="${"https://render.com/"}" rel="${"nofollow"}">Render</a> to deploy a Rails app and database. It was very easy, very fast, and very modern. Would recommend to everyone.</p>
<hr>
<p>Way back before the pandemic I had the idea for <a href="${"https://hereabouts.app/"}" rel="${"nofollow"}">hereabouts</a> - an app that people can use to explore the city they\u2019re visiting, or live in. After making a landing page, working hard to build a lot of UI and UX prototypes, and beginning the process of emerging from national and international lockdown from a pandemic, I\u2019ve had to come to the part where I build out a backend API - to store data, largely.</p>
<p>I\u2019ve decided to use <a href="${"https://rubyonrails.org/"}" rel="${"nofollow"}">Ruby on Rails</a>, a framework for web applications written in Ruby, to build out my backend. I don\u2019t want to talk too much about why I made this choice - but the short answer is it\u2019s reliable, boring, and I\u2019m fast at building with it (or at least I was, back when I was using it every day). \u201CBut Wilson, why aren\u2019t you using Microservices\u2122\uFE0F\u201D - I don\u2019t know fictional question answer, probably because I don\u2019t expect to run into the problems that people argue microservices can solve for you. If you\u2019re interested, I think <a href="${"https://www.infoq.com/presentations/microservices-panel-value/"}" rel="${"nofollow"}">this panel discussion</a> gives a good primer.</p>
<p>After building out the very basics of my rails app, I wanted to get it hosted so I could start toying with integration to the mobile app I\u2019m building. And I had an absolutely terrible time of it. I lost the best part of a weekend trying to solve this problem. Why? Why is the \u201Cdeploy this app to a server\u201D story so unclear, for one of the notorious and used web frameworks in the world.</p>
<h2>The Demands</h2>
<p>I\u2019ve spent the last few years mostly in FrontendLand, where all the cowboys and cowgirls have been absolutely <em>spoiled</em> by the modern deploy process for websites.</p>
<p>You can set <a href="${"https://www.netlify.com/"}" rel="${"nofollow"}">Netlify</a> to deploy a static website in probably under a minute, pay nothing, and it\u2019ll watch a git repo and re-build when it sees changes, provide you with immutable URLs for each version, and just\u2026 work. The list of integrated features from Netlify is impressive: split testing, cloud functions, a CMS, and some other. Netlify aren\u2019t event alone, <a href="${"https://vercel.com"}" rel="${"nofollow"}">Vercel</a> (previously <em>Zeit</em>) are building out <a href="${"https://nextjs.org/"}" rel="${"nofollow"}">NextJS</a> (a framework for building websites using React) and will host websites and cloud functions on <a href="${"https://www.cloudflare.com/learning/serverless/glossary/what-is-edge-computing/"}" rel="${"nofollow"}">The Edge</a>. It\u2019s like <a href="${"https://pages.github.com/"}" rel="${"nofollow"}">GitHub pages</a>, <a href="${"https://docs.gitlab.com/ee/user/project/pages/"}" rel="${"nofollow"}">GitLab pages</a> - but taken one step further.</p>
<p>For better or worse - modern software needs more than just a stateless interface - we\u2019ve got to put data somewhere. I don\u2019t want to have something beautiful and clean on the front, but disgusting and cumbersome on the back. Deploys should be frequent, which means they have to be easy and without friction for the developer.</p>
<p>I want to deploy my rails app\u2026</p>
<ul><li><strong>Easily</strong> - I want the app to build somewhere, and then be deployed. I am not a DevOps or infrastructure kinda-guy. I can ssh into servers but it makes me nervous, and fundamentally I\u2019d rather use my time to learn things other than unix and server platforms.</li>
<li><strong>Cheaply</strong> - I want the server hosted somewhere, I can\u2019t just run it locally. But for the next 6-12 months <em>at least</em> it\u2019s going to see very little traffic, and I do not want to pay more than I have to for the resources I am not using.</li>
<li><strong>Alongside a database</strong> - I\u2019ll happily throw up a Postgres database somewhere, and object storage somewhere else. I just want a server (real, or containerised) to run a ruby application, allow network traffic, support environment variables, and map between some ports.</li>
<li><strong>Integrated with git</strong> - Having tasted modern dev ops, where test suites run, and deployment happen automatically alongside the git activity, I don\u2019t want to go back. I want easy integration between hitting <code>git push</code> locally, and seeing something happen on a server.</li></ul>
<h2>\u274C Create a Virtual Server</h2>
<p>I\u2019ve been a fan of <a href="${"https://www.digitalocean.com/"}" rel="${"nofollow"}">Digital Ocean</a>\u2019s no-nonsense pricing and interface since 2014 when I deployed my first Rails app. So I went to their site, spun up a PostgresSQL database and small Ubuntu droplet for a combined cost of \\$25/month. An absolute steal, and enough power to probably go un-touched for the next 12 months.</p>
<p>What followed after was an entire day of figuring out how to configure rails to run as a daemon process on ubunutu, which rails-friendly web server to use (I tried <em>puma</em>, <em>passenger</em>, and <em>mina</em>), how to match that to the nginx configuration, and then how to re-deploy that.</p>
<p>I am at a loss as to why there are a) so many different ways to deploy a rails app on an unix system, and b) why trialling each of them in turn produced equally cryptic but entirely dissimilar errors.</p>
<p>For a framework who gives you Convention over Configuration (thank goodness) - why is there no simple, blessed, recommended path for deploying. Surely every rails app that gets spun up has dreams of one day being deployed in the big wide world, it\u2019s a basic use case. It is <em>the</em> use case. Why is the advise and experience here so different. Why did it take me, an engineer with at least some experience managing server deploys, a whole day to get something to not work.</p>
<p><strong>Results:</strong></p>
<ul><li>\u274C <strong>Easy:</strong> Running the service wasn\u2019t always simple</li>
<li>\u2705 <strong>Cheap</strong>: \\$25/month for server and database</li>
<li>\u2705 <strong>Database</strong>: Got a hosted/managed Postgres database</li>
<li>\u274C <strong>Integrated with git:</strong> No native/simple git integration</li></ul>
<h2>\u274C Deploy on the Cloud</h2>
<p>I turned my eyes towards the promising metropolis of Cloud Providers. I\u2019ve got a few other projects spun up on Google Cloud, so I gave them a go. It\u2019s worth noting that I\u2019m using their Cloud Storage for blob/data storage in the app (like images). I could have used AWS, yes.</p>
<p>The platform had some some documentation on <a href="${"https://cloud.google.com/ruby/rails"}" rel="${"nofollow"}">how you could deploy a rails app</a>, which was useful. They suggested three possible pathways:</p>
<p><strong>Deploy on a virtual server with Computer Engine</strong>: We\u2019ve just been through this with Digital Ocean. Fool me once\u2026</p>
<p><strong>Deploy with Kubernetes.</strong> I\u2019ve only got a passing familiarity with containerising apps, solely using Docker. I didn\u2019t much fancy having to learn a whole new set of technologies and terminologies to deploy an app, nor did I want to risk copy-pasting things from the internet. I\u2019ve heard horror stories of resource provisioning getting out of hand, which would obviously affect pricing and cause it to spike. At present, I would rather have a predictable pricing model, and not be worried that it could spike without warning.</p>
<p><strong>Deploy as Backend As A Service on App Engine</strong>. This is Google\u2019s own platform for containerising and distributing apps as serverless. This looked good at first glance, but after using their pricing calculator I could end up paying somewhere between \xA330-50 per month. This is a fine cost for a production environment, but but not compared to the \\$10/mo Digital Ocean droplet I\u2019m comparing it to.</p>
<p><strong>Results:</strong></p>
<ul><li>\u{1F937}\u200D\u2640\uFE0F <strong>Easy:</strong> I didn\u2019t actually try any of them</li>
<li>\u274C <strong>Cheap</strong>: At least \xA330/month <em>just</em> for the server</li>
<li>\u274C <strong>Database</strong>: Didn\u2019t come with a database included, would have to u</li>
<li>\u2753 <strong>Integrated with git</strong>: No, but it does integrate with the Google Cloud CLI so it could be easily configured with a hook</li></ul>
<h2>\u2705 Used Render.com</h2>
<p>I can\u2019t remember how I found out about Render. I think they came to my attention when they <a href="${"https://techcrunch.com/2019/10/07/daily-crunch-render-wins-the-startup-battlefield/"}" rel="${"nofollow"}">won Tech Crunch\u2019s Disrupt award</a>. I think I also heard about them in a conversation about next generation cloud providers making a market by essentially taking a single service in the current cloud providers, and doing it really well. I think that might have been on <a href="${"https://podcastgang.com/podcast/software-engineering-daily/322654317196215"}" rel="${"nofollow"}">this episode of Software Engineering Daily</a>.</p>
<p>Using Render to deploy the app took me maybe 30 minutes, and it reminded me a lot of the FrontendLand experience that Netlify normalised. It\u2026 <em>just works</em>. They\u2019ve got first-class support for Rails, and so I just connected the git repo and the Render built the container. It <em>was</em> that simple.</p>
<p>Then I spun up a Postgres database, which also just worked.</p>
<p><strong>Result:</strong></p>
<ul><li><strong>\u2705 Easy:</strong> Followed <a href="${"https://render.com/docs/deploy-rails"}" rel="${"nofollow"}">their docs</a> on deploying a rails app</li>
<li><strong>\u2705 Cheap</strong>: \\$14/month for server and database</li>
<li><strong>\u2705 Database</strong>: Yep, managed Postgres instance</li>
<li><strong>\u2705 Integrated with git:</strong> Yep, automated deploying, with logs</li></ul>`;
});
