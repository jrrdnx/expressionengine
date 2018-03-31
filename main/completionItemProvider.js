'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_1 = require("vscode");
var expressionEngineGlobals = require("./expressionEngineGlobals");
var expressionEngineTags = require("./expressionEngineTags");
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
		if (context.triggerCharacter === '{') {
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
        return Promise.resolve(result);
    };
	return expressionEngineCompletionItemProvider;
}());
exports.default = expressionEngineCompletionItemProvider;
