// Generated from ./grammar/IdlParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `IdlParser`.
 */
export default class IdlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `IdlParser.programm`.
	 * @param ctx the parse tree
	 */
	enterProgramm?: (ctx: ProgrammContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.programm`.
	 * @param ctx the parse tree
	 */
	exitProgramm?: (ctx: ProgrammContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.topDecl`.
	 * @param ctx the parse tree
	 */
	enterTopDecl?: (ctx: TopDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.topDecl`.
	 * @param ctx the parse tree
	 */
	exitTopDecl?: (ctx: TopDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.importExpr`.
	 * @param ctx the parse tree
	 */
	enterImportExpr?: (ctx: ImportExprContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.importExpr`.
	 * @param ctx the parse tree
	 */
	exitImportExpr?: (ctx: ImportExprContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.typePrefix`.
	 * @param ctx the parse tree
	 */
	enterTypePrefix?: (ctx: TypePrefixContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.typePrefix`.
	 * @param ctx the parse tree
	 */
	exitTypePrefix?: (ctx: TypePrefixContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.documentationTag`.
	 * @param ctx the parse tree
	 */
	enterDocumentationTag?: (ctx: DocumentationTagContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.documentationTag`.
	 * @param ctx the parse tree
	 */
	exitDocumentationTag?: (ctx: DocumentationTagContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.interfaceDecl`.
	 * @param ctx the parse tree
	 */
	enterInterfaceDecl?: (ctx: InterfaceDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.interfaceDecl`.
	 * @param ctx the parse tree
	 */
	exitInterfaceDecl?: (ctx: InterfaceDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.interfaceOwnership`.
	 * @param ctx the parse tree
	 */
	enterInterfaceOwnership?: (ctx: InterfaceOwnershipContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.interfaceOwnership`.
	 * @param ctx the parse tree
	 */
	exitInterfaceOwnership?: (ctx: InterfaceOwnershipContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.enumDecl`.
	 * @param ctx the parse tree
	 */
	enterEnumDecl?: (ctx: EnumDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.enumDecl`.
	 * @param ctx the parse tree
	 */
	exitEnumDecl?: (ctx: EnumDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.enumFieldsDecl`.
	 * @param ctx the parse tree
	 */
	enterEnumFieldsDecl?: (ctx: EnumFieldsDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.enumFieldsDecl`.
	 * @param ctx the parse tree
	 */
	exitEnumFieldsDecl?: (ctx: EnumFieldsDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.enumField`.
	 * @param ctx the parse tree
	 */
	enterEnumField?: (ctx: EnumFieldContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.enumField`.
	 * @param ctx the parse tree
	 */
	exitEnumField?: (ctx: EnumFieldContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.variantDecl`.
	 * @param ctx the parse tree
	 */
	enterVariantDecl?: (ctx: VariantDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.variantDecl`.
	 * @param ctx the parse tree
	 */
	exitVariantDecl?: (ctx: VariantDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.structDecl`.
	 * @param ctx the parse tree
	 */
	enterStructDecl?: (ctx: StructDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.structDecl`.
	 * @param ctx the parse tree
	 */
	exitStructDecl?: (ctx: StructDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.structKind`.
	 * @param ctx the parse tree
	 */
	enterStructKind?: (ctx: StructKindContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.structKind`.
	 * @param ctx the parse tree
	 */
	exitStructKind?: (ctx: StructKindContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.listenerDecl`.
	 * @param ctx the parse tree
	 */
	enterListenerDecl?: (ctx: ListenerDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.listenerDecl`.
	 * @param ctx the parse tree
	 */
	exitListenerDecl?: (ctx: ListenerDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	enterFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.functionDecl`.
	 * @param ctx the parse tree
	 */
	exitFunctionDecl?: (ctx: FunctionDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.parametersDecl`.
	 * @param ctx the parse tree
	 */
	enterParametersDecl?: (ctx: ParametersDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.parametersDecl`.
	 * @param ctx the parse tree
	 */
	exitParametersDecl?: (ctx: ParametersDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.propertyDecl`.
	 * @param ctx the parse tree
	 */
	enterPropertyDecl?: (ctx: PropertyDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.propertyDecl`.
	 * @param ctx the parse tree
	 */
	exitPropertyDecl?: (ctx: PropertyDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.structFieldDecl`.
	 * @param ctx the parse tree
	 */
	enterStructFieldDecl?: (ctx: StructFieldDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.structFieldDecl`.
	 * @param ctx the parse tree
	 */
	exitStructFieldDecl?: (ctx: StructFieldDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.typeRef`.
	 * @param ctx the parse tree
	 */
	enterTypeRef?: (ctx: TypeRefContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.typeRef`.
	 * @param ctx the parse tree
	 */
	exitTypeRef?: (ctx: TypeRefContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.basedProtoTop`.
	 * @param ctx the parse tree
	 */
	enterBasedProtoTop?: (ctx: BasedProtoTopContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.basedProtoTop`.
	 * @param ctx the parse tree
	 */
	exitBasedProtoTop?: (ctx: BasedProtoTopContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.basedProtoInternal`.
	 * @param ctx the parse tree
	 */
	enterBasedProtoInternal?: (ctx: BasedProtoInternalContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.basedProtoInternal`.
	 * @param ctx the parse tree
	 */
	exitBasedProtoInternal?: (ctx: BasedProtoInternalContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.sourceDecl`.
	 * @param ctx the parse tree
	 */
	enterSourceDecl?: (ctx: SourceDeclContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.sourceDecl`.
	 * @param ctx the parse tree
	 */
	exitSourceDecl?: (ctx: SourceDeclContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.binExpr`.
	 * @param ctx the parse tree
	 */
	enterBinExpr?: (ctx: BinExprContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.binExpr`.
	 * @param ctx the parse tree
	 */
	exitBinExpr?: (ctx: BinExprContext) => void;
}

