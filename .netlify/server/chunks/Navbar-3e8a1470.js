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
  N: () => Navbar
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
var Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1g1paqu{display:flex;flex-flow:row;max-width:100vw;overflow:hidden}.left.svelte-1g1paqu{flex:1;flex-grow:0;text-align:left;padding:var(--spacing-base)}.home.svelte-1g1paqu{color:var(--brand-orange);text-decoration:none;font-weight:300;display:flex;width:fit-content;white-space:nowrap;transition:0.3s}.home.svelte-1g1paqu:hover{transform:rotate(11deg)}.right.svelte-1g1paqu{flex:1;text-align:right;padding:var(--spacing-base)}.blog.svelte-1g1paqu:visited{color:var(--brand-blue)}",
  map: null
};
const Navbar = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-1g1paqu"}"><div class="${"left svelte-1g1paqu"}"><a href="${"/"}" class="${"home svelte-1g1paqu"}">Thomas Wilson</a></div>

	<div class="${"right svelte-1g1paqu"}"><a href="${"/blog"}" class="${"blog svelte-1g1paqu"}">Blog</a></div>
</nav>`;
});
