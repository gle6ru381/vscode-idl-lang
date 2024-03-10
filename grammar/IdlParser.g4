parser grammar IdlParser;

options { tokenVocab=IdlLexer; }

programm: typePrefix? importExpr* topDecl*;

topDecl: documentation? (interfaceDecl | enumDecl | variantDecl | structDecl | listenerDecl);

importExpr: IMPORT STR_LITERAL SEMICOLON;
typePrefix: TYPE_PREFIX IDENTIFIER SEMICOLON;

documentation: DOC_BEGIN (DOC_TEXT | documentationTag)* DOC_END;
documentationTag:
        DOC_COMMERCIAL 
        | DOC_INTERNAL
        | DOC_DEPRECATED
        | DOC_UNDOCUMENTED;

interfaceDecl: (STATIC? VIRTUAL? VIEW_DELEGATE? interfaceOwnership? INTERFACE
                | NATIVE LISTENER) IDENTIFIER LBRACE (functionDecl | propertyDecl | topDecl)* RBRACE;
interfaceOwnership: SHARED_REF | WEAK_REF;

enumDecl: sourceDecl? BITFIELD? ENUM IDENTIFIER basedProtoTop? LBRACE enumFieldsDecl RBRACE;
enumFieldsDecl: enumField (COMMA enumField)* COMMA?;
enumField: IDENTIFIER | (IDENTIFIER ASSIGN INT_LITERAL (LSHIFT INT_LITERAL)?);

variantDecl: sourceDecl? VARIANT IDENTIFIER LBRACE structFieldDecl* RBRACE;

structDecl: sourceDecl? ABSTRACT? SERIALIZABLE? structKind? STRUCT IDENTIFIER basedProtoTop? LBRACE structFieldDecl* RBRACE;
structKind: LITE | OPTIONS;

listenerDecl: (STRONG_REF PLATFORM INTERFACE | LISTENER) IDENTIFIER LBRACE (functionDecl | topDecl)* RBRACE;

functionDecl: typeRef Name=IDENTIFIER LPAREN parametersDecl? RPAREN SEMICOLON;

parametersDecl: CONST? typeRef IDENTIFIER (COMMA CONST? typeRef IDENTIFIER)* COMMA?;

propertyDecl: GEN? CONST? READONLY? OPTIONAL? typeRef IDENTIFIER SEMICOLON;
structFieldDecl: OPTIONAL? typeRef Name=IDENTIFIER basedProtoInternal? SEMICOLON;

typeRef: GlobalNs=DOT? IDENTIFIER (DOT IDENTIFIER)*;

basedProtoTop: BASED_ON STR_LITERAL COLON typeRef;
basedProtoInternal: BASED_ON IDENTIFIER;
sourceDecl: CPP STR_LITERAL;

value: INT_LITERAL
     | STR_LITERAL
     | FLOAT_LITERAL
     | DOUBLE_LITERAL
     | typeRef;

binExpr: value BINOR value
       | value LSHIFT value
       | value ASSIGN value;
