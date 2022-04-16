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
  default: () => _2022_03_02_concentrate_on_concentrated_tests,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Concentrate on Concentrated Tests",
  "author": "Thomas Wilson",
  "date": "2022-03-02T21:41:00.000Z",
  "slug": "2022-03-02-concentrate-on-concentrated-tests",
  "draft": false
};
const _2022_03_02_concentrate_on_concentrated_tests = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>The flavour of a test block lies in the calling of application code, and the assertions on its behaviour.  Everything else (set-up, tear down, tidying, and side effects) dilutes a test.  Work to prevent tests from being watered down.</p>
<p>It should be as obvious to an incoming engineer exactly what part of the codebase is being tested, and exactly which parts of the testing-infrastructure (stubs, mocks, fixtures) are facilitating that.</p>
<p>By contrast: a diluted test makes it hard to point to the grain of truth or value.  Tests which are hard to understand are hard to change.  Code which is hard to change won\u2019t get changed.  </p>
<p>If it\u2019s easier for an engineer to add a new test, rather than alter an existing one, they will.  If it\u2019s unclear that a test already exists for something, that test will be duplicated.  </p>
<p>Diluted tests risk making your codebase bloated and brittle (too big and hard to change). </p>
<p>Ask if you can make a test more concentrated by:</p>
<ol><li>Creating multiple unit tests to test previously-grouped functionality</li>
<li>Removing tests which make no unique assertions on your application code</li>
<li>Herding your testing infrastructure out of individual test files to isolate repeated patterns or necessary magic</li></ol>`;
});
