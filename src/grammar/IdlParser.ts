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
	public static readonly LANGLE = 16;
	public static readonly RANGLE = 17;
	public static readonly CPP = 18;
	public static readonly JAVA = 19;
	public static readonly KMP = 20;
	public static readonly OBJC = 21;
	public static readonly SWIFT = 22;
	public static readonly DART = 23;
	public static readonly PROTOCONV = 24;
	public static readonly TYPE_PREFIX = 25;
	public static readonly IMPORT = 26;
	public static readonly CONST = 27;
	public static readonly OPTIONAL = 28;
	public static readonly BG_THREAD = 29;
	public static readonly ANY_THREAD = 30;
	public static readonly VECTOR = 31;
	public static readonly DICTIONARY = 32;
	public static readonly TYPE_DICTIONARY = 33;
	public static readonly BASED_ON = 34;
	public static readonly SERIALIZABLE = 35;
	public static readonly ENUM = 36;
	public static readonly BITFIELD = 37;
	public static readonly VARIANT = 38;
	public static readonly STRUCT = 39;
	public static readonly LITE = 40;
	public static readonly OPTIONS = 41;
	public static readonly ABSTRACT = 42;
	public static readonly INTERFACE = 43;
	public static readonly VIRTUAL = 44;
	public static readonly VIEW_DELEGATE = 45;
	public static readonly WEAK_REF = 46;
	public static readonly SHARED_REF = 47;
	public static readonly GEN = 48;
	public static readonly READONLY = 49;
	public static readonly NATIVE = 50;
	public static readonly STATIC = 51;
	public static readonly LISTENER = 52;
	public static readonly LAMBDA = 53;
	public static readonly STRONG_REF = 54;
	public static readonly PLATFORM = 55;
	public static readonly ASSIGN = 56;
	public static readonly LSHIFT = 57;
	public static readonly BINOR = 58;
	public static readonly INT_LITERAL = 59;
	public static readonly FLOAT_LITERAL = 60;
	public static readonly DOUBLE_LITERAL = 61;
	public static readonly STR_LITERAL = 62;
	public static readonly BOOL_LITERAL = 63;
	public static readonly NEWLINE = 64;
	public static readonly SPACE = 65;
	public static readonly IDENTIFIER = 66;
	public static readonly SINGLE_COMMERCIAL = 67;
	public static readonly SINGLE_INTERNAL = 68;
	public static readonly SINGLE_DEPRECATED = 69;
	public static readonly SIGNLE_UNDOCUMENTED = 70;
	public static readonly MULTI_END_COMMENT = 71;
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
	public static readonly RULE_customizableNameDecl = 20;
	public static readonly RULE_basedProtoTop = 21;
	public static readonly RULE_basedProtoInternal = 22;
	public static readonly RULE_sourceDecl = 23;
	public static readonly RULE_expr = 24;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "','", "'.'", 
                                                            "':'", "';'", 
                                                            "'<'", "'>'", 
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
                                                             "LANGLE", "RANGLE", 
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
		"parametersDecl", "propertyDecl", "structFieldDecl", "typeRef", "customizableNameDecl", 
		"basedProtoTop", "basedProtoInternal", "sourceDecl", "expr",
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
			if (_la===25) {
				{
				this.state = 50;
				this.typePrefix();
				}
			}

			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===26) {
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
			while (_la===1 || _la===18 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2072575) !== 0)) {
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
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 65;
				this.interfaceDecl();
				}
				break;
			case 2:
				{
				this.state = 66;
				this.enumDecl();
				}
				break;
			case 3:
				{
				this.state = 67;
				this.variantDecl();
				}
				break;
			case 4:
				{
				this.state = 68;
				this.structDecl();
				}
				break;
			case 5:
				{
				this.state = 69;
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
			this.state = 72;
			this.match(IdlParser.IMPORT);
			this.state = 73;
			this.match(IdlParser.STR_LITERAL);
			this.state = 74;
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
			this.state = 76;
			this.match(IdlParser.TYPE_PREFIX);
			this.state = 77;
			this.match(IdlParser.IDENTIFIER);
			this.state = 78;
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
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 80;
				this.match(IdlParser.DOC_BEGIN);
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 248) !== 0)) {
					{
					this.state = 83;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
						{
						this.state = 81;
						this.match(IdlParser.DOC_TEXT);
						}
						break;
					case 4:
					case 5:
					case 6:
					case 7:
						{
						this.state = 82;
						this.documentationTag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 88;
				this.match(IdlParser.DOC_END);
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===1);
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
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 95;
				this.documentation();
				}
			}

			this.state = 113;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 43:
			case 44:
			case 45:
			case 46:
			case 47:
			case 51:
				{
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 98;
					this.match(IdlParser.STATIC);
					}
				}

				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===44) {
					{
					this.state = 101;
					this.match(IdlParser.VIRTUAL);
					}
				}

				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===45) {
					{
					this.state = 104;
					this.match(IdlParser.VIEW_DELEGATE);
					}
				}

				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===46 || _la===47) {
					{
					this.state = 107;
					this.interfaceOwnership();
					}
				}

				this.state = 110;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 50:
				{
				this.state = 111;
				this.match(IdlParser.NATIVE);
				this.state = 112;
				this.match(IdlParser.LISTENER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 115;
			this.match(IdlParser.IDENTIFIER);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 116;
				this.match(IdlParser.LPAREN);
				this.state = 117;
				this.customizableNameDecl();
				this.state = 118;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 122;
				this.match(IdlParser.COLON);
				this.state = 123;
				localctx._Parent = this.typeRef();
				}
			}

			this.state = 126;
			this.match(IdlParser.LBRACE);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268705794) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2149564415) !== 0)) {
				{
				this.state = 130;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 127;
					this.functionDecl();
					}
					break;
				case 2:
					{
					this.state = 128;
					this.propertyDecl();
					}
					break;
				case 3:
					{
					this.state = 129;
					this.topDecl();
					}
					break;
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 135;
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
			this.state = 137;
			_la = this._input.LA(1);
			if(!(_la===46 || _la===47)) {
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
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 139;
				this.documentation();
				}
			}

			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 142;
				this.sourceDecl();
				}
			}

			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37) {
				{
				this.state = 145;
				this.match(IdlParser.BITFIELD);
				}
			}

			this.state = 148;
			this.match(IdlParser.ENUM);
			this.state = 149;
			this.match(IdlParser.IDENTIFIER);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 150;
				this.match(IdlParser.LPAREN);
				this.state = 151;
				this.customizableNameDecl();
				this.state = 152;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 156;
				this.basedProtoTop();
				}
			}

			this.state = 159;
			this.match(IdlParser.LBRACE);
			this.state = 160;
			this.enumFieldsDecl();
			this.state = 161;
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
			this.state = 163;
			this.enumField();
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 164;
					this.match(IdlParser.COMMA);
					this.state = 165;
					this.enumField();
					}
					}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 171;
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 174;
				this.documentation();
				}
			}

			this.state = 177;
			this.match(IdlParser.IDENTIFIER);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===56) {
				{
				this.state = 178;
				this.match(IdlParser.ASSIGN);
				this.state = 179;
				this.expr(0);
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
	public variantDecl(): VariantDeclContext {
		let localctx: VariantDeclContext = new VariantDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, IdlParser.RULE_variantDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 182;
				this.documentation();
				}
			}

			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 185;
				this.sourceDecl();
				}
			}

			this.state = 188;
			this.match(IdlParser.VARIANT);
			this.state = 189;
			this.match(IdlParser.IDENTIFIER);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 190;
				this.match(IdlParser.LPAREN);
				this.state = 191;
				this.customizableNameDecl();
				this.state = 192;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 196;
			this.match(IdlParser.LBRACE);
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268443650) !== 0) || _la===66) {
				{
				{
				this.state = 197;
				this.structFieldDecl();
				}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 203;
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
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 205;
				this.documentation();
				}
			}

			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 208;
				this.sourceDecl();
				}
			}

			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42) {
				{
				this.state = 211;
				this.match(IdlParser.ABSTRACT);
				}
			}

			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===35) {
				{
				this.state = 214;
				this.match(IdlParser.SERIALIZABLE);
				}
			}

			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40 || _la===41) {
				{
				this.state = 217;
				this.structKind();
				}
			}

			this.state = 220;
			this.match(IdlParser.STRUCT);
			this.state = 221;
			this.match(IdlParser.IDENTIFIER);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 222;
				this.match(IdlParser.COLON);
				this.state = 223;
				localctx._Parent = this.typeRef();
				}
			}

			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 226;
				this.match(IdlParser.LPAREN);
				this.state = 227;
				this.customizableNameDecl();
				this.state = 228;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 232;
				this.basedProtoTop();
				}
			}

			this.state = 235;
			this.match(IdlParser.LBRACE);
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268705794) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2149556223) !== 0)) {
				{
				this.state = 238;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 236;
					this.topDecl();
					}
					break;
				case 2:
					{
					this.state = 237;
					this.structFieldDecl();
					}
					break;
				}
				}
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 243;
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
			this.state = 245;
			_la = this._input.LA(1);
			if(!(_la===40 || _la===41)) {
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
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 247;
				this.documentation();
				}
			}

			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 54:
			case 55:
				{
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===54) {
					{
					this.state = 250;
					this.match(IdlParser.STRONG_REF);
					}
				}

				this.state = 253;
				this.match(IdlParser.PLATFORM);
				this.state = 254;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 52:
			case 53:
				{
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 255;
					this.match(IdlParser.LAMBDA);
					}
				}

				this.state = 258;
				this.match(IdlParser.LISTENER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 261;
			this.match(IdlParser.IDENTIFIER);
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 262;
				this.match(IdlParser.LPAREN);
				this.state = 263;
				this.customizableNameDecl();
				this.state = 264;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 268;
			this.match(IdlParser.LBRACE);
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 270338) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 2149556223) !== 0)) {
				{
				this.state = 271;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 269;
					this.functionDecl();
					}
					break;
				case 2:
					{
					this.state = 270;
					this.topDecl();
					}
					break;
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 276;
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
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 278;
				this.documentation();
				}
			}

			this.state = 281;
			this.typeRef();
			this.state = 282;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 283;
				this.match(IdlParser.LANGLE);
				this.state = 284;
				this.customizableNameDecl();
				this.state = 285;
				this.match(IdlParser.RANGLE);
				}
			}

			this.state = 289;
			this.match(IdlParser.LPAREN);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13 || _la===27 || _la===66) {
				{
				this.state = 290;
				this.parametersDecl();
				}
			}

			this.state = 293;
			this.match(IdlParser.RPAREN);
			this.state = 294;
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
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27) {
				{
				this.state = 296;
				this.match(IdlParser.CONST);
				}
			}

			this.state = 299;
			this.typeRef();
			this.state = 300;
			this.match(IdlParser.IDENTIFIER);
			this.state = 310;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 301;
					this.match(IdlParser.COMMA);
					this.state = 303;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===27) {
						{
						this.state = 302;
						this.match(IdlParser.CONST);
						}
					}

					this.state = 305;
					this.typeRef();
					this.state = 306;
					this.match(IdlParser.IDENTIFIER);
					}
					}
				}
				this.state = 312;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 313;
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
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 316;
				this.documentation();
				}
			}

			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 319;
				this.match(IdlParser.GEN);
				}
			}

			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 322;
				this.match(IdlParser.OPTIONAL);
				}
			}

			this.state = 325;
			this.typeRef();
			this.state = 326;
			this.match(IdlParser.IDENTIFIER);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 327;
				this.match(IdlParser.READONLY);
				}
			}

			this.state = 330;
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
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 332;
				localctx._Doc = this.documentation();
				}
			}

			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 335;
				this.match(IdlParser.OPTIONAL);
				}
			}

			this.state = 338;
			localctx._Type = this.typeRef();
			this.state = 339;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 340;
				localctx._Based = this.basedProtoInternal();
				}
			}

			this.state = 345;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===56) {
				{
				this.state = 343;
				this.match(IdlParser.ASSIGN);
				this.state = 344;
				localctx._Expr = this.expr(0);
				}
			}

			this.state = 347;
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
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 349;
				localctx._GlobalNs = this.match(IdlParser.DOT);
				}
			}

			this.state = 352;
			this.match(IdlParser.IDENTIFIER);
			this.state = 357;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 353;
					this.match(IdlParser.DOT);
					this.state = 354;
					this.match(IdlParser.IDENTIFIER);
					}
					}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
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
	public customizableNameDecl(): CustomizableNameDeclContext {
		let localctx: CustomizableNameDeclContext = new CustomizableNameDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, IdlParser.RULE_customizableNameDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 360;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16515072) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 361;
			this.match(IdlParser.COLON);
			this.state = 362;
			this.match(IdlParser.IDENTIFIER);
			this.state = 369;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 363;
					this.match(IdlParser.COMMA);
					this.state = 364;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16515072) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 365;
					this.match(IdlParser.COLON);
					this.state = 366;
					this.match(IdlParser.IDENTIFIER);
					}
					}
				}
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 64, this._ctx);
			}
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 372;
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
	public basedProtoTop(): BasedProtoTopContext {
		let localctx: BasedProtoTopContext = new BasedProtoTopContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, IdlParser.RULE_basedProtoTop);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 375;
			this.match(IdlParser.BASED_ON);
			this.state = 376;
			this.match(IdlParser.STR_LITERAL);
			this.state = 377;
			this.match(IdlParser.COLON);
			this.state = 378;
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
		this.enterRule(localctx, 44, IdlParser.RULE_basedProtoInternal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 380;
			this.match(IdlParser.BASED_ON);
			this.state = 381;
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
		this.enterRule(localctx, 46, IdlParser.RULE_sourceDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 383;
			this.match(IdlParser.CPP);
			this.state = 384;
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 48;
		this.enterRecursionRule(localctx, 48, IdlParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 392;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				{
				this.state = 387;
				this.match(IdlParser.INT_LITERAL);
				}
				break;
			case 62:
				{
				this.state = 388;
				this.match(IdlParser.STR_LITERAL);
				}
				break;
			case 60:
				{
				this.state = 389;
				this.match(IdlParser.FLOAT_LITERAL);
				}
				break;
			case 61:
				{
				this.state = 390;
				this.match(IdlParser.DOUBLE_LITERAL);
				}
				break;
			case 13:
			case 66:
				{
				this.state = 391;
				this.typeRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 405;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 403;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 394;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 395;
						this.match(IdlParser.BINOR);
						this.state = 396;
						this.expr(4);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 397;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 398;
						this.match(IdlParser.LSHIFT);
						this.state = 399;
						this.expr(3);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 400;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 401;
						this.match(IdlParser.ASSIGN);
						this.state = 402;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 407;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 24:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		case 1:
			return this.precpred(this._ctx, 2);
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,71,409,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,1,0,3,0,52,8,0,1,0,5,0,55,8,0,10,0,12,0,58,9,0,1,0,5,0,61,8,0,10,0,12,
	0,64,9,0,1,1,1,1,1,1,1,1,1,1,3,1,71,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,
	1,4,1,4,1,4,5,4,84,8,4,10,4,12,4,87,9,4,1,4,4,4,90,8,4,11,4,12,4,91,1,5,
	1,5,1,6,3,6,97,8,6,1,6,3,6,100,8,6,1,6,3,6,103,8,6,1,6,3,6,106,8,6,1,6,
	3,6,109,8,6,1,6,1,6,1,6,3,6,114,8,6,1,6,1,6,1,6,1,6,1,6,3,6,121,8,6,1,6,
	1,6,3,6,125,8,6,1,6,1,6,1,6,1,6,5,6,131,8,6,10,6,12,6,134,9,6,1,6,1,6,1,
	7,1,7,1,8,3,8,141,8,8,1,8,3,8,144,8,8,1,8,3,8,147,8,8,1,8,1,8,1,8,1,8,1,
	8,1,8,3,8,155,8,8,1,8,3,8,158,8,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,5,9,167,8,
	9,10,9,12,9,170,9,9,1,9,3,9,173,8,9,1,10,3,10,176,8,10,1,10,1,10,1,10,3,
	10,181,8,10,1,11,3,11,184,8,11,1,11,3,11,187,8,11,1,11,1,11,1,11,1,11,1,
	11,1,11,3,11,195,8,11,1,11,1,11,5,11,199,8,11,10,11,12,11,202,9,11,1,11,
	1,11,1,12,3,12,207,8,12,1,12,3,12,210,8,12,1,12,3,12,213,8,12,1,12,3,12,
	216,8,12,1,12,3,12,219,8,12,1,12,1,12,1,12,1,12,3,12,225,8,12,1,12,1,12,
	1,12,1,12,3,12,231,8,12,1,12,3,12,234,8,12,1,12,1,12,1,12,5,12,239,8,12,
	10,12,12,12,242,9,12,1,12,1,12,1,13,1,13,1,14,3,14,249,8,14,1,14,3,14,252,
	8,14,1,14,1,14,1,14,3,14,257,8,14,1,14,3,14,260,8,14,1,14,1,14,1,14,1,14,
	1,14,3,14,267,8,14,1,14,1,14,1,14,5,14,272,8,14,10,14,12,14,275,9,14,1,
	14,1,14,1,15,3,15,280,8,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,288,8,15,
	1,15,1,15,3,15,292,8,15,1,15,1,15,1,15,1,16,3,16,298,8,16,1,16,1,16,1,16,
	1,16,3,16,304,8,16,1,16,1,16,1,16,5,16,309,8,16,10,16,12,16,312,9,16,1,
	16,3,16,315,8,16,1,17,3,17,318,8,17,1,17,3,17,321,8,17,1,17,3,17,324,8,
	17,1,17,1,17,1,17,3,17,329,8,17,1,17,1,17,1,18,3,18,334,8,18,1,18,3,18,
	337,8,18,1,18,1,18,1,18,3,18,342,8,18,1,18,1,18,3,18,346,8,18,1,18,1,18,
	1,19,3,19,351,8,19,1,19,1,19,1,19,5,19,356,8,19,10,19,12,19,359,9,19,1,
	20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,368,8,20,10,20,12,20,371,9,20,1,20,
	3,20,374,8,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,
	24,1,24,1,24,1,24,1,24,1,24,3,24,393,8,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,24,1,24,1,24,5,24,404,8,24,10,24,12,24,407,9,24,1,24,0,1,48,25,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,0,4,1,0,
	4,7,1,0,46,47,1,0,40,41,1,0,18,23,460,0,51,1,0,0,0,2,70,1,0,0,0,4,72,1,
	0,0,0,6,76,1,0,0,0,8,89,1,0,0,0,10,93,1,0,0,0,12,96,1,0,0,0,14,137,1,0,
	0,0,16,140,1,0,0,0,18,163,1,0,0,0,20,175,1,0,0,0,22,183,1,0,0,0,24,206,
	1,0,0,0,26,245,1,0,0,0,28,248,1,0,0,0,30,279,1,0,0,0,32,297,1,0,0,0,34,
	317,1,0,0,0,36,333,1,0,0,0,38,350,1,0,0,0,40,360,1,0,0,0,42,375,1,0,0,0,
	44,380,1,0,0,0,46,383,1,0,0,0,48,392,1,0,0,0,50,52,3,6,3,0,51,50,1,0,0,
	0,51,52,1,0,0,0,52,56,1,0,0,0,53,55,3,4,2,0,54,53,1,0,0,0,55,58,1,0,0,0,
	56,54,1,0,0,0,56,57,1,0,0,0,57,62,1,0,0,0,58,56,1,0,0,0,59,61,3,2,1,0,60,
	59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,1,1,0,0,0,64,62,
	1,0,0,0,65,71,3,12,6,0,66,71,3,16,8,0,67,71,3,22,11,0,68,71,3,24,12,0,69,
	71,3,28,14,0,70,65,1,0,0,0,70,66,1,0,0,0,70,67,1,0,0,0,70,68,1,0,0,0,70,
	69,1,0,0,0,71,3,1,0,0,0,72,73,5,26,0,0,73,74,5,62,0,0,74,75,5,15,0,0,75,
	5,1,0,0,0,76,77,5,25,0,0,77,78,5,66,0,0,78,79,5,15,0,0,79,7,1,0,0,0,80,
	85,5,1,0,0,81,84,5,3,0,0,82,84,3,10,5,0,83,81,1,0,0,0,83,82,1,0,0,0,84,
	87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,85,1,0,0,0,88,90,
	5,2,0,0,89,80,1,0,0,0,90,91,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,9,1,
	0,0,0,93,94,7,0,0,0,94,11,1,0,0,0,95,97,3,8,4,0,96,95,1,0,0,0,96,97,1,0,
	0,0,97,113,1,0,0,0,98,100,5,51,0,0,99,98,1,0,0,0,99,100,1,0,0,0,100,102,
	1,0,0,0,101,103,5,44,0,0,102,101,1,0,0,0,102,103,1,0,0,0,103,105,1,0,0,
	0,104,106,5,45,0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,108,1,0,0,0,107,
	109,3,14,7,0,108,107,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,114,5,
	43,0,0,111,112,5,50,0,0,112,114,5,52,0,0,113,99,1,0,0,0,113,111,1,0,0,0,
	114,115,1,0,0,0,115,120,5,66,0,0,116,117,5,10,0,0,117,118,3,40,20,0,118,
	119,5,11,0,0,119,121,1,0,0,0,120,116,1,0,0,0,120,121,1,0,0,0,121,124,1,
	0,0,0,122,123,5,14,0,0,123,125,3,38,19,0,124,122,1,0,0,0,124,125,1,0,0,
	0,125,126,1,0,0,0,126,132,5,8,0,0,127,131,3,30,15,0,128,131,3,34,17,0,129,
	131,3,2,1,0,130,127,1,0,0,0,130,128,1,0,0,0,130,129,1,0,0,0,131,134,1,0,
	0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,132,1,0,0,0,135,
	136,5,9,0,0,136,13,1,0,0,0,137,138,7,1,0,0,138,15,1,0,0,0,139,141,3,8,4,
	0,140,139,1,0,0,0,140,141,1,0,0,0,141,143,1,0,0,0,142,144,3,46,23,0,143,
	142,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,147,5,37,0,0,146,145,1,
	0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,149,5,36,0,0,149,154,5,66,0,0,
	150,151,5,10,0,0,151,152,3,40,20,0,152,153,5,11,0,0,153,155,1,0,0,0,154,
	150,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,156,158,3,42,21,0,157,156,1,
	0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,5,8,0,0,160,161,3,18,9,0,
	161,162,5,9,0,0,162,17,1,0,0,0,163,168,3,20,10,0,164,165,5,12,0,0,165,167,
	3,20,10,0,166,164,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,
	0,169,172,1,0,0,0,170,168,1,0,0,0,171,173,5,12,0,0,172,171,1,0,0,0,172,
	173,1,0,0,0,173,19,1,0,0,0,174,176,3,8,4,0,175,174,1,0,0,0,175,176,1,0,
	0,0,176,177,1,0,0,0,177,180,5,66,0,0,178,179,5,56,0,0,179,181,3,48,24,0,
	180,178,1,0,0,0,180,181,1,0,0,0,181,21,1,0,0,0,182,184,3,8,4,0,183,182,
	1,0,0,0,183,184,1,0,0,0,184,186,1,0,0,0,185,187,3,46,23,0,186,185,1,0,0,
	0,186,187,1,0,0,0,187,188,1,0,0,0,188,189,5,38,0,0,189,194,5,66,0,0,190,
	191,5,10,0,0,191,192,3,40,20,0,192,193,5,11,0,0,193,195,1,0,0,0,194,190,
	1,0,0,0,194,195,1,0,0,0,195,196,1,0,0,0,196,200,5,8,0,0,197,199,3,36,18,
	0,198,197,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,203,
	1,0,0,0,202,200,1,0,0,0,203,204,5,9,0,0,204,23,1,0,0,0,205,207,3,8,4,0,
	206,205,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,210,3,46,23,0,209,208,
	1,0,0,0,209,210,1,0,0,0,210,212,1,0,0,0,211,213,5,42,0,0,212,211,1,0,0,
	0,212,213,1,0,0,0,213,215,1,0,0,0,214,216,5,35,0,0,215,214,1,0,0,0,215,
	216,1,0,0,0,216,218,1,0,0,0,217,219,3,26,13,0,218,217,1,0,0,0,218,219,1,
	0,0,0,219,220,1,0,0,0,220,221,5,39,0,0,221,224,5,66,0,0,222,223,5,14,0,
	0,223,225,3,38,19,0,224,222,1,0,0,0,224,225,1,0,0,0,225,230,1,0,0,0,226,
	227,5,10,0,0,227,228,3,40,20,0,228,229,5,11,0,0,229,231,1,0,0,0,230,226,
	1,0,0,0,230,231,1,0,0,0,231,233,1,0,0,0,232,234,3,42,21,0,233,232,1,0,0,
	0,233,234,1,0,0,0,234,235,1,0,0,0,235,240,5,8,0,0,236,239,3,2,1,0,237,239,
	3,36,18,0,238,236,1,0,0,0,238,237,1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,
	0,240,241,1,0,0,0,241,243,1,0,0,0,242,240,1,0,0,0,243,244,5,9,0,0,244,25,
	1,0,0,0,245,246,7,2,0,0,246,27,1,0,0,0,247,249,3,8,4,0,248,247,1,0,0,0,
	248,249,1,0,0,0,249,259,1,0,0,0,250,252,5,54,0,0,251,250,1,0,0,0,251,252,
	1,0,0,0,252,253,1,0,0,0,253,254,5,55,0,0,254,260,5,43,0,0,255,257,5,53,
	0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,260,5,52,0,0,259,
	251,1,0,0,0,259,256,1,0,0,0,260,261,1,0,0,0,261,266,5,66,0,0,262,263,5,
	10,0,0,263,264,3,40,20,0,264,265,5,11,0,0,265,267,1,0,0,0,266,262,1,0,0,
	0,266,267,1,0,0,0,267,268,1,0,0,0,268,273,5,8,0,0,269,272,3,30,15,0,270,
	272,3,2,1,0,271,269,1,0,0,0,271,270,1,0,0,0,272,275,1,0,0,0,273,271,1,0,
	0,0,273,274,1,0,0,0,274,276,1,0,0,0,275,273,1,0,0,0,276,277,5,9,0,0,277,
	29,1,0,0,0,278,280,3,8,4,0,279,278,1,0,0,0,279,280,1,0,0,0,280,281,1,0,
	0,0,281,282,3,38,19,0,282,287,5,66,0,0,283,284,5,16,0,0,284,285,3,40,20,
	0,285,286,5,17,0,0,286,288,1,0,0,0,287,283,1,0,0,0,287,288,1,0,0,0,288,
	289,1,0,0,0,289,291,5,10,0,0,290,292,3,32,16,0,291,290,1,0,0,0,291,292,
	1,0,0,0,292,293,1,0,0,0,293,294,5,11,0,0,294,295,5,15,0,0,295,31,1,0,0,
	0,296,298,5,27,0,0,297,296,1,0,0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,
	300,3,38,19,0,300,310,5,66,0,0,301,303,5,12,0,0,302,304,5,27,0,0,303,302,
	1,0,0,0,303,304,1,0,0,0,304,305,1,0,0,0,305,306,3,38,19,0,306,307,5,66,
	0,0,307,309,1,0,0,0,308,301,1,0,0,0,309,312,1,0,0,0,310,308,1,0,0,0,310,
	311,1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,313,315,5,12,0,0,314,313,1,
	0,0,0,314,315,1,0,0,0,315,33,1,0,0,0,316,318,3,8,4,0,317,316,1,0,0,0,317,
	318,1,0,0,0,318,320,1,0,0,0,319,321,5,48,0,0,320,319,1,0,0,0,320,321,1,
	0,0,0,321,323,1,0,0,0,322,324,5,28,0,0,323,322,1,0,0,0,323,324,1,0,0,0,
	324,325,1,0,0,0,325,326,3,38,19,0,326,328,5,66,0,0,327,329,5,49,0,0,328,
	327,1,0,0,0,328,329,1,0,0,0,329,330,1,0,0,0,330,331,5,15,0,0,331,35,1,0,
	0,0,332,334,3,8,4,0,333,332,1,0,0,0,333,334,1,0,0,0,334,336,1,0,0,0,335,
	337,5,28,0,0,336,335,1,0,0,0,336,337,1,0,0,0,337,338,1,0,0,0,338,339,3,
	38,19,0,339,341,5,66,0,0,340,342,3,44,22,0,341,340,1,0,0,0,341,342,1,0,
	0,0,342,345,1,0,0,0,343,344,5,56,0,0,344,346,3,48,24,0,345,343,1,0,0,0,
	345,346,1,0,0,0,346,347,1,0,0,0,347,348,5,15,0,0,348,37,1,0,0,0,349,351,
	5,13,0,0,350,349,1,0,0,0,350,351,1,0,0,0,351,352,1,0,0,0,352,357,5,66,0,
	0,353,354,5,13,0,0,354,356,5,66,0,0,355,353,1,0,0,0,356,359,1,0,0,0,357,
	355,1,0,0,0,357,358,1,0,0,0,358,39,1,0,0,0,359,357,1,0,0,0,360,361,7,3,
	0,0,361,362,5,14,0,0,362,369,5,66,0,0,363,364,5,12,0,0,364,365,7,3,0,0,
	365,366,5,14,0,0,366,368,5,66,0,0,367,363,1,0,0,0,368,371,1,0,0,0,369,367,
	1,0,0,0,369,370,1,0,0,0,370,373,1,0,0,0,371,369,1,0,0,0,372,374,5,12,0,
	0,373,372,1,0,0,0,373,374,1,0,0,0,374,41,1,0,0,0,375,376,5,34,0,0,376,377,
	5,62,0,0,377,378,5,14,0,0,378,379,3,38,19,0,379,43,1,0,0,0,380,381,5,34,
	0,0,381,382,5,66,0,0,382,45,1,0,0,0,383,384,5,18,0,0,384,385,5,62,0,0,385,
	47,1,0,0,0,386,387,6,24,-1,0,387,393,5,59,0,0,388,393,5,62,0,0,389,393,
	5,60,0,0,390,393,5,61,0,0,391,393,3,38,19,0,392,386,1,0,0,0,392,388,1,0,
	0,0,392,389,1,0,0,0,392,390,1,0,0,0,392,391,1,0,0,0,393,405,1,0,0,0,394,
	395,10,3,0,0,395,396,5,58,0,0,396,404,3,48,24,4,397,398,10,2,0,0,398,399,
	5,57,0,0,399,404,3,48,24,3,400,401,10,1,0,0,401,402,5,56,0,0,402,404,3,
	48,24,2,403,394,1,0,0,0,403,397,1,0,0,0,403,400,1,0,0,0,404,407,1,0,0,0,
	405,403,1,0,0,0,405,406,1,0,0,0,406,49,1,0,0,0,407,405,1,0,0,0,69,51,56,
	62,70,83,85,91,96,99,102,105,108,113,120,124,130,132,140,143,146,154,157,
	168,172,175,180,183,186,194,200,206,209,212,215,218,224,230,233,238,240,
	248,251,256,259,266,271,273,279,287,291,297,303,310,314,317,320,323,328,
	333,336,341,345,350,357,369,373,392,403,405];

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
	public DOC_BEGIN_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.DOC_BEGIN);
	}
	public DOC_BEGIN(i: number): TerminalNode {
		return this.getToken(IdlParser.DOC_BEGIN, i);
	}
	public DOC_END_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.DOC_END);
	}
	public DOC_END(i: number): TerminalNode {
		return this.getToken(IdlParser.DOC_END, i);
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
	public _Parent!: TypeRefContext;
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
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IdlParser.LPAREN, 0);
	}
	public customizableNameDecl(): CustomizableNameDeclContext {
		return this.getTypedRuleContext(CustomizableNameDeclContext, 0) as CustomizableNameDeclContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IdlParser.RPAREN, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(IdlParser.COLON, 0);
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
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
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
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public sourceDecl(): SourceDeclContext {
		return this.getTypedRuleContext(SourceDeclContext, 0) as SourceDeclContext;
	}
	public BITFIELD(): TerminalNode {
		return this.getToken(IdlParser.BITFIELD, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IdlParser.LPAREN, 0);
	}
	public customizableNameDecl(): CustomizableNameDeclContext {
		return this.getTypedRuleContext(CustomizableNameDeclContext, 0) as CustomizableNameDeclContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IdlParser.RPAREN, 0);
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
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(IdlParser.ASSIGN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
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
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public sourceDecl(): SourceDeclContext {
		return this.getTypedRuleContext(SourceDeclContext, 0) as SourceDeclContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IdlParser.LPAREN, 0);
	}
	public customizableNameDecl(): CustomizableNameDeclContext {
		return this.getTypedRuleContext(CustomizableNameDeclContext, 0) as CustomizableNameDeclContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IdlParser.RPAREN, 0);
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
	public _Parent!: TypeRefContext;
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
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
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
	public COLON(): TerminalNode {
		return this.getToken(IdlParser.COLON, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IdlParser.LPAREN, 0);
	}
	public customizableNameDecl(): CustomizableNameDeclContext {
		return this.getTypedRuleContext(CustomizableNameDeclContext, 0) as CustomizableNameDeclContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IdlParser.RPAREN, 0);
	}
	public basedProtoTop(): BasedProtoTopContext {
		return this.getTypedRuleContext(BasedProtoTopContext, 0) as BasedProtoTopContext;
	}
	public topDecl_list(): TopDeclContext[] {
		return this.getTypedRuleContexts(TopDeclContext) as TopDeclContext[];
	}
	public topDecl(i: number): TopDeclContext {
		return this.getTypedRuleContext(TopDeclContext, i) as TopDeclContext;
	}
	public structFieldDecl_list(): StructFieldDeclContext[] {
		return this.getTypedRuleContexts(StructFieldDeclContext) as StructFieldDeclContext[];
	}
	public structFieldDecl(i: number): StructFieldDeclContext {
		return this.getTypedRuleContext(StructFieldDeclContext, i) as StructFieldDeclContext;
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
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
	public PLATFORM(): TerminalNode {
		return this.getToken(IdlParser.PLATFORM, 0);
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(IdlParser.INTERFACE, 0);
	}
	public LISTENER(): TerminalNode {
		return this.getToken(IdlParser.LISTENER, 0);
	}
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IdlParser.LPAREN, 0);
	}
	public customizableNameDecl(): CustomizableNameDeclContext {
		return this.getTypedRuleContext(CustomizableNameDeclContext, 0) as CustomizableNameDeclContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IdlParser.RPAREN, 0);
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
	public STRONG_REF(): TerminalNode {
		return this.getToken(IdlParser.STRONG_REF, 0);
	}
	public LAMBDA(): TerminalNode {
		return this.getToken(IdlParser.LAMBDA, 0);
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
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public LANGLE(): TerminalNode {
		return this.getToken(IdlParser.LANGLE, 0);
	}
	public customizableNameDecl(): CustomizableNameDeclContext {
		return this.getTypedRuleContext(CustomizableNameDeclContext, 0) as CustomizableNameDeclContext;
	}
	public RANGLE(): TerminalNode {
		return this.getToken(IdlParser.RANGLE, 0);
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
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public GEN(): TerminalNode {
		return this.getToken(IdlParser.GEN, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(IdlParser.OPTIONAL, 0);
	}
	public READONLY(): TerminalNode {
		return this.getToken(IdlParser.READONLY, 0);
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
	public _Doc!: DocumentationContext;
	public _Type!: TypeRefContext;
	public _Name!: Token;
	public _Based!: BasedProtoInternalContext;
	public _Expr!: ExprContext;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(IdlParser.SEMICOLON, 0);
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(IdlParser.OPTIONAL, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(IdlParser.ASSIGN, 0);
	}
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public basedProtoInternal(): BasedProtoInternalContext {
		return this.getTypedRuleContext(BasedProtoInternalContext, 0) as BasedProtoInternalContext;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
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


export class CustomizableNameDeclContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(IdlParser.COLON, i);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, i);
	}
	public CPP_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.CPP);
	}
	public CPP(i: number): TerminalNode {
		return this.getToken(IdlParser.CPP, i);
	}
	public JAVA_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.JAVA);
	}
	public JAVA(i: number): TerminalNode {
		return this.getToken(IdlParser.JAVA, i);
	}
	public KMP_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.KMP);
	}
	public KMP(i: number): TerminalNode {
		return this.getToken(IdlParser.KMP, i);
	}
	public OBJC_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.OBJC);
	}
	public OBJC(i: number): TerminalNode {
		return this.getToken(IdlParser.OBJC, i);
	}
	public SWIFT_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.SWIFT);
	}
	public SWIFT(i: number): TerminalNode {
		return this.getToken(IdlParser.SWIFT, i);
	}
	public DART_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.DART);
	}
	public DART(i: number): TerminalNode {
		return this.getToken(IdlParser.DART, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(IdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_customizableNameDecl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterCustomizableNameDecl) {
	 		listener.enterCustomizableNameDecl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitCustomizableNameDecl) {
	 		listener.exitCustomizableNameDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitCustomizableNameDecl) {
			return visitor.visitCustomizableNameDecl(this);
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


export class ExprContext extends ParserRuleContext {
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
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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
    	return IdlParser.RULE_expr;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
