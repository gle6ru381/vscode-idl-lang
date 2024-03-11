import * as vscode from 'vscode';

import * as antlr from 'antlr4';

import IdlParser from './grammar/IdlParser';
import IdlLexer from './grammar/IdlLexer';

import HighlightVisitor from './visitor';

const tokenTypes = [
    "interface", "namespace", "enum", "struct", "enumMember", "method",
    "property", "comment", "string", "keyword", "number", "operator", "type", "variable",
    "parameter", "decorator"
];
const tokenModifiers = ["declaration", "definition", "static", "documentation", "readonly", "deprecated"];
const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

let debug = vscode.window.createOutputChannel("IdlDebug");
debug.appendLine("Begin debug");
debug.show(true);

const provider: vscode.DocumentSemanticTokensProvider = {
    provideDocumentSemanticTokens(document
        : vscode.TextDocument):
        vscode.ProviderResult<vscode.SemanticTokens> {

        debug.appendLine(`Provide document ${document.getText()}`);

        const text = document.getText();
        try {
            const charStream = new antlr.CharStream(text);
            const lexer = new IdlLexer(charStream);
            const tokenStream = new antlr.CommonTokenStream(lexer);
            const parser = new IdlParser(tokenStream);
            const tree = parser.programm();

            debug.append("Is my channel");

            const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
            const visitor = new HighlightVisitor(tokensBuilder, (str: string) => {
                debug.appendLine(str);
            });

            tree.accept(visitor);

            return tokensBuilder.build();
        } catch (e) {
            if (e instanceof Error) {
                debug.appendLine(`Exception stack ${e.stack}`);
            }
            debug.appendLine(`Handlee exception ${e}`);
        }
    }
}
    ;

debug.appendLine("Register token provider");
vscode.languages.registerDocumentSemanticTokensProvider(
    { language: "idl", "scheme": "file" }, provider, legend);