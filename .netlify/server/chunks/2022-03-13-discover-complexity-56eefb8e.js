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
  default: () => _2022_03_13_discover_complexity,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Discover Complexity",
  "author": "Thomas Wilson",
  "date": "2022-03-13T10:10",
  "slug": "2022-03-13-discover-complexity",
  "draft": false
};
const _2022_03_13_discover_complexity = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Code changes frequently, and good code is able to change easily.  That means that code must be both simple for other humans to interpret (so that the code is changed, not duplicated or added on to), and anti-brittle (so that changes don\u2019t require rewrites, or re-considerations).</p>
<p>An (understandable) response to this need for change is to predict the need for change by forecasting changes to customer, business, or engineering requirements. </p>
<p>Discover complexity, do not invent it. </p>
<p>Discovered complexity is unearthed in the actual use of the software by the intended user, in the intended use case.  Do what you can to gather and distribute this feedback to everyone involved in designing, building, and releasing the product.</p>
<p>Alternatively, complexity is invented.  It does not come from real-world use.  It is a guess.  It is speculative.  Pay attention to solving problems which <em>could</em> happen, because it dilutes focus on solving the <em>actual</em> problem.  </p>
<p>Invented complexity takes time and attention away from solving real, demonstrated problems now.  It obscures the meaning or focus of the code you\u2019re writing, so you\u2019ll pay another cost when future engineers (inevitable) attempt to understand it. </p>
<p>Solving for non-discovered complexity can lead to things like: </p>
<ul><li>Adding a lot of flexibility to functions, even though they\u2019re only used in one case</li>
<li>Creating a lot of indirection in layers of software, even though there\u2019s only one actual path in use</li>
<li>Naming things with less tangible names to accommodate future siblings, even though you\u2019re building an only child.</li></ul>`;
});
