export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.uanJtyBr.js",app:"_app/immutable/entry/app.Le7VaT_b.js",imports:["_app/immutable/entry/start.uanJtyBr.js","_app/immutable/chunks/BbOus_VT.js","_app/immutable/chunks/Bq3wvlV_.js","_app/immutable/chunks/CYm1lVqn.js","_app/immutable/chunks/CNgm9CcY.js","_app/immutable/entry/app.Le7VaT_b.js","_app/immutable/chunks/Bq3wvlV_.js","_app/immutable/chunks/CEfvfydb.js","_app/immutable/chunks/C8M1BEum.js","_app/immutable/chunks/CNgm9CcY.js","_app/immutable/chunks/DNdxd3Cm.js","_app/immutable/chunks/DKCia9C2.js","_app/immutable/chunks/CYm1lVqn.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
