// Generated from ./grammar/IdlParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
	 * Enter a parse tree produced by `IdlParser.top_decl`.
	 * @param ctx the parse tree
	 */
	enterTop_decl?: (ctx: Top_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.top_decl`.
	 * @param ctx the parse tree
	 */
	exitTop_decl?: (ctx: Top_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.import_expr`.
	 * @param ctx the parse tree
	 */
	enterImport_expr?: (ctx: Import_exprContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.import_expr`.
	 * @param ctx the parse tree
	 */
	exitImport_expr?: (ctx: Import_exprContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.type_prefix`.
	 * @param ctx the parse tree
	 */
	enterType_prefix?: (ctx: Type_prefixContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.type_prefix`.
	 * @param ctx the parse tree
	 */
	exitType_prefix?: (ctx: Type_prefixContext) => void;
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
	 * Enter a parse tree produced by `IdlParser.documentation_tag`.
	 * @param ctx the parse tree
	 */
	enterDocumentation_tag?: (ctx: Documentation_tagContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.documentation_tag`.
	 * @param ctx the parse tree
	 */
	exitDocumentation_tag?: (ctx: Documentation_tagContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.internal_decl`.
	 * @param ctx the parse tree
	 */
	enterInternal_decl?: (ctx: Internal_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.internal_decl`.
	 * @param ctx the parse tree
	 */
	exitInternal_decl?: (ctx: Internal_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.interface_decl`.
	 * @param ctx the parse tree
	 */
	enterInterface_decl?: (ctx: Interface_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.interface_decl`.
	 * @param ctx the parse tree
	 */
	exitInterface_decl?: (ctx: Interface_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.interface_ownership`.
	 * @param ctx the parse tree
	 */
	enterInterface_ownership?: (ctx: Interface_ownershipContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.interface_ownership`.
	 * @param ctx the parse tree
	 */
	exitInterface_ownership?: (ctx: Interface_ownershipContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.enum_decl`.
	 * @param ctx the parse tree
	 */
	enterEnum_decl?: (ctx: Enum_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.enum_decl`.
	 * @param ctx the parse tree
	 */
	exitEnum_decl?: (ctx: Enum_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.variant_decl`.
	 * @param ctx the parse tree
	 */
	enterVariant_decl?: (ctx: Variant_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.variant_decl`.
	 * @param ctx the parse tree
	 */
	exitVariant_decl?: (ctx: Variant_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.struct_decl`.
	 * @param ctx the parse tree
	 */
	enterStruct_decl?: (ctx: Struct_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.struct_decl`.
	 * @param ctx the parse tree
	 */
	exitStruct_decl?: (ctx: Struct_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.struct_kind`.
	 * @param ctx the parse tree
	 */
	enterStruct_kind?: (ctx: Struct_kindContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.struct_kind`.
	 * @param ctx the parse tree
	 */
	exitStruct_kind?: (ctx: Struct_kindContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.listener_decl`.
	 * @param ctx the parse tree
	 */
	enterListener_decl?: (ctx: Listener_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.listener_decl`.
	 * @param ctx the parse tree
	 */
	exitListener_decl?: (ctx: Listener_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.function_decl`.
	 * @param ctx the parse tree
	 */
	enterFunction_decl?: (ctx: Function_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.function_decl`.
	 * @param ctx the parse tree
	 */
	exitFunction_decl?: (ctx: Function_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.parameters_decl`.
	 * @param ctx the parse tree
	 */
	enterParameters_decl?: (ctx: Parameters_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.parameters_decl`.
	 * @param ctx the parse tree
	 */
	exitParameters_decl?: (ctx: Parameters_declContext) => void;
	/**
	 * Enter a parse tree produced by `IdlParser.property_decl`.
	 * @param ctx the parse tree
	 */
	enterProperty_decl?: (ctx: Property_declContext) => void;
	/**
	 * Exit a parse tree produced by `IdlParser.property_decl`.
	 * @param ctx the parse tree
	 */
	exitProperty_decl?: (ctx: Property_declContext) => void;
}

