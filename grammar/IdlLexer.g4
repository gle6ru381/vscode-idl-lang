lexer grammar IdlLexer;

tokens {
    DOC_BEGIN,
    DOC_END,
    DOC_TEXT,
    COMMERCIAL_TAG,
    INTERNAL_TAG,
    DEPRECATED_TAG,
    COMMERCIAL_TAG,
    UNDOCUMENTED_TAG,
    LINK_TAG_BEGIN,
    LINK_TAG_END,
    PARAM_TAG,
    RETURN_TAG
}

LBRACE: '{';
RBRACE: '}';
LPAREN: '(';
RPAREN: ')';
COMMA: ',';
DOT: '.';
COLON: ':';
SEMICOLON: ';';
LANGLE: '<';
RANGLE: '>';
NUM: '#';

CPP: 'cpp';
JAVA: 'java';
KMP: 'kmp';
OBJC: 'objc';
SWIFT: 'swift';
DART: 'dart';
PROTOCONV: 'protoconv';

TYPE_PREFIX: 'type_prefix';
IMPORT: 'import';

CONST: 'const';
OPTIONAL: 'optional';

BG_THREAD: 'bg_thread';
ANY_THREAD: 'any_thread';

BASED_ON: 'based on';

SERIALIZABLE: 'serializable';

ENUM: 'enum';
BITFIELD: 'bitfield';

VARIANT: 'variant';

STRUCT: 'struct';
LITE: 'lite';
OPTIONS: 'options';
ABSTRACT: 'abstract';

INTERFACE: 'interface';
VIRTUAL: 'virtual';
VIEW_DELEGATE: 'view_delegate';
WEAK_REF: 'weak_ref';
SHARED_REF: 'shared_ref';
GEN: 'gen';
READONLY: 'readonly';
NATIVE: 'native';
STATIC: 'static';

LISTENER: 'listener';
LAMBDA: 'lambda';
STRONG_REF: 'strong_ref';
PLATFORM: 'platform';

ASSIGN: '=';
LSHIFT: '<<';
BINOR: '|';

INT_LITERAL: '-'?[0-9]+ | '0x'[0-9a-fA-F]+;
FLOAT_LITERAL: '-'?[0-9]+'.'[0-9]*'f' | [0-9]*'.'[0-9]+'f';
DOUBLE_LITERAL: '-'?[0-9]+'.'[0-9]* | [0-9]*'.'[0-9]+;
STR_LITERAL: '"' .*? ~[\\] '"';
BOOL_LITERAL: 'true' | 'false';

SINGLE_LINE_DOC_BEGIN: '//' -> pushMode(SINGLE_LINE_DOC), type(DOC_BEGIN);
MULTI_LINE_DOC_BEGIN: '/*' -> pushMode(MULTI_LINE_DOC), type(DOC_BEGIN);

NEWLINE: [\r\n]+ -> skip ;
SPACE: [ \t] -> skip;

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

mode SINGLE_LINE_DOC;
    SINGLE_END_COMMENT: [\r\n] -> popMode, type(DOC_END);
    SINGLE_COMMERCIAL: '@commercial' -> type(COMMERCIAL_TAG);
    SINGLE_INTERNAL: '@internal' -> type(INTERNAL_TAG);
    SINGLE_DEPRECATED: '@deprecated' -> type(DEPRECATED_TAG);
    SINGLE_UNDOCUMENTED: '@undocumented' -> type(UNDOCUMENTED_TAG);
    SINGLE_LINK: '{@link' -> type(LINK_TAG_BEGIN), pushMode(DOC_LINK);
    SINGLE_PARAM: '@param' -> type(PARAM_TAG), pushMode(DOC_PARAM);
    SINGLE_RETURN: '@return' -> type(RETURN_TAG);
    SINGLE_LBRACE: '{' -> type(LBRACE);
    SINGLE_RBRACE: '}' -> type(RBRACE);
    SINGLE_LPAREN: '(' -> type(LPAREN);
    SINGLE_RPAREN: ')' -> type(RPAREN);
    SINGLE_NUM: '#' -> type(NUM);
    SINGLE_TEXT: ~[\r\n({?@)]+ -> type(DOC_TEXT);
    SINGLE_IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]* -> type(IDENTIFIER);
    SIGNLE_SYMBOL: . -> type(DOC_TEXT);

mode MULTI_LINE_DOC;
    MULTI_END_COMMENT: '*/' -> popMode, type(DOC_END);
    MULTI_COMMERCIAL: '@commercial' -> type(COMMERCIAL_TAG);
    MULTI_INTERNAL: '@internal' -> type(INTERNAL_TAG);
    MULTI_DEPRECATED: '@deprecated' -> type(DEPRECATED_TAG);
    MULTI_UNDOCUMENTED: '@undocumented' -> type(UNDOCUMENTED_TAG);
    MULTI_LINK: '{@link' -> type(LINK_TAG_BEGIN), pushMode(DOC_LINK);
    MULTI_PARAM: '@param' -> type(PARAM_TAG), pushMode(DOC_PARAM);
    MULTI_RETURN: '@return' -> type(RETURN_TAG);
    MULTI_TEXT: ~[\r\n(*/|{?@)]+ -> type(DOC_TEXT);
    MULTI_SYMBOL: . -> type(DOC_TEXT);

mode DOC_LINK;
    LINK_CONST: 'const' -> type(CONST);
    LINK_OPTIONAL: 'optional' -> type(OPTIONAL);
    LINK_DOT: '.' -> type(DOT);
    LINK_NUM: '#' -> type(NUM);
    LINK_LPAREN: '(' -> type(LPAREN);
    LINK_RPAREN: ')' -> type(RPAREN);
    LINK_COMMA: ',' -> type(COMMA);
    LINK_END: '}' -> type(LINK_TAG_END), popMode;
    LINK_IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]* -> type(IDENTIFIER);
    LINK_SPACE: [ \t] -> skip;

mode DOC_PARAM;
    PARAM_IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]* -> type(IDENTIFIER), popMode;
