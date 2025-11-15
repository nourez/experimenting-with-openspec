

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.qkz83uPH.js","_app/immutable/chunks/C8M1BEum.js","_app/immutable/chunks/Bq3wvlV_.js","_app/immutable/chunks/DKCia9C2.js"];
export const stylesheets = [];
export const fonts = [];
