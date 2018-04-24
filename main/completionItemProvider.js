'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_1 = require("vscode");
const { lstatSync, readdirSync, existsSync } = require('fs');
const { join } = require('path');
const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory);
var expressionEngineGlobals = require("./expressionEngineGlobals");
var expressionEngineTags = require("./expressionEngineTags");
var expressionEngineParameters = require("./expressionEngineParameters");

const thirdPartyAddonPath = vscode_1.workspace.getConfiguration('expressionengine').get('thirdPartyAddonPath', '${rootPath}/httpdocs/system/user/addons/').replace("${rootPath}", vscode_1.workspace.workspaceFolders[0].uri).replace("file://", "");

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
				if (entry.documentation) {
					proposal.documentation = entry.documentation;
				}
				if (entry.detail) {
					proposal.detail = entry.detail;
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

			for (var expVariables in expressionEngineGlobals.variables) {
				if (expressionEngineGlobals.variables.hasOwnProperty(expVariables) && matches(expVariables)) {
					result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, expVariables, expressionEngineGlobals.variables[expVariables]));
				}
			}
			for (var expTags in expressionEngineTags.exptags) {
				if (expressionEngineTags.exptags.hasOwnProperty(expTags) && matches(expTags)) {
					result.push(createNewProposal(vscode_1.CompletionItemKind.Module, expTags, expressionEngineTags.exptags[expTags]));
				}
			}

			// Include third party addons
			var addonName,
				addonDefs,
				dirs = getDirectories(thirdPartyAddonPath);
			for (var dir in dirs) {
				addonName = dirs[dir].substring(dirs[dir].lastIndexOf('/') + 1);

				if (existsSync(thirdPartyAddonPath + addonName + "/") && existsSync(thirdPartyAddonPath + addonName + "/addon.json")) {
					addonDefs = require(thirdPartyAddonPath + addonName + "/addon.json");
					for (var expTags in addonDefs.tags) {
						if (addonDefs.tags.hasOwnProperty(expTags) && matches(expTags)) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Module, expTags, addonDefs.tags[expTags]));
						}
					}
					for (var expVariables in addonDefs.variables) {
						if (addonDefs.variables.hasOwnProperty(expVariables) && matches(expVariables)) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, expVariables, addonDefs.variables[expVariables]));
						}
					}
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
			for (var expVariables in expressionEngineGlobals.variables) {
				if (expressionEngineGlobals.variables.hasOwnProperty(expVariables) && matches(expVariables) && expressionEngineGlobals.variables[expVariables].hasClosingTag) {
					result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, expVariables, expressionEngineGlobals.variables[expVariables]));
				}
			}
			for (var expTags in expressionEngineTags.exptags) {
				if (expressionEngineTags.exptags.hasOwnProperty(expTags) && matches(expTags) && expressionEngineTags.exptags[expTags].hasClosingTag) {
					result.push(createNewProposal(vscode_1.CompletionItemKind.Module, expTags, expressionEngineTags.exptags[expTags]));
				}
			}

			// Include third party addons
			var addonName,
				addonDefs,
				dirs = getDirectories(thirdPartyAddonPath);
			for (var dir in dirs) {
				addonName = dirs[dir].substring(dirs[dir].lastIndexOf('/') + 1);

				if (existsSync(thirdPartyAddonPath + addonName + "/") && existsSync(thirdPartyAddonPath + addonName + "/addon.json")) {
					addonDefs = require(thirdPartyAddonPath + addonName + "/addon.json");
					for (var expTags in addonDefs.tags) {
						if (addonDefs.tags.hasOwnProperty(expTags) && matches(expTags) && addonDefs.tags[expTags].hasClosingTag) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Module, expTags, addonDefs.tags[expTags]));
						}
					}
					for (var expVariables in addonDefs.variables) {
						if (addonDefs.variables.hasOwnProperty(expVariables) && matches(expVariables) && addonDefs.variables[expVariables].hasClosingTag) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, expVariables, addonDefs.variables[expVariables]));
						}
					}
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

				if (tag.slice(0, 4) === 'exp:' || tag.slice(0, 7) === 'layout:') {
					for (var tagParameters in expressionEngineParameters[tag]) {
						if (expressionEngineParameters[tag].hasOwnProperty(tagParameters) && matches(tagParameters)) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Property, tagParameters, expressionEngineParameters[tag][tagParameters]));
						}
					}

					// Include third party addons
					var addonName,
						addonDefs,
						dirs = getDirectories(thirdPartyAddonPath);
					for (var dir in dirs) {
						addonName = dirs[dir].substring(dirs[dir].lastIndexOf('/') + 1);

						if (existsSync(thirdPartyAddonPath + addonName + "/") && existsSync(thirdPartyAddonPath + addonName + "/addon.json")) {
							addonDefs = require(thirdPartyAddonPath + addonName + "/addon.json");
							if (addonDefs.tags.hasOwnProperty(tag)) {
								for (var tagParameters in addonDefs.tags[tag].parameters) {
									if (addonDefs.tags[tag].parameters.hasOwnProperty(tagParameters) && matches(tagParameters)) {
										result.push(createNewProposal(vscode_1.CompletionItemKind.Property, tagParameters, addonDefs.tags[tag].parameters[tagParameters]));
									}
								}
							}
							if (addonDefs.variables.hasOwnProperty(tag)) {
								for (var tagParameters in addonDefs.variables[tag].parameters) {
									if (addonDefs.variables[tag].parameters.hasOwnProperty(tagParameters) && matches(tagParameters)) {
										result.push(createNewProposal(vscode_1.CompletionItemKind.Property, tagParameters, addonDefs.variables[tag].parameters[tagParameters]));
									}
								}
							}
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