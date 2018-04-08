'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_1 = require("vscode");
var expressionEngineGlobals = require("./expressionEngineGlobals");
var expressionEngineTags = require("./expressionEngineTags");
var expressionEngineParameters = require("./expressionEngineParameters");
var expressionEngineCompletionItemProvider = /** @class */ (function () {
	function expressionEngineCompletionItemProvider() {
    }
	expressionEngineCompletionItemProvider.prototype.provideCompletionItems = function (document, position, _token, context) {
        var result = [];
        var shouldProvideCompletionItems = vscode_1.workspace.getConfiguration('expressionengine').get('suggest.basic', true);
        if (!shouldProvideCompletionItems) {
            return Promise.resolve(result);
        }
        var range = document.getWordRangeAtPosition(position);
        var prefix = range ? document.getText(range) : '';
        if (!range) {
            range = new vscode_1.Range(position, position);
		}
		var matches = function (name) {
			return prefix.length === 0 || name.length >= prefix.length && name.substr(0, prefix.length) === prefix;
		};
		var createNewProposal = function (kind, name, entry) {
			var proposal = new vscode_1.CompletionItem(name);
			proposal.kind = kind;
			if (entry) {
				if (entry.description) {
					proposal.documentation = entry.description;
				}
				if (entry.signature) {
					proposal.detail = entry.signature;
				}
			}
			return proposal;
		};

		// Opening tag/global variable
		if (context.triggerCharacter === '{') {
			// Cancel for Angular expressions (double curly braces)
			var twoBeforeCursor = new vscode_1.Position(position.line, Math.max(0, position.character - 2));
			var previousTwoChars = document.getText(new vscode_1.Range(twoBeforeCursor, position));
			if (previousTwoChars.length === 2 && previousTwoChars === '{{') {
				return Promise.resolve(result);
			}

			for (var variables in expressionEngineGlobals.variables) {
				if (expressionEngineGlobals.variables.hasOwnProperty(variables) && matches(variables)) {
					result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, variables, expressionEngineGlobals.variables[variables]));
				}
			}
			for (var exptags in expressionEngineTags.exptags) {
				if (expressionEngineTags.exptags.hasOwnProperty(exptags) && matches(exptags)) {
					result.push(createNewProposal(vscode_1.CompletionItemKind.Module, exptags, expressionEngineTags.exptags[exptags]));
				}
			}
		}

		// Closing tag/global variable
		if (context.triggerCharacter === '/') {
			// Enable for closing tags
			var twoBeforeCursor = new vscode_1.Position(position.line, Math.max(0, position.character - 2));
			var previousTwoChars = document.getText(new vscode_1.Range(twoBeforeCursor, position));
			if (previousTwoChars.length !== 2 || previousTwoChars !== '{/') {
				return Promise.resolve(result);
			}

			// Only globals with hasClosingTag = true
			for (var variables in expressionEngineGlobals.variables) {
				if (expressionEngineGlobals.variables.hasOwnProperty(variables) && matches(variables) && expressionEngineGlobals.variables[variables].hasClosingTag) {
					result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, variables, expressionEngineGlobals.variables[variables]));
				}
			}
			for (var exptags in expressionEngineTags.exptags) {
				if (expressionEngineTags.exptags.hasOwnProperty(exptags) && matches(exptags) && expressionEngineTags.exptags[exptags].hasClosingTag) {
					result.push(createNewProposal(vscode_1.CompletionItemKind.Module, exptags, expressionEngineTags.exptags[exptags]));
				}
			}
		}

		/**
		*	Inside a tag?
		*/
		if (context.triggerCharacter === ' ' || context.triggerCharacter === "\r" || context.triggerCharacter === "\n" || context.triggerKind === 0) {
			var lineNumber = position.line;

			do {
				var currentLine = (position.line == lineNumber ? document.getText(new vscode_1.Range(new vscode_1.Position(position.line, 0), position)) : document.lineAt(lineNumber).text);

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

			// Yes, inside a tag
			if (closestOpenBrace !== -1 && closestCloseBrace < closestOpenBrace) {
				var tagSubstr = currentLine.substr(closestOpenBrace);
				if (tagSubstr.indexOf(' ') !== -1) {
					var tag = tagSubstr.substr(1, tagSubstr.indexOf(' ') - 1);
				} else {
					var tag = tagSubstr.substr(1);
				}

				if (tag.slice(0, 4) === 'exp:' || tag.slice(0, 11) === 'layout:set:') {
					for (var tagParameters in expressionEngineParameters[tag]) {
						if (expressionEngineParameters[tag].hasOwnProperty(tagParameters) && matches(tagParameters)) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Property, tagParameters, expressionEngineParameters[tag][tagParameters]));
						}
					}
				}
			}
		}

        return Promise.resolve(result);
    };
	return expressionEngineCompletionItemProvider;
}());
exports.default = expressionEngineCompletionItemProvider;
