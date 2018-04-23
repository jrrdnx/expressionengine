"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
	"exp:rd_critical_css": {
		critical: {
			documentation: 'The path to the critical css file you want inlined in your document `head`.',
			detail: 'Type: string',
		},
		styles: {
			documentation: 'The path(s) to stylesheet(s) to load via `link` elements with `rel=preload`.',
			detail: 'Type: string|list',
		},
		external_fonts: {
			documentation: 'The path to any external font stylesheet(s), also inlined in your document `head`.',
			detail: 'Type: string',
		},
	},
};