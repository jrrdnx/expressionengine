'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
var completionItemProvider_1 = require("./completionItemProvider");
//var hoverProvider_1 = require("./hoverProvider");
//var signatureHelpProvider_1 = require("./signatureHelpProvider");
//var validationProvider_1 = require("./validationProvider");
function activate(context) {
    // var validator = new validationProvider_1.default(context.workspaceState);
    // validator.activate(context.subscriptions);
    /* add providers */
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('expressionengine', new completionItemProvider_1.default(), '{'));
    // context.subscriptions.push(vscode.languages.registerHoverProvider('expressionengine', new hoverProvider_1.default()));
    // context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('expressionengine', new signatureHelpProvider_1.default(), '(', ','));
    /* need to set in the extension host as well as the completion provider uses it. */
	// vscode.languages.setLanguageConfiguration('expressionengine', {
    //     wordPattern: /(-?\d*\.\d\w*)|([^\-\`\~\!\@\#\%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    //     onEnterRules: [
    //         {
    //             // e.g. /** | */
    //             beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
    //             afterText: /^\s*\*\/$/,
    //             action: { indentAction: vscode.IndentAction.IndentOutdent, appendText: ' * ' }
    //         },
    //         {
    //             // e.g. /** ...|
    //             beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
    //             action: { indentAction: vscode.IndentAction.None, appendText: ' * ' }
    //         },
    //         {
    //             // e.g.  * ...|
    //             beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
    //             action: { indentAction: vscode.IndentAction.None, appendText: '* ' }
    //         },
    //         {
    //             // e.g.  */|
    //             beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
    //             action: { indentAction: vscode.IndentAction.None, removeText: 1 }
    //         },
    //         {
    //             // e.g.  *-----*/|
    //             beforeText: /^(\t|(\ \ ))*\ \*[^/]*\*\/\s*$/,
    //             action: { indentAction: vscode.IndentAction.None, removeText: 1 }
    //         }
    //     ]
    // });
}
exports.activate = activate;
