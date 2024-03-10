import { CharStream, RuleNode, Token } from 'antlr4';

import { Position, Range, SemanticTokensBuilder } from 'vscode';

import IdlParserVisitor from './grammar/IdlParserVisitor';
import {
    DocumentationContext,
    Documentation_tagContext,
    Function_declContext,
    Import_exprContext, Interface_declContext, Interface_ownershipContext, Internal_declContext, Parameters_declContext, ProgrammContext,
    Property_declContext,
    Top_declContext,
    Type_prefixContext
} from './grammar/IdlParser';

export default class HighlightVisitor extends IdlParserVisitor<void> {
    tokensBuilder: SemanticTokensBuilder;
    onDebug: (str: string) => void;

    constructor(tokensBuilder: SemanticTokensBuilder, onDebug: (str: string) => void) {
        super();
        this.tokensBuilder = tokensBuilder;
        this.onDebug = onDebug;
        onDebug('Create Highlight visitor');
    }

    pushToken(token: Token, type: string, modifiers?: readonly string[] | undefined) {
        const line = token.line - 1;
        this.onDebug(`Push token in line ${line} on columnt ${token.column} with length ${token.text.length} with type: ${type} and modifiers: ${modifiers}`);
        this.tokensBuilder.push(
            new Range(new Position(line, token.column),
                new Position(line, token.column + token.text.length)),
            type, modifiers);
    }

    pushKeywordToken(token: Token) {
        this.pushToken(token, 'keyword');
    }

    visitProgram = (ctx: ProgrammContext) => {
        this.onDebug('Visit program');
        this.visitChildren(ctx);
    };

    visitTop_decl = (ctx: Top_declContext) => {
        this.onDebug('Visit top_decl');
        this.visitChildren(ctx);
        this.pushToken(ctx.IDENTIFIER().symbol, 'interface', ['definition']);
    };

    visitImport_expr = (ctx: Import_exprContext) => {
        this.onDebug(`Visit import: ${ctx.IMPORT().symbol}, ${ctx.STR_LITERAL().symbol}`);
        this.pushKeywordToken(ctx.IMPORT().symbol);
        this.pushToken(ctx.STR_LITERAL().symbol, 'string');
    };

    visitType_prefix = (ctx: Type_prefixContext) => {
        this.pushKeywordToken(ctx.TYPE_PREFIX().symbol);
        this.pushToken(ctx.IDENTIFIER().symbol, 'namespace');
    };

    visitDocumentation = (ctx: DocumentationContext) => {
        this.pushToken(ctx.DOC_BEGIN().symbol, 'comment', ['documentation']);
        this.pushToken(ctx.DOC_END().symbol, 'comment', ['documentation']);

        ctx.DOC_TEXT_list().map<void>((value) => {
            this.pushToken(value.symbol, 'comment', ['documentation']);
        });

        this.visitChildren(ctx);
    };

    visitDocumentation_tag = (ctx: Documentation_tagContext) => {
        this.pushToken(ctx.DOC_COMMERCIAL()?.symbol ??
            ctx.DOC_DEPRECATED()?.symbol ??
            ctx.DOC_INTERNAL()?.symbol ??
            ctx.DOC_UNDOCUMENTED()?.symbol, 'decorator');
    };

    visitInternal_decl = (ctx: Internal_declContext) => {
        this.visitChildren(ctx);
    };

    visitInterface_decl = (ctx: Interface_declContext) => {
        const virtual = ctx.VIRTUAL()?.symbol;
        if (virtual) {
            this.pushKeywordToken(virtual);
        }
        const viewDelegate = ctx.VIEW_DELEGATE()?.symbol;
        if (viewDelegate) {
            this.pushKeywordToken(viewDelegate);
        }
        this.pushKeywordToken(ctx.INTERFACE().symbol);

        this.visitChildren(ctx);
    };

    visitInterface_ownership = (ctx: Interface_ownershipContext) => {
        this.pushKeywordToken(ctx.SHARED_REF()?.symbol ?? ctx.WEAK_REF().symbol);
    }

    visitFunction_decl = (ctx: Function_declContext) => {
        this.pushToken(ctx._RetType, 'type');
        this.pushToken(ctx._Name, 'method', ['declaration']);

        this.visitChildren(ctx);
    };

    visitParameters_decl = (ctx: Parameters_declContext) => {
        const ids = ctx.IDENTIFIER_list();
        for (var i = 0; i < ids.length - 1; i += 2) {
            this.pushToken(ids[i].symbol, 'type');
            this.pushToken(ids[i + 1].symbol, 'parameter');
        }
    };

    visitProperty_decl = (ctx: Property_declContext) => {
        this.pushToken(ctx.IDENTIFIER(0).symbol, 'type');
        this.pushToken(ctx.IDENTIFIER(1).symbol, 'property');
    };
}
