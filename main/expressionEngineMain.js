'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
var expressionEngineGlobals = require("./expressionEngineGlobals");
var expressionEngineTags = require("./expressionEngineTags");
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

	vscode.workspace.onDidChangeTextDocument(event => {
		autoCloseTag(event);
	});
}
exports.activate = activate;
function autoCloseTag(event) {
	let editor = vscode.window.activeTextEditor;
	if (!editor) {
		return;
	}
	if (!event.contentChanges[0]) {
		return;
	}
	if (event.contentChanges[0].text !== "}") {
		return;
	}
	let shouldAutoCloseTags = vscode.workspace.getConfiguration('expressionengine').get('autoClosingTags', true);
	if (!shouldAutoCloseTags) {
		return;
	}

	let position = editor.selection.active;
	var lastChar = editor.document.getText(new vscode.Range(position, new vscode.Position(position.line, position.character + 1)))

	if (lastChar === "}") {
		var lineNumber = position.line;

		do {
			var currentLine = (position.line == lineNumber ? editor.document.getText(new vscode.Range(new vscode.Position(position.line, 0), position)) : editor.document.lineAt(lineNumber).text);

			// Get all opening curly braces
			var fromIndex = 0,
				closestOpenBrace,
				closestCloseBrace,
				openBraces = [],
				openBrace = currentLine.indexOf('{', fromIndex);
			do {
				openBraces.push(openBrace);
				fromIndex = openBrace >= 0 ? openBrace + 1 : 0;
				openBrace = currentLine.indexOf('{', fromIndex);
			} while (openBrace !== -1);
			closestOpenBrace = openBraces[openBraces.length - 1];

			// Get all closing curly braces
			fromIndex = 0;
			var closeBraces = [],
				closeBrace = currentLine.indexOf('}', fromIndex);
			do {
				closeBraces.push(closeBrace);
				fromIndex = closeBrace >= 0 ? closeBrace + 1 : 0;
				closeBrace = currentLine.indexOf('}', fromIndex);
			} while (closeBrace !== -1);
			closestCloseBrace = closeBraces[closeBraces.length - 1];

			lineNumber--;
		} while (closestOpenBrace === -1 && closestCloseBrace === -1 && lineNumber >= 0);

		// Yes, inside and just closed a tag
		if (closestOpenBrace !== -1 && closestCloseBrace < closestOpenBrace) {
			var tagSubstr = currentLine.substr(closestOpenBrace);
			if (tagSubstr.indexOf(' ') !== -1) {
				var tag = tagSubstr.substr(1, tagSubstr.indexOf(' ') - 1);
			} else {
				var tag = tagSubstr.substr(1);
			}

			if (expressionEngineTags.exptags.hasOwnProperty(tag) && expressionEngineTags.exptags[tag].hasClosingTag) {
				editor.edit((editBuilder) => {
					editBuilder.insert(new vscode.Position(position.line, position.character + 1), "{/" + tag + "}");
				}).then(() => {
					editor.selection = new vscode.Selection(new vscode.Position(position.line, position.character + 1), new vscode.Position(position.line, position.character + 1));
				});
			}
			else if (expressionEngineGlobals.variables.hasOwnProperty(tag) && expressionEngineGlobals.variables[tag].hasClosingTag) {
				editor.edit((editBuilder) => {
					editBuilder.insert(new vscode.Position(position.line, position.character + 1), "{/" + tag + "}");
				}).then(() => {
					editor.selection = new vscode.Selection(new vscode.Position(position.line, position.character + 1), new vscode.Position(position.line, position.character + 1));
				});
			}
		}
	}
}