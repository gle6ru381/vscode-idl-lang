parser grammar IdlParser;

options { tokenVocab=IdlLexer; }

programm: typePrefix? importExpr* topDecl*;

topDecl: (interfaceDecl | enumDecl | variantDecl | structDecl | listenerDecl);

importExpr: IMPORT STR_LITERAL SEMICOLON;
typePrefix: TYPE_PREFIX IDENTIFIER SEMICOLON;

documentation: (DOC_BEGIN (documentationBlock | documentationTag | documentationParam | documentationReturn)* DOC_END)+;
documentationBlock: (DOC_TEXT | documentationLink)+;
documentationTag:
        COMMERCIAL_TAG
        | INTERNAL_TAG
        | DEPRECATED_TAG
        | UNDOCUMENTED_TAG
        ;
documentationLink: LINK_TAG_BEGIN (Type=typeRef | Type=typeRef? NUM Member=IDENTIFIER (LPAREN parametersRef* RPAREN)?) LINK_TAG_END;
documentationParam: PARAM_TAG Member=IDENTIFIER Desc=documentationBlock;
documentationReturn: RETURN_TAG Desc=documentationBlock;

parametersRef: typeRef IDENTIFIER? (COMMA typeRef IDENTIFIER?)*;

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

parametersDecl: parameter (COMMA parameter)* COMMA?;
parameter: CONST? (Label=IDENTIFIER COLON)? Type=typeRef Name=IDENTIFIER;

propertyDecl: documentation? GEN? typeRef IDENTIFIER READONLY? SEMICOLON;
structFieldDecl: Doc=documentation? Type=typeRef Name=IDENTIFIER Based=basedProtoInternal? (ASSIGN Expr=expr)? SEMICOLON;

typeRef: OPTIONAL? GlobalNs=DOT? IDENTIFIER (DOT IDENTIFIER)* (LANGLE typeRef (COMMA typeRef)* RANGLE)?;

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
