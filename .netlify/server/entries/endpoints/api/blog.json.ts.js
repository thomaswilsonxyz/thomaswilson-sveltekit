var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_getPostsFromGlobResult_2e7f393c = require("../../../chunks/getPostsFromGlobResult-2e7f393c.js");
var import_sanitize_html = __toESM(require("sanitize-html"));
const fetchBlogPosts = async () => {
  const files = await { "../content/blog/2016-02-28-eating-disorder-powerful.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2016-02-28-eating-disorder-powerful-0af4a0ee.js"))), "../content/blog/2017-03-03-loss-and-ed.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2017-03-03-loss-and-ed-d4b1c1a5.js"))), "../content/blog/2019-08-15-goodbye-bear.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2019-08-15-goodbye-bear-799aed90.js"))), "../content/blog/2019-09-20-why-use-css-in-js.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2019-09-20-why-use-css-in-js-9fcc7d49.js"))), "../content/blog/2019-10-30-culture-i-devoured-in-september-2019.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2019-10-30-culture-i-devoured-in-september-2019-46f09e61.js"))), "../content/blog/2019-12-20-nuxt-to-gatsby.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2019-12-20-nuxt-to-gatsby-fc2a6097.js"))), "../content/blog/2020-02-20-introducing-eating-disorders.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-02-20-introducing-eating-disorders-d2e86304.js"))), "../content/blog/2020-02-24-hereabouts-devblog-1.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-02-24-hereabouts-devblog-1-18e93c36.js"))), "../content/blog/2020-03-15-ux-with-components-screens-state-and-actions.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-03-15-ux-with-components-screens-state-and-actions-0c39ac14.js"))), "../content/blog/2020-03-22-chosing-react-native-for-hereabouts.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-03-22-chosing-react-native-for-hereabouts-b7863833.js"))), "../content/blog/2020-04-02-hereabouts-devlog-2.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-04-02-hereabouts-devlog-2-264ab07c.js"))), "../content/blog/2020-05-31-unicorns.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-05-31-unicorns-06ff6905.js"))), "../content/blog/2020-06-11-deploy-rails-in-render.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-06-11-deploy-rails-in-render-30f28e2a.js"))), "../content/blog/2020-08-07-where-i-go-for-ui-inspiration.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-08-07-where-i-go-for-ui-inspiration-fc5cd52d.js"))), "../content/blog/2020-08-14-thing-i-learned.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-08-14-thing-i-learned-05e37aa6.js"))), "../content/blog/2020-08-21-things-i-learned.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-08-21-things-i-learned-a798a2f9.js"))), "../content/blog/2020-08-23-why-are-you-like-this-javascript.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-08-23-why-are-you-like-this-javascript-843edfcd.js"))), "../content/blog/2020-08-28-things-i-learned-3.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-08-28-things-i-learned-3-2e553969.js"))), "../content/blog/2020-08-29-apple-what-are-you-doing.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-08-29-apple-what-are-you-doing-a46abe23.js"))), "../content/blog/2020-09-04-things-i-learned-4.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-04-things-i-learned-4-a37f698c.js"))), "../content/blog/2020-09-06-js-promise-introduction.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-06-js-promise-introduction-04a4a7c9.js"))), "../content/blog/2020-09-11-things-i-learned-5.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-11-things-i-learned-5-9ba86116.js"))), "../content/blog/2020-09-18-things-i-learned-6.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-18-things-i-learned-6-43c7d35d.js"))), "../content/blog/2020-09-21-finding-a-job-process.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-21-finding-a-job-process-d482c66d.js"))), "../content/blog/2020-09-25-things-i-learned-7.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-25-things-i-learned-7-3c1e1a8f.js"))), "../content/blog/2020-09-28-software-as-craft.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-28-software-as-craft-24d74267.js"))), "../content/blog/2020-10-02-things-i-learned-8.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-02-things-i-learned-8-b54e3403.js"))), "../content/blog/2020-10-09-things-i-learned-9.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-09-things-i-learned-9-0fa38174.js"))), "../content/blog/2020-10-10-five-questions-for-a-first-week.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-10-five-questions-for-a-first-week-5fec9954.js"))), "../content/blog/2020-10-16-things-i-learned-10.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-16-things-i-learned-10-3f4d1b6f.js"))), "../content/blog/2020-10-21-designing-mental-frameworks.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-21-designing-mental-frameworks-41042d8b.js"))), "../content/blog/2020-10-23-things-i-learned-11.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-23-things-i-learned-11-04dedbc2.js"))), "../content/blog/2020-10-24-writing-for-recipe-cards.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-24-writing-for-recipe-cards-ae8f013d.js"))), "../content/blog/2020-10-31-things-i-learned-12.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-31-things-i-learned-12-8d6c0203.js"))), "../content/blog/2020-11-01-js-runtimes-and-environment.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-01-js-runtimes-and-environment-c2ddc8b0.js"))), "../content/blog/2020-11-07-things-i-learned-13.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-07-things-i-learned-13-87ae224f.js"))), "../content/blog/2020-11-13-things-i-learned-14.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-13-things-i-learned-14-f6c9a803.js"))), "../content/blog/2020-11-19-figma-components.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-19-figma-components-9b57977b.js"))), "../content/blog/2020-11-20-things-i-learned-15.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-20-things-i-learned-15-fcfff925.js"))), "../content/blog/2020-11-23-tiny-separate-design-engineering.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-23-tiny-separate-design-engineering-b8124733.js"))), "../content/blog/2020-11-27-things-i-learned-16.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-27-things-i-learned-16-d78b9827.js"))), "../content/blog/2020-12-05-things-i-learned-17.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-12-05-things-i-learned-17-93c9716b.js"))), "../content/blog/2020-12-10-things-i-learned-18.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-12-10-things-i-learned-18-a1af1eed.js"))), "../content/blog/2020-12-18-things-i-learned-19.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-12-18-things-i-learned-19-b5e2eca1.js"))), "../content/blog/2020-12-20-how-are-we-going-to-write-about-this.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-12-20-how-are-we-going-to-write-about-this-d65432ee.js"))), "../content/blog/2020-12-27-things-i-learned-20.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-12-27-things-i-learned-20-deca546e.js"))), "../content/blog/2021-01-01-things-i-learned-21.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-01-things-i-learned-21-a5c9e4ef.js"))), "../content/blog/2021-01-02-yearly-theme-2021.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-02-yearly-theme-2021-03a7be39.js"))), "../content/blog/2021-01-09-things-i-learned-22.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-09-things-i-learned-22-09d66b70.js"))), "../content/blog/2021-01-10-an-ode-to-plaintext-notes.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-10-an-ode-to-plaintext-notes-be3efccb.js"))), "../content/blog/2021-01-15-free-fonts-awwwards.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-15-free-fonts-awwwards-83617597.js"))), "../content/blog/2021-01-15-things-i-learned-23.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-15-things-i-learned-23-bcc7f83d.js"))), "../content/blog/2021-01-23-things-i-learned-24.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-23-things-i-learned-24-1b7b35ce.js"))), "../content/blog/2021-01-27-albums-2020.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-27-albums-2020-5725fa4c.js"))), "../content/blog/2021-01-29-things-i-learned-25.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-29-things-i-learned-25-2a491e4b.js"))), "../content/blog/2021-01-31-tiny-thoughts-frontend-is-fullstack.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-31-tiny-thoughts-frontend-is-fullstack-765d7355.js"))), "../content/blog/2021-02-06-things-i-learned-26.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-06-things-i-learned-26-ae9245db.js"))), "../content/blog/2021-02-12-blog-redesign-changelog.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-12-blog-redesign-changelog-48103e19.js"))), "../content/blog/2021-02-13-things-i-learned-27.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-13-things-i-learned-27-17f83b3f.js"))), "../content/blog/2021-02-17-closures-in-swift.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-17-closures-in-swift-b4cbc2f3.js"))), "../content/blog/2021-02-19-things-i-learned-28.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-19-things-i-learned-28-9e389556.js"))), "../content/blog/2021-02-20-clubhouse-after-48-hours.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-20-clubhouse-after-48-hours-55ae4f20.js"))), "../content/blog/2021-02-26-things-i-learned-29.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-26-things-i-learned-29-71d9ce32.js"))), "../content/blog/2021-02-27-github-actions-xcode-tests.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-27-github-actions-xcode-tests-b4c7e20c.js"))), "../content/blog/2021-03-05-things-i-learned-30.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-03-05-things-i-learned-30-8c9e3af2.js"))), "../content/blog/2021-03-06-design-workflow-build-components.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-03-06-design-workflow-build-components-63b59472.js"))), "../content/blog/2021-03-12-things-i-learned-31.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-03-12-things-i-learned-31-5651ec47.js"))), "../content/blog/2021-03-20-things-i-learned-32.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-03-20-things-i-learned-32-0b354c4a.js"))), "../content/blog/2021-03-21-dash-cycle-00.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-03-21-dash-cycle-00-7e58c52a.js"))), "../content/blog/2021-03-26-things-learned-33.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-03-26-things-learned-33-6b144699.js"))), "../content/blog/2021-04-02-things-i-learned-34.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-02-things-i-learned-34-55e72bfc.js"))), "../content/blog/2021-04-08-just-enough-software-design.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-08-just-enough-software-design-bb1b6ff1.js"))), "../content/blog/2021-04-11-things-i-learned-35.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-11-things-i-learned-35-34430b12.js"))), "../content/blog/2021-04-12-dash-cycle-01.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-12-dash-cycle-01-8d6c6cd5.js"))), "../content/blog/2021-04-16-things-i-learned-36.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-16-things-i-learned-36-aee9efcb.js"))), "../content/blog/2021-04-24-things-i-learned-37.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-24-things-i-learned-37-6d2be3d7.js"))), "../content/blog/2021-04-27-excommunicate-your-ideas.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-27-excommunicate-your-ideas-66e47124.js"))), "../content/blog/2021-05-01-things-i-learned-38.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-05-01-things-i-learned-38-2af7f335.js"))), "../content/blog/2021-05-05-customer-centric-care-like-a-robot.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-05-05-customer-centric-care-like-a-robot-ad6292bd.js"))), "../content/blog/2021-05-06-weekly-39.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-05-06-weekly-39-8bc58439.js"))), "../content/blog/2021-05-15-weekly-40.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-05-15-weekly-40-68693d5d.js"))), "../content/blog/2021-05-21-weekly-41.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-05-21-weekly-41-311c0739.js"))), "../content/blog/2021-05-27-weekly-42.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-05-27-weekly-42-40ad7259.js"))), "../content/blog/2021-06-05-weekly-43.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-06-05-weekly-43-a2087a97.js"))), "../content/blog/2021-06-10-weekly-44.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-06-10-weekly-44-618d9f06.js"))), "../content/blog/2021-06-13-infinite-coast-of-problem-solving.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-06-13-infinite-coast-of-problem-solving-20326007.js"))), "../content/blog/2021-06-27-weekly-45.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-06-27-weekly-45-0233ec62.js"))), "../content/blog/2021-07-08-out-of-office.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-07-08-out-of-office-2e798a65.js"))), "../content/blog/2021-10-11-back-in-office.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-10-11-back-in-office-70c65d6c.js"))), "../content/blog/2021-10-25-the-handbrake-has-come-off.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-10-25-the-handbrake-has-come-off-3c1142af.js"))), "../content/blog/2021-10-28-how-to-onboard-new-software-engineers.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-10-28-how-to-onboard-new-software-engineers-89215694.js"))), "../content/blog/2021-12-12-build-the-platform-ship-the-product.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-12-12-build-the-platform-ship-the-product-aef2df81.js"))), "../content/blog/2022-02-04-vibe-check-0.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2022-02-04-vibe-check-0-c8eb5675.js"))), "../content/blog/2022-02-22-atomic-habits-is-a-really-good-book.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2022-02-22-atomic-habits-is-a-really-good-book-89593d65.js"))), "../content/blog/2022-02-28-vibe-check-01.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2022-02-28-vibe-check-01-d55a0e2d.js"))), "../content/blog/2022-03-02-concentrate-on-concentrated-tests.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2022-03-02-concentrate-on-concentrated-tests-3e42db2f.js"))), "../content/blog/2022-03-13-discover-complexity.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2022-03-13-discover-complexity-56eefb8e.js"))), "../content/blog/2022-04-03-vibe-check-02.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2022-04-03-vibe-check-02-61ea8329.js"))), "../content/blog/2022-04-10-recognise-and-reduce-risk.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2022-04-10-recognise-and-reduce-risk-023ea1df.js"))), "../content/book-reviews/2020-09-11-wow-no-thank-you.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-11-wow-no-thank-you-a0ff4136.js"))), "../content/book-reviews/2020-09-20-how-do-we-know-were-doing-it-right.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-20-how-do-we-know-were-doing-it-right-0baa332f.js"))), "../content/book-reviews/2020-09-26-queenie.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-09-26-queenie-d51f811c.js"))), "../content/book-reviews/2020-10-03-cats-cradle.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-03-cats-cradle-317a4017.js"))), "../content/book-reviews/2020-10-18-hamet.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-10-18-hamet-528d07f6.js"))), "../content/book-reviews/2020-11-08-an-absolutely-remarkable-thing.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-08-an-absolutely-remarkable-thing-cc424996.js"))), "../content/book-reviews/2020-11-14-on-connection.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-11-14-on-connection-f5179625.js"))), "../content/book-reviews/2020-12-02-the-phoenix-project.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-12-02-the-phoenix-project-3360233b.js"))), "../content/book-reviews/2020-12-13-kings-of-the-wyld.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2020-12-13-kings-of-the-wyld-75a05e60.js"))), "../content/book-reviews/2021-01-23-the-silence-of-the-girls.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-01-23-the-silence-of-the-girls-47091b40.js"))), "../content/book-reviews/2021-02-04-first-you-write-a-sentence.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-04-first-you-write-a-sentence-b830ceb2.js"))), "../content/book-reviews/2021-02-09-utopia-avenue.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-02-09-utopia-avenue-4d3c6168.js"))), "../content/book-reviews/2021-03-15-magician.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-03-15-magician-9baceb14.js"))), "../content/book-reviews/2021-04-03-once-upon-a-river.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-03-once-upon-a-river-22df99c4.js"))), "../content/book-reviews/2021-04-17-mrs-death-misses-death.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-04-17-mrs-death-misses-death-baf54f9b.js"))), "../content/book-reviews/2021-05-05-after.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-05-05-after-8ebc5dd7.js"))), "../content/book-reviews/2021-05-25-hangover-square.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-05-25-hangover-square-baf2a976.js"))), "../content/book-reviews/2021-06-03-project-hail-mary.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-06-03-project-hail-mary-b8c7d57d.js"))), "../content/book-reviews/2021-06-13-sistersong.md": () => Promise.resolve().then(() => __toESM(require("../../../chunks/2021-06-13-sistersong-b84e41c1.js"))) };
  return await (0, import_getPostsFromGlobResult_2e7f393c.g)(files);
};
const get = async ({ url }) => {
  try {
    const posts = await fetchBlogPosts();
    const sortedBlogPosts = posts.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      }
      if (a.date < b.date) {
        return 1;
      }
      return 0;
    });
    const withCleanHtml = sortedBlogPosts.map((post) => {
      return __spreadProps(__spreadValues({}, post), {
        html: (0, import_sanitize_html.default)(post.html, {
          allowedTags: []
        })
      });
    });
    return {
      status: 200,
      body: {
        posts: withCleanHtml
      }
    };
  } catch (error) {
    console.error({ error: JSON.stringify(error) });
    return {
      status: 500,
      body: {
        error: "Could not fetch posts. " + error
      }
    };
  }
};
