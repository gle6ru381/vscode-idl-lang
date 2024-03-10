// Generated from ./grammar/IdlParser.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgrammContext } from "./IdlParser";
import { Top_declContext } from "./IdlParser";
import { Import_exprContext } from "./IdlParser";
import { Type_prefixContext } from "./IdlParser";
import { DocumentationContext } from "./IdlParser";
import { Documentation_tagContext } from "./IdlParser";
import { Internal_declContext } from "./IdlParser";
import { Interface_declContext } from "./IdlParser";
import { Interface_ownershipContext } from "./IdlParser";
import { Enum_declContext } from "./IdlParser";
import { Variant_declContext } from "./IdlParser";
import { Struct_declContext } from "./IdlParser";
import { Struct_kindContext } from "./IdlParser";
import { Listener_declContext } from "./IdlParser";
import { Function_declContext } from "./IdlParser";
import { Parameters_declContext } from "./IdlParser";
import { Property_declContext } from "./IdlParser";


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
	 * Visit a parse tree produced by `IdlParser.top_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_decl?: (ctx: Top_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.import_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_expr?: (ctx: Import_exprContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.type_prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_prefix?: (ctx: Type_prefixContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.documentation_tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation_tag?: (ctx: Documentation_tagContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.internal_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInternal_decl?: (ctx: Internal_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.interface_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_decl?: (ctx: Interface_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.interface_ownership`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_ownership?: (ctx: Interface_ownershipContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.enum_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_decl?: (ctx: Enum_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.variant_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariant_decl?: (ctx: Variant_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.struct_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_decl?: (ctx: Struct_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.struct_kind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_kind?: (ctx: Struct_kindContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.listener_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListener_decl?: (ctx: Listener_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.function_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_decl?: (ctx: Function_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.parameters_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters_decl?: (ctx: Parameters_declContext) => Result;
	/**
	 * Visit a parse tree produced by `IdlParser.property_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty_decl?: (ctx: Property_declContext) => Result;
}

