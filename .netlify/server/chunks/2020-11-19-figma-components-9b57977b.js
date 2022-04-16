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
  default: () => _2020_11_19_figma_components,
  metadata: () => metadata
});
module.exports = __toCommonJS(stdin_exports);
var import_index_10ac95e2 = require("./index-10ac95e2.js");
const metadata = {
  "title": "Introducing Figma Variants with 5 Components that aren't Buttons",
  "author": "Thomas Wilson",
  "date": "2020-11-19T00:00:00.000Z",
  "draft": false,
  "slug": "2020-11-19-figma-variants-without-buttons",
  "tags": ["design", "figma"]
};
const _2020_11_19_figma_components = (0, import_index_10ac95e2.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Figma recently introduced Variants - a way of extending and varying your components. Components in Figma, and in modern web development, are reusable and encapsulated elements of a design - with the classic examples of a Button or a Card.</p>
<p>Variants add new flexibility, and utility, to components in Figma by introducing properties and values to them in a programmatic way. If you have experience writing modern web applications, these variants and properties are like a specific subset of props which you pass to a component. I say subset, because some things will still need to be manually edited within an instance of a component - like the text in a card. Other things, like a \u201Cvariant\u201D or \u201Ctype\u201D be be edited (e.g. <code>info</code>, <code>danger</code>, or <code>primary</code>) which in turn could switch the accent colour, and the icon used (from an <em>i</em>, to an <em>alert</em>, to a <em>logo</em>). Think about all the common variations of a component you make for different use cases - variants are a way to define those before you come to use them.</p>
<p>Variants were released relatively recently, and I think they\u2019re cool. While they require more conscious work to create, they make it much easier to compose a mockup or design using an existing design system. Additionally, the need to create a set of names for both your properties, and their possible values, forces you to develop a verbal language around your design.</p>
<p>In this piece I\u2019m going to give five examples of where variants have helped me, in the last couple of weeks. I\u2019m not going to use the Button component as an example - because that\u2019s a tired workhorse, and I\u2019m definitely a bit sick of it.</p>
<h2>Component Examples</h2>
<p>Don\u2019t bury the lead, here are some components to show how variants in Figma can be used. None of the are Buttons (did I mention that?), but they are all components I\u2019ve used in the past couple of weeks. Where I didn\u2019t make the component myself I\u2019ve linked out to the original author.</p>
<p>I\u2019ve standardised on <strong>Variant</strong> as a property name for a generic \u201Ctype\u201D, \u201Ccontext\u201D, \u201Ckind\u201D, or \u201Cvariety\u201D in components. This is the same language as <a href="${"https://material-ui.com/"}" rel="${"nofollow"}">Material UI</a> uses to describe this property and variation. I personally don\u2019t like to use <code>Type</code> - because it\u2019s already a word loaded with meaning in typed language. <code>Context</code> also has a meaning in React. Naming these kinds of properties is hard, but you have to stay consistent.</p>
<p>Shoutout to <a href="${"https://www.uiguideline.com/components"}" rel="${"nofollow"}">UI Guideline</a> for providing inspiration and starting points.</p>
<h3>#1: Toast</h3>
<p>Toasts are those little alerts that pop up or down into a screen with a transient messages. Often you want to vary the accent colour, or icon, depending on the context of the message. There\u2019s only one property here (<code>Cariant</code>) which controls this accent colour.</p>
<ul><li><code>Variant</code>: success, warning, danger, info</li></ul>
<p><img src="${"/assets/blog-images/2020-11-18-component-0-toast.png"}" alt="${"An illustration of of the toast component"}"></p>
<h3>#2: Note or comment</h3>
<p><a href="${"http://eduard.io"}" rel="${"nofollow"}">Eduard Gim\xE9nez</a> released a set of comment components into the Figma Community. The <a href="${"https://www.figma.com/community/file/905932037239721740"}" rel="${"nofollow"}">Note This</a> file contains a set of sticky-note-like component which teams can use to annotate their designs in Figma.</p>
<p>Eduard has used two properties on his variants: <code>Color</code>, which describes the accent colour of the icon and top of the note, and <code>Dark</code> which is a boolean for if the note should be in a dark mode.</p>
<ul><li><code>Color</code>: Yellow, Peach, Coral, etc.</li>
<li><code>Dark</code>: true, false</li></ul>
<p><img src="${"/assets/blog-images/2020-11-18-component-1-note.png"}" alt="${"An illustration of of the note component"}"></p>
<h3>#3: Calendar Day</h3>
<p>I\u2019ve recently been using the <a href="${"https://eva.design/"}" rel="${"nofollow"}">Eva Design System</a> as the starting point for a design language. As part of this, I\u2019ve been working with calendars and date pickers - which have turned out to be a classic example of hidden complexity.</p>
<p>Calendar days represent a single day within a week or month view, often used in the date-picker component.</p>
<p>Eva broke them down across three properties, each a boolean flag:</p>
<ul><li><code>Selected</code>: true, false. Used to show if the day has been selected by the user (or by default), and is indicated with the box surrounding the day.</li>
<li><code>Has events</code>: true, false. Indicates if there are additional details, events, or context on a specific day. Visually this is represented by the small dot underneath the number.</li>
<li><code>Disabled</code>: true, false. Let the user know that the day cannot be selected or clicked. Visually greys out the day and reduces contrast between background, border, and content.</li></ul>
<p><img src="${"/assets/blog-images/2020-11-18-component-3-calendar-day.png"}" alt="${"An illustration of of the calendar day component"}"></p>
<h3>#4: Card or Modal</h3>
<p>I\u2019ve been building a number of screens and modals recently (as part of my design work at <a href="${"https://www.oxwash.com/"}" rel="${"nofollow"}">Oxwash</a>), and Variants have let me use a common component as the background on each of these instances.</p>
<p>The Card component typically represents the background and container for some content, e.g. a product in a product list. A Modal, however, is normally overlaid on the screen, as if it had a higher Z axis value (i.e. it pops out of the screen). Visually they are very similar, but conceptually they are quite different.</p>
<p>I found by adding or removing an icon in the top-right (e.g. to close a modal) - both were pretty much identical.</p>
<ul><li><code>Platform</code>: mobile, desktop. Depending on the size of the viewport, you may wish to change padding, but also reduce/increase the size of touch targets.</li>
<li><code>With Button</code>: true, false. Place a button in the bottom right of the card, for a primary action.</li>
<li><code>With Close Button</code>: true, false. Place an icon in the top right of the card which acts as a touch target to close a modal.</li></ul>
<p><img src="${"/assets/blog-images/2020-11-18-component-4-card.png"}" alt="${"An illustration of of the card or modal component"}"></p>
<h3>#5: Tooltip</h3>
<p>I\u2019ve also been using Tooltips at Oxwash - tooltips are little containers of text that appear on hover (or tap, for mobile) to offer some additional information.</p>
<p>Technically, tooltips are quite complex, but in terms of design I\u2019ve kept them simple, with just a couple of properties:</p>
<ul><li><code>Colour</code>: light, dark. To switch between a global light or dark mode UI.</li>
<li><code>Anchor Position</code>: bottom left, bottom right, etc. Which indicates where the little speech bubble anchor appears on the tooltip.</li></ul>
<p><img src="${"/assets/blog-images/2020-11-18-component-5-tooltip.png"}" alt="${"An illustration of of the tooltip component"}"></p>
<h2>Wait, couldn\u2019t Figma do that before?</h2>
<p>Erm, yeah, sorta? Previously you could use naming conventions of components to help organise related components and then swap them out with siblings/cousins/grandparents. You did this with the naming conventions of the component, e.g. you could organise your three different types of <code>alert</code> component by calling them:</p>
<ul><li><code>alert/warning</code></li>
<li><code>alert/info</code></li>
<li><code>alert/success</code></li></ul>
<p>This works when you\u2019ve only got a couple of variations of a component. Specifically it works when your components only vary along one dimension, e.g. the accent colour of the alert. What happens when we have a couple of aspects the component can vary by? What if we want different components for mobile, for dark mode, for actionable alerts (e.g. with a button or link)?</p>
<p>All we\u2019ve got is a single string, so we absolutely have to i) maintain <strong>strict naming conventions</strong> of both the possible values of a property, and ii) <strong>identical order of properties</strong> in those strings. For example, the following components both parse well to a human, but would be structured very differently within figma:</p>
<ul><li><code>alert/mobile/warning/dark/withButton</code></li>
<li><code>alert/dark/noButton/warning/mobile</code></li></ul>
<p>This would make it hard to swap components out with the related ones. Figma essentially creates a directory, or folder, -esque structure so these kinds of inconsistencies eventually force you to move around a lot, or do a lot of searching. <strong>This will also make your components less discoverable</strong>, which is essential if you\u2019re a design team who shares Figma files to a wider organisation.</p>
<p>Also it\u2019s just messy. I don\u2019t like non-productive mess.</p>
<h2>Properties I have found useful</h2>
<p>There are a couple of properties I have found myself reaching for, and finding useful - especially when you\u2019re trying to work out all the fiddly details in a specific design. These include:</p>
<ul><li><strong>Variant</strong>: Inspired by the material UI naming convention, this covers the possible contexts the component can appear in (<code>info</code>, <code>danger</code>, <code>warning</code>, <code>success</code>).</li>
<li><strong>Platform</strong>: If you\u2019re designing the same screen across platforms and viewports you may need to adjust touch targets and font sizes (<code>mobile</code>, <code>tablet</code>, <code>desktop</code>)</li>
<li><strong>Errored</strong>: If you\u2019re dealing with fields, forms, or processes - it\u2019s useful to know how we display a failure state and the related info (<code>true</code> or <code>false</code>)</li>
<li><strong>Disabled</strong>: Useful if you\u2019re trying to show a certain form state is invalid, most commonly applied to Buttons (<code>true</code> or <code>false</code>)</li>
<li><strong>Authenticated status</strong>: Who is the current user and what is their relationship to the page/component? Sometimes we want to show/hide certain actions depending on the authentication or authorisation status (<code>user</code>, <code>admin</code>, or <code>no-user</code>)</li></ul>`;
});
