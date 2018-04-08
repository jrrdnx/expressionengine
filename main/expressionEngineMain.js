'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
var completionItemProvider_1 = require("./completionItemProvider");
var htmlEmptyTagsShared_1 = require("./htmlEmptyTagsShared");
//var hoverProvider_1 = require("./hoverProvider");
//var signatureHelpProvider_1 = require("./signatureHelpProvider");
//var validationProvider_1 = require("./validationProvider");
function activate(context) {
	// var validator = new validationProvider_1.default(context.workspaceState);
	// validator.activate(context.subscriptions);
	/* add providers */
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('expressionengine', new completionItemProvider_1.default(), '{', '/', ' ', "\r", "\n"));
	// context.subscriptions.push(vscode.languages.registerHoverProvider('expressionengine', new hoverProvider_1.default()));
	// context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('expressionengine', new signatureHelpProvider_1.default(), '(', ','));
	vscode.languages.setLanguageConfiguration('expressionengine', {
		indentationRules: {
			increaseIndentPattern: /<(?!\?|(?:area|base|br|col|frame|hr|html|img|input|link|meta|param)\b|[^>]*\/>)([-_\.A-Za-z0-9]+)(?=\s|>)\b[^>]*>(?!.*<\/\1>)|<!--(?!.*-->)|\{[^}"']*$/,
			decreaseIndentPattern: /^\s*(<\/(?!html)[-_\.A-Za-z0-9]+\b[^>]*>|-->|\})/
		},
		wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
		onEnterRules: [
			{
				beforeText: new RegExp(`<(?!(?:${htmlEmptyTagsShared_1.EMPTY_ELEMENTS.join('|')}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`, 'i'),
				afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>/i,
				action: { indentAction: vscode.IndentAction.IndentOutdent }
			},
			{
				beforeText: new RegExp(`<(?!(?:${htmlEmptyTagsShared_1.EMPTY_ELEMENTS.join('|')}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, 'i'),
				action: { indentAction: vscode.IndentAction.Indent }
			}
		],
	});
}
exports.activate = activate;
