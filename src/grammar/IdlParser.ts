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
	public static readonly SEMICOLON = 13;
	public static readonly CPP = 14;
	public static readonly JAVA = 15;
	public static readonly KMP = 16;
	public static readonly OBJC = 17;
	public static readonly SWIFT = 18;
	public static readonly DART = 19;
	public static readonly PROTOCONV = 20;
	public static readonly TYPE_PREFIX = 21;
	public static readonly IMPORT = 22;
	public static readonly CONST = 23;
	public static readonly OPTIONAL = 24;
	public static readonly BG_THREAD = 25;
	public static readonly ANY_THREAD = 26;
	public static readonly VECTOR = 27;
	public static readonly DICTIONARY = 28;
	public static readonly TYPE_DICTIONARY = 29;
	public static readonly BASED_ON = 30;
	public static readonly SERIALIZABLE = 31;
	public static readonly ENUM = 32;
	public static readonly BITFIELD = 33;
	public static readonly VARIANT = 34;
	public static readonly STRUCT = 35;
	public static readonly LITE = 36;
	public static readonly OPTIONS = 37;
	public static readonly ABSTRACT = 38;
	public static readonly INTERFACE = 39;
	public static readonly VIRTUAL = 40;
	public static readonly VIEW_DELEGATE = 41;
	public static readonly WEAK_REF = 42;
	public static readonly SHARED_REF = 43;
	public static readonly GEN = 44;
	public static readonly READONLY = 45;
	public static readonly NATIVE = 46;
	public static readonly STATIC = 47;
	public static readonly LISTENER = 48;
	public static readonly LAMBDA = 49;
	public static readonly STRONG_REF = 50;
	public static readonly PLATFORM = 51;
	public static readonly ASSIGN = 52;
	public static readonly LSHIFT = 53;
	public static readonly BINOR = 54;
	public static readonly INT_LITERAL = 55;
	public static readonly FLOAT_LITERAL = 56;
	public static readonly DOUBLE_LITERAL = 57;
	public static readonly STR_LITERAL = 58;
	public static readonly BOOL_LITERAL = 59;
	public static readonly NEWLINE = 60;
	public static readonly SPACE = 61;
	public static readonly IDENTIFIER = 62;
	public static readonly MULTI_END_COMMENT = 63;
	public static readonly SINGLE_COMMERCIAL = 64;
	public static readonly SINGLE_INTERNAL = 65;
	public static readonly SINGLE_DEPRECATED = 66;
	public static readonly SIGNLE_UNDOCUMENTED = 67;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_programm = 0;
	public static readonly RULE_top_decl = 1;
	public static readonly RULE_import_expr = 2;
	public static readonly RULE_type_prefix = 3;
	public static readonly RULE_documentation = 4;
	public static readonly RULE_documentation_tag = 5;
	public static readonly RULE_internal_decl = 6;
	public static readonly RULE_interface_decl = 7;
	public static readonly RULE_interface_ownership = 8;
	public static readonly RULE_enum_decl = 9;
	public static readonly RULE_variant_decl = 10;
	public static readonly RULE_struct_decl = 11;
	public static readonly RULE_struct_kind = 12;
	public static readonly RULE_listener_decl = 13;
	public static readonly RULE_function_decl = 14;
	public static readonly RULE_parameters_decl = 15;
	public static readonly RULE_property_decl = 16;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'{'", "'}'", 
                                                            "'('", "')'", 
                                                            "','", "';'", 
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
                                                            null, "'*/'", 
                                                            "'@commercial'", 
                                                            "'@internal'", 
                                                            "'@deprecated'", 
                                                            "'@undocumented'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "DOC_BEGIN", 
                                                             "DOC_END", 
                                                             "DOC_TEXT", 
                                                             "DOC_INTERNAL", 
                                                             "DOC_COMMERCIAL", 
                                                             "DOC_DEPRECATED", 
                                                             "DOC_UNDOCUMENTED", 
                                                             "LBRACE", "RBRACE", 
                                                             "LPAREN", "RPAREN", 
                                                             "COMMA", "SEMICOLON", 
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
                                                             "MULTI_END_COMMENT", 
                                                             "SINGLE_COMMERCIAL", 
                                                             "SINGLE_INTERNAL", 
                                                             "SINGLE_DEPRECATED", 
                                                             "SIGNLE_UNDOCUMENTED" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programm", "top_decl", "import_expr", "type_prefix", "documentation", 
		"documentation_tag", "internal_decl", "interface_decl", "interface_ownership", 
		"enum_decl", "variant_decl", "struct_decl", "struct_kind", "listener_decl", 
		"function_decl", "parameters_decl", "property_decl",
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
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 34;
				this.type_prefix();
				}
			}

			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 37;
				this.import_expr();
				}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 46;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===31 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 348095) !== 0)) {
				{
				{
				this.state = 43;
				this.top_decl();
				}
				}
				this.state = 48;
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
	public top_decl(): Top_declContext {
		let localctx: Top_declContext = new Top_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, IdlParser.RULE_top_decl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1) {
				{
				this.state = 49;
				this.documentation();
				}
			}

			this.state = 57;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
			case 46:
				{
				this.state = 52;
				this.interface_decl();
				}
				break;
			case 32:
			case 33:
				{
				this.state = 53;
				this.enum_decl();
				}
				break;
			case 34:
				{
				this.state = 54;
				this.variant_decl();
				}
				break;
			case 31:
			case 35:
			case 36:
			case 37:
				{
				this.state = 55;
				this.struct_decl();
				}
				break;
			case 48:
			case 50:
				{
				this.state = 56;
				this.listener_decl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 59;
			this.match(IdlParser.IDENTIFIER);
			this.state = 60;
			this.match(IdlParser.LBRACE);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===31 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 1074089919) !== 0)) {
				{
				this.state = 63;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 1:
				case 31:
				case 32:
				case 33:
				case 34:
				case 35:
				case 36:
				case 37:
				case 39:
				case 40:
				case 41:
				case 42:
				case 43:
				case 46:
				case 48:
				case 50:
					{
					this.state = 61;
					this.top_decl();
					}
					break;
				case 62:
					{
					this.state = 62;
					this.internal_decl();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
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
	public import_expr(): Import_exprContext {
		let localctx: Import_exprContext = new Import_exprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, IdlParser.RULE_import_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 70;
			this.match(IdlParser.IMPORT);
			this.state = 71;
			this.match(IdlParser.STR_LITERAL);
			this.state = 72;
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
	public type_prefix(): Type_prefixContext {
		let localctx: Type_prefixContext = new Type_prefixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, IdlParser.RULE_type_prefix);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			this.match(IdlParser.TYPE_PREFIX);
			this.state = 75;
			this.match(IdlParser.IDENTIFIER);
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
	public documentation(): DocumentationContext {
		let localctx: DocumentationContext = new DocumentationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, IdlParser.RULE_documentation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 78;
			this.match(IdlParser.DOC_BEGIN);
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 248) !== 0)) {
				{
				this.state = 81;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 3:
					{
					this.state = 79;
					this.match(IdlParser.DOC_TEXT);
					}
					break;
				case 4:
				case 5:
				case 6:
				case 7:
					{
					this.state = 80;
					this.documentation_tag();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 86;
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
	public documentation_tag(): Documentation_tagContext {
		let localctx: Documentation_tagContext = new Documentation_tagContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, IdlParser.RULE_documentation_tag);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
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
	public internal_decl(): Internal_declContext {
		let localctx: Internal_declContext = new Internal_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, IdlParser.RULE_internal_decl);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 90;
				this.function_decl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 91;
				this.property_decl();
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
	public interface_decl(): Interface_declContext {
		let localctx: Interface_declContext = new Interface_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, IdlParser.RULE_interface_decl);
		let _la: number;
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 39:
			case 40:
			case 41:
			case 42:
			case 43:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===40) {
					{
					this.state = 94;
					this.match(IdlParser.VIRTUAL);
					}
				}

				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===41) {
					{
					this.state = 97;
					this.match(IdlParser.VIEW_DELEGATE);
					}
				}

				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===42 || _la===43) {
					{
					this.state = 100;
					this.interface_ownership();
					}
				}

				this.state = 103;
				this.match(IdlParser.INTERFACE);
				}
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 2);
				{
				{
				this.state = 104;
				this.match(IdlParser.NATIVE);
				this.state = 105;
				this.match(IdlParser.LISTENER);
				}
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
	public interface_ownership(): Interface_ownershipContext {
		let localctx: Interface_ownershipContext = new Interface_ownershipContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, IdlParser.RULE_interface_ownership);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
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
	public enum_decl(): Enum_declContext {
		let localctx: Enum_declContext = new Enum_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, IdlParser.RULE_enum_decl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===33) {
				{
				this.state = 110;
				this.match(IdlParser.BITFIELD);
				}
			}

			this.state = 113;
			this.match(IdlParser.ENUM);
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
	public variant_decl(): Variant_declContext {
		let localctx: Variant_declContext = new Variant_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, IdlParser.RULE_variant_decl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.match(IdlParser.VARIANT);
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
	public struct_decl(): Struct_declContext {
		let localctx: Struct_declContext = new Struct_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, IdlParser.RULE_struct_decl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===31) {
				{
				this.state = 117;
				this.match(IdlParser.SERIALIZABLE);
				}
			}

			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36 || _la===37) {
				{
				this.state = 120;
				this.struct_kind();
				}
			}

			this.state = 123;
			this.match(IdlParser.STRUCT);
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
	public struct_kind(): Struct_kindContext {
		let localctx: Struct_kindContext = new Struct_kindContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, IdlParser.RULE_struct_kind);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 125;
			_la = this._input.LA(1);
			if(!(_la===36 || _la===37)) {
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
	public listener_decl(): Listener_declContext {
		let localctx: Listener_declContext = new Listener_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, IdlParser.RULE_listener_decl);
		try {
			this.state = 131;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 50:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 127;
				this.match(IdlParser.STRONG_REF);
				this.state = 128;
				this.match(IdlParser.PLATFORM);
				this.state = 129;
				this.match(IdlParser.INTERFACE);
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 130;
				this.match(IdlParser.LISTENER);
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
	public function_decl(): Function_declContext {
		let localctx: Function_declContext = new Function_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, IdlParser.RULE_function_decl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 133;
			localctx._RetType = this.match(IdlParser.IDENTIFIER);
			this.state = 134;
			localctx._Name = this.match(IdlParser.IDENTIFIER);
			this.state = 135;
			this.match(IdlParser.LPAREN);
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 136;
				this.parameters_decl();
				}
			}

			this.state = 139;
			this.match(IdlParser.RPAREN);
			this.state = 140;
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
	public parameters_decl(): Parameters_declContext {
		let localctx: Parameters_declContext = new Parameters_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, IdlParser.RULE_parameters_decl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			this.match(IdlParser.IDENTIFIER);
			this.state = 143;
			this.match(IdlParser.IDENTIFIER);
			this.state = 149;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 144;
					this.match(IdlParser.COMMA);
					this.state = 145;
					this.match(IdlParser.IDENTIFIER);
					this.state = 146;
					this.match(IdlParser.IDENTIFIER);
					}
					}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 152;
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
	public property_decl(): Property_declContext {
		let localctx: Property_declContext = new Property_declContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, IdlParser.RULE_property_decl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 155;
			this.match(IdlParser.IDENTIFIER);
			this.state = 156;
			this.match(IdlParser.IDENTIFIER);
			this.state = 157;
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

	public static readonly _serializedATN: number[] = [4,1,67,160,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	3,0,36,8,0,1,0,5,0,39,8,0,10,0,12,0,42,9,0,1,0,5,0,45,8,0,10,0,12,0,48,
	9,0,1,1,3,1,51,8,1,1,1,1,1,1,1,1,1,1,1,3,1,58,8,1,1,1,1,1,1,1,1,1,5,1,64,
	8,1,10,1,12,1,67,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,
	4,5,4,82,8,4,10,4,12,4,85,9,4,1,4,1,4,1,5,1,5,1,6,1,6,3,6,93,8,6,1,7,3,
	7,96,8,7,1,7,3,7,99,8,7,1,7,3,7,102,8,7,1,7,1,7,1,7,3,7,107,8,7,1,8,1,8,
	1,9,3,9,112,8,9,1,9,1,9,1,10,1,10,1,11,3,11,119,8,11,1,11,3,11,122,8,11,
	1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,13,3,13,132,8,13,1,14,1,14,1,14,1,
	14,3,14,138,8,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,5,15,148,8,15,
	10,15,12,15,151,9,15,1,15,3,15,154,8,15,1,16,1,16,1,16,1,16,1,16,0,0,17,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,3,1,0,4,7,1,0,42,43,1,0,
	36,37,166,0,35,1,0,0,0,2,50,1,0,0,0,4,70,1,0,0,0,6,74,1,0,0,0,8,78,1,0,
	0,0,10,88,1,0,0,0,12,92,1,0,0,0,14,106,1,0,0,0,16,108,1,0,0,0,18,111,1,
	0,0,0,20,115,1,0,0,0,22,118,1,0,0,0,24,125,1,0,0,0,26,131,1,0,0,0,28,133,
	1,0,0,0,30,142,1,0,0,0,32,155,1,0,0,0,34,36,3,6,3,0,35,34,1,0,0,0,35,36,
	1,0,0,0,36,40,1,0,0,0,37,39,3,4,2,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,
	0,0,0,40,41,1,0,0,0,41,46,1,0,0,0,42,40,1,0,0,0,43,45,3,2,1,0,44,43,1,0,
	0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,1,1,0,0,0,48,46,1,0,0,
	0,49,51,3,8,4,0,50,49,1,0,0,0,50,51,1,0,0,0,51,57,1,0,0,0,52,58,3,14,7,
	0,53,58,3,18,9,0,54,58,3,20,10,0,55,58,3,22,11,0,56,58,3,26,13,0,57,52,
	1,0,0,0,57,53,1,0,0,0,57,54,1,0,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,59,1,
	0,0,0,59,60,5,62,0,0,60,65,5,8,0,0,61,64,3,2,1,0,62,64,3,12,6,0,63,61,1,
	0,0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,
	0,0,67,65,1,0,0,0,68,69,5,9,0,0,69,3,1,0,0,0,70,71,5,22,0,0,71,72,5,58,
	0,0,72,73,5,13,0,0,73,5,1,0,0,0,74,75,5,21,0,0,75,76,5,62,0,0,76,77,5,13,
	0,0,77,7,1,0,0,0,78,83,5,1,0,0,79,82,5,3,0,0,80,82,3,10,5,0,81,79,1,0,0,
	0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,
	85,83,1,0,0,0,86,87,5,2,0,0,87,9,1,0,0,0,88,89,7,0,0,0,89,11,1,0,0,0,90,
	93,3,28,14,0,91,93,3,32,16,0,92,90,1,0,0,0,92,91,1,0,0,0,93,13,1,0,0,0,
	94,96,5,40,0,0,95,94,1,0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,97,99,5,41,0,0,
	98,97,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,102,3,16,8,0,101,100,1,0,
	0,0,101,102,1,0,0,0,102,103,1,0,0,0,103,107,5,39,0,0,104,105,5,46,0,0,105,
	107,5,48,0,0,106,95,1,0,0,0,106,104,1,0,0,0,107,15,1,0,0,0,108,109,7,1,
	0,0,109,17,1,0,0,0,110,112,5,33,0,0,111,110,1,0,0,0,111,112,1,0,0,0,112,
	113,1,0,0,0,113,114,5,32,0,0,114,19,1,0,0,0,115,116,5,34,0,0,116,21,1,0,
	0,0,117,119,5,31,0,0,118,117,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,
	122,3,24,12,0,121,120,1,0,0,0,121,122,1,0,0,0,122,123,1,0,0,0,123,124,5,
	35,0,0,124,23,1,0,0,0,125,126,7,2,0,0,126,25,1,0,0,0,127,128,5,50,0,0,128,
	129,5,51,0,0,129,132,5,39,0,0,130,132,5,48,0,0,131,127,1,0,0,0,131,130,
	1,0,0,0,132,27,1,0,0,0,133,134,5,62,0,0,134,135,5,62,0,0,135,137,5,10,0,
	0,136,138,3,30,15,0,137,136,1,0,0,0,137,138,1,0,0,0,138,139,1,0,0,0,139,
	140,5,11,0,0,140,141,5,13,0,0,141,29,1,0,0,0,142,143,5,62,0,0,143,149,5,
	62,0,0,144,145,5,12,0,0,145,146,5,62,0,0,146,148,5,62,0,0,147,144,1,0,0,
	0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,153,1,0,0,0,151,149,
	1,0,0,0,152,154,5,12,0,0,153,152,1,0,0,0,153,154,1,0,0,0,154,31,1,0,0,0,
	155,156,5,62,0,0,156,157,5,62,0,0,157,158,5,13,0,0,158,33,1,0,0,0,21,35,
	40,46,50,57,63,65,81,83,92,95,98,101,106,111,118,121,131,137,149,153];

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
	public type_prefix(): Type_prefixContext {
		return this.getTypedRuleContext(Type_prefixContext, 0) as Type_prefixContext;
	}
	public import_expr_list(): Import_exprContext[] {
		return this.getTypedRuleContexts(Import_exprContext) as Import_exprContext[];
	}
	public import_expr(i: number): Import_exprContext {
		return this.getTypedRuleContext(Import_exprContext, i) as Import_exprContext;
	}
	public top_decl_list(): Top_declContext[] {
		return this.getTypedRuleContexts(Top_declContext) as Top_declContext[];
	}
	public top_decl(i: number): Top_declContext {
		return this.getTypedRuleContext(Top_declContext, i) as Top_declContext;
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


export class Top_declContext extends ParserRuleContext {
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
	public interface_decl(): Interface_declContext {
		return this.getTypedRuleContext(Interface_declContext, 0) as Interface_declContext;
	}
	public enum_decl(): Enum_declContext {
		return this.getTypedRuleContext(Enum_declContext, 0) as Enum_declContext;
	}
	public variant_decl(): Variant_declContext {
		return this.getTypedRuleContext(Variant_declContext, 0) as Variant_declContext;
	}
	public struct_decl(): Struct_declContext {
		return this.getTypedRuleContext(Struct_declContext, 0) as Struct_declContext;
	}
	public listener_decl(): Listener_declContext {
		return this.getTypedRuleContext(Listener_declContext, 0) as Listener_declContext;
	}
	public documentation(): DocumentationContext {
		return this.getTypedRuleContext(DocumentationContext, 0) as DocumentationContext;
	}
	public top_decl_list(): Top_declContext[] {
		return this.getTypedRuleContexts(Top_declContext) as Top_declContext[];
	}
	public top_decl(i: number): Top_declContext {
		return this.getTypedRuleContext(Top_declContext, i) as Top_declContext;
	}
	public internal_decl_list(): Internal_declContext[] {
		return this.getTypedRuleContexts(Internal_declContext) as Internal_declContext[];
	}
	public internal_decl(i: number): Internal_declContext {
		return this.getTypedRuleContext(Internal_declContext, i) as Internal_declContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_top_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterTop_decl) {
	 		listener.enterTop_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitTop_decl) {
	 		listener.exitTop_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitTop_decl) {
			return visitor.visitTop_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_exprContext extends ParserRuleContext {
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
    	return IdlParser.RULE_import_expr;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterImport_expr) {
	 		listener.enterImport_expr(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitImport_expr) {
	 		listener.exitImport_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitImport_expr) {
			return visitor.visitImport_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_prefixContext extends ParserRuleContext {
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
    	return IdlParser.RULE_type_prefix;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterType_prefix) {
	 		listener.enterType_prefix(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitType_prefix) {
	 		listener.exitType_prefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitType_prefix) {
			return visitor.visitType_prefix(this);
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
	public documentation_tag_list(): Documentation_tagContext[] {
		return this.getTypedRuleContexts(Documentation_tagContext) as Documentation_tagContext[];
	}
	public documentation_tag(i: number): Documentation_tagContext {
		return this.getTypedRuleContext(Documentation_tagContext, i) as Documentation_tagContext;
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


export class Documentation_tagContext extends ParserRuleContext {
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
    	return IdlParser.RULE_documentation_tag;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterDocumentation_tag) {
	 		listener.enterDocumentation_tag(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitDocumentation_tag) {
	 		listener.exitDocumentation_tag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitDocumentation_tag) {
			return visitor.visitDocumentation_tag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Internal_declContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_decl(): Function_declContext {
		return this.getTypedRuleContext(Function_declContext, 0) as Function_declContext;
	}
	public property_decl(): Property_declContext {
		return this.getTypedRuleContext(Property_declContext, 0) as Property_declContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_internal_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterInternal_decl) {
	 		listener.enterInternal_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitInternal_decl) {
	 		listener.exitInternal_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitInternal_decl) {
			return visitor.visitInternal_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_declContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTERFACE(): TerminalNode {
		return this.getToken(IdlParser.INTERFACE, 0);
	}
	public VIRTUAL(): TerminalNode {
		return this.getToken(IdlParser.VIRTUAL, 0);
	}
	public VIEW_DELEGATE(): TerminalNode {
		return this.getToken(IdlParser.VIEW_DELEGATE, 0);
	}
	public interface_ownership(): Interface_ownershipContext {
		return this.getTypedRuleContext(Interface_ownershipContext, 0) as Interface_ownershipContext;
	}
	public NATIVE(): TerminalNode {
		return this.getToken(IdlParser.NATIVE, 0);
	}
	public LISTENER(): TerminalNode {
		return this.getToken(IdlParser.LISTENER, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_interface_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterInterface_decl) {
	 		listener.enterInterface_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitInterface_decl) {
	 		listener.exitInterface_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitInterface_decl) {
			return visitor.visitInterface_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_ownershipContext extends ParserRuleContext {
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
    	return IdlParser.RULE_interface_ownership;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterInterface_ownership) {
	 		listener.enterInterface_ownership(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitInterface_ownership) {
	 		listener.exitInterface_ownership(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitInterface_ownership) {
			return visitor.visitInterface_ownership(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_declContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(IdlParser.ENUM, 0);
	}
	public BITFIELD(): TerminalNode {
		return this.getToken(IdlParser.BITFIELD, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_enum_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterEnum_decl) {
	 		listener.enterEnum_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitEnum_decl) {
	 		listener.exitEnum_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitEnum_decl) {
			return visitor.visitEnum_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_declContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VARIANT(): TerminalNode {
		return this.getToken(IdlParser.VARIANT, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_variant_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterVariant_decl) {
	 		listener.enterVariant_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitVariant_decl) {
	 		listener.exitVariant_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitVariant_decl) {
			return visitor.visitVariant_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_declContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRUCT(): TerminalNode {
		return this.getToken(IdlParser.STRUCT, 0);
	}
	public SERIALIZABLE(): TerminalNode {
		return this.getToken(IdlParser.SERIALIZABLE, 0);
	}
	public struct_kind(): Struct_kindContext {
		return this.getTypedRuleContext(Struct_kindContext, 0) as Struct_kindContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_struct_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterStruct_decl) {
	 		listener.enterStruct_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitStruct_decl) {
	 		listener.exitStruct_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitStruct_decl) {
			return visitor.visitStruct_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_kindContext extends ParserRuleContext {
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
    	return IdlParser.RULE_struct_kind;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterStruct_kind) {
	 		listener.enterStruct_kind(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitStruct_kind) {
	 		listener.exitStruct_kind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitStruct_kind) {
			return visitor.visitStruct_kind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Listener_declContext extends ParserRuleContext {
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
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
    public get ruleIndex(): number {
    	return IdlParser.RULE_listener_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterListener_decl) {
	 		listener.enterListener_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitListener_decl) {
	 		listener.exitListener_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitListener_decl) {
			return visitor.visitListener_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declContext extends ParserRuleContext {
	public _RetType!: Token;
	public _Name!: Token;
	constructor(parser?: IdlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
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
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(IdlParser.IDENTIFIER, i);
	}
	public parameters_decl(): Parameters_declContext {
		return this.getTypedRuleContext(Parameters_declContext, 0) as Parameters_declContext;
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_function_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterFunction_decl) {
	 		listener.enterFunction_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitFunction_decl) {
	 		listener.exitFunction_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitFunction_decl) {
			return visitor.visitFunction_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameters_declContext extends ParserRuleContext {
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
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(IdlParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(IdlParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_parameters_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterParameters_decl) {
	 		listener.enterParameters_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitParameters_decl) {
	 		listener.exitParameters_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitParameters_decl) {
			return visitor.visitParameters_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Property_declContext extends ParserRuleContext {
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
	public SEMICOLON(): TerminalNode {
		return this.getToken(IdlParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return IdlParser.RULE_property_decl;
	}
	public enterRule(listener: IdlParserListener): void {
	    if(listener.enterProperty_decl) {
	 		listener.enterProperty_decl(this);
		}
	}
	public exitRule(listener: IdlParserListener): void {
	    if(listener.exitProperty_decl) {
	 		listener.exitProperty_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: IdlParserVisitor<Result>): Result {
		if (visitor.visitProperty_decl) {
			return visitor.visitProperty_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
