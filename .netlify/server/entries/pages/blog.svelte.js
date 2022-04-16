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
  default: () => Blog,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("../../chunks/index-10ac95e2.js");
var import_date_fns = require("date-fns");
var import_Navbar_3e8a1470 = require("../../chunks/Navbar-3e8a1470.js");
var blog_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts.svelte-1a11qlj.svelte-1a11qlj{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:1fr;gap:var(--spacing-base)}.post.svelte-1a11qlj.svelte-1a11qlj{border:1px solid var(--gray-200);padding:var(--spacing-md);transition:0.2s;border-radius:8px}.post.svelte-1a11qlj.svelte-1a11qlj:hover{color:var(--brand-orange)}.post.svelte-1a11qlj a.svelte-1a11qlj{color:inherit;text-decoration:none}.post-title.svelte-1a11qlj.svelte-1a11qlj{text-decoration:underline;font-family:var(--font-family-title);font-weight:600;padding-bottom:8px}.post-date.svelte-1a11qlj.svelte-1a11qlj{font-size:0.9rem}.post-preview.svelte-1a11qlj.svelte-1a11qlj{font-size:0.9rem;line-height:120%;color:var(--gray-600)}.days-since.svelte-1a11qlj.svelte-1a11qlj{color:var(--brand-orange);font-weight:300;border:1px solid var(--brand-orange);border-radius:4px;padding:8px;font-family:monospace}",
  map: null
};
async function load({ fetch }) {
  const posts = await fetch("/api/blog.json").then((res2) => res2.json()).then((res2) => res2.posts);
  const mostRecentPost = posts[0];
  const daysSinceLastPublish = (0, import_date_fns.differenceInCalendarDays)(new Date(), new Date(mostRecentPost.date));
  const res = {
    status: 200,
    props: { posts, daysSinceLastPublish }
  };
  return res;
}
const Blog = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let { daysSinceLastPublish } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  if ($$props.daysSinceLastPublish === void 0 && $$bindings.daysSinceLastPublish && daysSinceLastPublish !== void 0)
    $$bindings.daysSinceLastPublish(daysSinceLastPublish);
  $$result.css.add(css);
  return `${(0, import_index_10ac95e2.v)(import_Navbar_3e8a1470.N, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"thomaswilson-container"}"><section class="${"thomaswilson-strapline section"}"><h1>Blog</h1>
		<p>I write about software and I how I should have built it, books I&#39;ve read, and sometimes other
			things.
		</p>
		<p>I like to write at least once a month. It&#39;s been <span class="${"days-since svelte-1a11qlj"}">${(0, import_index_10ac95e2.e)(daysSinceLastPublish)}</span>
			${(0, import_index_10ac95e2.e)(daysSinceLastPublish === 1 ? "day" : "days")} since I last published something.
		</p></section>

	<section class="${"section"}"><h2>All Writing</h2>
		<ul class="${"posts svelte-1a11qlj"}">${(0, import_index_10ac95e2.a)(posts, (post) => {
    return `<li class="${"post svelte-1a11qlj"}"><a${(0, import_index_10ac95e2.b)("href", `/blog/${post.slug}`, 0)} class="${"svelte-1a11qlj"}">${post.book_review ? `\u{1F4DA}` : ``}
						<div class="${"post-title svelte-1a11qlj"}">${(0, import_index_10ac95e2.e)(post.title)}</div>
						<div class="${"post-preview svelte-1a11qlj"}">${(0, import_index_10ac95e2.e)(post.html.slice(0, 140))}...</div>
						<div class="${"post-date svelte-1a11qlj"}">${(0, import_index_10ac95e2.e)((0, import_date_fns.intlFormat)(new Date(post.date)))}</div></a>
				</li>`;
  })}</ul></section>
</main>`;
});
