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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("../../chunks/index-10ac95e2.js");
var import_Navbar_3e8a1470 = require("../../chunks/Navbar-3e8a1470.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-z7n73x.svelte-z7n73x{--link-transition:0.2s;--link-padding:4px;--link-border-radius:8px}section.svelte-z7n73x ul.svelte-z7n73x{margin-top:0;margin-bottom:0}section.svelte-z7n73x p.svelte-z7n73x{padding-bottom:var(--spacing-md)}.oxwash.svelte-z7n73x.svelte-z7n73x{padding:var(--link-padding);transition:var(--link-transition);border-radius:var(--link-border-radius);background:#0256f2;color:white}.oxwash.svelte-z7n73x.svelte-z7n73x:hover{background:#6fbbec;text-decoration:none}.figma.svelte-z7n73x.svelte-z7n73x{padding:var(--link-padding);transition:var(--link-transition);border-radius:var(--link-border-radius);background:#c7b9ff;color:#000000}.figma.svelte-z7n73x.svelte-z7n73x:hover{background:#ffc700;color:#000000;text-decoration:none}.thesis.svelte-z7n73x.svelte-z7n73x{padding:var(--link-padding);transition:var(--link-transition);border-radius:var(--link-border-radius);border:1px solid var(--brand-orange);color:var(--brand-orange)}.thesis.svelte-z7n73x.svelte-z7n73x:hover{background:var(--brand-orange);color:white;text-decoration:none}.links.svelte-z7n73x a.svelte-z7n73x{color:var(--brand-orange)}h1.svelte-z7n73x.svelte-z7n73x{font-size:2.5rem}h2.svelte-z7n73x.svelte-z7n73x{font-family:var(--font-family-title);color:var(--gray-800)}li.svelte-z7n73x.svelte-z7n73x{padding-bottom:0.3rem}",
  map: null
};
const Routes = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_10ac95e2.v)(import_Navbar_3e8a1470.N, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"thomaswilson-container"}"><section class="${"section thomaswilson-strapline svelte-z7n73x"}"><h1 class="${"title svelte-z7n73x"}">Thomas Wilson</h1>
		<p class="${"svelte-z7n73x"}">I&#39;m a software engineer who loves the craft of building reliable and human-friendly software
			for the web. I build good things with good people for good companies.
		</p></section>

	<section class="${"work section svelte-z7n73x"}"><h2 class="${"svelte-z7n73x"}">My work</h2>
		${`<p class="${"svelte-z7n73x"}">I build human-friendly software for the web, and help teams do that with better design.</p>
			<button>Wow, Show more </button>`}</section>

	<section class="${"section personal svelte-z7n73x"}"><h2 class="${"svelte-z7n73x"}">Me</h2>
		${`<p class="${"svelte-z7n73x"}">I like to write on my <a href="${"/blog"}">blog</a> and ride bikes. I&#39;m learning to sew and my French
				is terrible
			</p>
			<button>Oh, cool, tell me more</button>`}</section>

	<section class="${"section links svelte-z7n73x"}"><h2 class="${"svelte-z7n73x"}">Links</h2>
		<ul class="${"svelte-z7n73x"}"><li class="${"svelte-z7n73x"}">I write here, <a href="${"/blog"}" class="${"svelte-z7n73x"}">on my blog</a></li>
			<li class="${"svelte-z7n73x"}">I&#39;m on <a href="${"https://www.twitter.com/tjwilson92"}" class="${"svelte-z7n73x"}">Twitter</a></li>
			<li class="${"svelte-z7n73x"}">And on <a href="${"https://www.github.com/thomaswilsonxyz"}" class="${"svelte-z7n73x"}">GitHub</a></li></ul></section>
</main>`;
});
