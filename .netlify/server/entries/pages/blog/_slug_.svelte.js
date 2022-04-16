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
  default: () => U5Bslugu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("../../../chunks/index-10ac95e2.js");
var import_date_fns = require("date-fns");
var import_Navbar_3e8a1470 = require("../../../chunks/Navbar-3e8a1470.js");
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1dr3guc{padding-top:24px}article.svelte-1dr3guc{max-width:65ch}.post-title.svelte-1dr3guc{text-align:center;padding-bottom:1rem;line-height:125%}.post-author.svelte-1dr3guc{font-size:1rem;text-align:center;line-height:100%}.post-date.svelte-1dr3guc{font-size:1rem;text-align:center;line-height:100%}",
  map: null
};
async function load({ params, fetch }) {
  const { slug } = params;
  const { post } = await fetch(`/api/blog/${slug}.json`).then((res2) => res2.json()).catch((error) => {
    console.error(error);
    return { post: null };
  });
  const res = {
    status: post ? 200 : 404,
    props: { date: new Date(post.date), post }
  };
  return res;
}
const U5Bslugu5D = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  let { date } = $$props;
  let { post } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `${(0, import_index_10ac95e2.v)(import_Navbar_3e8a1470.N, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"thomaswilson-container"}"><header class="${"section svelte-1dr3guc"}"><h1 class="${"title post-title svelte-1dr3guc"}">${(0, import_index_10ac95e2.e)(post.title)}</h1>
		<p class="${"post-author svelte-1dr3guc"}">${(0, import_index_10ac95e2.e)(post.author)}</p>
		<p class="${"post-date svelte-1dr3guc"}">${(0, import_index_10ac95e2.e)((0, import_date_fns.intlFormat)(date))}</p></header>

	<article class="${"svelte-1dr3guc"}"><!-- HTML_TAG_START -->${post.html}<!-- HTML_TAG_END --></article>
</main>`;
});
