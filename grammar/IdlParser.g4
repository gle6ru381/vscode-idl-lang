parser grammar IdlParser;

options { tokenVocab=IdlLexer; }

programm: type_prefix? import_expr* top_decl*;

top_decl: documentation? (interface_decl | enum_decl | variant_decl | struct_decl | listener_decl) IDENTIFIER LBRACE (top_decl | internal_decl)* RBRACE;

import_expr: IMPORT STR_LITERAL SEMICOLON;
type_prefix: TYPE_PREFIX IDENTIFIER SEMICOLON;

documentation: DOC_BEGIN (DOC_TEXT | documentation_tag)* DOC_END;
documentation_tag:
        DOC_COMMERCIAL 
        | DOC_INTERNAL
        | DOC_DEPRECATED
        | DOC_UNDOCUMENTED;

internal_decl: function_decl | property_decl;

interface_decl: (VIRTUAL? VIEW_DELEGATE? interface_ownership? INTERFACE)
                | (NATIVE LISTENER);
interface_ownership: SHARED_REF | WEAK_REF;

enum_decl: BITFIELD? ENUM;

variant_decl: VARIANT;

struct_decl: SERIALIZABLE? struct_kind? STRUCT;
struct_kind: LITE | OPTIONS;

listener_decl: STRONG_REF PLATFORM INTERFACE | LISTENER;

function_decl: RetType=IDENTIFIER Name=IDENTIFIER LPAREN parameters_decl? RPAREN SEMICOLON;

parameters_decl: IDENTIFIER IDENTIFIER (COMMA IDENTIFIER IDENTIFIER)* COMMA?;

property_decl: IDENTIFIER IDENTIFIER SEMICOLON;
