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
const thirdPartyDefinitionPath = vscode_1.extensions.getExtension("jrrdnx.expressionengine").extensionPath + "/main/third_party/";

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

			// Include third party addons
			var addonName,
				addonTags,
				dirs = getDirectories(thirdPartyAddonPath);
			for (var dir in dirs) {
				addonName = dirs[dir].substring(dirs[dir].lastIndexOf('/') + 1);

				if (existsSync(thirdPartyDefinitionPath + addonName + "/") && existsSync(thirdPartyDefinitionPath + addonName + "/tags.js")) {
					addonTags = require(thirdPartyDefinitionPath + addonName + "/tags.js");
					for (var exptags in addonTags.exptags) {
						if (addonTags.exptags.hasOwnProperty(exptags) && matches(exptags)) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Module, exptags, addonTags.exptags[exptags]));
						}
					}
				}
				if (existsSync(thirdPartyDefinitionPath + addonName + "/") && existsSync(thirdPartyDefinitionPath + addonName + "/globals.js")) {
					addonGlobals = require(thirdPartyDefinitionPath + addonName + "/globals.js");
					for (var variables in addonGlobals.variables) {
						if (addonGlobals.variables.hasOwnProperty(variables) && matches(variables)) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, variables, addonGlobals.variables[variables]));
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

			// Include third party addons
			var addonName,
				addonTags,
				dirs = getDirectories(thirdPartyAddonPath);
			for (var dir in dirs) {
				addonName = dirs[dir].substring(dirs[dir].lastIndexOf('/') + 1);

				if (existsSync(thirdPartyDefinitionPath + addonName + "/") && existsSync(thirdPartyDefinitionPath + addonName + "/tags.js")) {
					addonTags = require(thirdPartyDefinitionPath + addonName + "/tags.js");
					for (var exptags in addonTags.exptags) {
						if (addonTags.exptags.hasOwnProperty(exptags) && matches(exptags) && addonTags.exptags[exptags].hasClosingTag) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Module, exptags, addonTags.exptags[exptags]));
						}
					}
				}
				if (existsSync(thirdPartyDefinitionPath + addonName + "/") && existsSync(thirdPartyDefinitionPath + addonName + "/globals.js")) {
					addonGlobals = require(thirdPartyDefinitionPath + addonName + "/globals.js");
					for (var variables in addonGlobals.variables) {
						if (addonGlobals.variables.hasOwnProperty(variables) && matches(variables) && addonGlobals.variables[variables].hasClosingTag) {
							result.push(createNewProposal(vscode_1.CompletionItemKind.Variable, variables, addonGlobals.variables[variables]));
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
						addonTags,
						dirs = getDirectories(thirdPartyAddonPath);
					for (var dir in dirs) {
						addonName = dirs[dir].substring(dirs[dir].lastIndexOf('/') + 1);

						if (existsSync(thirdPartyDefinitionPath + addonName + "/") && existsSync(thirdPartyDefinitionPath + addonName + "/parameters.js")) {
							addonTags = require(thirdPartyDefinitionPath + addonName + "/parameters.js");
							for (var tagParameters in addonTags[tag]) {
								if (addonTags[tag].hasOwnProperty(tagParameters) && matches(tagParameters)) {
									result.push(createNewProposal(vscode_1.CompletionItemKind.Property, tagParameters, addonTags[tag][tagParameters]));
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