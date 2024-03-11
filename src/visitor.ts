import { CharStream, RuleNode, Token } from 'antlr4';

import { Position, Range, SemanticTokensBuilder } from 'vscode';

import IdlParserVisitor from './grammar/IdlParserVisitor';
import {
    BasedProtoInternalContext,
    CustomizableNameDeclContext,
    DocumentationContext,
    DocumentationTagContext,
    EnumDeclContext,
    EnumFieldContext,
    ExprContext,
    FunctionDeclContext,
    ImportExprContext,
    InterfaceDeclContext,
    InterfaceOwnershipContext,
    ListenerDeclContext,
    ParametersDeclContext,
    ProgrammContext,
    PropertyDeclContext,
    StructDeclContext,
    StructFieldDeclContext,
    StructKindContext,
    TopDeclContext,
    TypePrefixContext,
    TypeRefContext,
    VariantDeclContext
} from './grammar/IdlParser';

const PrimitiveTypes = new Set(['void', 'bool', 'int', 'uint', 'int64', 'size',
    'string', 'float', 'double', 'time_interval', 'abs_timestamp', 'rel_timestamp', 'color', 'bytes', 'point', 'bitmap', 'image_provider', 'animated_image_provider', 'vector', 'dictionary',
    'platform_user_data', 'platform_view', 'view_provider', 'model_provider', 'animated_model_provider']);

enum ExprState {
    Type,
    Value
};

export default class HighlightVisitor extends IdlParserVisitor<void> {
    tokensBuilder: SemanticTokensBuilder;
    onDebug: (str: string) => void;
    _exprStateStack: ExprState[] = [];

    constructor(tokensBuilder: SemanticTokensBuilder, onDebug: (str: string) => void) {
        super();
        this.tokensBuilder = tokensBuilder;
        this.onDebug = onDebug;
        onDebug('Create Highlight visitor');
    }

    pushToken(token: Token, type: string, modifiers?: readonly string[] | undefined) {
        if (!token) {
            return;
        }
        const line = token.line - 1;
        this.onDebug(`Push token in line ${line + 1} on columnt ${token.column} with length ${token.text.length} with type: ${type} and modifiers: ${modifiers}, token string "${token.text}"`);
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

    visitTopDecl = (ctx: TopDeclContext) => {
        this.onDebug('Visit top_decl');
        this.visitChildren(ctx);
    };

    visitImportExpr = (ctx: ImportExprContext) => {
        this.onDebug(`Visit import: ${ctx.IMPORT().symbol}, ${ctx.STR_LITERAL().symbol}`);
        this.pushKeywordToken(ctx.IMPORT().symbol);
    };

    visitTypePrefix = (ctx: TypePrefixContext) => {
        this.pushKeywordToken(ctx.TYPE_PREFIX().symbol);
        this.pushToken(ctx.IDENTIFIER().symbol, 'namespace');
    };

    visitDocumentation = (ctx: DocumentationContext) => {
        ctx.DOC_BEGIN_list().forEach((value) => {
            this.pushToken(value.symbol, 'comment', ['documentation']);
        });
        ctx.DOC_END_list().forEach((value) => {
            this.pushToken(value.symbol, 'comment', ['documentation']);
        });

        ctx.DOC_TEXT_list().forEach((value) => {
            this.pushToken(value.symbol, 'comment', ['documentation']);
        });

        this.visitChildren(ctx);
    };

    visitDocumentationTag = (ctx: DocumentationTagContext) => {
        this.pushToken(ctx.DOC_COMMERCIAL()?.symbol, 'decorator');
        this.pushToken(ctx.DOC_DEPRECATED()?.symbol, 'decorator');
        this.pushToken(ctx.DOC_INTERNAL()?.symbol, 'decorator');
        this.pushToken(ctx.DOC_UNDOCUMENTED()?.symbol, 'decorator');
    };

    visitInterfaceDecl = (ctx: InterfaceDeclContext) => {
        this.pushToken(ctx.IDENTIFIER().symbol, 'interface', ['declaration']);

        this.visitChildren(ctx);
    };

    visitInterfaceOwnership = (ctx: InterfaceOwnershipContext) => {
    };

    visitEnumDecl = (ctx: EnumDeclContext) => {
        this.pushToken(ctx.IDENTIFIER().symbol, 'enum');
        this.visitChildren(ctx);
    };

    visitEnumField = (ctx: EnumFieldContext) => {
        this.pushToken(ctx.IDENTIFIER().symbol, 'enumMember');
        this._exprStateStack.push(ExprState.Value);
        this.visitChildren(ctx);
        this._exprStateStack.pop();
    };

    visitVariantDecl = (ctx: VariantDeclContext) => {
        this.visitChildren(ctx);
    };

    visitStructDecl = (ctx: StructDeclContext) => {
        this.pushToken(ctx.IDENTIFIER().symbol, 'struct', ['declaration']);

        this.visitChildren(ctx);
    };

    visitStructKind = (ctx: StructKindContext) => {
    };

    visitListenerDecl = (ctx: ListenerDeclContext) => {
        this.pushToken(ctx.IDENTIFIER().symbol, 'interface');

        this.visitChildren(ctx);
    };

    visitFunctionDecl = (ctx: FunctionDeclContext) => {
        this.pushToken(ctx._Name, 'method', ['declaration']);

        this.visitChildren(ctx);
    };

    visitParametersDecl = (ctx: ParametersDeclContext) => {
        ctx.IDENTIFIER_list().forEach((value) => {
            this.pushToken(value.symbol, 'parameter');
        });

        this.visitChildren(ctx);
    };

    visitPropertyDecl = (ctx: PropertyDeclContext) => {
        this.pushToken(ctx.IDENTIFIER().symbol, 'property');

        this.visitChildren(ctx);
    };

    visitStructFieldDecl = (ctx: StructFieldDeclContext) => {
        this.pushToken(ctx._Name, 'property');
        this.visit(ctx._Type);

        if (ctx._Doc) {
            this.visit(ctx._Doc);
        }

        if (ctx._Based) {
            this.visit(ctx._Based);
        }

        if (ctx._Expr) {
            this._exprStateStack.push(ExprState.Value);
            this.visit(ctx._Expr);
            this._exprStateStack.pop();
        }

        this.visitChildren(ctx);
    };

    visitTypeRef = (ctx: TypeRefContext) => {
        this.onDebug(`Global ns for typeRef: ${ctx._GlobalNs}`);

        const isValue = this._exprStateStack.length > 0 && this._exprStateStack[this._exprStateStack.length - 1] == ExprState.Value;

        if (ctx.IDENTIFIER_list().length != 1 || !PrimitiveTypes.has(ctx.IDENTIFIER(0).getText())) {
            ctx.IDENTIFIER_list().forEach((value, index, array) => {
                if (index == array.length - 1) {
                    this.pushToken(value.symbol, isValue ? 'enumMember' : 'type');
                } else {
                    if (isValue && index == array.length - 2) {
                        this.pushToken(value.symbol, 'type');
                    } else {
                        this.pushToken(value.symbol, 'variable');
                    }
                }
            });
        }
    };

    visitCustomizableNameDecl = (ctx: CustomizableNameDeclContext) => {
        ctx.CPP_list()?.forEach((value) => {
            this.pushKeywordToken(value.symbol);
        });

        ctx.JAVA_list()?.forEach((value) => {
            this.pushKeywordToken(value.symbol);
        });

        ctx.OBJC_list()?.forEach((value) => {
            this.pushKeywordToken(value.symbol);
        });

        ctx.SWIFT_list()?.forEach((value) => {
            this.pushKeywordToken(value.symbol);
        });

        ctx.DART_list()?.forEach((value) => {
            this.pushKeywordToken(value.symbol);
        });

        ctx.KMP_list()?.forEach((value) => {
            this.pushKeywordToken(value.symbol);
        });

        ctx.IDENTIFIER_list().forEach((value) => {
            this.pushToken(value.symbol, 'method');
        });
    };

    visitBasedProtoInternal = (ctx: BasedProtoInternalContext) => {
        this.pushToken(ctx.IDENTIFIER().symbol, 'variable');
    };

    visitExpr = (ctx: ExprContext) => {
        this.visitChildren(ctx);
    };
}
