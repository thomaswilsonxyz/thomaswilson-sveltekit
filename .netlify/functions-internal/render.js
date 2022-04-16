const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["FivoSansModern-Regular.otf","SpaceGrotesk-Regular.woff2","favicon.png","normalize.css","thomaswilson.css"]),
	mimeTypes: {".otf":"font/otf",".woff2":"font/woff2",".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"start-04adc41e.js","js":["start-04adc41e.js","chunks/index-a4575d00.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/blog.json",
				pattern: /^\/api\/blog\.json$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/blog.json.ts.js'))
			},
			{
				type: 'endpoint',
				id: "api/blog/[slug].json",
				pattern: /^\/api\/blog\/([^/]+?)\.json$/,
				names: ["slug"],
				types: [null],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/blog/_slug_.json.ts.js'))
			},
			{
				type: 'page',
				id: "blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,null,4],
				b: [1,5]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
