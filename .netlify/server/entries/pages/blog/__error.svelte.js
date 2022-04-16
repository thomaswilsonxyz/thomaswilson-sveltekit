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
  default: () => _error
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("../../../chunks/index-10ac95e2.js");
var import_Navbar_3e8a1470 = require("../../../chunks/Navbar-3e8a1470.js");
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-10gwx6e.svelte-10gwx6e{background-color:var(--gray-100);min-height:100vh;display:grid;grid-template-columns:1fr;grid-template-rows:min-content 1fr}main.svelte-10gwx6e section.svelte-10gwx6e{display:grid;min-width:100vw;height:100%;place-content:center}a.svelte-10gwx6e.svelte-10gwx6e{text-align:center;color:var(--brand-orange);font-size:1.2rem}",
  map: null
};
const _error = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-10gwx6e"}">${(0, import_index_10ac95e2.v)(import_Navbar_3e8a1470.N, "Navbar").$$render($$result, {}, {}, {})}
	<section class="${"svelte-10gwx6e"}"><p>Erm...</p>
		<h1>Couldn&#39;t find that post</h1>
		<a href="${"/blog"}" class="${"svelte-10gwx6e"}">Go back to the blog</a></section>
</main>`;
});
