// Generated from ./grammar/IdlParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import IdlParserListener from "./IdlParserListener.js";
import IdlParserVisitor from "./IdlParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class IdlParser extends Parser {
	public static readonly DOC_BEGIN = 1;
	public static readonly DOC_END = 2;
	public static readonly DOC_TEXT = 3;
	public static readonly DOC_INTERNAL = 4;
	public static readonly DOC_COMMERCIAL = 5;
	public static readonly DOC_DEPRECATED = 6;
	public static readonly DOC_UNDOCUMENTED = 7;
	public static readonly LBRACE = 8;
	public static readonly RBRACE = 9;
	public static readonly LPAREN = 10;
	public static readonly RPAREN = 11;
	public static readonly COMMA = 12;
	public static readonly DOT = 13;
	public static readonly COLON = 14;
	public static readonly SEMICOLON = 15;
	public static readonly CPP = 16;
	public static readonly JAVA = 17;
	public static readonly KMP = 18;
	public static readonly OBJC = 19;
	public static readonly SWIFT = 20;
	public static readonly DART = 21;
	public static readonly PROTOCONV = 22;
	public static readonly TYPE_PREFIX = 23;
	public static readonly IMPORT = 24;
	public static readonly CONST = 25;
	public static readonly OPTIONAL = 26;
	public static readonly BG_THREAD = 27;
	public static readonly ANY_THREAD = 28;
	public static readonly VECTOR = 29;
	public static readonly DICTIONARY = 30;
	public static readonly TYPE_DICTIONARY = 31;
	public static readonly BASED_ON = 32;
	public static readonly SERIALIZABLE = 33;
	public static readonly ENUM = 34;
	public static readonly BITFIELD = 35;
	public static readonly VARIANT = 36;
	public static readonly STRUCT = 37;
	public static readonly LITE = 38;
	public static readonly OPTIONS = 39;
	public static readonly ABSTRACT = 40;
	public static readonly INTERFACE = 41;
	public static readonly VIRTUAL = 42;
	public static readonly VIEW_DELEGATE = 43;
	public static readonly WEAK_REF = 44;
	public static readonly SHARED_REF = 45;
	public static readonly GEN = 46;
	public static readonly READONLY = 47;
	public static readonly NATIVE = 48;
	public static readonly STATIC = 49;
	public static readonly LISTENER = 50;
	public static readonly LAMBDA = 51;
	public static readonly STRONG_REF = 52;
	public static readonly PLATFORM = 53;
	public static readonly ASSIGN = 54;
	public static readonly LSHIFT = 55;
	public static readonly BINOR = 56;
	public static readonly INT_LITERAL = 57;
	public static readonly FLOAT_LITERAL = 58;
	public static readonly DOUBLE_LITERAL = 59;
	public static readonly STR_LITERAL = 60;
	public static readonly BOOL_LITERAL = 61;
	public static readonly NEWLINE = 62;
	public static readonly SPACE = 63;
	public static readonly IDENTIFIER = 64;
	public static readonly SINGLE_COMMERCIAL = 65;
	public static readonly SINGLE_INTERNAL = 66;
	public static readonly SINGLE_DEPRECATED = 67;
	public static readonly SIGNLE_UNDOCUMENTED = 68;
	public static readonly MULTI_END_COMMENT = 69;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_programm = 0;
	public static readonly RULE_topDecl = 1;
	public static readonly RULE_importExpr = 2;
	public static readonly RULE_typePrefix = 3;
	public static readonly RULE_documentation = 4;
	public static readonly RULE_documentationTag = 5;
	public static readonly RULE_interfaceDecl = 6;
	public static readonly RULE_interfaceOwnership = 7;
	public static readonly RULE_enumDecl = 8;
	public static readonly RULE_enumFieldsDecl = 9;
	public static readonly RULE_enumField = 10;
	public static readonly RULE_variantDecl = 11;
	public static readonly RULE_structDecl = 12;
	public static readonly RULE_structKind = 13;
	public static readonly RULE_listenerDecl = 14;
	public static readonly RULE_functionDecl = 15;
	public static readonly RULE_parametersDecl = 16;
	public static readonly RULE_propertyDecl = 17;
	public static readonly RULE_structFieldDecl = 18;
	public static readonly RULE_typeRef = 19;
	public static readonly RULE_basedProtoTop = 20;
	public static readonly RULE_basedProtoInternal = 21;
	public static readonly RULE_sourceDecl = 22;
	public static readonly RULE_value = 23;
	public static readonly RULE_binExpr = 24;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "','", "'.'", 
                                                            "':'", "';'", 
                                                            "'cpp'", "'java'", 
                                                            "'kmp'", "'objc'", 
                                                            "'swift'", "'dart'", 
                                                            "'protoconv'", 
                                                            "'type_prefix'", 
                                                            "'import'", 
                                                            "'const'", "'optional'", 
                                                            "'bg_thread'", 
                                                            "'any_thread'", 
                                                            "'vector'", 
                                                            "'dictionary'", 
                                                            "'type_dictionary'", 
                                                            "'based on'", 
                                                            "'serializable'", 
                                                            "'enum'", "'bitfield'", 
                                                            "'variant'", 
                                                            "'struct'", 
                                                            "'lite'", "'options'", 
                                                            "'abstract'", 
                                                            "'interface'", 
                                                            "'virtual'", 
                                                            "'view_delegate'", 
                                                            "'weak_ref'", 
                                                            "'shared_ref'", 
                                                            "'gen'", "'readonly'", 
                                                            "'native'", 
                                                            "'static'", 
                                                            "'listener'", 
                                                            "'lambda'", 
                                                            "'strong_ref'", 
                                                            "'platform'", 
                                                            "'='", "'<<'", 
                                                            "'|'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "' '", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'*/'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "DOC_BEGIN", 
                                                             "DOC_END", 
                                                             "DOC_TEXT", 
                                                             "DOC_INTERNAL", 
                                                             "DOC_COMMERCIAL", 
                                                             "DOC_DEPRECATED", 
                                                             "DOC_UNDOCUMENTED", 
                                                             "LBRACE", "RBRACE", 
                                                             "LPAREN", "RPAREN", 
                                                             "COMMA", "DOT", 
                                                             "COLON", "SEMICOLON", 
                                                             "CPP", "JAVA", 
                                                             "KMP", "OBJC", 
                                                             "SWIFT", "DART", 
                                                             "PROTOCONV", 
                                                             "TYPE_PREFIX", 
                                                             "IMPORT", "CONST", 
                                                             "OPTIONAL", 
                                                             "BG_THREAD", 
                                                             "ANY_THREAD", 
                                                             "VECTOR", "DICTIONARY", 
                                                             "TYPE_DICTIONARY", 
                                                             "BASED_ON", 
                                                             "SERIALIZABLE", 
                                                             "ENUM", "BITFIELD", 
                                                             "VARIANT", 
                                                             "STRUCT", "LITE", 
                                                             "OPTIONS", 
                                                             "ABSTRACT", 
                                                             "INTERFACE", 
                                                             "VIRTUAL", 
                                                             "VIEW_DELEGATE", 
                                                             "WEAK_REF", 
                                                             "SHARED_REF", 
                                                             "GEN", "READONLY", 
                                                             "NATIVE", "STATIC", 
                                                             "LISTENER", 
                                                             "LAMBDA", "STRONG_REF", 
                                                             "PLATFORM", 
                                                             "ASSIGN", "LSHIFT", 
                                                             "BINOR", "INT_LITERAL", 
                                                             "FLOAT_LITERAL", 
                                                             "DOUBLE_LITERAL", 
                                                             "STR_LITERAL", 
                                                             "BOOL_LITERAL", 
                                                             "NEWLINE", 
                                                             "SPACE", "IDENTIFIER", 
                                                             "SINGLE_COMMERCIAL", 
                                                             "SINGLE_INTERNAL", 
                                                             "SINGLE_DEPRECATED", 
                                                             "SIGNLE_UNDOCUMENTED", 
                                                             "MULTI_END_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programm", "topDecl", "importExpr", "typePrefix", "documentation", "documentationTag", 
		"interfaceDecl", "interfaceOwnership", "enumDecl", "enumFieldsDecl", "enumField", 
		"variantDecl", "structDecl", "structKind", "listenerDecl", "functionDecl", 
		"parametersDecl", "propertyDecl", "structFieldDecl", "typeRef", "basedProtoTop", 
		"basedProtoInternal", "sourceDecl", "value", "binExpr",
	];
	public get grammarFileName(): string { return "IdlParser.g4"; }
	public get literalNames(): (string | null)[] { return IdlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return IdlParser.symbolicNames; }
	public get ruleNames(): string[] { return IdlParser.ruleNames; }
	public get serializedATN(): number[] { return IdlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, IdlParser._ATN, IdlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public programm(): ProgrammContext {
		let localctx: ProgrammContext = new ProgrammContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, IdlParser.RULE_programm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 50;
				this.typePrefix();
				}
			}

			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===24) {
				{
				{
				this.state = 53;
				this.importExpr();
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===16 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 761855) !== 0)) {
				{
				{
				this.state = 59;
				this.topDecl();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public topDecl(): TopDeclContext {
		let localctx: TopDeclContext = new TopDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, IdlParser.RULE_topDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 65;
				this.documentation();
				}
			}

			this.state = 73;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 68;
				this.interfaceDecl();
				}
				break;
			case 2:
				{
				this.state = 69;
				this.enumDecl();
				}
				break;
			case 3:
				{
				this.state = 70;
				this.variantDecl();
				}
				break;
			case 4:
				{
				this.state = 71;
				this.structDecl();
				}
				break;
			case 5:
				{
				this.state = 72;
				this.listenerDecl();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importExpr(): ImportExprContext {
		let localctx: ImportExprContext = new ImportExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, IdlParser.RULE_importExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 75;
			this.match(IdlParser.IMPORT);
			this.state = 76;
			this.match(IdlParser.STR_LITERAL);
			this.state = 77;
			this.match(IdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typePrefix(): TypePrefixContext {
		let localctx: TypePrefixContext = new TypePrefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, IdlParser.RULE_typePrefix);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(IdlParser.TYPE_PREFIX);
			this.state = 80;
			this.match(IdlParser.IDENTIFIER);
			this.state = 81;
			this.match(IdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public documentation(): DocumentationContext {
		let localctx: DocumentationContext = new DocumentationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, IdlParser.RULE_documentation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this.match(IdlParser.DOC_BEGIN);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 248) !== 0)) {
				{
				this.state = 86;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
					{
					this.state = 84;
					this.match(IdlParser.DOC_TEXT);
					}
					break;
				case 4:
				case 5:
				case 6:
				case 7:
					{
					this.state = 85;
					this.documentationTag();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 91;
			this.match(IdlParser.DOC_END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public documentationTag(): DocumentationTagContext {
		let localctx: DocumentationTagContext = new DocumentationTagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, IdlParser.RULE_documentationTag);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 93;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 240) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceDecl(): InterfaceDeclContext {
		let localctx: InterfaceDeclContext = new InterfaceDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, IdlParser.RULE_interfaceDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 41:
			case 42:
			case 43:
			case 44:
			case 45:
			case 49:
				{
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===49) {
					{
					this.state = 95;
					this.match(IdlParser.STATIC);
					}
				}

				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 98;
					this.match(IdlParser.VIRTUAL);
					}
				}

				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===43) {
					{
					this.state = 101;
					this.match(IdlParser.VIEW_DELEGATE);
					}
				}

				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===44 || _la===45) {
					{
					this.state = 104;
					this.interfaceOwnership();
					}
				}

				this.state = 107;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 48:
				{
				this.state = 108;
				this.match(IdlParser.NATIVE);
				this.state = 109;
				this.match(IdlParser.LISTENER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 112;
			this.match(IdlParser.IDENTIFIER);
			this.state = 113;
			this.match(IdlParser.LBRACE);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 100737026) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2148270079) !== 0)) {
				{
				this.state = 117;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 114;
					this.functionDecl();
					}
					break;
				case 2:
					{
					this.state = 115;
					this.propertyDecl();
					}
					break;
				case 3:
					{
					this.state = 116;
					this.topDecl();
					}
					break;
				}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 122;
			this.match(IdlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public interfaceOwnership(): InterfaceOwnershipContext {
		let localctx: InterfaceOwnershipContext = new InterfaceOwnershipContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, IdlParser.RULE_interfaceOwnership);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 124;
			_la = this._input.LA(1);
			if(!(_la===44 || _la===45)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumDecl(): EnumDeclContext {
		let localctx: EnumDeclContext = new EnumDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, IdlParser.RULE_enumDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 126;
				this.sourceDecl();
				}
			}

			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35) {
				{
				this.state = 129;
				this.match(IdlParser.BITFIELD);
				}
			}

			this.state = 132;
			this.match(IdlParser.ENUM);
			this.state = 133;
			this.match(IdlParser.IDENTIFIER);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 134;
				this.basedProtoTop();
				}
			}

			this.state = 137;
			this.match(IdlParser.LBRACE);
			this.state = 138;
			this.enumFieldsDecl();
			this.state = 139;
			this.match(IdlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumFieldsDecl(): EnumFieldsDeclContext {
		let localctx: EnumFieldsDeclContext = new EnumFieldsDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, IdlParser.RULE_enumFieldsDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 141;
			this.enumField();
			this.state = 146;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 142;
					this.match(IdlParser.COMMA);
					this.state = 143;
					this.enumField();
					}
					}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 149;
				this.match(IdlParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enumField(): EnumFieldContext {
		let localctx: EnumFieldContext = new EnumFieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, IdlParser.RULE_enumField);
		let _la: number;
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 152;
				this.match(IdlParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 153;
				this.match(IdlParser.IDENTIFIER);
				this.state = 154;
				this.match(IdlParser.ASSIGN);
				this.state = 155;
				this.match(IdlParser.INT_LITERAL);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===55) {
					{
					this.state = 156;
					this.match(IdlParser.LSHIFT);
					this.state = 157;
					this.match(IdlParser.INT_LITERAL);
					}
				}

				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variantDecl(): VariantDeclContext {
		let localctx: VariantDeclContext = new VariantDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, IdlParser.RULE_variantDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 162;
				this.sourceDecl();
				}
			}

			this.state = 165;
			this.match(IdlParser.VARIANT);
			this.state = 166;
			this.match(IdlParser.IDENTIFIER);
			this.state = 167;
			this.match(IdlParser.LBRACE);
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13 || _la===26 || _la===64) {
				{
				{
				this.state = 168;
				this.structFieldDecl();
				}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 174;
			this.match(IdlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structDecl(): StructDeclContext {
		let localctx: StructDeclContext = new StructDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, IdlParser.RULE_structDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 176;
				this.sourceDecl();
				}
			}

			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 179;
				this.match(IdlParser.ABSTRACT);
				}
			}

			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 182;
				this.match(IdlParser.SERIALIZABLE);
				}
			}

			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38 || _la===39) {
				{
				this.state = 185;
				this.structKind();
				}
			}

			this.state = 188;
			this.match(IdlParser.STRUCT);
			this.state = 189;
			this.match(IdlParser.IDENTIFIER);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 190;
				this.basedProtoTop();
				}
			}

			this.state = 193;
			this.match(IdlParser.LBRACE);
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13 || _la===26 || _la===64) {
				{
				{
				this.state = 194;
				this.structFieldDecl();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 200;
			this.match(IdlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structKind(): StructKindContext {
		let localctx: StructKindContext = new StructKindContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, IdlParser.RULE_structKind);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			_la = this._input.LA(1);
			if(!(_la===38 || _la===39)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public listenerDecl(): ListenerDeclContext {
		let localctx: ListenerDeclContext = new ListenerDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, IdlParser.RULE_listenerDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 52:
				{
				this.state = 204;
				this.match(IdlParser.STRONG_REF);
				this.state = 205;
				this.match(IdlParser.PLATFORM);
				this.state = 206;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 50:
				{
				this.state = 207;
				this.match(IdlParser.LISTENER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 210;
			this.match(IdlParser.IDENTIFIER);
			this.state = 211;
			this.match(IdlParser.LBRACE);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 73730) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2148245503) !== 0)) {
				{
				this.state = 214;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 64:
					{
					this.state = 212;
					this.functionDecl();
					}
					break;
				case 1:
				case 16:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 38:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 44:
				case 45:
				case 48:
				case 49:
				case 50:
				case 52:
					{
					this.state = 213;
					this.topDecl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 219;
			this.match(IdlParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDecl(): FunctionDeclContext {
		let localctx: FunctionDeclContext = new FunctionDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, IdlParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
			this.typeRef();
			this.state = 222;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 223;
			this.match(IdlParser.LPAREN);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13 || _la===25 || _la===64) {
				{
				this.state = 224;
				this.parametersDecl();
				}
			}

			this.state = 227;
			this.match(IdlParser.RPAREN);
			this.state = 228;
			this.match(IdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parametersDecl(): ParametersDeclContext {
		let localctx: ParametersDeclContext = new ParametersDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, IdlParser.RULE_parametersDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 230;
				this.match(IdlParser.CONST);
				}
			}

			this.state = 233;
			this.typeRef();
			this.state = 234;
			this.match(IdlParser.IDENTIFIER);
			this.state = 244;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 235;
					this.match(IdlParser.COMMA);
					this.state = 237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===25) {
						{
						this.state = 236;
						this.match(IdlParser.CONST);
						}
					}

					this.state = 239;
					this.typeRef();
					this.state = 240;
					this.match(IdlParser.IDENTIFIER);
					}
					}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 247;
				this.match(IdlParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyDecl(): PropertyDeclContext {
		let localctx: PropertyDeclContext = new PropertyDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, IdlParser.RULE_propertyDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 250;
				this.match(IdlParser.GEN);
				}
			}

			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 253;
				this.match(IdlParser.CONST);
				}
			}

			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===47) {
				{
				this.state = 256;
				this.match(IdlParser.READONLY);
				}
			}

			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 259;
				this.match(IdlParser.OPTIONAL);
				}
			}

			this.state = 262;
			this.typeRef();
			this.state = 263;
			this.match(IdlParser.IDENTIFIER);
			this.state = 264;
			this.match(IdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public structFieldDecl(): StructFieldDeclContext {
		let localctx: StructFieldDeclContext = new StructFieldDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, IdlParser.RULE_structFieldDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 266;
				this.match(IdlParser.OPTIONAL);
				}
			}

			this.state = 269;
			this.typeRef();
			this.state = 270;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 271;
				this.basedProtoInternal();
				}
			}

			this.state = 274;
			this.match(IdlParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeRef(): TypeRefContext {
		let localctx: TypeRefContext = new TypeRefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, IdlParser.RULE_typeRef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 276;
				localctx._GlobalNs = this.match(IdlParser.DOT);
				}
			}

			this.state = 279;
			this.match(IdlParser.IDENTIFIER);
			this.state = 284;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 280;
				this.match(IdlParser.DOT);
				this.state = 281;
				this.match(IdlParser.IDENTIFIER);
				}
				}
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basedProtoTop(): BasedProtoTopContext {
		let localctx: BasedProtoTopContext = new BasedProtoTopContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, IdlParser.RULE_basedProtoTop);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 287;
			this.match(IdlParser.BASED_ON);
			this.state = 288;
			this.match(IdlParser.STR_LITERAL);
			this.state = 289;
			this.match(IdlParser.COLON);
			this.state = 290;
			this.typeRef();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public basedProtoInternal(): BasedProtoInternalContext {
		let localctx: BasedProtoInternalContext = new BasedProtoInternalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, IdlParser.RULE_basedProtoInternal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 292;
			this.match(IdlParser.BASED_ON);
			this.state = 293;
			this.match(IdlParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceDecl(): SourceDeclContext {
		let localctx: SourceDeclContext = new SourceDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, IdlParser.RULE_sourceDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 295;
			this.match(IdlParser.CPP);
			this.state = 296;
			this.match(IdlParser.STR_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, IdlParser.RULE_value);
		try {
			this.state = 303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 298;
				this.match(IdlParser.INT_LITERAL);
				}
				break;
			case 60:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 299;
				this.match(IdlParser.STR_LITERAL);
				}
				break;
			case 58:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 300;
				this.match(IdlParser.FLOAT_LITERAL);
				}
				break;
			case 59:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 301;
				this.match(IdlParser.DOUBLE_LITERAL);
				}
				break;
			case 13:
			case 64:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 302;
				this.typeRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public binExpr(): BinExprContext {
		let localctx: BinExprContext = new BinExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, IdlParser.RULE_binExpr);
		try {
			this.state = 317;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 305;
				this.value();
				this.state = 306;
				this.match(IdlParser.BINOR);
				this.state = 307;
				this.value();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 309;
				this.value();
				this.state = 310;
				this.match(IdlParser.LSHIFT);
				this.state = 311;
				this.value();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 313;
				this.value();
				this.state = 314;
				this.match(IdlParser.ASSIGN);
				this.state = 315;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,69,320,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,1,0,3,0,52,8,0,1,0,5,0,55,8,0,10,0,12,0,58,9,0,1,0,5,0,61,8,0,10,0,12,
	0,64,9,0,1,1,3,1,67,8,1,1,1,1,1,1,1,1,1,1,1,3,1,74,8,1,1,2,1,2,1,2,1,2,
	1,3,1,3,1,3,1,3,1,4,1,4,1,4,5,4,87,8,4,10,4,12,4,90,9,4,1,4,1,4,1,5,1,5,
	1,6,3,6,97,8,6,1,6,3,6,100,8,6,1,6,3,6,103,8,6,1,6,3,6,106,8,6,1,6,1,6,
	1,6,3,6,111,8,6,1,6,1,6,1,6,1,6,1,6,5,6,118,8,6,10,6,12,6,121,9,6,1,6,1,
	6,1,7,1,7,1,8,3,8,128,8,8,1,8,3,8,131,8,8,1,8,1,8,1,8,3,8,136,8,8,1,8,1,
	8,1,8,1,8,1,9,1,9,1,9,5,9,145,8,9,10,9,12,9,148,9,9,1,9,3,9,151,8,9,1,10,
	1,10,1,10,1,10,1,10,1,10,3,10,159,8,10,3,10,161,8,10,1,11,3,11,164,8,11,
	1,11,1,11,1,11,1,11,5,11,170,8,11,10,11,12,11,173,9,11,1,11,1,11,1,12,3,
	12,178,8,12,1,12,3,12,181,8,12,1,12,3,12,184,8,12,1,12,3,12,187,8,12,1,
	12,1,12,1,12,3,12,192,8,12,1,12,1,12,5,12,196,8,12,10,12,12,12,199,9,12,
	1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,3,14,209,8,14,1,14,1,14,1,14,1,
	14,5,14,215,8,14,10,14,12,14,218,9,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,
	226,8,15,1,15,1,15,1,15,1,16,3,16,232,8,16,1,16,1,16,1,16,1,16,3,16,238,
	8,16,1,16,1,16,1,16,5,16,243,8,16,10,16,12,16,246,9,16,1,16,3,16,249,8,
	16,1,17,3,17,252,8,17,1,17,3,17,255,8,17,1,17,3,17,258,8,17,1,17,3,17,261,
	8,17,1,17,1,17,1,17,1,17,1,18,3,18,268,8,18,1,18,1,18,1,18,3,18,273,8,18,
	1,18,1,18,1,19,3,19,278,8,19,1,19,1,19,1,19,5,19,283,8,19,10,19,12,19,286,
	9,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,
	23,1,23,1,23,3,23,304,8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,24,1,24,1,24,3,24,318,8,24,1,24,0,0,25,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,0,3,1,0,4,7,1,0,44,45,1,0,38,39,
	349,0,51,1,0,0,0,2,66,1,0,0,0,4,75,1,0,0,0,6,79,1,0,0,0,8,83,1,0,0,0,10,
	93,1,0,0,0,12,110,1,0,0,0,14,124,1,0,0,0,16,127,1,0,0,0,18,141,1,0,0,0,
	20,160,1,0,0,0,22,163,1,0,0,0,24,177,1,0,0,0,26,202,1,0,0,0,28,208,1,0,
	0,0,30,221,1,0,0,0,32,231,1,0,0,0,34,251,1,0,0,0,36,267,1,0,0,0,38,277,
	1,0,0,0,40,287,1,0,0,0,42,292,1,0,0,0,44,295,1,0,0,0,46,303,1,0,0,0,48,
	317,1,0,0,0,50,52,3,6,3,0,51,50,1,0,0,0,51,52,1,0,0,0,52,56,1,0,0,0,53,
	55,3,4,2,0,54,53,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,62,
	1,0,0,0,58,56,1,0,0,0,59,61,3,2,1,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,
	0,0,0,62,63,1,0,0,0,63,1,1,0,0,0,64,62,1,0,0,0,65,67,3,8,4,0,66,65,1,0,
	0,0,66,67,1,0,0,0,67,73,1,0,0,0,68,74,3,12,6,0,69,74,3,16,8,0,70,74,3,22,
	11,0,71,74,3,24,12,0,72,74,3,28,14,0,73,68,1,0,0,0,73,69,1,0,0,0,73,70,
	1,0,0,0,73,71,1,0,0,0,73,72,1,0,0,0,74,3,1,0,0,0,75,76,5,24,0,0,76,77,5,
	60,0,0,77,78,5,15,0,0,78,5,1,0,0,0,79,80,5,23,0,0,80,81,5,64,0,0,81,82,
	5,15,0,0,82,7,1,0,0,0,83,88,5,1,0,0,84,87,5,3,0,0,85,87,3,10,5,0,86,84,
	1,0,0,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,91,1,
	0,0,0,90,88,1,0,0,0,91,92,5,2,0,0,92,9,1,0,0,0,93,94,7,0,0,0,94,11,1,0,
	0,0,95,97,5,49,0,0,96,95,1,0,0,0,96,97,1,0,0,0,97,99,1,0,0,0,98,100,5,42,
	0,0,99,98,1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,103,5,43,0,0,102,101,
	1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,0,104,106,3,14,7,0,105,104,1,0,0,
	0,105,106,1,0,0,0,106,107,1,0,0,0,107,111,5,41,0,0,108,109,5,48,0,0,109,
	111,5,50,0,0,110,96,1,0,0,0,110,108,1,0,0,0,111,112,1,0,0,0,112,113,5,64,
	0,0,113,119,5,8,0,0,114,118,3,30,15,0,115,118,3,34,17,0,116,118,3,2,1,0,
	117,114,1,0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,121,1,0,0,0,119,117,
	1,0,0,0,119,120,1,0,0,0,120,122,1,0,0,0,121,119,1,0,0,0,122,123,5,9,0,0,
	123,13,1,0,0,0,124,125,7,1,0,0,125,15,1,0,0,0,126,128,3,44,22,0,127,126,
	1,0,0,0,127,128,1,0,0,0,128,130,1,0,0,0,129,131,5,35,0,0,130,129,1,0,0,
	0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,34,0,0,133,135,5,64,0,0,134,
	136,3,40,20,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,5,
	8,0,0,138,139,3,18,9,0,139,140,5,9,0,0,140,17,1,0,0,0,141,146,3,20,10,0,
	142,143,5,12,0,0,143,145,3,20,10,0,144,142,1,0,0,0,145,148,1,0,0,0,146,
	144,1,0,0,0,146,147,1,0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,149,151,5,12,
	0,0,150,149,1,0,0,0,150,151,1,0,0,0,151,19,1,0,0,0,152,161,5,64,0,0,153,
	154,5,64,0,0,154,155,5,54,0,0,155,158,5,57,0,0,156,157,5,55,0,0,157,159,
	5,57,0,0,158,156,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,160,152,1,0,0,
	0,160,153,1,0,0,0,161,21,1,0,0,0,162,164,3,44,22,0,163,162,1,0,0,0,163,
	164,1,0,0,0,164,165,1,0,0,0,165,166,5,36,0,0,166,167,5,64,0,0,167,171,5,
	8,0,0,168,170,3,36,18,0,169,168,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,
	171,172,1,0,0,0,172,174,1,0,0,0,173,171,1,0,0,0,174,175,5,9,0,0,175,23,
	1,0,0,0,176,178,3,44,22,0,177,176,1,0,0,0,177,178,1,0,0,0,178,180,1,0,0,
	0,179,181,5,40,0,0,180,179,1,0,0,0,180,181,1,0,0,0,181,183,1,0,0,0,182,
	184,5,33,0,0,183,182,1,0,0,0,183,184,1,0,0,0,184,186,1,0,0,0,185,187,3,
	26,13,0,186,185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,189,5,37,0,
	0,189,191,5,64,0,0,190,192,3,40,20,0,191,190,1,0,0,0,191,192,1,0,0,0,192,
	193,1,0,0,0,193,197,5,8,0,0,194,196,3,36,18,0,195,194,1,0,0,0,196,199,1,
	0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,200,1,0,0,0,199,197,1,0,0,0,200,
	201,5,9,0,0,201,25,1,0,0,0,202,203,7,2,0,0,203,27,1,0,0,0,204,205,5,52,
	0,0,205,206,5,53,0,0,206,209,5,41,0,0,207,209,5,50,0,0,208,204,1,0,0,0,
	208,207,1,0,0,0,209,210,1,0,0,0,210,211,5,64,0,0,211,216,5,8,0,0,212,215,
	3,30,15,0,213,215,3,2,1,0,214,212,1,0,0,0,214,213,1,0,0,0,215,218,1,0,0,
	0,216,214,1,0,0,0,216,217,1,0,0,0,217,219,1,0,0,0,218,216,1,0,0,0,219,220,
	5,9,0,0,220,29,1,0,0,0,221,222,3,38,19,0,222,223,5,64,0,0,223,225,5,10,
	0,0,224,226,3,32,16,0,225,224,1,0,0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,
	228,5,11,0,0,228,229,5,15,0,0,229,31,1,0,0,0,230,232,5,25,0,0,231,230,1,
	0,0,0,231,232,1,0,0,0,232,233,1,0,0,0,233,234,3,38,19,0,234,244,5,64,0,
	0,235,237,5,12,0,0,236,238,5,25,0,0,237,236,1,0,0,0,237,238,1,0,0,0,238,
	239,1,0,0,0,239,240,3,38,19,0,240,241,5,64,0,0,241,243,1,0,0,0,242,235,
	1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,248,1,0,0,0,
	246,244,1,0,0,0,247,249,5,12,0,0,248,247,1,0,0,0,248,249,1,0,0,0,249,33,
	1,0,0,0,250,252,5,46,0,0,251,250,1,0,0,0,251,252,1,0,0,0,252,254,1,0,0,
	0,253,255,5,25,0,0,254,253,1,0,0,0,254,255,1,0,0,0,255,257,1,0,0,0,256,
	258,5,47,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,260,1,0,0,0,259,261,5,
	26,0,0,260,259,1,0,0,0,260,261,1,0,0,0,261,262,1,0,0,0,262,263,3,38,19,
	0,263,264,5,64,0,0,264,265,5,15,0,0,265,35,1,0,0,0,266,268,5,26,0,0,267,
	266,1,0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,270,3,38,19,0,270,272,5,
	64,0,0,271,273,3,42,21,0,272,271,1,0,0,0,272,273,1,0,0,0,273,274,1,0,0,
	0,274,275,5,15,0,0,275,37,1,0,0,0,276,278,5,13,0,0,277,276,1,0,0,0,277,
	278,1,0,0,0,278,279,1,0,0,0,279,284,5,64,0,0,280,281,5,13,0,0,281,283,5,
	64,0,0,282,280,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,
	285,39,1,0,0,0,286,284,1,0,0,0,287,288,5,32,0,0,288,289,5,60,0,0,289,290,
	5,14,0,0,290,291,3,38,19,0,291,41,1,0,0,0,292,293,5,32,0,0,293,294,5,64,
	0,0,294,43,1,0,0,0,295,296,5,16,0,0,296,297,5,60,0,0,297,45,1,0,0,0,298,
	304,5,57,0,0,299,304,5,60,0,0,300,304,5,58,0,0,301,304,5,59,0,0,302,304,
	3,38,19,0,303,298,1,0,0,0,303,299,1,0,0,0,303,300,1,0,0,0,303,301,1,0,0,
	0,303,302,1,0,0,0,304,47,1,0,0,0,305,306,3,46,23,0,306,307,5,56,0,0,307,
	308,3,46,23,0,308,318,1,0,0,0,309,310,3,46,23,0,310,311,5,55,0,0,311,312,
	3,46,23,0,312,318,1,0,0,0,313,314,3,46,23,0,314,315,5,54,0,0,315,316,3,
	46,23,0,316,318,1,0,0,0,317,305,1,0,0,0,317,309,1,0,0,0,317,313,1,0,0,0,
	318,49,1,0,0,0,47,51,56,62,66,73,86,88,96,99,102,105,110,117,119,127,130,
	135,146,150,158,160,163,171,177,180,183,186,191,197,208,214,216,225,231,
	237,244,248,251,254,257,260,267,272,277,284,303,317];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!IdlParser.__ATN) {
			IdlParser.__ATN = new ATNDeserializer().deserialize(IdlParser._serializedATN);
		}

		return IdlParser.__ATN;
	}


	static DecisionsToDFA = IdlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgrammContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typePrefix(): TypePrefixContext {
		return this.getTypedRuleContext(TypePrefixContext, 0) as TypePrefixContext;
	}
	public importExpr_list(): ImportExprContext[] {
		return this.getTypedRuleContexts(ImportExprContext) as ImportExprContext[];
	}
	public importExpr(i: number): ImportExprContext {
		return this.getTypedRuleContext(ImportExprContext, i) as ImportExprContext;
	}
	public topDecl_list(): TopDeclContext[] {
		return this.getTypedRuleContexts(TopDeclContext) as TopDeclContext[];
	}
	public topDecl(i: number): TopDeclContext {
		return this.getTypedRuleContext(TopDeclContext, i) as TopDeclContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_programm;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterProgramm) {
	 		listener.enterProgramm(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitProgramm) {
	 		listener.exitProgramm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitProgramm) {
			return visitor.visitProgramm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public interfaceDecl(): InterfaceDeclContext {
		return this.getTypedRuleContext(InterfaceDeclContext, 0) as InterfaceDeclContext;
	}
	public enumDecl(): EnumDeclContext {
		return this.getTypedRuleContext(EnumDeclContext, 0) as EnumDeclContext;
	}
	public variantDecl(): VariantDeclContext {
		return this.getTypedRuleContext(VariantDeclContext, 0) as VariantDeclContext;
	}
	public structDecl(): StructDeclContext {
		return this.getTypedRuleContext(StructDeclContext, 0) as StructDeclContext;
	}
	public listenerDecl(): ListenerDeclContext {
		return this.getTypedRuleContext(ListenerDeclContext, 0) as ListenerDeclContext;
	}
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_topDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterTopDecl) {
	 		listener.enterTopDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitTopDecl) {
	 		listener.exitTopDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitTopDecl) {
			return visitor.visitTopDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportExprContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(IdlParser.IMPORT, 0);
	}
	public STR_LITERAL(): TerminalNode {
		return this.getToken(IdlParser.STR_LITERAL, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(IdlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_importExpr;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterImportExpr) {
	 		listener.enterImportExpr(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitImportExpr) {
	 		listener.exitImportExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitImportExpr) {
			return visitor.visitImportExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePrefixContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE_PREFIX(): TerminalNode {
		return this.getToken(IdlParser.TYPE_PREFIX, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(IdlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_typePrefix;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterTypePrefix) {
	 		listener.enterTypePrefix(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitTypePrefix) {
	 		listener.exitTypePrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitTypePrefix) {
			return visitor.visitTypePrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocumentationContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOC_BEGIN(): TerminalNode {
		return this.getToken(IdlParser.DOC_BEGIN, 0);
	}
	public DOC_END(): TerminalNode {
		return this.getToken(IdlParser.DOC_END, 0);
	}
	public DOC_TEXT_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.DOC_TEXT);
	}
	public DOC_TEXT(i: number): TerminalNode {
		return this.getToken(IdlParser.DOC_TEXT, i);
	}
	public documentationTag_list(): DocumentationTagContext[] {
		return this.getTypedRuleContexts(DocumentationTagContext) as DocumentationTagContext[];
	}
	public documentationTag(i: number): DocumentationTagContext {
		return this.getTypedRuleContext(DocumentationTagContext, i) as DocumentationTagContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_documentation;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterDocumentation) {
	 		listener.enterDocumentation(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitDocumentation) {
	 		listener.exitDocumentation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitDocumentation) {
			return visitor.visitDocumentation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocumentationTagContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOC_COMMERCIAL(): TerminalNode {
		return this.getToken(IdlParser.DOC_COMMERCIAL, 0);
	}
	public DOC_INTERNAL(): TerminalNode {
		return this.getToken(IdlParser.DOC_INTERNAL, 0);
	}
	public DOC_DEPRECATED(): TerminalNode {
		return this.getToken(IdlParser.DOC_DEPRECATED, 0);
	}
	public DOC_UNDOCUMENTED(): TerminalNode {
		return this.getToken(IdlParser.DOC_UNDOCUMENTED, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_documentationTag;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterDocumentationTag) {
	 		listener.enterDocumentationTag(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitDocumentationTag) {
	 		listener.exitDocumentationTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitDocumentationTag) {
			return visitor.visitDocumentationTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(IdlParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(IdlParser.RBRACE, 0);
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(IdlParser.INTERFACE, 0);
	}
	public NATIVE(): TerminalNode {
		return this.getToken(IdlParser.NATIVE, 0);
	}
	public LISTENER(): TerminalNode {
		return this.getToken(IdlParser.LISTENER, 0);
	}
	public functionDecl_list(): FunctionDeclContext[] {
		return this.getTypedRuleContexts(FunctionDeclContext) as FunctionDeclContext[];
	}
	public functionDecl(i: number): FunctionDeclContext {
		return this.getTypedRuleContext(FunctionDeclContext, i) as FunctionDeclContext;
	}
	public propertyDecl_list(): PropertyDeclContext[] {
		return this.getTypedRuleContexts(PropertyDeclContext) as PropertyDeclContext[];
	}
	public propertyDecl(i: number): PropertyDeclContext {
		return this.getTypedRuleContext(PropertyDeclContext, i) as PropertyDeclContext;
	}
	public topDecl_list(): TopDeclContext[] {
		return this.getTypedRuleContexts(TopDeclContext) as TopDeclContext[];
	}
	public topDecl(i: number): TopDeclContext {
		return this.getTypedRuleContext(TopDeclContext, i) as TopDeclContext;
	}
	public STATIC(): TerminalNode {
		return this.getToken(IdlParser.STATIC, 0);
	}
	public VIRTUAL(): TerminalNode {
		return this.getToken(IdlParser.VIRTUAL, 0);
	}
	public VIEW_DELEGATE(): TerminalNode {
		return this.getToken(IdlParser.VIEW_DELEGATE, 0);
	}
	public interfaceOwnership(): InterfaceOwnershipContext {
		return this.getTypedRuleContext(InterfaceOwnershipContext, 0) as InterfaceOwnershipContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_interfaceDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterInterfaceDecl) {
	 		listener.enterInterfaceDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitInterfaceDecl) {
	 		listener.exitInterfaceDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDecl) {
			return visitor.visitInterfaceDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceOwnershipContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHARED_REF(): TerminalNode {
		return this.getToken(IdlParser.SHARED_REF, 0);
	}
	public WEAK_REF(): TerminalNode {
		return this.getToken(IdlParser.WEAK_REF, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_interfaceOwnership;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterInterfaceOwnership) {
	 		listener.enterInterfaceOwnership(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitInterfaceOwnership) {
	 		listener.exitInterfaceOwnership(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitInterfaceOwnership) {
			return visitor.visitInterfaceOwnership(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(IdlParser.ENUM, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(IdlParser.LBRACE, 0);
	}
	public enumFieldsDecl(): EnumFieldsDeclContext {
		return this.getTypedRuleContext(EnumFieldsDeclContext, 0) as EnumFieldsDeclContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(IdlParser.RBRACE, 0);
	}
	public sourceDecl(): SourceDeclContext {
		return this.getTypedRuleContext(SourceDeclContext, 0) as SourceDeclContext;
	}
	public BITFIELD(): TerminalNode {
		return this.getToken(IdlParser.BITFIELD, 0);
	}
	public basedProtoTop(): BasedProtoTopContext {
		return this.getTypedRuleContext(BasedProtoTopContext, 0) as BasedProtoTopContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_enumDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterEnumDecl) {
	 		listener.enterEnumDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitEnumDecl) {
	 		listener.exitEnumDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitEnumDecl) {
			return visitor.visitEnumDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumFieldsDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumField_list(): EnumFieldContext[] {
		return this.getTypedRuleContexts(EnumFieldContext) as EnumFieldContext[];
	}
	public enumField(i: number): EnumFieldContext {
		return this.getTypedRuleContext(EnumFieldContext, i) as EnumFieldContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(IdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_enumFieldsDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterEnumFieldsDecl) {
	 		listener.enterEnumFieldsDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitEnumFieldsDecl) {
	 		listener.exitEnumFieldsDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitEnumFieldsDecl) {
			return visitor.visitEnumFieldsDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumFieldContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(IdlParser.ASSIGN, 0);
	}
	public INT_LITERAL_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.INT_LITERAL);
	}
	public INT_LITERAL(i: number): TerminalNode {
		return this.getToken(IdlParser.INT_LITERAL, i);
	}
	public LSHIFT(): TerminalNode {
		return this.getToken(IdlParser.LSHIFT, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_enumField;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterEnumField) {
	 		listener.enterEnumField(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitEnumField) {
	 		listener.exitEnumField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitEnumField) {
			return visitor.visitEnumField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariantDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIANT(): TerminalNode {
		return this.getToken(IdlParser.VARIANT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(IdlParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(IdlParser.RBRACE, 0);
	}
	public sourceDecl(): SourceDeclContext {
		return this.getTypedRuleContext(SourceDeclContext, 0) as SourceDeclContext;
	}
	public structFieldDecl_list(): StructFieldDeclContext[] {
		return this.getTypedRuleContexts(StructFieldDeclContext) as StructFieldDeclContext[];
	}
	public structFieldDecl(i: number): StructFieldDeclContext {
		return this.getTypedRuleContext(StructFieldDeclContext, i) as StructFieldDeclContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_variantDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterVariantDecl) {
	 		listener.enterVariantDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitVariantDecl) {
	 		listener.exitVariantDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitVariantDecl) {
			return visitor.visitVariantDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRUCT(): TerminalNode {
		return this.getToken(IdlParser.STRUCT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(IdlParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(IdlParser.RBRACE, 0);
	}
	public sourceDecl(): SourceDeclContext {
		return this.getTypedRuleContext(SourceDeclContext, 0) as SourceDeclContext;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(IdlParser.ABSTRACT, 0);
	}
	public SERIALIZABLE(): TerminalNode {
		return this.getToken(IdlParser.SERIALIZABLE, 0);
	}
	public structKind(): StructKindContext {
		return this.getTypedRuleContext(StructKindContext, 0) as StructKindContext;
	}
	public basedProtoTop(): BasedProtoTopContext {
		return this.getTypedRuleContext(BasedProtoTopContext, 0) as BasedProtoTopContext;
	}
	public structFieldDecl_list(): StructFieldDeclContext[] {
		return this.getTypedRuleContexts(StructFieldDeclContext) as StructFieldDeclContext[];
	}
	public structFieldDecl(i: number): StructFieldDeclContext {
		return this.getTypedRuleContext(StructFieldDeclContext, i) as StructFieldDeclContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_structDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterStructDecl) {
	 		listener.enterStructDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitStructDecl) {
	 		listener.exitStructDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitStructDecl) {
			return visitor.visitStructDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructKindContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LITE(): TerminalNode {
		return this.getToken(IdlParser.LITE, 0);
	}
	public OPTIONS(): TerminalNode {
		return this.getToken(IdlParser.OPTIONS, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_structKind;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterStructKind) {
	 		listener.enterStructKind(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitStructKind) {
	 		listener.exitStructKind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitStructKind) {
			return visitor.visitStructKind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListenerDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(IdlParser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(IdlParser.RBRACE, 0);
	}
	public STRONG_REF(): TerminalNode {
		return this.getToken(IdlParser.STRONG_REF, 0);
	}
	public PLATFORM(): TerminalNode {
		return this.getToken(IdlParser.PLATFORM, 0);
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(IdlParser.INTERFACE, 0);
	}
	public LISTENER(): TerminalNode {
		return this.getToken(IdlParser.LISTENER, 0);
	}
	public functionDecl_list(): FunctionDeclContext[] {
		return this.getTypedRuleContexts(FunctionDeclContext) as FunctionDeclContext[];
	}
	public functionDecl(i: number): FunctionDeclContext {
		return this.getTypedRuleContext(FunctionDeclContext, i) as FunctionDeclContext;
	}
	public topDecl_list(): TopDeclContext[] {
		return this.getTypedRuleContexts(TopDeclContext) as TopDeclContext[];
	}
	public topDecl(i: number): TopDeclContext {
		return this.getTypedRuleContext(TopDeclContext, i) as TopDeclContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_listenerDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterListenerDecl) {
	 		listener.enterListenerDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitListenerDecl) {
	 		listener.exitListenerDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitListenerDecl) {
			return visitor.visitListenerDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclContext extends ParserRuleContext {
	public _Name!: Token;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IdlParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IdlParser.RPAREN, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(IdlParser.SEMICOLON, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public parametersDecl(): ParametersDeclContext {
		return this.getTypedRuleContext(ParametersDeclContext, 0) as ParametersDeclContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_functionDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterFunctionDecl) {
	 		listener.enterFunctionDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitFunctionDecl) {
	 		listener.exitFunctionDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeRef_list(): TypeRefContext[] {
		return this.getTypedRuleContexts(TypeRefContext) as TypeRefContext[];
	}
	public typeRef(i: number): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, i) as TypeRefContext;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, i);
	}
	public CONST_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.CONST);
	}
	public CONST(i: number): TerminalNode {
		return this.getToken(IdlParser.CONST, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(IdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_parametersDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterParametersDecl) {
	 		listener.enterParametersDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitParametersDecl) {
	 		listener.exitParametersDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitParametersDecl) {
			return visitor.visitParametersDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(IdlParser.SEMICOLON, 0);
	}
	public GEN(): TerminalNode {
		return this.getToken(IdlParser.GEN, 0);
	}
	public CONST(): TerminalNode {
		return this.getToken(IdlParser.CONST, 0);
	}
	public READONLY(): TerminalNode {
		return this.getToken(IdlParser.READONLY, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(IdlParser.OPTIONAL, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_propertyDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterPropertyDecl) {
	 		listener.enterPropertyDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitPropertyDecl) {
	 		listener.exitPropertyDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitPropertyDecl) {
			return visitor.visitPropertyDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructFieldDeclContext extends ParserRuleContext {
	public _Name!: Token;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(IdlParser.SEMICOLON, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(IdlParser.OPTIONAL, 0);
	}
	public basedProtoInternal(): BasedProtoInternalContext {
		return this.getTypedRuleContext(BasedProtoInternalContext, 0) as BasedProtoInternalContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_structFieldDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterStructFieldDecl) {
	 		listener.enterStructFieldDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitStructFieldDecl) {
	 		listener.exitStructFieldDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitStructFieldDecl) {
			return visitor.visitStructFieldDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeRefContext extends ParserRuleContext {
	public _GlobalNs!: Token;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(IdlParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_typeRef;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterTypeRef) {
	 		listener.enterTypeRef(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitTypeRef) {
	 		listener.exitTypeRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitTypeRef) {
			return visitor.visitTypeRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasedProtoTopContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BASED_ON(): TerminalNode {
		return this.getToken(IdlParser.BASED_ON, 0);
	}
	public STR_LITERAL(): TerminalNode {
		return this.getToken(IdlParser.STR_LITERAL, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(IdlParser.COLON, 0);
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_basedProtoTop;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterBasedProtoTop) {
	 		listener.enterBasedProtoTop(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitBasedProtoTop) {
	 		listener.exitBasedProtoTop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitBasedProtoTop) {
			return visitor.visitBasedProtoTop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BasedProtoInternalContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BASED_ON(): TerminalNode {
		return this.getToken(IdlParser.BASED_ON, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_basedProtoInternal;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterBasedProtoInternal) {
	 		listener.enterBasedProtoInternal(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitBasedProtoInternal) {
	 		listener.exitBasedProtoInternal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitBasedProtoInternal) {
			return visitor.visitBasedProtoInternal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CPP(): TerminalNode {
		return this.getToken(IdlParser.CPP, 0);
	}
	public STR_LITERAL(): TerminalNode {
		return this.getToken(IdlParser.STR_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_sourceDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterSourceDecl) {
	 		listener.enterSourceDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitSourceDecl) {
	 		listener.exitSourceDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitSourceDecl) {
			return visitor.visitSourceDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT_LITERAL(): TerminalNode {
		return this.getToken(IdlParser.INT_LITERAL, 0);
	}
	public STR_LITERAL(): TerminalNode {
		return this.getToken(IdlParser.STR_LITERAL, 0);
	}
	public FLOAT_LITERAL(): TerminalNode {
		return this.getToken(IdlParser.FLOAT_LITERAL, 0);
	}
	public DOUBLE_LITERAL(): TerminalNode {
		return this.getToken(IdlParser.DOUBLE_LITERAL, 0);
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_value;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinExprContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
	public BINOR(): TerminalNode {
		return this.getToken(IdlParser.BINOR, 0);
	}
	public LSHIFT(): TerminalNode {
		return this.getToken(IdlParser.LSHIFT, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(IdlParser.ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_binExpr;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterBinExpr) {
	 		listener.enterBinExpr(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitBinExpr) {
	 		listener.exitBinExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitBinExpr) {
			return visitor.visitBinExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
