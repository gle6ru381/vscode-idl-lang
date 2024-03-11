lexer grammar IdlLexer;

tokens {
    DOC_BEGIN,
    DOC_END,
    DOC_TEXT,
    DOC_INTERNAL,
    DOC_COMMERCIAL,
    DOC_DEPRECATED,
    DOC_UNDOCUMENTED
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
SPACE: ' ' -> skip;

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

mode SINGLE_LINE_DOC;
    SINGLE_END_COMMENT: [\r\n] -> popMode, type(DOC_END);
    SINGLE_COMMERCIAL: '@commercial' -> type(DOC_COMMERCIAL);
    SINGLE_INTERNAL: '@internal' -> type(DOC_INTERNAL);
    SINGLE_DEPRECATED: '@deprecated' -> type(DOC_DEPRECATED);
    SIGNLE_UNDOCUMENTED: '@undocumented' -> type(DOC_UNDOCUMENTED);
    SINGLE_TEXT: ~[@\r\n]+ -> type(DOC_TEXT);
    SIGNLE_SYMBOL: . -> type(DOC_TEXT);

mode MULTI_LINE_DOC;
    MULTI_END_COMMENT: '*/' -> popMode, type(DOC_END);
    MULTI_COMMERCIAL: '@commercial' -> type(DOC_COMMERCIAL);
    MULTI_INTERNAL: '@internal' -> type(DOC_INTERNAL);
    MULTI_DEPRECATED: '@deprecated' -> type(DOC_DEPRECATED);
    MULTI_UNDOCUMENTED: '@undocumented' -> type(DOC_UNDOCUMENTED);
    MULTI_TEXT: ~[@\r\n(*/)]+ -> type(DOC_TEXT);
    MULTI_SYMBOL: . -> type(DOC_TEXT);
