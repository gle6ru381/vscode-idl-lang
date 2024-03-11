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
	public static readonly BASED_ON = 31;
	public static readonly SERIALIZABLE = 32;
	public static readonly ENUM = 33;
	public static readonly BITFIELD = 34;
	public static readonly VARIANT = 35;
	public static readonly STRUCT = 36;
	public static readonly LITE = 37;
	public static readonly OPTIONS = 38;
	public static readonly ABSTRACT = 39;
	public static readonly INTERFACE = 40;
	public static readonly VIRTUAL = 41;
	public static readonly VIEW_DELEGATE = 42;
	public static readonly WEAK_REF = 43;
	public static readonly SHARED_REF = 44;
	public static readonly GEN = 45;
	public static readonly READONLY = 46;
	public static readonly NATIVE = 47;
	public static readonly STATIC = 48;
	public static readonly LISTENER = 49;
	public static readonly LAMBDA = 50;
	public static readonly STRONG_REF = 51;
	public static readonly PLATFORM = 52;
	public static readonly ASSIGN = 53;
	public static readonly LSHIFT = 54;
	public static readonly BINOR = 55;
	public static readonly INT_LITERAL = 56;
	public static readonly FLOAT_LITERAL = 57;
	public static readonly DOUBLE_LITERAL = 58;
	public static readonly STR_LITERAL = 59;
	public static readonly BOOL_LITERAL = 60;
	public static readonly NEWLINE = 61;
	public static readonly SPACE = 62;
	public static readonly IDENTIFIER = 63;
	public static readonly SINGLE_COMMERCIAL = 64;
	public static readonly SINGLE_INTERNAL = 65;
	public static readonly SINGLE_DEPRECATED = 66;
	public static readonly SIGNLE_UNDOCUMENTED = 67;
	public static readonly MULTI_END_COMMENT = 68;
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
	public static readonly RULE_parameter = 17;
	public static readonly RULE_propertyDecl = 18;
	public static readonly RULE_structFieldDecl = 19;
	public static readonly RULE_typeRef = 20;
	public static readonly RULE_customizableNameDecl = 21;
	public static readonly RULE_basedProtoTop = 22;
	public static readonly RULE_basedProtoInternal = 23;
	public static readonly RULE_sourceDecl = 24;
	public static readonly RULE_expr = 25;
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
		"parametersDecl", "parameter", "propertyDecl", "structFieldDecl", "typeRef", 
		"customizableNameDecl", "basedProtoTop", "basedProtoInternal", "sourceDecl", 
		"expr",
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
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 52;
				this.typePrefix();
				}
			}

			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===26) {
				{
				{
				this.state = 55;
				this.importExpr();
				}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===18 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2072575) !== 0)) {
				{
				{
				this.state = 61;
				this.topDecl();
				}
				}
				this.state = 66;
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
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 67;
				this.interfaceDecl();
				}
				break;
			case 2:
				{
				this.state = 68;
				this.enumDecl();
				}
				break;
			case 3:
				{
				this.state = 69;
				this.variantDecl();
				}
				break;
			case 4:
				{
				this.state = 70;
				this.structDecl();
				}
				break;
			case 5:
				{
				this.state = 71;
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
			this.state = 74;
			this.match(IdlParser.IMPORT);
			this.state = 75;
			this.match(IdlParser.STR_LITERAL);
			this.state = 76;
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
			this.state = 78;
			this.match(IdlParser.TYPE_PREFIX);
			this.state = 79;
			this.match(IdlParser.IDENTIFIER);
			this.state = 80;
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
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 82;
				this.match(IdlParser.DOC_BEGIN);
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 248) !== 0)) {
					{
					this.state = 85;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 3:
						{
						this.state = 83;
						this.match(IdlParser.DOC_TEXT);
						}
						break;
					case 4:
					case 5:
					case 6:
					case 7:
						{
						this.state = 84;
						this.documentationTag();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 89;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 90;
				this.match(IdlParser.DOC_END);
				}
				}
				this.state = 93;
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
			this.state = 95;
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
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 97;
				this.documentation();
				}
			}

			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 40:
			case 41:
			case 42:
			case 43:
			case 44:
			case 48:
				{
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===48) {
					{
					this.state = 100;
					this.match(IdlParser.STATIC);
					}
				}

				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===41) {
					{
					this.state = 103;
					this.match(IdlParser.VIRTUAL);
					}
				}

				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42) {
					{
					this.state = 106;
					this.match(IdlParser.VIEW_DELEGATE);
					}
				}

				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===43 || _la===44) {
					{
					this.state = 109;
					this.interfaceOwnership();
					}
				}

				this.state = 112;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 47:
				{
				this.state = 113;
				this.match(IdlParser.NATIVE);
				this.state = 114;
				this.match(IdlParser.LISTENER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 117;
			this.match(IdlParser.IDENTIFIER);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 118;
				this.match(IdlParser.LPAREN);
				this.state = 119;
				this.customizableNameDecl();
				this.state = 120;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 124;
				this.match(IdlParser.COLON);
				this.state = 125;
				localctx._Parent = this.typeRef();
				}
			}

			this.state = 128;
			this.match(IdlParser.LBRACE);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268705794) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2149564415) !== 0)) {
				{
				this.state = 132;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 129;
					this.functionDecl();
					}
					break;
				case 2:
					{
					this.state = 130;
					this.propertyDecl();
					}
					break;
				case 3:
					{
					this.state = 131;
					this.topDecl();
					}
					break;
				}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 137;
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
			this.state = 139;
			_la = this._input.LA(1);
			if(!(_la===43 || _la===44)) {
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
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 141;
				this.documentation();
				}
			}

			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 144;
				this.sourceDecl();
				}
			}

			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 147;
				this.match(IdlParser.BITFIELD);
				}
			}

			this.state = 150;
			this.match(IdlParser.ENUM);
			this.state = 151;
			this.match(IdlParser.IDENTIFIER);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 152;
				this.match(IdlParser.LPAREN);
				this.state = 153;
				this.customizableNameDecl();
				this.state = 154;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 158;
				this.basedProtoTop();
				}
			}

			this.state = 161;
			this.match(IdlParser.LBRACE);
			this.state = 162;
			this.enumFieldsDecl();
			this.state = 163;
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
			this.state = 165;
			this.enumField();
			this.state = 170;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 166;
					this.match(IdlParser.COMMA);
					this.state = 167;
					this.enumField();
					}
					}
				}
				this.state = 172;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			}
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 173;
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
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 176;
				this.documentation();
				}
			}

			this.state = 179;
			this.match(IdlParser.IDENTIFIER);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 180;
				this.match(IdlParser.ASSIGN);
				this.state = 181;
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
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 184;
				this.documentation();
				}
			}

			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 187;
				this.sourceDecl();
				}
			}

			this.state = 190;
			this.match(IdlParser.VARIANT);
			this.state = 191;
			this.match(IdlParser.IDENTIFIER);
			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 192;
				this.match(IdlParser.LPAREN);
				this.state = 193;
				this.customizableNameDecl();
				this.state = 194;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 198;
			this.match(IdlParser.LBRACE);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268443650) !== 0) || _la===63) {
				{
				{
				this.state = 199;
				this.structFieldDecl();
				}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 205;
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
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 207;
				this.documentation();
				}
			}

			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 210;
				this.sourceDecl();
				}
			}

			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===39) {
				{
				this.state = 213;
				this.match(IdlParser.ABSTRACT);
				}
			}

			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 216;
				this.match(IdlParser.SERIALIZABLE);
				}
			}

			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37 || _la===38) {
				{
				this.state = 219;
				this.structKind();
				}
			}

			this.state = 222;
			this.match(IdlParser.STRUCT);
			this.state = 223;
			this.match(IdlParser.IDENTIFIER);
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 224;
				this.match(IdlParser.COLON);
				this.state = 225;
				localctx._Parent = this.typeRef();
				}
			}

			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 228;
				this.match(IdlParser.LPAREN);
				this.state = 229;
				this.customizableNameDecl();
				this.state = 230;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 234;
				this.basedProtoTop();
				}
			}

			this.state = 237;
			this.match(IdlParser.LBRACE);
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268705794) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2149556223) !== 0)) {
				{
				this.state = 240;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 238;
					this.topDecl();
					}
					break;
				case 2:
					{
					this.state = 239;
					this.structFieldDecl();
					}
					break;
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 245;
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
			this.state = 247;
			_la = this._input.LA(1);
			if(!(_la===37 || _la===38)) {
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
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 249;
				this.documentation();
				}
			}

			this.state = 261;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 51:
			case 52:
				{
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===51) {
					{
					this.state = 252;
					this.match(IdlParser.STRONG_REF);
					}
				}

				this.state = 255;
				this.match(IdlParser.PLATFORM);
				this.state = 256;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 49:
			case 50:
				{
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===50) {
					{
					this.state = 257;
					this.match(IdlParser.LAMBDA);
					}
				}

				this.state = 260;
				this.match(IdlParser.LISTENER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 263;
			this.match(IdlParser.IDENTIFIER);
			this.state = 268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 264;
				this.match(IdlParser.LPAREN);
				this.state = 265;
				this.customizableNameDecl();
				this.state = 266;
				this.match(IdlParser.RPAREN);
				}
			}

			this.state = 270;
			this.match(IdlParser.LBRACE);
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268705794) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 2149556223) !== 0)) {
				{
				this.state = 273;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 271;
					this.functionDecl();
					}
					break;
				case 2:
					{
					this.state = 272;
					this.topDecl();
					}
					break;
				}
				}
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 278;
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
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 280;
				this.documentation();
				}
			}

			this.state = 283;
			this.typeRef();
			this.state = 284;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 289;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 285;
				this.match(IdlParser.LANGLE);
				this.state = 286;
				this.customizableNameDecl();
				this.state = 287;
				this.match(IdlParser.RANGLE);
				}
			}

			this.state = 291;
			this.match(IdlParser.LPAREN);
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402661376) !== 0) || _la===63) {
				{
				this.state = 292;
				this.parametersDecl();
				}
			}

			this.state = 295;
			this.match(IdlParser.RPAREN);
			this.state = 296;
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
			this.state = 298;
			this.parameter();
			this.state = 303;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 299;
					this.match(IdlParser.COMMA);
					this.state = 300;
					this.parameter();
					}
					}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			}
			this.state = 307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 306;
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
		this.enterRule(localctx, 34, IdlParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===27) {
				{
				this.state = 309;
				this.match(IdlParser.CONST);
				}
			}

			this.state = 314;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 312;
				localctx._Label = this.match(IdlParser.IDENTIFIER);
				this.state = 313;
				this.match(IdlParser.COLON);
				}
				break;
			}
			this.state = 316;
			localctx._Type = this.typeRef();
			this.state = 317;
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
		this.enterRule(localctx, 36, IdlParser.RULE_propertyDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 319;
				this.documentation();
				}
			}

			this.state = 323;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 322;
				this.match(IdlParser.GEN);
				}
			}

			this.state = 325;
			this.typeRef();
			this.state = 326;
			this.match(IdlParser.IDENTIFIER);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
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
		this.enterRule(localctx, 38, IdlParser.RULE_structFieldDecl);
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

			this.state = 335;
			localctx._Type = this.typeRef();
			this.state = 336;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 337;
				localctx._Based = this.basedProtoInternal();
				}
			}

			this.state = 342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 340;
				this.match(IdlParser.ASSIGN);
				this.state = 341;
				localctx._Expr = this.expr(0);
				}
			}

			this.state = 344;
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
		this.enterRule(localctx, 40, IdlParser.RULE_typeRef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===28) {
				{
				this.state = 346;
				this.match(IdlParser.OPTIONAL);
				}
			}

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
			_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
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
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
			}
			this.state = 371;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 64, this._ctx) ) {
			case 1:
				{
				this.state = 360;
				this.match(IdlParser.LANGLE);
				this.state = 361;
				this.typeRef();
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===12) {
					{
					{
					this.state = 362;
					this.match(IdlParser.COMMA);
					this.state = 363;
					this.typeRef();
					}
					}
					this.state = 368;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 369;
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
		this.enterRule(localctx, 42, IdlParser.RULE_customizableNameDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 373;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16515072) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 374;
			this.match(IdlParser.COLON);
			this.state = 375;
			this.match(IdlParser.IDENTIFIER);
			this.state = 382;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 376;
					this.match(IdlParser.COMMA);
					this.state = 377;
					_la = this._input.LA(1);
					if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 16515072) !== 0))) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 378;
					this.match(IdlParser.COLON);
					this.state = 379;
					this.match(IdlParser.IDENTIFIER);
					}
					}
				}
				this.state = 384;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			}
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 385;
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
		this.enterRule(localctx, 44, IdlParser.RULE_basedProtoTop);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 388;
			this.match(IdlParser.BASED_ON);
			this.state = 389;
			this.match(IdlParser.STR_LITERAL);
			this.state = 390;
			this.match(IdlParser.COLON);
			this.state = 391;
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
		this.enterRule(localctx, 46, IdlParser.RULE_basedProtoInternal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 393;
			this.match(IdlParser.BASED_ON);
			this.state = 394;
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
		this.enterRule(localctx, 48, IdlParser.RULE_sourceDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 396;
			this.match(IdlParser.CPP);
			this.state = 397;
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
		let _startState: number = 50;
		this.enterRecursionRule(localctx, 50, IdlParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 405;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 56:
				{
				this.state = 400;
				this.match(IdlParser.INT_LITERAL);
				}
				break;
			case 59:
				{
				this.state = 401;
				this.match(IdlParser.STR_LITERAL);
				}
				break;
			case 57:
				{
				this.state = 402;
				this.match(IdlParser.FLOAT_LITERAL);
				}
				break;
			case 58:
				{
				this.state = 403;
				this.match(IdlParser.DOUBLE_LITERAL);
				}
				break;
			case 13:
			case 28:
			case 63:
				{
				this.state = 404;
				this.typeRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 418;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 416;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 407;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 408;
						this.match(IdlParser.BINOR);
						this.state = 409;
						this.expr(4);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 410;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 411;
						this.match(IdlParser.LSHIFT);
						this.state = 412;
						this.expr(3);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, IdlParser.RULE_expr);
						this.state = 413;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 414;
						this.match(IdlParser.ASSIGN);
						this.state = 415;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 420;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
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
		case 25:
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

	public static readonly _serializedATN: number[] = [4,1,68,422,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,1,0,3,0,54,8,0,1,0,5,0,57,8,0,10,0,12,0,60,9,0,1,0,5,0,63,
	8,0,10,0,12,0,66,9,0,1,1,1,1,1,1,1,1,1,1,3,1,73,8,1,1,2,1,2,1,2,1,2,1,3,
	1,3,1,3,1,3,1,4,1,4,1,4,5,4,86,8,4,10,4,12,4,89,9,4,1,4,4,4,92,8,4,11,4,
	12,4,93,1,5,1,5,1,6,3,6,99,8,6,1,6,3,6,102,8,6,1,6,3,6,105,8,6,1,6,3,6,
	108,8,6,1,6,3,6,111,8,6,1,6,1,6,1,6,3,6,116,8,6,1,6,1,6,1,6,1,6,1,6,3,6,
	123,8,6,1,6,1,6,3,6,127,8,6,1,6,1,6,1,6,1,6,5,6,133,8,6,10,6,12,6,136,9,
	6,1,6,1,6,1,7,1,7,1,8,3,8,143,8,8,1,8,3,8,146,8,8,1,8,3,8,149,8,8,1,8,1,
	8,1,8,1,8,1,8,1,8,3,8,157,8,8,1,8,3,8,160,8,8,1,8,1,8,1,8,1,8,1,9,1,9,1,
	9,5,9,169,8,9,10,9,12,9,172,9,9,1,9,3,9,175,8,9,1,10,3,10,178,8,10,1,10,
	1,10,1,10,3,10,183,8,10,1,11,3,11,186,8,11,1,11,3,11,189,8,11,1,11,1,11,
	1,11,1,11,1,11,1,11,3,11,197,8,11,1,11,1,11,5,11,201,8,11,10,11,12,11,204,
	9,11,1,11,1,11,1,12,3,12,209,8,12,1,12,3,12,212,8,12,1,12,3,12,215,8,12,
	1,12,3,12,218,8,12,1,12,3,12,221,8,12,1,12,1,12,1,12,1,12,3,12,227,8,12,
	1,12,1,12,1,12,1,12,3,12,233,8,12,1,12,3,12,236,8,12,1,12,1,12,1,12,5,12,
	241,8,12,10,12,12,12,244,9,12,1,12,1,12,1,13,1,13,1,14,3,14,251,8,14,1,
	14,3,14,254,8,14,1,14,1,14,1,14,3,14,259,8,14,1,14,3,14,262,8,14,1,14,1,
	14,1,14,1,14,1,14,3,14,269,8,14,1,14,1,14,1,14,5,14,274,8,14,10,14,12,14,
	277,9,14,1,14,1,14,1,15,3,15,282,8,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,
	290,8,15,1,15,1,15,3,15,294,8,15,1,15,1,15,1,15,1,16,1,16,1,16,5,16,302,
	8,16,10,16,12,16,305,9,16,1,16,3,16,308,8,16,1,17,3,17,311,8,17,1,17,1,
	17,3,17,315,8,17,1,17,1,17,1,17,1,18,3,18,321,8,18,1,18,3,18,324,8,18,1,
	18,1,18,1,18,3,18,329,8,18,1,18,1,18,1,19,3,19,334,8,19,1,19,1,19,1,19,
	3,19,339,8,19,1,19,1,19,3,19,343,8,19,1,19,1,19,1,20,3,20,348,8,20,1,20,
	3,20,351,8,20,1,20,1,20,1,20,5,20,356,8,20,10,20,12,20,359,9,20,1,20,1,
	20,1,20,1,20,5,20,365,8,20,10,20,12,20,368,9,20,1,20,1,20,3,20,372,8,20,
	1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,381,8,21,10,21,12,21,384,9,21,1,
	21,3,21,387,8,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,
	1,25,1,25,1,25,1,25,1,25,1,25,3,25,406,8,25,1,25,1,25,1,25,1,25,1,25,1,
	25,1,25,1,25,1,25,5,25,417,8,25,10,25,12,25,420,9,25,1,25,0,1,50,26,0,2,
	4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,0,
	4,1,0,4,7,1,0,43,44,1,0,37,38,1,0,18,23,473,0,53,1,0,0,0,2,72,1,0,0,0,4,
	74,1,0,0,0,6,78,1,0,0,0,8,91,1,0,0,0,10,95,1,0,0,0,12,98,1,0,0,0,14,139,
	1,0,0,0,16,142,1,0,0,0,18,165,1,0,0,0,20,177,1,0,0,0,22,185,1,0,0,0,24,
	208,1,0,0,0,26,247,1,0,0,0,28,250,1,0,0,0,30,281,1,0,0,0,32,298,1,0,0,0,
	34,310,1,0,0,0,36,320,1,0,0,0,38,333,1,0,0,0,40,347,1,0,0,0,42,373,1,0,
	0,0,44,388,1,0,0,0,46,393,1,0,0,0,48,396,1,0,0,0,50,405,1,0,0,0,52,54,3,
	6,3,0,53,52,1,0,0,0,53,54,1,0,0,0,54,58,1,0,0,0,55,57,3,4,2,0,56,55,1,0,
	0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,64,1,0,0,0,60,58,1,0,0,
	0,61,63,3,2,1,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,
	65,1,1,0,0,0,66,64,1,0,0,0,67,73,3,12,6,0,68,73,3,16,8,0,69,73,3,22,11,
	0,70,73,3,24,12,0,71,73,3,28,14,0,72,67,1,0,0,0,72,68,1,0,0,0,72,69,1,0,
	0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,3,1,0,0,0,74,75,5,26,0,0,75,76,5,59,
	0,0,76,77,5,15,0,0,77,5,1,0,0,0,78,79,5,25,0,0,79,80,5,63,0,0,80,81,5,15,
	0,0,81,7,1,0,0,0,82,87,5,1,0,0,83,86,5,3,0,0,84,86,3,10,5,0,85,83,1,0,0,
	0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,
	89,87,1,0,0,0,90,92,5,2,0,0,91,82,1,0,0,0,92,93,1,0,0,0,93,91,1,0,0,0,93,
	94,1,0,0,0,94,9,1,0,0,0,95,96,7,0,0,0,96,11,1,0,0,0,97,99,3,8,4,0,98,97,
	1,0,0,0,98,99,1,0,0,0,99,115,1,0,0,0,100,102,5,48,0,0,101,100,1,0,0,0,101,
	102,1,0,0,0,102,104,1,0,0,0,103,105,5,41,0,0,104,103,1,0,0,0,104,105,1,
	0,0,0,105,107,1,0,0,0,106,108,5,42,0,0,107,106,1,0,0,0,107,108,1,0,0,0,
	108,110,1,0,0,0,109,111,3,14,7,0,110,109,1,0,0,0,110,111,1,0,0,0,111,112,
	1,0,0,0,112,116,5,40,0,0,113,114,5,47,0,0,114,116,5,49,0,0,115,101,1,0,
	0,0,115,113,1,0,0,0,116,117,1,0,0,0,117,122,5,63,0,0,118,119,5,10,0,0,119,
	120,3,42,21,0,120,121,5,11,0,0,121,123,1,0,0,0,122,118,1,0,0,0,122,123,
	1,0,0,0,123,126,1,0,0,0,124,125,5,14,0,0,125,127,3,40,20,0,126,124,1,0,
	0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,134,5,8,0,0,129,133,3,30,15,0,130,
	133,3,36,18,0,131,133,3,2,1,0,132,129,1,0,0,0,132,130,1,0,0,0,132,131,1,
	0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,
	134,1,0,0,0,137,138,5,9,0,0,138,13,1,0,0,0,139,140,7,1,0,0,140,15,1,0,0,
	0,141,143,3,8,4,0,142,141,1,0,0,0,142,143,1,0,0,0,143,145,1,0,0,0,144,146,
	3,48,24,0,145,144,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,149,5,34,
	0,0,148,147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,151,5,33,0,0,151,
	156,5,63,0,0,152,153,5,10,0,0,153,154,3,42,21,0,154,155,5,11,0,0,155,157,
	1,0,0,0,156,152,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,160,3,44,22,
	0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,1,0,0,0,161,162,5,8,0,0,162,163,
	3,18,9,0,163,164,5,9,0,0,164,17,1,0,0,0,165,170,3,20,10,0,166,167,5,12,
	0,0,167,169,3,20,10,0,168,166,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,
	171,1,0,0,0,171,174,1,0,0,0,172,170,1,0,0,0,173,175,5,12,0,0,174,173,1,
	0,0,0,174,175,1,0,0,0,175,19,1,0,0,0,176,178,3,8,4,0,177,176,1,0,0,0,177,
	178,1,0,0,0,178,179,1,0,0,0,179,182,5,63,0,0,180,181,5,53,0,0,181,183,3,
	50,25,0,182,180,1,0,0,0,182,183,1,0,0,0,183,21,1,0,0,0,184,186,3,8,4,0,
	185,184,1,0,0,0,185,186,1,0,0,0,186,188,1,0,0,0,187,189,3,48,24,0,188,187,
	1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,191,5,35,0,0,191,196,5,63,0,
	0,192,193,5,10,0,0,193,194,3,42,21,0,194,195,5,11,0,0,195,197,1,0,0,0,196,
	192,1,0,0,0,196,197,1,0,0,0,197,198,1,0,0,0,198,202,5,8,0,0,199,201,3,38,
	19,0,200,199,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,
	205,1,0,0,0,204,202,1,0,0,0,205,206,5,9,0,0,206,23,1,0,0,0,207,209,3,8,
	4,0,208,207,1,0,0,0,208,209,1,0,0,0,209,211,1,0,0,0,210,212,3,48,24,0,211,
	210,1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,0,213,215,5,39,0,0,214,213,1,
	0,0,0,214,215,1,0,0,0,215,217,1,0,0,0,216,218,5,32,0,0,217,216,1,0,0,0,
	217,218,1,0,0,0,218,220,1,0,0,0,219,221,3,26,13,0,220,219,1,0,0,0,220,221,
	1,0,0,0,221,222,1,0,0,0,222,223,5,36,0,0,223,226,5,63,0,0,224,225,5,14,
	0,0,225,227,3,40,20,0,226,224,1,0,0,0,226,227,1,0,0,0,227,232,1,0,0,0,228,
	229,5,10,0,0,229,230,3,42,21,0,230,231,5,11,0,0,231,233,1,0,0,0,232,228,
	1,0,0,0,232,233,1,0,0,0,233,235,1,0,0,0,234,236,3,44,22,0,235,234,1,0,0,
	0,235,236,1,0,0,0,236,237,1,0,0,0,237,242,5,8,0,0,238,241,3,2,1,0,239,241,
	3,38,19,0,240,238,1,0,0,0,240,239,1,0,0,0,241,244,1,0,0,0,242,240,1,0,0,
	0,242,243,1,0,0,0,243,245,1,0,0,0,244,242,1,0,0,0,245,246,5,9,0,0,246,25,
	1,0,0,0,247,248,7,2,0,0,248,27,1,0,0,0,249,251,3,8,4,0,250,249,1,0,0,0,
	250,251,1,0,0,0,251,261,1,0,0,0,252,254,5,51,0,0,253,252,1,0,0,0,253,254,
	1,0,0,0,254,255,1,0,0,0,255,256,5,52,0,0,256,262,5,40,0,0,257,259,5,50,
	0,0,258,257,1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,262,5,49,0,0,261,
	253,1,0,0,0,261,258,1,0,0,0,262,263,1,0,0,0,263,268,5,63,0,0,264,265,5,
	10,0,0,265,266,3,42,21,0,266,267,5,11,0,0,267,269,1,0,0,0,268,264,1,0,0,
	0,268,269,1,0,0,0,269,270,1,0,0,0,270,275,5,8,0,0,271,274,3,30,15,0,272,
	274,3,2,1,0,273,271,1,0,0,0,273,272,1,0,0,0,274,277,1,0,0,0,275,273,1,0,
	0,0,275,276,1,0,0,0,276,278,1,0,0,0,277,275,1,0,0,0,278,279,5,9,0,0,279,
	29,1,0,0,0,280,282,3,8,4,0,281,280,1,0,0,0,281,282,1,0,0,0,282,283,1,0,
	0,0,283,284,3,40,20,0,284,289,5,63,0,0,285,286,5,16,0,0,286,287,3,42,21,
	0,287,288,5,17,0,0,288,290,1,0,0,0,289,285,1,0,0,0,289,290,1,0,0,0,290,
	291,1,0,0,0,291,293,5,10,0,0,292,294,3,32,16,0,293,292,1,0,0,0,293,294,
	1,0,0,0,294,295,1,0,0,0,295,296,5,11,0,0,296,297,5,15,0,0,297,31,1,0,0,
	0,298,303,3,34,17,0,299,300,5,12,0,0,300,302,3,34,17,0,301,299,1,0,0,0,
	302,305,1,0,0,0,303,301,1,0,0,0,303,304,1,0,0,0,304,307,1,0,0,0,305,303,
	1,0,0,0,306,308,5,12,0,0,307,306,1,0,0,0,307,308,1,0,0,0,308,33,1,0,0,0,
	309,311,5,27,0,0,310,309,1,0,0,0,310,311,1,0,0,0,311,314,1,0,0,0,312,313,
	5,63,0,0,313,315,5,14,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,316,1,0,0,
	0,316,317,3,40,20,0,317,318,5,63,0,0,318,35,1,0,0,0,319,321,3,8,4,0,320,
	319,1,0,0,0,320,321,1,0,0,0,321,323,1,0,0,0,322,324,5,45,0,0,323,322,1,
	0,0,0,323,324,1,0,0,0,324,325,1,0,0,0,325,326,3,40,20,0,326,328,5,63,0,
	0,327,329,5,46,0,0,328,327,1,0,0,0,328,329,1,0,0,0,329,330,1,0,0,0,330,
	331,5,15,0,0,331,37,1,0,0,0,332,334,3,8,4,0,333,332,1,0,0,0,333,334,1,0,
	0,0,334,335,1,0,0,0,335,336,3,40,20,0,336,338,5,63,0,0,337,339,3,46,23,
	0,338,337,1,0,0,0,338,339,1,0,0,0,339,342,1,0,0,0,340,341,5,53,0,0,341,
	343,3,50,25,0,342,340,1,0,0,0,342,343,1,0,0,0,343,344,1,0,0,0,344,345,5,
	15,0,0,345,39,1,0,0,0,346,348,5,28,0,0,347,346,1,0,0,0,347,348,1,0,0,0,
	348,350,1,0,0,0,349,351,5,13,0,0,350,349,1,0,0,0,350,351,1,0,0,0,351,352,
	1,0,0,0,352,357,5,63,0,0,353,354,5,13,0,0,354,356,5,63,0,0,355,353,1,0,
	0,0,356,359,1,0,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,371,1,0,0,0,359,
	357,1,0,0,0,360,361,5,16,0,0,361,366,3,40,20,0,362,363,5,12,0,0,363,365,
	3,40,20,0,364,362,1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,366,367,1,0,0,
	0,367,369,1,0,0,0,368,366,1,0,0,0,369,370,5,17,0,0,370,372,1,0,0,0,371,
	360,1,0,0,0,371,372,1,0,0,0,372,41,1,0,0,0,373,374,7,3,0,0,374,375,5,14,
	0,0,375,382,5,63,0,0,376,377,5,12,0,0,377,378,7,3,0,0,378,379,5,14,0,0,
	379,381,5,63,0,0,380,376,1,0,0,0,381,384,1,0,0,0,382,380,1,0,0,0,382,383,
	1,0,0,0,383,386,1,0,0,0,384,382,1,0,0,0,385,387,5,12,0,0,386,385,1,0,0,
	0,386,387,1,0,0,0,387,43,1,0,0,0,388,389,5,31,0,0,389,390,5,59,0,0,390,
	391,5,14,0,0,391,392,3,40,20,0,392,45,1,0,0,0,393,394,5,31,0,0,394,395,
	5,63,0,0,395,47,1,0,0,0,396,397,5,18,0,0,397,398,5,59,0,0,398,49,1,0,0,
	0,399,400,6,25,-1,0,400,406,5,56,0,0,401,406,5,59,0,0,402,406,5,57,0,0,
	403,406,5,58,0,0,404,406,3,40,20,0,405,399,1,0,0,0,405,401,1,0,0,0,405,
	402,1,0,0,0,405,403,1,0,0,0,405,404,1,0,0,0,406,418,1,0,0,0,407,408,10,
	3,0,0,408,409,5,55,0,0,409,417,3,50,25,4,410,411,10,2,0,0,411,412,5,54,
	0,0,412,417,3,50,25,3,413,414,10,1,0,0,414,415,5,53,0,0,415,417,3,50,25,
	2,416,407,1,0,0,0,416,410,1,0,0,0,416,413,1,0,0,0,417,420,1,0,0,0,418,416,
	1,0,0,0,418,419,1,0,0,0,419,51,1,0,0,0,420,418,1,0,0,0,70,53,58,64,72,85,
	87,93,98,101,104,107,110,115,122,126,132,134,142,145,148,156,159,170,174,
	177,182,185,188,196,202,208,211,214,217,220,226,232,235,240,242,250,253,
	258,261,268,273,275,281,289,293,303,307,310,314,320,323,328,333,338,342,
	347,350,357,366,371,382,386,405,416,418];

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
