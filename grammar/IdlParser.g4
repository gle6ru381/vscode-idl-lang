parser grammar IdlParser;

options { tokenVocab=IdlLexer; }

programm: typePrefix? importExpr* topDecl*;

topDecl: (interfaceDecl | enumDecl | variantDecl | structDecl | listenerDecl);

importExpr: IMPORT STR_LITERAL SEMICOLON;
typePrefix: TYPE_PREFIX IDENTIFIER SEMICOLON;

documentation: (DOC_BEGIN (DOC_TEXT | documentationTag)* DOC_END)+;
documentationTag:
        DOC_COMMERCIAL 
        | DOC_INTERNAL
        | DOC_DEPRECATED
        | DOC_UNDOCUMENTED;

interfaceDecl: documentation? (STATIC? VIRTUAL? VIEW_DELEGATE? interfaceOwnership? INTERFACE
                | NATIVE LISTENER) IDENTIFIER (LPAREN customizableNameDecl RPAREN)? (COLON Parent=typeRef)? LBRACE (functionDecl | propertyDecl | topDecl)* RBRACE;
interfaceOwnership: SHARED_REF | WEAK_REF;

enumDecl: documentation? sourceDecl? BITFIELD? ENUM IDENTIFIER (LPAREN customizableNameDecl RPAREN)? basedProtoTop? LBRACE enumFieldsDecl RBRACE;
enumFieldsDecl: enumField (COMMA enumField)* COMMA?;
enumField: documentation? IDENTIFIER (ASSIGN expr)?;

variantDecl: documentation? sourceDecl? VARIANT IDENTIFIER (LPAREN customizableNameDecl RPAREN)? LBRACE structFieldDecl* RBRACE;

structDecl: documentation? sourceDecl? ABSTRACT? SERIALIZABLE? structKind? STRUCT IDENTIFIER (COLON Parent=typeRef)? (LPAREN customizableNameDecl RPAREN)? basedProtoTop? LBRACE (topDecl | structFieldDecl)* RBRACE;
structKind: LITE | OPTIONS;

listenerDecl: documentation? (STRONG_REF? PLATFORM INTERFACE | LAMBDA? LISTENER) IDENTIFIER (LPAREN customizableNameDecl RPAREN)? LBRACE (functionDecl | topDecl)* RBRACE;

functionDecl: documentation? typeRef Name=IDENTIFIER (LANGLE customizableNameDecl RANGLE)? LPAREN parametersDecl? RPAREN SEMICOLON;

parametersDecl: CONST? typeRef IDENTIFIER (COMMA CONST? typeRef IDENTIFIER)* COMMA?;

propertyDecl: documentation? GEN? OPTIONAL? typeRef IDENTIFIER READONLY? SEMICOLON;
structFieldDecl: Doc=documentation? OPTIONAL? Type=typeRef Name=IDENTIFIER Based=basedProtoInternal? (ASSIGN Expr=expr)? SEMICOLON;

typeRef: GlobalNs=DOT? IDENTIFIER (DOT IDENTIFIER)*;

customizableNameDecl: (CPP|JAVA|KMP|OBJC|SWIFT|DART) COLON IDENTIFIER (COMMA (CPP|JAVA|KMP|OBJC|SWIFT|DART) COLON IDENTIFIER)* COMMA?;

basedProtoTop: BASED_ON STR_LITERAL COLON typeRef;
basedProtoInternal: BASED_ON IDENTIFIER;
sourceDecl: CPP STR_LITERAL;

expr: INT_LITERAL
    | STR_LITERAL
    | FLOAT_LITERAL
    | DOUBLE_LITERAL
    | typeRef
    | expr BINOR expr
    | expr LSHIFT expr
    | expr ASSIGN expr;
