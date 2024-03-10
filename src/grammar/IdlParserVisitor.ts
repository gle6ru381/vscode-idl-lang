// Generated from ./grammar/IdlParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgrammContext } from "./IdlParser";
import { TopDeclContext } from "./IdlParser";
import { ImportExprContext } from "./IdlParser";
import { TypePrefixContext } from "./IdlParser";
import { DocumentationContext } from "./IdlParser";
import { DocumentationTagContext } from "./IdlParser";
import { InterfaceDeclContext } from "./IdlParser";
import { InterfaceOwnershipContext } from "./IdlParser";
import { EnumDeclContext } from "./IdlParser";
import { EnumFieldsDeclContext } from "./IdlParser";
import { EnumFieldContext } from "./IdlParser";
import { VariantDeclContext } from "./IdlParser";
import { StructDeclContext } from "./IdlParser";
import { StructKindContext } from "./IdlParser";
import { ListenerDeclContext } from "./IdlParser";
import { FunctionDeclContext } from "./IdlParser";
import { ParametersDeclContext } from "./IdlParser";
import { PropertyDeclContext } from "./IdlParser";
import { StructFieldDeclContext } from "./IdlParser";
import { TypeRefContext } from "./IdlParser";
import { BasedProtoTopContext } from "./IdlParser";
import { BasedProtoInternalContext } from "./IdlParser";
import { SourceDeclContext } from "./IdlParser";
import { ValueContext } from "./IdlParser";
import { BinExprContext } from "./IdlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `IdlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class IdlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `IdlParser.programm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramm?: (ctx: ProgrammContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.topDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopDecl?: (ctx: TopDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.importExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportExpr?: (ctx: ImportExprContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.typePrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePrefix?: (ctx: TypePrefixContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.documentationTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentationTag?: (ctx: DocumentationTagContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.interfaceDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDecl?: (ctx: InterfaceDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.interfaceOwnership`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceOwnership?: (ctx: InterfaceOwnershipContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.enumDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDecl?: (ctx: EnumDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.enumFieldsDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumFieldsDecl?: (ctx: EnumFieldsDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.enumField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumField?: (ctx: EnumFieldContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.variantDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariantDecl?: (ctx: VariantDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.structDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDecl?: (ctx: StructDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.structKind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructKind?: (ctx: StructKindContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.listenerDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListenerDecl?: (ctx: ListenerDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.functionDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDecl?: (ctx: FunctionDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.parametersDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParametersDecl?: (ctx: ParametersDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.propertyDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDecl?: (ctx: PropertyDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.structFieldDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructFieldDecl?: (ctx: StructFieldDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.typeRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRef?: (ctx: TypeRefContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.basedProtoTop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasedProtoTop?: (ctx: BasedProtoTopContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.basedProtoInternal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasedProtoInternal?: (ctx: BasedProtoInternalContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.sourceDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceDecl?: (ctx: SourceDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.binExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinExpr?: (ctx: BinExprContext) => Result;
}

