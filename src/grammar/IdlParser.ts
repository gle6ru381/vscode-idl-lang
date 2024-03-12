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
	public static readonly COMMERCIAL_TAG = 4;
	public static readonly INTERNAL_TAG = 5;
	public static readonly DEPRECATED_TAG = 6;
	public static readonly UNDOCUMENTED_TAG = 7;
	public static readonly LINK_TAG_BEGIN = 8;
	public static readonly LINK_TAG_END = 9;
	public static readonly PARAM_TAG = 10;
	public static readonly RETURN_TAG = 11;
	public static readonly LBRACE = 12;
	public static readonly RBRACE = 13;
	public static readonly LPAREN = 14;
	public static readonly RPAREN = 15;
	public static readonly COMMA = 16;
	public static readonly DOT = 17;
	public static readonly COLON = 18;
	public static readonly SEMICOLON = 19;
	public static readonly LANGLE = 20;
	public static readonly RANGLE = 21;
	public static readonly NUM = 22;
	public static readonly CPP = 23;
	public static readonly JAVA = 24;
	public static readonly KMP = 25;
	public static readonly OBJC = 26;
	public static readonly SWIFT = 27;
	public static readonly DART = 28;
	public static readonly PROTOCONV = 29;
	public static readonly TYPE_PREFIX = 30;
	public static readonly IMPORT = 31;
	public static readonly CONST = 32;
	public static readonly OPTIONAL = 33;
	public static readonly BG_THREAD = 34;
	public static readonly ANY_THREAD = 35;
	public static readonly BASED_ON = 36;
	public static readonly SERIALIZABLE = 37;
	public static readonly ENUM = 38;
	public static readonly BITFIELD = 39;
	public static readonly VARIANT = 40;
	public static readonly STRUCT = 41;
	public static readonly LITE = 42;
	public static readonly OPTIONS = 43;
	public static readonly ABSTRACT = 44;
	public static readonly INTERFACE = 45;
	public static readonly VIRTUAL = 46;
	public static readonly VIEW_DELEGATE = 47;
	public static readonly WEAK_REF = 48;
	public static readonly SHARED_REF = 49;
	public static readonly GEN = 50;
	public static readonly READONLY = 51;
	public static readonly NATIVE = 52;
	public static readonly STATIC = 53;
	public static readonly LISTENER = 54;
	public static readonly LAMBDA = 55;
	public static readonly STRONG_REF = 56;
	public static readonly PLATFORM = 57;
	public static readonly ASSIGN = 58;
	public static readonly LSHIFT = 59;
	public static readonly BINOR = 60;
	public static readonly INT_LITERAL = 61;
	public static readonly FLOAT_LITERAL = 62;
	public static readonly DOUBLE_LITERAL = 63;
	public static readonly STR_LITERAL = 64;
	public static readonly BOOL_LITERAL = 65;
	public static readonly NEWLINE = 66;
	public static readonly SPACE = 67;
	public static readonly IDENTIFIER = 68;
	public static readonly LINK_SPACE = 69;
	public static readonly SINGLE_COMMERCIAL = 70;
	public static readonly SINGLE_INTERNAL = 71;
	public static readonly SINGLE_DEPRECATED = 72;
	public static readonly SINGLE_UNDOCUMENTED = 73;
	public static readonly SINGLE_RETURN = 74;
	public static readonly MULTI_END_COMMENT = 75;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_programm = 0;
	public static readonly RULE_topDecl = 1;
	public static readonly RULE_importExpr = 2;
	public static readonly RULE_typePrefix = 3;
	public static readonly RULE_documentation = 4;
	public static readonly RULE_documentationBlock = 5;
	public static readonly RULE_documentationTag = 6;
	public static readonly RULE_documentationLink = 7;
	public static readonly RULE_documentationParam = 8;
	public static readonly RULE_documentationReturn = 9;
	public static readonly RULE_parametersRef = 10;
	public static readonly RULE_interfaceDecl = 11;
	public static readonly RULE_interfaceOwnership = 12;
	public static readonly RULE_enumDecl = 13;
	public static readonly RULE_enumFieldsDecl = 14;
	public static readonly RULE_enumField = 15;
	public static readonly RULE_variantDecl = 16;
	public static readonly RULE_structDecl = 17;
	public static readonly RULE_structKind = 18;
	public static readonly RULE_listenerDecl = 19;
	public static readonly RULE_functionDecl = 20;
	public static readonly RULE_parametersDecl = 21;
	public static readonly RULE_parameter = 22;
	public static readonly RULE_propertyDecl = 23;
	public static readonly RULE_structFieldDecl = 24;
	public static readonly RULE_typeRef = 25;
	public static readonly RULE_customizableNameDecl = 26;
	public static readonly RULE_basedProtoTop = 27;
	public static readonly RULE_basedProtoInternal = 28;
	public static readonly RULE_sourceDecl = 29;
	public static readonly RULE_expr = 30;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "':'", "';'", 
                                                            "'<'", "'>'", 
                                                            null, "'cpp'", 
                                                            "'java'", "'kmp'", 
                                                            "'objc'", "'swift'", 
                                                            "'dart'", "'protoconv'", 
                                                            "'type_prefix'", 
                                                            "'import'", 
                                                            "'const'", "'optional'", 
                                                            "'bg_thread'", 
                                                            "'any_thread'", 
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
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'*/'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "DOC_BEGIN", 
                                                             "DOC_END", 
                                                             "DOC_TEXT", 
                                                             "COMMERCIAL_TAG", 
                                                             "INTERNAL_TAG", 
                                                             "DEPRECATED_TAG", 
                                                             "UNDOCUMENTED_TAG", 
                                                             "LINK_TAG_BEGIN", 
                                                             "LINK_TAG_END", 
                                                             "PARAM_TAG", 
                                                             "RETURN_TAG", 
                                                             "LBRACE", "RBRACE", 
                                                             "LPAREN", "RPAREN", 
                                                             "COMMA", "DOT", 
                                                             "COLON", "SEMICOLON", 
                                                             "LANGLE", "RANGLE", 
                                                             "NUM", "CPP", 
                                                             "JAVA", "KMP", 
                                                             "OBJC", "SWIFT", 
                                                             "DART", "PROTOCONV", 
                                                             "TYPE_PREFIX", 
                                                             "IMPORT", "CONST", 
                                                             "OPTIONAL", 
                                                             "BG_THREAD", 
                                                             "ANY_THREAD", 
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
                                                             "LINK_SPACE", 
                                                             "SINGLE_COMMERCIAL", 
                                                             "SINGLE_INTERNAL", 
                                                             "SINGLE_DEPRECATED", 
                                                             "SINGLE_UNDOCUMENTED", 
                                                             "SINGLE_RETURN", 
                                                             "MULTI_END_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programm", "topDecl", "importExpr", "typePrefix", "documentation", "documentationBlock", 
		"documentationTag", "documentationLink", "documentationParam", "documentationReturn", 
		"parametersRef", "interfaceDecl", "interfaceOwnership", "enumDecl", "enumFieldsDecl", 
		"enumField", "variantDecl", "structDecl", "structKind", "listenerDecl", 
		"functionDecl", "parametersDecl", "parameter", "propertyDecl", "structFieldDecl", 
		"typeRef", "customizableNameDecl", "basedProtoTop", "basedProtoInternal", 
		"sourceDecl", "expr",
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
			this.state = 63;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 62;
				this.typePrefix();
				}
			}

			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===31) {
				{
				{
				this.state = 65;
				this.importExpr();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===23 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2072575) !== 0)) {
				{
				{
				this.state = 71;
				this.topDecl();
				}
				}
				this.state = 76;
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
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 77;
				this.interfaceDecl();
				}
				break;
			case 2:
				{
				this.state = 78;
				this.enumDecl();
				}
				break;
			case 3:
				{
				this.state = 79;
				this.variantDecl();
				}
				break;
			case 4:
				{
				this.state = 80;
				this.structDecl();
				}
				break;
			case 5:
				{
				this.state = 81;
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
			this.state = 84;
			this.match(IdlParser.IMPORT);
			this.state = 85;
			this.match(IdlParser.STR_LITERAL);
			this.state = 86;
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
			this.state = 88;
			this.match(IdlParser.TYPE_PREFIX);
			this.state = 89;
			this.match(IdlParser.IDENTIFIER);
			this.state = 90;
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
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 92;
				this.match(IdlParser.DOC_BEGIN);
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3576) !== 0)) {
					{
					this.state = 97;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
					case 8:
						{
						this.state = 93;
						this.documentationBlock();
						}
						break;
					case 4:
					case 5:
					case 6:
					case 7:
						{
						this.state = 94;
						this.documentationTag();
						}
						break;
					case 10:
						{
						this.state = 95;
						this.documentationParam();
						}
						break;
					case 11:
						{
						this.state = 96;
						this.documentationReturn();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 102;
				this.match(IdlParser.DOC_END);
				}
				}
				this.state = 105;
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
	public documentationBlock(): DocumentationBlockContext {
		let localctx: DocumentationBlockContext = new DocumentationBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, IdlParser.RULE_documentationBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 109;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
						{
						this.state = 107;
						this.match(IdlParser.DOC_TEXT);
						}
						break;
					case 8:
						{
						this.state = 108;
						this.documentationLink();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 111;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(localctx, 12, IdlParser.RULE_documentationTag);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 113;
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
	public documentationLink(): DocumentationLinkContext {
		let localctx: DocumentationLinkContext = new DocumentationLinkContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, IdlParser.RULE_documentationLink);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.match(IdlParser.LINK_TAG_BEGIN);
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 116;
				localctx._Type = this.typeRef();
				}
				break;
			case 2:
				{
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17 || _la===33 || _la===68) {
					{
					this.state = 117;
					localctx._Type = this.typeRef();
					}
				}

				this.state = 120;
				this.match(IdlParser.NUM);
				this.state = 121;
				localctx._Member = this.match(IdlParser.IDENTIFIER);
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 122;
					this.match(IdlParser.LPAREN);
					this.state = 126;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===17 || _la===33 || _la===68) {
						{
						{
						this.state = 123;
						this.parametersRef();
						}
						}
						this.state = 128;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 129;
					this.match(IdlParser.RPAREN);
					}
				}

				}
				break;
			}
			this.state = 134;
			this.match(IdlParser.LINK_TAG_END);
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
	public documentationParam(): DocumentationParamContext {
		let localctx: DocumentationParamContext = new DocumentationParamContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, IdlParser.RULE_documentationParam);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this.match(IdlParser.PARAM_TAG);
			this.state = 137;
			localctx._Member = this.match(IdlParser.IDENTIFIER);
			this.state = 138;
			localctx._Desc = this.documentationBlock();
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
	public documentationReturn(): DocumentationReturnContext {
		let localctx: DocumentationReturnContext = new DocumentationReturnContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, IdlParser.RULE_documentationReturn);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
			this.match(IdlParser.RETURN_TAG);
			this.state = 141;
			localctx._Desc = this.documentationBlock();
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
	public parametersRef(): ParametersRefContext {
		let localctx: ParametersRefContext = new ParametersRefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, IdlParser.RULE_parametersRef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 143;
			this.typeRef();
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 144;
				this.match(IdlParser.IDENTIFIER);
				}
				break;
			}
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16) {
				{
				{
				this.state = 147;
				this.match(IdlParser.COMMA);
				this.state = 148;
				this.typeRef();
				this.state = 150;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 149;
					this.match(IdlParser.IDENTIFIER);
					}
					break;
				}
				}
				}
				this.state = 156;
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
	public interfaceDecl(): InterfaceDeclContext {
		let localctx: InterfaceDeclContext = new InterfaceDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, IdlParser.RULE_interfaceDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 157;
				this.documentation();
				}
			}

			this.state = 175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 45:
			case 46:
			case 47:
			case 48:
			case 49:
			case 53:
				{
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===53) {
					{
					this.state = 160;
					this.match(IdlParser.STATIC);
					}
				}

				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===46) {
					{
					this.state = 163;
					this.match(IdlParser.VIRTUAL);
					}
				}

				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===47) {
					{
					this.state = 166;
					this.match(IdlParser.VIEW_DELEGATE);
					}
				}

				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===48 || _la===49) {
					{
					this.state = 169;
					this.interfaceOwnership();
					}
				}

				this.state = 172;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 52:
				{
				this.state = 173;
				this.match(IdlParser.NATIVE);
				this.state = 174;
				this.match(IdlParser.LISTENER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 177;
			this.match(IdlParser.IDENTIFIER);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 178;
				this.match(IdlParser.LPAREN);
				this.state = 179;
				this.customizableNameDecl();
				this.state = 180;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 184;
				this.match(IdlParser.COLON);
				this.state = 185;
				localctx._Parent = this.typeRef();
				}
			}

			this.state = 188;
			this.match(IdlParser.LBRACE);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8519682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 33292273) !== 0) || _la===68) {
				{
				this.state = 192;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 189;
					this.functionDecl();
					}
					break;
				case 2:
					{
					this.state = 190;
					this.propertyDecl();
					}
					break;
				case 3:
					{
					this.state = 191;
					this.topDecl();
					}
					break;
				}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 197;
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
		this.enterRule(localctx, 24, IdlParser.RULE_interfaceOwnership);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 199;
			_la = this._input.LA(1);
			if(!(_la===48 || _la===49)) {
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
		this.enterRule(localctx, 26, IdlParser.RULE_enumDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 201;
				this.documentation();
				}
			}

			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 204;
				this.sourceDecl();
				}
			}

			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 207;
				this.match(IdlParser.BITFIELD);
				}
			}

			this.state = 210;
			this.match(IdlParser.ENUM);
			this.state = 211;
			this.match(IdlParser.IDENTIFIER);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 212;
				this.match(IdlParser.LPAREN);
				this.state = 213;
				this.customizableNameDecl();
				this.state = 214;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 218;
				this.basedProtoTop();
				}
			}

			this.state = 221;
			this.match(IdlParser.LBRACE);
			this.state = 222;
			this.enumFieldsDecl();
			this.state = 223;
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
		this.enterRule(localctx, 28, IdlParser.RULE_enumFieldsDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this.enumField();
			this.state = 230;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 226;
					this.match(IdlParser.COMMA);
					this.state = 227;
					this.enumField();
					}
					}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 233;
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
		this.enterRule(localctx, 30, IdlParser.RULE_enumField);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 236;
				this.documentation();
				}
			}

			this.state = 239;
			this.match(IdlParser.IDENTIFIER);
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 240;
				this.match(IdlParser.ASSIGN);
				this.state = 241;
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
		this.enterRule(localctx, 32, IdlParser.RULE_variantDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 244;
				this.documentation();
				}
			}

			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 247;
				this.sourceDecl();
				}
			}

			this.state = 250;
			this.match(IdlParser.VARIANT);
			this.state = 251;
			this.match(IdlParser.IDENTIFIER);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 252;
				this.match(IdlParser.LPAREN);
				this.state = 253;
				this.customizableNameDecl();
				this.state = 254;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 258;
			this.match(IdlParser.LBRACE);
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===17 || _la===33 || _la===68) {
				{
				{
				this.state = 259;
				this.structFieldDecl();
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 265;
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
		this.enterRule(localctx, 34, IdlParser.RULE_structDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 267;
				this.documentation();
				}
			}

			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===23) {
				{
				this.state = 270;
				this.sourceDecl();
				}
			}

			this.state = 274;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===44) {
				{
				this.state = 273;
				this.match(IdlParser.ABSTRACT);
				}
			}

			this.state = 277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37) {
				{
				this.state = 276;
				this.match(IdlParser.SERIALIZABLE);
				}
			}

			this.state = 280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===42 || _la===43) {
				{
				this.state = 279;
				this.structKind();
				}
			}

			this.state = 282;
			this.match(IdlParser.STRUCT);
			this.state = 283;
			this.match(IdlParser.IDENTIFIER);
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 284;
				this.match(IdlParser.COLON);
				this.state = 285;
				localctx._Parent = this.typeRef();
				}
			}

			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 288;
				this.match(IdlParser.LPAREN);
				this.state = 289;
				this.customizableNameDecl();
				this.state = 290;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 294;
				this.basedProtoTop();
				}
			}

			this.state = 297;
			this.match(IdlParser.LBRACE);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8519682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 33161201) !== 0) || _la===68) {
				{
				this.state = 300;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 298;
					this.topDecl();
					}
					break;
				case 2:
					{
					this.state = 299;
					this.structFieldDecl();
					}
					break;
				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 305;
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
		this.enterRule(localctx, 36, IdlParser.RULE_structKind);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 307;
			_la = this._input.LA(1);
			if(!(_la===42 || _la===43)) {
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
		this.enterRule(localctx, 38, IdlParser.RULE_listenerDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 309;
				this.documentation();
				}
			}

			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
			case 57:
				{
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===56) {
					{
					this.state = 312;
					this.match(IdlParser.STRONG_REF);
					}
				}

				this.state = 315;
				this.match(IdlParser.PLATFORM);
				this.state = 316;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 54:
			case 55:
				{
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===55) {
					{
					this.state = 317;
					this.match(IdlParser.LAMBDA);
					}
				}

				this.state = 320;
				this.match(IdlParser.LISTENER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 323;
			this.match(IdlParser.IDENTIFIER);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 324;
				this.match(IdlParser.LPAREN);
				this.state = 325;
				this.customizableNameDecl();
				this.state = 326;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 330;
			this.match(IdlParser.LBRACE);
			this.state = 335;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 8519682) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 33161201) !== 0) || _la===68) {
				{
				this.state = 333;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 331;
					this.functionDecl();
					}
					break;
				case 2:
					{
					this.state = 332;
					this.topDecl();
					}
					break;
				}
				}
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 338;
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
		this.enterRule(localctx, 40, IdlParser.RULE_functionDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 340;
				this.documentation();
				}
			}

			this.state = 343;
			this.typeRef();
			this.state = 344;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 345;
				this.match(IdlParser.LANGLE);
				this.state = 346;
				this.customizableNameDecl();
				this.state = 347;
				this.match(IdlParser.RANGLE);
				}
			}

			this.state = 351;
			this.match(IdlParser.LPAREN);
			this.state = 353;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 17)) & ~0x1F) === 0 && ((1 << (_la - 17)) & 98305) !== 0) || _la===68) {
				{
				this.state = 352;
				this.parametersDecl();
				}
			}

			this.state = 355;
			this.match(IdlParser.RPAREN);
			this.state = 356;
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
		this.enterRule(localctx, 42, IdlParser.RULE_parametersDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.parameter();
			this.state = 363;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 359;
					this.match(IdlParser.COMMA);
					this.state = 360;
					this.parameter();
					}
					}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 59, this._ctx);
			}
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 366;
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
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, IdlParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 370;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 369;
				this.match(IdlParser.CONST);
				}
			}

			this.state = 374;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				{
				this.state = 372;
				localctx._Label = this.match(IdlParser.IDENTIFIER);
				this.state = 373;
				this.match(IdlParser.COLON);
				}
				break;
			}
			this.state = 376;
			localctx._Type = this.typeRef();
			this.state = 377;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
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
		this.enterRule(localctx, 46, IdlParser.RULE_propertyDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 380;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 379;
				this.documentation();
				}
			}

			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===50) {
				{
				this.state = 382;
				this.match(IdlParser.GEN);
				}
			}

			this.state = 385;
			this.typeRef();
			this.state = 386;
			this.match(IdlParser.IDENTIFIER);
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 387;
				this.match(IdlParser.READONLY);
				}
			}

			this.state = 390;
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
		this.enterRule(localctx, 48, IdlParser.RULE_structFieldDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 392;
				localctx._Doc = this.documentation();
				}
			}

			this.state = 395;
			localctx._Type = this.typeRef();
			this.state = 396;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 397;
				localctx._Based = this.basedProtoInternal();
				}
			}

			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 400;
				this.match(IdlParser.ASSIGN);
				this.state = 401;
				localctx._Expr = this.expr(0);
				}
			}

			this.state = 404;
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
		this.enterRule(localctx, 50, IdlParser.RULE_typeRef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 406;
				this.match(IdlParser.OPTIONAL);
				}
			}

			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 409;
				localctx._GlobalNs = this.match(IdlParser.DOT);
				}
			}

			this.state = 412;
			this.match(IdlParser.IDENTIFIER);
			this.state = 417;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 413;
					this.match(IdlParser.DOT);
					this.state = 414;
					this.match(IdlParser.IDENTIFIER);
					}
					}
				}
				this.state = 419;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
			}
			this.state = 431;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 420;
				this.match(IdlParser.LANGLE);
				this.state = 421;
				this.typeRef();
				this.state = 426;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===16) {
					{
					{
					this.state = 422;
					this.match(IdlParser.COMMA);
					this.state = 423;
					this.typeRef();
					}
					}
					this.state = 428;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 429;
				this.match(IdlParser.RANGLE);
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
	public customizableNameDecl(): CustomizableNameDeclContext {
		let localctx: CustomizableNameDeclContext = new CustomizableNameDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, IdlParser.RULE_customizableNameDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 433;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 528482304) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 434;
			this.match(IdlParser.COLON);
			this.state = 435;
			this.match(IdlParser.IDENTIFIER);
			this.state = 442;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 436;
					this.match(IdlParser.COMMA);
					this.state = 437;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 528482304) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 438;
					this.match(IdlParser.COLON);
					this.state = 439;
					this.match(IdlParser.IDENTIFIER);
					}
					}
				}
				this.state = 444;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
			}
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 445;
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
		this.enterRule(localctx, 54, IdlParser.RULE_basedProtoTop);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			this.match(IdlParser.BASED_ON);
			this.state = 449;
			this.match(IdlParser.STR_LITERAL);
			this.state = 450;
			this.match(IdlParser.COLON);
			this.state = 451;
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
		this.enterRule(localctx, 56, IdlParser.RULE_basedProtoInternal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			this.match(IdlParser.BASED_ON);
			this.state = 454;
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
		this.enterRule(localctx, 58, IdlParser.RULE_sourceDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 456;
			this.match(IdlParser.CPP);
			this.state = 457;
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
		let _startState: number = 60;
		this.enterRecursionRule(localctx, 60, IdlParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 465;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				{
				this.state = 460;
				this.match(IdlParser.INT_LITERAL);
				}
				break;
			case 64:
				{
				this.state = 461;
				this.match(IdlParser.STR_LITERAL);
				}
				break;
			case 62:
				{
				this.state = 462;
				this.match(IdlParser.FLOAT_LITERAL);
				}
				break;
			case 63:
				{
				this.state = 463;
				this.match(IdlParser.DOUBLE_LITERAL);
				}
				break;
			case 17:
			case 33:
			case 68:
				{
				this.state = 464;
				this.typeRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 478;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 476;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 467;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 468;
						this.match(IdlParser.BINOR);
						this.state = 469;
						this.expr(4);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 470;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 471;
						this.match(IdlParser.LSHIFT);
						this.state = 472;
						this.expr(3);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 473;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 474;
						this.match(IdlParser.ASSIGN);
						this.state = 475;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 480;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
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
		case 30:
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

	public static readonly _serializedATN: number[] = [4,1,75,482,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,3,0,
	64,8,0,1,0,5,0,67,8,0,10,0,12,0,70,9,0,1,0,5,0,73,8,0,10,0,12,0,76,9,0,
	1,1,1,1,1,1,1,1,1,1,3,1,83,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,
	1,4,1,4,1,4,5,4,98,8,4,10,4,12,4,101,9,4,1,4,4,4,104,8,4,11,4,12,4,105,
	1,5,1,5,4,5,110,8,5,11,5,12,5,111,1,6,1,6,1,7,1,7,1,7,3,7,119,8,7,1,7,1,
	7,1,7,1,7,5,7,125,8,7,10,7,12,7,128,9,7,1,7,3,7,131,8,7,3,7,133,8,7,1,7,
	1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,3,10,146,8,10,1,10,1,10,1,10,
	3,10,151,8,10,5,10,153,8,10,10,10,12,10,156,9,10,1,11,3,11,159,8,11,1,11,
	3,11,162,8,11,1,11,3,11,165,8,11,1,11,3,11,168,8,11,1,11,3,11,171,8,11,
	1,11,1,11,1,11,3,11,176,8,11,1,11,1,11,1,11,1,11,1,11,3,11,183,8,11,1,11,
	1,11,3,11,187,8,11,1,11,1,11,1,11,1,11,5,11,193,8,11,10,11,12,11,196,9,
	11,1,11,1,11,1,12,1,12,1,13,3,13,203,8,13,1,13,3,13,206,8,13,1,13,3,13,
	209,8,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,217,8,13,1,13,3,13,220,8,13,
	1,13,1,13,1,13,1,13,1,14,1,14,1,14,5,14,229,8,14,10,14,12,14,232,9,14,1,
	14,3,14,235,8,14,1,15,3,15,238,8,15,1,15,1,15,1,15,3,15,243,8,15,1,16,3,
	16,246,8,16,1,16,3,16,249,8,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,257,8,
	16,1,16,1,16,5,16,261,8,16,10,16,12,16,264,9,16,1,16,1,16,1,17,3,17,269,
	8,17,1,17,3,17,272,8,17,1,17,3,17,275,8,17,1,17,3,17,278,8,17,1,17,3,17,
	281,8,17,1,17,1,17,1,17,1,17,3,17,287,8,17,1,17,1,17,1,17,1,17,3,17,293,
	8,17,1,17,3,17,296,8,17,1,17,1,17,1,17,5,17,301,8,17,10,17,12,17,304,9,
	17,1,17,1,17,1,18,1,18,1,19,3,19,311,8,19,1,19,3,19,314,8,19,1,19,1,19,
	1,19,3,19,319,8,19,1,19,3,19,322,8,19,1,19,1,19,1,19,1,19,1,19,3,19,329,
	8,19,1,19,1,19,1,19,5,19,334,8,19,10,19,12,19,337,9,19,1,19,1,19,1,20,3,
	20,342,8,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,350,8,20,1,20,1,20,3,20,
	354,8,20,1,20,1,20,1,20,1,21,1,21,1,21,5,21,362,8,21,10,21,12,21,365,9,
	21,1,21,3,21,368,8,21,1,22,3,22,371,8,22,1,22,1,22,3,22,375,8,22,1,22,1,
	22,1,22,1,23,3,23,381,8,23,1,23,3,23,384,8,23,1,23,1,23,1,23,3,23,389,8,
	23,1,23,1,23,1,24,3,24,394,8,24,1,24,1,24,1,24,3,24,399,8,24,1,24,1,24,
	3,24,403,8,24,1,24,1,24,1,25,3,25,408,8,25,1,25,3,25,411,8,25,1,25,1,25,
	1,25,5,25,416,8,25,10,25,12,25,419,9,25,1,25,1,25,1,25,1,25,5,25,425,8,
	25,10,25,12,25,428,9,25,1,25,1,25,3,25,432,8,25,1,26,1,26,1,26,1,26,1,26,
	1,26,1,26,5,26,441,8,26,10,26,12,26,444,9,26,1,26,3,26,447,8,26,1,27,1,
	27,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,
	1,30,3,30,466,8,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,477,
	8,30,10,30,12,30,480,9,30,1,30,0,1,60,31,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,0,4,1,0,4,7,1,
	0,48,49,1,0,42,43,1,0,23,28,539,0,63,1,0,0,0,2,82,1,0,0,0,4,84,1,0,0,0,
	6,88,1,0,0,0,8,103,1,0,0,0,10,109,1,0,0,0,12,113,1,0,0,0,14,115,1,0,0,0,
	16,136,1,0,0,0,18,140,1,0,0,0,20,143,1,0,0,0,22,158,1,0,0,0,24,199,1,0,
	0,0,26,202,1,0,0,0,28,225,1,0,0,0,30,237,1,0,0,0,32,245,1,0,0,0,34,268,
	1,0,0,0,36,307,1,0,0,0,38,310,1,0,0,0,40,341,1,0,0,0,42,358,1,0,0,0,44,
	370,1,0,0,0,46,380,1,0,0,0,48,393,1,0,0,0,50,407,1,0,0,0,52,433,1,0,0,0,
	54,448,1,0,0,0,56,453,1,0,0,0,58,456,1,0,0,0,60,465,1,0,0,0,62,64,3,6,3,
	0,63,62,1,0,0,0,63,64,1,0,0,0,64,68,1,0,0,0,65,67,3,4,2,0,66,65,1,0,0,0,
	67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,74,1,0,0,0,70,68,1,0,0,0,71,
	73,3,2,1,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,1,
	1,0,0,0,76,74,1,0,0,0,77,83,3,22,11,0,78,83,3,26,13,0,79,83,3,32,16,0,80,
	83,3,34,17,0,81,83,3,38,19,0,82,77,1,0,0,0,82,78,1,0,0,0,82,79,1,0,0,0,
	82,80,1,0,0,0,82,81,1,0,0,0,83,3,1,0,0,0,84,85,5,31,0,0,85,86,5,64,0,0,
	86,87,5,19,0,0,87,5,1,0,0,0,88,89,5,30,0,0,89,90,5,68,0,0,90,91,5,19,0,
	0,91,7,1,0,0,0,92,99,5,1,0,0,93,98,3,10,5,0,94,98,3,12,6,0,95,98,3,16,8,
	0,96,98,3,18,9,0,97,93,1,0,0,0,97,94,1,0,0,0,97,95,1,0,0,0,97,96,1,0,0,
	0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,
	0,0,0,102,104,5,2,0,0,103,92,1,0,0,0,104,105,1,0,0,0,105,103,1,0,0,0,105,
	106,1,0,0,0,106,9,1,0,0,0,107,110,5,3,0,0,108,110,3,14,7,0,109,107,1,0,
	0,0,109,108,1,0,0,0,110,111,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,
	11,1,0,0,0,113,114,7,0,0,0,114,13,1,0,0,0,115,132,5,8,0,0,116,133,3,50,
	25,0,117,119,3,50,25,0,118,117,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,
	120,121,5,22,0,0,121,130,5,68,0,0,122,126,5,14,0,0,123,125,3,20,10,0,124,
	123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,129,1,0,
	0,0,128,126,1,0,0,0,129,131,5,15,0,0,130,122,1,0,0,0,130,131,1,0,0,0,131,
	133,1,0,0,0,132,116,1,0,0,0,132,118,1,0,0,0,133,134,1,0,0,0,134,135,5,9,
	0,0,135,15,1,0,0,0,136,137,5,10,0,0,137,138,5,68,0,0,138,139,3,10,5,0,139,
	17,1,0,0,0,140,141,5,11,0,0,141,142,3,10,5,0,142,19,1,0,0,0,143,145,3,50,
	25,0,144,146,5,68,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,154,1,0,0,0,147,
	148,5,16,0,0,148,150,3,50,25,0,149,151,5,68,0,0,150,149,1,0,0,0,150,151,
	1,0,0,0,151,153,1,0,0,0,152,147,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,
	154,155,1,0,0,0,155,21,1,0,0,0,156,154,1,0,0,0,157,159,3,8,4,0,158,157,
	1,0,0,0,158,159,1,0,0,0,159,175,1,0,0,0,160,162,5,53,0,0,161,160,1,0,0,
	0,161,162,1,0,0,0,162,164,1,0,0,0,163,165,5,46,0,0,164,163,1,0,0,0,164,
	165,1,0,0,0,165,167,1,0,0,0,166,168,5,47,0,0,167,166,1,0,0,0,167,168,1,
	0,0,0,168,170,1,0,0,0,169,171,3,24,12,0,170,169,1,0,0,0,170,171,1,0,0,0,
	171,172,1,0,0,0,172,176,5,45,0,0,173,174,5,52,0,0,174,176,5,54,0,0,175,
	161,1,0,0,0,175,173,1,0,0,0,176,177,1,0,0,0,177,182,5,68,0,0,178,179,5,
	14,0,0,179,180,3,52,26,0,180,181,5,15,0,0,181,183,1,0,0,0,182,178,1,0,0,
	0,182,183,1,0,0,0,183,186,1,0,0,0,184,185,5,18,0,0,185,187,3,50,25,0,186,
	184,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,194,5,12,0,0,189,193,3,
	40,20,0,190,193,3,46,23,0,191,193,3,2,1,0,192,189,1,0,0,0,192,190,1,0,0,
	0,192,191,1,0,0,0,193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,197,
	1,0,0,0,196,194,1,0,0,0,197,198,5,13,0,0,198,23,1,0,0,0,199,200,7,1,0,0,
	200,25,1,0,0,0,201,203,3,8,4,0,202,201,1,0,0,0,202,203,1,0,0,0,203,205,
	1,0,0,0,204,206,3,58,29,0,205,204,1,0,0,0,205,206,1,0,0,0,206,208,1,0,0,
	0,207,209,5,39,0,0,208,207,1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,0,210,
	211,5,38,0,0,211,216,5,68,0,0,212,213,5,14,0,0,213,214,3,52,26,0,214,215,
	5,15,0,0,215,217,1,0,0,0,216,212,1,0,0,0,216,217,1,0,0,0,217,219,1,0,0,
	0,218,220,3,54,27,0,219,218,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,
	222,5,12,0,0,222,223,3,28,14,0,223,224,5,13,0,0,224,27,1,0,0,0,225,230,
	3,30,15,0,226,227,5,16,0,0,227,229,3,30,15,0,228,226,1,0,0,0,229,232,1,
	0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,233,
	235,5,16,0,0,234,233,1,0,0,0,234,235,1,0,0,0,235,29,1,0,0,0,236,238,3,8,
	4,0,237,236,1,0,0,0,237,238,1,0,0,0,238,239,1,0,0,0,239,242,5,68,0,0,240,
	241,5,58,0,0,241,243,3,60,30,0,242,240,1,0,0,0,242,243,1,0,0,0,243,31,1,
	0,0,0,244,246,3,8,4,0,245,244,1,0,0,0,245,246,1,0,0,0,246,248,1,0,0,0,247,
	249,3,58,29,0,248,247,1,0,0,0,248,249,1,0,0,0,249,250,1,0,0,0,250,251,5,
	40,0,0,251,256,5,68,0,0,252,253,5,14,0,0,253,254,3,52,26,0,254,255,5,15,
	0,0,255,257,1,0,0,0,256,252,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,
	262,5,12,0,0,259,261,3,48,24,0,260,259,1,0,0,0,261,264,1,0,0,0,262,260,
	1,0,0,0,262,263,1,0,0,0,263,265,1,0,0,0,264,262,1,0,0,0,265,266,5,13,0,
	0,266,33,1,0,0,0,267,269,3,8,4,0,268,267,1,0,0,0,268,269,1,0,0,0,269,271,
	1,0,0,0,270,272,3,58,29,0,271,270,1,0,0,0,271,272,1,0,0,0,272,274,1,0,0,
	0,273,275,5,44,0,0,274,273,1,0,0,0,274,275,1,0,0,0,275,277,1,0,0,0,276,
	278,5,37,0,0,277,276,1,0,0,0,277,278,1,0,0,0,278,280,1,0,0,0,279,281,3,
	36,18,0,280,279,1,0,0,0,280,281,1,0,0,0,281,282,1,0,0,0,282,283,5,41,0,
	0,283,286,5,68,0,0,284,285,5,18,0,0,285,287,3,50,25,0,286,284,1,0,0,0,286,
	287,1,0,0,0,287,292,1,0,0,0,288,289,5,14,0,0,289,290,3,52,26,0,290,291,
	5,15,0,0,291,293,1,0,0,0,292,288,1,0,0,0,292,293,1,0,0,0,293,295,1,0,0,
	0,294,296,3,54,27,0,295,294,1,0,0,0,295,296,1,0,0,0,296,297,1,0,0,0,297,
	302,5,12,0,0,298,301,3,2,1,0,299,301,3,48,24,0,300,298,1,0,0,0,300,299,
	1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,
	304,302,1,0,0,0,305,306,5,13,0,0,306,35,1,0,0,0,307,308,7,2,0,0,308,37,
	1,0,0,0,309,311,3,8,4,0,310,309,1,0,0,0,310,311,1,0,0,0,311,321,1,0,0,0,
	312,314,5,56,0,0,313,312,1,0,0,0,313,314,1,0,0,0,314,315,1,0,0,0,315,316,
	5,57,0,0,316,322,5,45,0,0,317,319,5,55,0,0,318,317,1,0,0,0,318,319,1,0,
	0,0,319,320,1,0,0,0,320,322,5,54,0,0,321,313,1,0,0,0,321,318,1,0,0,0,322,
	323,1,0,0,0,323,328,5,68,0,0,324,325,5,14,0,0,325,326,3,52,26,0,326,327,
	5,15,0,0,327,329,1,0,0,0,328,324,1,0,0,0,328,329,1,0,0,0,329,330,1,0,0,
	0,330,335,5,12,0,0,331,334,3,40,20,0,332,334,3,2,1,0,333,331,1,0,0,0,333,
	332,1,0,0,0,334,337,1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,336,338,1,0,
	0,0,337,335,1,0,0,0,338,339,5,13,0,0,339,39,1,0,0,0,340,342,3,8,4,0,341,
	340,1,0,0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,344,3,50,25,0,344,349,5,
	68,0,0,345,346,5,20,0,0,346,347,3,52,26,0,347,348,5,21,0,0,348,350,1,0,
	0,0,349,345,1,0,0,0,349,350,1,0,0,0,350,351,1,0,0,0,351,353,5,14,0,0,352,
	354,3,42,21,0,353,352,1,0,0,0,353,354,1,0,0,0,354,355,1,0,0,0,355,356,5,
	15,0,0,356,357,5,19,0,0,357,41,1,0,0,0,358,363,3,44,22,0,359,360,5,16,0,
	0,360,362,3,44,22,0,361,359,1,0,0,0,362,365,1,0,0,0,363,361,1,0,0,0,363,
	364,1,0,0,0,364,367,1,0,0,0,365,363,1,0,0,0,366,368,5,16,0,0,367,366,1,
	0,0,0,367,368,1,0,0,0,368,43,1,0,0,0,369,371,5,32,0,0,370,369,1,0,0,0,370,
	371,1,0,0,0,371,374,1,0,0,0,372,373,5,68,0,0,373,375,5,18,0,0,374,372,1,
	0,0,0,374,375,1,0,0,0,375,376,1,0,0,0,376,377,3,50,25,0,377,378,5,68,0,
	0,378,45,1,0,0,0,379,381,3,8,4,0,380,379,1,0,0,0,380,381,1,0,0,0,381,383,
	1,0,0,0,382,384,5,50,0,0,383,382,1,0,0,0,383,384,1,0,0,0,384,385,1,0,0,
	0,385,386,3,50,25,0,386,388,5,68,0,0,387,389,5,51,0,0,388,387,1,0,0,0,388,
	389,1,0,0,0,389,390,1,0,0,0,390,391,5,19,0,0,391,47,1,0,0,0,392,394,3,8,
	4,0,393,392,1,0,0,0,393,394,1,0,0,0,394,395,1,0,0,0,395,396,3,50,25,0,396,
	398,5,68,0,0,397,399,3,56,28,0,398,397,1,0,0,0,398,399,1,0,0,0,399,402,
	1,0,0,0,400,401,5,58,0,0,401,403,3,60,30,0,402,400,1,0,0,0,402,403,1,0,
	0,0,403,404,1,0,0,0,404,405,5,19,0,0,405,49,1,0,0,0,406,408,5,33,0,0,407,
	406,1,0,0,0,407,408,1,0,0,0,408,410,1,0,0,0,409,411,5,17,0,0,410,409,1,
	0,0,0,410,411,1,0,0,0,411,412,1,0,0,0,412,417,5,68,0,0,413,414,5,17,0,0,
	414,416,5,68,0,0,415,413,1,0,0,0,416,419,1,0,0,0,417,415,1,0,0,0,417,418,
	1,0,0,0,418,431,1,0,0,0,419,417,1,0,0,0,420,421,5,20,0,0,421,426,3,50,25,
	0,422,423,5,16,0,0,423,425,3,50,25,0,424,422,1,0,0,0,425,428,1,0,0,0,426,
	424,1,0,0,0,426,427,1,0,0,0,427,429,1,0,0,0,428,426,1,0,0,0,429,430,5,21,
	0,0,430,432,1,0,0,0,431,420,1,0,0,0,431,432,1,0,0,0,432,51,1,0,0,0,433,
	434,7,3,0,0,434,435,5,18,0,0,435,442,5,68,0,0,436,437,5,16,0,0,437,438,
	7,3,0,0,438,439,5,18,0,0,439,441,5,68,0,0,440,436,1,0,0,0,441,444,1,0,0,
	0,442,440,1,0,0,0,442,443,1,0,0,0,443,446,1,0,0,0,444,442,1,0,0,0,445,447,
	5,16,0,0,446,445,1,0,0,0,446,447,1,0,0,0,447,53,1,0,0,0,448,449,5,36,0,
	0,449,450,5,64,0,0,450,451,5,18,0,0,451,452,3,50,25,0,452,55,1,0,0,0,453,
	454,5,36,0,0,454,455,5,68,0,0,455,57,1,0,0,0,456,457,5,23,0,0,457,458,5,
	64,0,0,458,59,1,0,0,0,459,460,6,30,-1,0,460,466,5,61,0,0,461,466,5,64,0,
	0,462,466,5,62,0,0,463,466,5,63,0,0,464,466,3,50,25,0,465,459,1,0,0,0,465,
	461,1,0,0,0,465,462,1,0,0,0,465,463,1,0,0,0,465,464,1,0,0,0,466,478,1,0,
	0,0,467,468,10,3,0,0,468,469,5,60,0,0,469,477,3,60,30,4,470,471,10,2,0,
	0,471,472,5,59,0,0,472,477,3,60,30,3,473,474,10,1,0,0,474,475,5,58,0,0,
	475,477,3,60,30,2,476,467,1,0,0,0,476,470,1,0,0,0,476,473,1,0,0,0,477,480,
	1,0,0,0,478,476,1,0,0,0,478,479,1,0,0,0,479,61,1,0,0,0,480,478,1,0,0,0,
	79,63,68,74,82,97,99,105,109,111,118,126,130,132,145,150,154,158,161,164,
	167,170,175,182,186,192,194,202,205,208,216,219,230,234,237,242,245,248,
	256,262,268,271,274,277,280,286,292,295,300,302,310,313,318,321,328,333,
	335,341,349,353,363,367,370,374,380,383,388,393,398,402,407,410,417,426,
	431,442,446,465,476,478];

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
	public documentationBlock_list(): DocumentationBlockContext[] {
		return this.getTypedRuleContexts(DocumentationBlockContext) as DocumentationBlockContext[];
	}
	public documentationBlock(i: number): DocumentationBlockContext {
		return this.getTypedRuleContext(DocumentationBlockContext, i) as DocumentationBlockContext;
	}
	public documentationTag_list(): DocumentationTagContext[] {
		return this.getTypedRuleContexts(DocumentationTagContext) as DocumentationTagContext[];
	}
	public documentationTag(i: number): DocumentationTagContext {
		return this.getTypedRuleContext(DocumentationTagContext, i) as DocumentationTagContext;
	}
	public documentationParam_list(): DocumentationParamContext[] {
		return this.getTypedRuleContexts(DocumentationParamContext) as DocumentationParamContext[];
	}
	public documentationParam(i: number): DocumentationParamContext {
		return this.getTypedRuleContext(DocumentationParamContext, i) as DocumentationParamContext;
	}
	public documentationReturn_list(): DocumentationReturnContext[] {
		return this.getTypedRuleContexts(DocumentationReturnContext) as DocumentationReturnContext[];
	}
	public documentationReturn(i: number): DocumentationReturnContext {
		return this.getTypedRuleContext(DocumentationReturnContext, i) as DocumentationReturnContext;
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


export class DocumentationBlockContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOC_TEXT_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.DOC_TEXT);
	}
	public DOC_TEXT(i: number): TerminalNode {
		return this.getToken(IdlParser.DOC_TEXT, i);
	}
	public documentationLink_list(): DocumentationLinkContext[] {
		return this.getTypedRuleContexts(DocumentationLinkContext) as DocumentationLinkContext[];
	}
	public documentationLink(i: number): DocumentationLinkContext {
		return this.getTypedRuleContext(DocumentationLinkContext, i) as DocumentationLinkContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_documentationBlock;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterDocumentationBlock) {
	 		listener.enterDocumentationBlock(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitDocumentationBlock) {
	 		listener.exitDocumentationBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitDocumentationBlock) {
			return visitor.visitDocumentationBlock(this);
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
	public COMMERCIAL_TAG(): TerminalNode {
		return this.getToken(IdlParser.COMMERCIAL_TAG, 0);
	}
	public INTERNAL_TAG(): TerminalNode {
		return this.getToken(IdlParser.INTERNAL_TAG, 0);
	}
	public DEPRECATED_TAG(): TerminalNode {
		return this.getToken(IdlParser.DEPRECATED_TAG, 0);
	}
	public UNDOCUMENTED_TAG(): TerminalNode {
		return this.getToken(IdlParser.UNDOCUMENTED_TAG, 0);
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


export class DocumentationLinkContext extends ParserRuleContext {
	public _Type!: TypeRefContext;
	public _Member!: Token;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LINK_TAG_BEGIN(): TerminalNode {
		return this.getToken(IdlParser.LINK_TAG_BEGIN, 0);
	}
	public LINK_TAG_END(): TerminalNode {
		return this.getToken(IdlParser.LINK_TAG_END, 0);
	}
	public NUM(): TerminalNode {
		return this.getToken(IdlParser.NUM, 0);
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(IdlParser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(IdlParser.RPAREN, 0);
	}
	public parametersRef_list(): ParametersRefContext[] {
		return this.getTypedRuleContexts(ParametersRefContext) as ParametersRefContext[];
	}
	public parametersRef(i: number): ParametersRefContext {
		return this.getTypedRuleContext(ParametersRefContext, i) as ParametersRefContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_documentationLink;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterDocumentationLink) {
	 		listener.enterDocumentationLink(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitDocumentationLink) {
	 		listener.exitDocumentationLink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitDocumentationLink) {
			return visitor.visitDocumentationLink(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocumentationParamContext extends ParserRuleContext {
	public _Member!: Token;
	public _Desc!: DocumentationBlockContext;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARAM_TAG(): TerminalNode {
		return this.getToken(IdlParser.PARAM_TAG, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, 0);
	}
	public documentationBlock(): DocumentationBlockContext {
		return this.getTypedRuleContext(DocumentationBlockContext, 0) as DocumentationBlockContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_documentationParam;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterDocumentationParam) {
	 		listener.enterDocumentationParam(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitDocumentationParam) {
	 		listener.exitDocumentationParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitDocumentationParam) {
			return visitor.visitDocumentationParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocumentationReturnContext extends ParserRuleContext {
	public _Desc!: DocumentationBlockContext;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN_TAG(): TerminalNode {
		return this.getToken(IdlParser.RETURN_TAG, 0);
	}
	public documentationBlock(): DocumentationBlockContext {
		return this.getTypedRuleContext(DocumentationBlockContext, 0) as DocumentationBlockContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_documentationReturn;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterDocumentationReturn) {
	 		listener.enterDocumentationReturn(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitDocumentationReturn) {
	 		listener.exitDocumentationReturn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitDocumentationReturn) {
			return visitor.visitDocumentationReturn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParametersRefContext extends ParserRuleContext {
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
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(IdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_parametersRef;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterParametersRef) {
	 		listener.enterParametersRef(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitParametersRef) {
	 		listener.exitParametersRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitParametersRef) {
			return visitor.visitParametersRef(this);
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
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
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


export class ParameterContext extends ParserRuleContext {
	public _Label!: Token;
	public _Type!: TypeRefContext;
	public _Name!: Token;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public typeRef(): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, 0) as TypeRefContext;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, i);
	}
	public CONST(): TerminalNode {
		return this.getToken(IdlParser.CONST, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(IdlParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_parameter;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
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
	public OPTIONAL(): TerminalNode {
		return this.getToken(IdlParser.OPTIONAL, 0);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(IdlParser.DOT, i);
	}
	public LANGLE(): TerminalNode {
		return this.getToken(IdlParser.LANGLE, 0);
	}
	public typeRef_list(): TypeRefContext[] {
		return this.getTypedRuleContexts(TypeRefContext) as TypeRefContext[];
	}
	public typeRef(i: number): TypeRefContext {
		return this.getTypedRuleContext(TypeRefContext, i) as TypeRefContext;
	}
	public RANGLE(): TerminalNode {
		return this.getToken(IdlParser.RANGLE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(IdlParser.COMMA, i);
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
