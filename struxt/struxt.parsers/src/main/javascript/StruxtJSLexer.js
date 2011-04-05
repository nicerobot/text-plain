// $ANTLR 3.3 Nov 30, 2010 12:45:30 /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g 2011-04-05 10:55:59

var StruxtJSLexer = function(input, state) {
// alternate constructor @todo
// public StruxtJSLexer(CharStream input)
// public StruxtJSLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa1 = new StruxtJSLexer.DFA1(this);
    this.dfa19 = new StruxtJSLexer.DFA19(this);
    this.dfa23 = new StruxtJSLexer.DFA23(this);
    StruxtJSLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(StruxtJSLexer, {
    EOF: -1,
    T__16: 16,
    T__17: 17,
    T__18: 18,
    T__19: 19,
    T__20: 20,
    T__21: 21,
    T__22: 22,
    T__23: 23,
    T__24: 24,
    T__25: 25,
    T__26: 26,
    T__27: 27,
    T__28: 28,
    T__29: 29,
    DOC: 4,
    XML: 5,
    STR: 6,
    ID: 7,
    OP: 8,
    INT: 9,
    FLOAT: 10,
    CHAR: 11,
    COMMENT: 12,
    WS: 13,
    EXPONENT: 14,
    HEX_DIGIT: 15
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(StruxtJSLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__16 : 16,
    T__17 : 17,
    T__18 : 18,
    T__19 : 19,
    T__20 : 20,
    T__21 : 21,
    T__22 : 22,
    T__23 : 23,
    T__24 : 24,
    T__25 : 25,
    T__26 : 26,
    T__27 : 27,
    T__28 : 28,
    T__29 : 29,
    DOC : 4,
    XML : 5,
    STR : 6,
    ID : 7,
    OP : 8,
    INT : 9,
    FLOAT : 10,
    CHAR : 11,
    COMMENT : 12,
    WS : 13,
    EXPONENT : 14,
    HEX_DIGIT : 15,
    getGrammarFileName: function() { return "/Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g"; }
});
org.antlr.lang.augmentObject(StruxtJSLexer.prototype, {
    // $ANTLR start T__16
    mT__16: function()  {
        try {
            var _type = this.T__16;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:7: ( '.' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:7:9: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__16",

    // $ANTLR start T__17
    mT__17: function()  {
        try {
            var _type = this.T__17;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:7: ( '@' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:8:9: '@'
            this.match('@'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__17",

    // $ANTLR start T__18
    mT__18: function()  {
        try {
            var _type = this.T__18;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:7: ( '\\\\' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:9:9: '\\\\'
            this.match('\\'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__18",

    // $ANTLR start T__19
    mT__19: function()  {
        try {
            var _type = this.T__19;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:10:7: ( '{' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:10:9: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__19",

    // $ANTLR start T__20
    mT__20: function()  {
        try {
            var _type = this.T__20;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:11:7: ( '}' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:11:9: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__20",

    // $ANTLR start T__21
    mT__21: function()  {
        try {
            var _type = this.T__21;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:12:7: ( ':' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:12:9: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__21",

    // $ANTLR start T__22
    mT__22: function()  {
        try {
            var _type = this.T__22;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:7: ( ';' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:13:9: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__22",

    // $ANTLR start T__23
    mT__23: function()  {
        try {
            var _type = this.T__23;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:7: ( '!' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:14:9: '!'
            this.match('!'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__23",

    // $ANTLR start T__24
    mT__24: function()  {
        try {
            var _type = this.T__24;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:15:7: ( '#' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:15:9: '#'
            this.match('#'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__24",

    // $ANTLR start T__25
    mT__25: function()  {
        try {
            var _type = this.T__25;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:16:7: ( ',' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:16:9: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__25",

    // $ANTLR start T__26
    mT__26: function()  {
        try {
            var _type = this.T__26;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:17:7: ( '(' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:17:9: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__26",

    // $ANTLR start T__27
    mT__27: function()  {
        try {
            var _type = this.T__27;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:18:7: ( ')' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:18:9: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__27",

    // $ANTLR start T__28
    mT__28: function()  {
        try {
            var _type = this.T__28;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:19:7: ( '[' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:19:9: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__28",

    // $ANTLR start T__29
    mT__29: function()  {
        try {
            var _type = this.T__29;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:20:7: ( ']' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:20:9: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__29",

    // $ANTLR start OP
    mOP: function()  {
        try {
            var _type = this.OP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:5: ( ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
            var alt1=22;
            alt1 = this.dfa1.predict(this.input);
            switch (alt1) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:8: '<'
                    this.match('<'); 


                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:14: '<<'
                    this.match("<<"); 



                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:21: '<-'
                    this.match("<-"); 



                    break;
                case 4 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:28: '<->'
                    this.match("<->"); 



                    break;
                case 5 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:36: '->'
                    this.match("->"); 



                    break;
                case 6 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:43: '>>'
                    this.match(">>"); 



                    break;
                case 7 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:50: '>'
                    this.match('>'); 


                    break;
                case 8 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:56: '~'
                    this.match('~'); 


                    break;
                case 9 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:62: '$'
                    this.match('$'); 


                    break;
                case 10 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:68: '%'
                    this.match('%'); 


                    break;
                case 11 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:74: '^'
                    this.match('^'); 


                    break;
                case 12 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:80: '&'
                    this.match('&'); 


                    break;
                case 13 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:54:86: '&&'
                    this.match("&&"); 



                    break;
                case 14 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:7: '*'
                    this.match('*'); 


                    break;
                case 15 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:13: '**'
                    this.match("**"); 



                    break;
                case 16 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:20: '-'
                    this.match('-'); 


                    break;
                case 17 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:26: '+'
                    this.match('+'); 


                    break;
                case 18 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:32: '='
                    this.match('='); 


                    break;
                case 19 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:38: '|'
                    this.match('|'); 


                    break;
                case 20 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:44: '||'
                    this.match("||"); 



                    break;
                case 21 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:51: '/'
                    this.match('/'); 


                    break;
                case 22 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:55:57: '?'
                    this.match('?'); 


                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OP",

    // $ANTLR start ID
    mID: function()  {
        try {
            var _type = this.ID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:59:5: ( ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )* )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:59:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:59:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( (LA2_0=='-'||(LA2_0>='0' && LA2_0<='9')||(LA2_0>='A' && LA2_0<='Z')||LA2_0=='_'||(LA2_0>='a' && LA2_0<='z')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:
                    if ( this.input.LA(1)=='-'||(this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop2;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ID",

    // $ANTLR start XML
    mXML: function()  {
        try {
            var _type = this.XML;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:63:5: ( '?xml' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:63:7: '?xml'
            this.match("?xml"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "XML",

    // $ANTLR start DOC
    mDOC: function()  {
        try {
            var _type = this.DOC;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:67:5: ( '!!!' ( options {greedy=false; } : . )+ '!!!' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:67:7: '!!!' ( options {greedy=false; } : . )+ '!!!'
            this.match("!!!"); 

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:67:13: ( options {greedy=false; } : . )+
            var cnt3=0;
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0=='!') ) {
                    var LA3_1 = this.input.LA(2);

                    if ( (LA3_1=='!') ) {
                        var LA3_3 = this.input.LA(3);

                        if ( (LA3_3=='!') ) {
                            alt3=2;
                        }
                        else if ( ((LA3_3>='\u0000' && LA3_3<=' ')||(LA3_3>='\"' && LA3_3<='\uFFFF')) ) {
                            alt3=1;
                        }


                    }
                    else if ( ((LA3_1>='\u0000' && LA3_1<=' ')||(LA3_1>='\"' && LA3_1<='\uFFFF')) ) {
                        alt3=1;
                    }


                }
                else if ( ((LA3_0>='\u0000' && LA3_0<=' ')||(LA3_0>='\"' && LA3_0<='\uFFFF')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:67:38: .
                    this.matchAny(); 


                    break;

                default :
                    if ( cnt3 >= 1 ) {
                        break loop3;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(3, this.input);
                        throw eee;
                }
                cnt3++;
            } while (true);

            this.match("!!!"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DOC",

    // $ANTLR start STR
    mSTR: function()  {
        try {
            var _type = this.STR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:5: ( '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"' | '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\'' | '\"' (~ ( '\"' ) )* '\"' )
            var alt7=3;
            var LA7_0 = this.input.LA(1);

            if ( (LA7_0=='\"') ) {
                var LA7_1 = this.input.LA(2);

                if ( (LA7_1=='\"') ) {
                    var LA7_3 = this.input.LA(3);

                    if ( (LA7_3=='\"') ) {
                        alt7=1;
                    }
                    else {
                        alt7=3;}
                }
                else if ( ((LA7_1>='\u0000' && LA7_1<='!')||(LA7_1>='#' && LA7_1<='\uFFFF')) ) {
                    alt7=3;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 7, 1, this.input);

                    throw nvae;
                }
            }
            else if ( (LA7_0=='\'') ) {
                alt7=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 7, 0, this.input);

                throw nvae;
            }
            switch (alt7) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:7: '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"'
                    this.match("\"\"\""); 

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:13: ( options {greedy=false; } : . )*
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( (LA4_0=='\"') ) {
                            var LA4_1 = this.input.LA(2);

                            if ( (LA4_1=='\"') ) {
                                var LA4_3 = this.input.LA(3);

                                if ( (LA4_3=='\"') ) {
                                    alt4=2;
                                }
                                else if ( ((LA4_3>='\u0000' && LA4_3<='!')||(LA4_3>='#' && LA4_3<='\uFFFF')) ) {
                                    alt4=1;
                                }


                            }
                            else if ( ((LA4_1>='\u0000' && LA4_1<='!')||(LA4_1>='#' && LA4_1<='\uFFFF')) ) {
                                alt4=1;
                            }


                        }
                        else if ( ((LA4_0>='\u0000' && LA4_0<='!')||(LA4_0>='#' && LA4_0<='\uFFFF')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:71:38: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop4;
                        }
                    } while (true);

                    this.match("\"\"\""); 



                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:72:7: '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\''
                    this.match("'''"); 

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:72:16: ( options {greedy=false; } : . )*
                    loop5:
                    do {
                        var alt5=2;
                        var LA5_0 = this.input.LA(1);

                        if ( (LA5_0=='\'') ) {
                            var LA5_1 = this.input.LA(2);

                            if ( (LA5_1=='\'') ) {
                                var LA5_3 = this.input.LA(3);

                                if ( (LA5_3=='\'') ) {
                                    alt5=2;
                                }
                                else if ( ((LA5_3>='\u0000' && LA5_3<='&')||(LA5_3>='(' && LA5_3<='\uFFFF')) ) {
                                    alt5=1;
                                }


                            }
                            else if ( ((LA5_1>='\u0000' && LA5_1<='&')||(LA5_1>='(' && LA5_1<='\uFFFF')) ) {
                                alt5=1;
                            }


                        }
                        else if ( ((LA5_0>='\u0000' && LA5_0<='&')||(LA5_0>='(' && LA5_0<='\uFFFF')) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:72:41: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop5;
                        }
                    } while (true);

                    this.match("'''"); 



                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:73:6: '\"' (~ ( '\"' ) )* '\"'
                    this.match('\"'); 
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:73:10: (~ ( '\"' ) )*
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( ((LA6_0>='\u0000' && LA6_0<='!')||(LA6_0>='#' && LA6_0<='\uFFFF')) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:73:10: ~ ( '\"' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop6;
                        }
                    } while (true);

                    this.match('\"'); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STR",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:77:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
            var alt11=2;
            var LA11_0 = this.input.LA(1);

            if ( (LA11_0=='/') ) {
                var LA11_1 = this.input.LA(2);

                if ( (LA11_1=='/') ) {
                    alt11=1;
                }
                else if ( (LA11_1=='*') ) {
                    alt11=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 11, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 11, 0, this.input);

                throw nvae;
            }
            switch (alt11) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:77:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
                    this.match("//"); 

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:77:14: (~ ( '\\n' | '\\r' ) )*
                    loop8:
                    do {
                        var alt8=2;
                        var LA8_0 = this.input.LA(1);

                        if ( ((LA8_0>='\u0000' && LA8_0<='\t')||(LA8_0>='\u000B' && LA8_0<='\f')||(LA8_0>='\u000E' && LA8_0<='\uFFFF')) ) {
                            alt8=1;
                        }


                        switch (alt8) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:77:14: ~ ( '\\n' | '\\r' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop8;
                        }
                    } while (true);

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:77:28: ( '\\r' )?
                    var alt9=2;
                    var LA9_0 = this.input.LA(1);

                    if ( (LA9_0=='\r') ) {
                        alt9=1;
                    }
                    switch (alt9) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:77:28: '\\r'
                            this.match('\r'); 


                            break;

                    }

                    this.match('\n'); 
                    _channel=HIDDEN;


                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:78:9: '/*' ( options {greedy=false; } : . )* '*/'
                    this.match("/*"); 

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:78:14: ( options {greedy=false; } : . )*
                    loop10:
                    do {
                        var alt10=2;
                        var LA10_0 = this.input.LA(1);

                        if ( (LA10_0=='*') ) {
                            var LA10_1 = this.input.LA(2);

                            if ( (LA10_1=='/') ) {
                                alt10=2;
                            }
                            else if ( ((LA10_1>='\u0000' && LA10_1<='.')||(LA10_1>='0' && LA10_1<='\uFFFF')) ) {
                                alt10=1;
                            }


                        }
                        else if ( ((LA10_0>='\u0000' && LA10_0<=')')||(LA10_0>='+' && LA10_0<='\uFFFF')) ) {
                            alt10=1;
                        }


                        switch (alt10) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:78:42: .
                            this.matchAny(); 


                            break;

                        default :
                            break loop10;
                        }
                    } while (true);

                    this.match("*/"); 

                    _channel=HIDDEN;


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:82:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:82:9: ( ' ' | '\\t' | '\\r' | '\\n' )
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    // $ANTLR start INT
    mINT: function()  {
        try {
            var _type = this.INT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:89:5: ( ( '0' .. '9' )+ )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:89:7: ( '0' .. '9' )+
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:89:7: ( '0' .. '9' )+
            var cnt12=0;
            loop12:
            do {
                var alt12=2;
                var LA12_0 = this.input.LA(1);

                if ( ((LA12_0>='0' && LA12_0<='9')) ) {
                    alt12=1;
                }


                switch (alt12) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:89:7: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt12 >= 1 ) {
                        break loop12;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(12, this.input);
                        throw eee;
                }
                cnt12++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INT",

    // $ANTLR start FLOAT
    mFLOAT: function()  {
        try {
            var _type = this.FLOAT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
            var alt19=3;
            alt19 = this.dfa19.predict(this.input);
            switch (alt19) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:9: ( '0' .. '9' )+
                    var cnt13=0;
                    loop13:
                    do {
                        var alt13=2;
                        var LA13_0 = this.input.LA(1);

                        if ( ((LA13_0>='0' && LA13_0<='9')) ) {
                            alt13=1;
                        }


                        switch (alt13) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:10: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt13 >= 1 ) {
                                break loop13;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(13, this.input);
                                throw eee;
                        }
                        cnt13++;
                    } while (true);

                    this.match('.'); 
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:25: ( '0' .. '9' )*
                    loop14:
                    do {
                        var alt14=2;
                        var LA14_0 = this.input.LA(1);

                        if ( ((LA14_0>='0' && LA14_0<='9')) ) {
                            alt14=1;
                        }


                        switch (alt14) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:26: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            break loop14;
                        }
                    } while (true);

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:37: ( EXPONENT )?
                    var alt15=2;
                    var LA15_0 = this.input.LA(1);

                    if ( (LA15_0=='E'||LA15_0=='e') ) {
                        alt15=1;
                    }
                    switch (alt15) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:93:37: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 2 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:94:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
                    this.match('.'); 
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:94:13: ( '0' .. '9' )+
                    var cnt16=0;
                    loop16:
                    do {
                        var alt16=2;
                        var LA16_0 = this.input.LA(1);

                        if ( ((LA16_0>='0' && LA16_0<='9')) ) {
                            alt16=1;
                        }


                        switch (alt16) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:94:14: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt16 >= 1 ) {
                                break loop16;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(16, this.input);
                                throw eee;
                        }
                        cnt16++;
                    } while (true);

                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:94:25: ( EXPONENT )?
                    var alt17=2;
                    var LA17_0 = this.input.LA(1);

                    if ( (LA17_0=='E'||LA17_0=='e') ) {
                        alt17=1;
                    }
                    switch (alt17) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:94:25: EXPONENT
                            this.mEXPONENT(); 


                            break;

                    }



                    break;
                case 3 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:95:9: ( '0' .. '9' )+ EXPONENT
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:95:9: ( '0' .. '9' )+
                    var cnt18=0;
                    loop18:
                    do {
                        var alt18=2;
                        var LA18_0 = this.input.LA(1);

                        if ( ((LA18_0>='0' && LA18_0<='9')) ) {
                            alt18=1;
                        }


                        switch (alt18) {
                        case 1 :
                            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:95:10: '0' .. '9'
                            this.matchRange('0','9'); 


                            break;

                        default :
                            if ( cnt18 >= 1 ) {
                                break loop18;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(18, this.input);
                                throw eee;
                        }
                        cnt18++;
                    } while (true);

                    this.mEXPONENT(); 


                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOAT",

    // $ANTLR start CHAR
    mCHAR: function()  {
        try {
            var _type = this.CHAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:99:5: ( '\\'' (~ ( '\\'' ) )+ '\\'' )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:99:8: '\\'' (~ ( '\\'' ) )+ '\\''
            this.match('\''); 
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:99:13: (~ ( '\\'' ) )+
            var cnt20=0;
            loop20:
            do {
                var alt20=2;
                var LA20_0 = this.input.LA(1);

                if ( ((LA20_0>='\u0000' && LA20_0<='&')||(LA20_0>='(' && LA20_0<='\uFFFF')) ) {
                    alt20=1;
                }


                switch (alt20) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:99:13: ~ ( '\\'' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt20 >= 1 ) {
                        break loop20;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(20, this.input);
                        throw eee;
                }
                cnt20++;
            } while (true);

            this.match('\''); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CHAR",

    // $ANTLR start EXPONENT
    mEXPONENT: function()  {
        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:104:5: ( ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+ )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:104:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
            if ( this.input.LA(1)=='E'||this.input.LA(1)=='e' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:104:17: ( '+' | '-' )?
            var alt21=2;
            var LA21_0 = this.input.LA(1);

            if ( (LA21_0=='+'||LA21_0=='-') ) {
                alt21=1;
            }
            switch (alt21) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:
                    if ( this.input.LA(1)=='+'||this.input.LA(1)=='-' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

            }

            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:104:28: ( '0' .. '9' )+
            var cnt22=0;
            loop22:
            do {
                var alt22=2;
                var LA22_0 = this.input.LA(1);

                if ( ((LA22_0>='0' && LA22_0<='9')) ) {
                    alt22=1;
                }


                switch (alt22) {
                case 1 :
                    // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:104:29: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt22 >= 1 ) {
                        break loop22;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(22, this.input);
                        throw eee;
                }
                cnt22++;
            } while (true);




        }
        finally {
        }
    },
    // $ANTLR end "EXPONENT",

    // $ANTLR start HEX_DIGIT
    mHEX_DIGIT: function()  {
        try {
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:109:5: ( ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' ) )
            // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:109:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='F')||(this.input.LA(1)>='a' && this.input.LA(1)<='f') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "HEX_DIGIT",

    mTokens: function() {
        // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:8: ( T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | OP | ID | XML | DOC | STR | COMMENT | WS | INT | FLOAT | CHAR )
        var alt23=24;
        alt23 = this.dfa23.predict(this.input);
        switch (alt23) {
            case 1 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:10: T__16
                this.mT__16(); 


                break;
            case 2 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:16: T__17
                this.mT__17(); 


                break;
            case 3 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:22: T__18
                this.mT__18(); 


                break;
            case 4 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:28: T__19
                this.mT__19(); 


                break;
            case 5 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:34: T__20
                this.mT__20(); 


                break;
            case 6 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:40: T__21
                this.mT__21(); 


                break;
            case 7 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:46: T__22
                this.mT__22(); 


                break;
            case 8 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:52: T__23
                this.mT__23(); 


                break;
            case 9 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:58: T__24
                this.mT__24(); 


                break;
            case 10 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:64: T__25
                this.mT__25(); 


                break;
            case 11 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:70: T__26
                this.mT__26(); 


                break;
            case 12 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:76: T__27
                this.mT__27(); 


                break;
            case 13 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:82: T__28
                this.mT__28(); 


                break;
            case 14 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:88: T__29
                this.mT__29(); 


                break;
            case 15 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:94: OP
                this.mOP(); 


                break;
            case 16 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:97: ID
                this.mID(); 


                break;
            case 17 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:100: XML
                this.mXML(); 


                break;
            case 18 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:104: DOC
                this.mDOC(); 


                break;
            case 19 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:108: STR
                this.mSTR(); 


                break;
            case 20 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:112: COMMENT
                this.mCOMMENT(); 


                break;
            case 21 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:120: WS
                this.mWS(); 


                break;
            case 22 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:123: INT
                this.mINT(); 


                break;
            case 23 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:127: FLOAT
                this.mFLOAT(); 


                break;
            case 24 :
                // /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtJS.g:1:133: CHAR
                this.mCHAR(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA1_eotS:
        "\u0001\uffff\u0001\u0011\u0001\u0013\u0001\u0015\u0004\uffff\u0001"+
    "\u0017\u0001\u0019\u0002\uffff\u0001\u001b\u0003\uffff\u0001\u001d\u000d"+
    "\uffff",
    DFA1_eofS:
        "\u001e\uffff",
    DFA1_minS:
        "\u0001\u0024\u0001\u002d\u0002\u003e\u0004\uffff\u0001\u0026\u0001"+
    "\u002a\u0002\uffff\u0001\u007c\u0003\uffff\u0001\u003e\u000d\uffff",
    DFA1_maxS:
        "\u0001\u007e\u0001\u003c\u0002\u003e\u0004\uffff\u0001\u0026\u0001"+
    "\u002a\u0002\uffff\u0001\u007c\u0003\uffff\u0001\u003e\u000d\uffff",
    DFA1_acceptS:
        "\u0004\uffff\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0002"+
    "\uffff\u0001\u0011\u0001\u0012\u0001\uffff\u0001\u0015\u0001\u0016\u0001"+
    "\u0002\u0001\uffff\u0001\u0001\u0001\u0005\u0001\u0010\u0001\u0006\u0001"+
    "\u0007\u0001\u000d\u0001\u000c\u0001\u000f\u0001\u000e\u0001\u0014\u0001"+
    "\u0013\u0001\u0004\u0001\u0003",
    DFA1_specialS:
        "\u001e\uffff}>",
    DFA1_transitionS: [
            "\u0001\u0005\u0001\u0006\u0001\u0008\u0003\uffff\u0001\u0009"+
            "\u0001\u000a\u0001\uffff\u0001\u0002\u0001\uffff\u0001\u000d"+
            "\u000c\uffff\u0001\u0001\u0001\u000b\u0001\u0003\u0001\u000e"+
            "\u001e\uffff\u0001\u0007\u001d\uffff\u0001\u000c\u0001\uffff"+
            "\u0001\u0004",
            "\u0001\u0010\u000e\uffff\u0001\u000f",
            "\u0001\u0012",
            "\u0001\u0014",
            "",
            "",
            "",
            "",
            "\u0001\u0016",
            "\u0001\u0018",
            "",
            "",
            "\u0001\u001a",
            "",
            "",
            "",
            "\u0001\u001c",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA1_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA1_eotS),
    DFA1_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA1_eofS),
    DFA1_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA1_minS),
    DFA1_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA1_maxS),
    DFA1_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA1_acceptS),
    DFA1_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA1_specialS),
    DFA1_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSLexer.DFA1_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA1_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSLexer.DFA1 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 1;
    this.eot = StruxtJSLexer.DFA1_eot;
    this.eof = StruxtJSLexer.DFA1_eof;
    this.min = StruxtJSLexer.DFA1_min;
    this.max = StruxtJSLexer.DFA1_max;
    this.accept = StruxtJSLexer.DFA1_accept;
    this.special = StruxtJSLexer.DFA1_special;
    this.transition = StruxtJSLexer.DFA1_transition;
};

org.antlr.lang.extend(StruxtJSLexer.DFA1, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "54:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )";
    },
    dummy: null
});
org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA19_eotS:
        "\u0005\uffff",
    DFA19_eofS:
        "\u0005\uffff",
    DFA19_minS:
        "\u0002\u002e\u0003\uffff",
    DFA19_maxS:
        "\u0001\u0039\u0001\u0065\u0003\uffff",
    DFA19_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0001\u0001\u0003",
    DFA19_specialS:
        "\u0005\uffff}>",
    DFA19_transitionS: [
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "\u0001\u0003\u0001\uffff\u000a\u0001\u000b\uffff\u0001\u0004"+
            "\u001f\uffff\u0001\u0004",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA19_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA19_eotS),
    DFA19_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA19_eofS),
    DFA19_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA19_minS),
    DFA19_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA19_maxS),
    DFA19_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA19_acceptS),
    DFA19_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA19_specialS),
    DFA19_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSLexer.DFA19_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA19_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSLexer.DFA19 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 19;
    this.eot = StruxtJSLexer.DFA19_eot;
    this.eof = StruxtJSLexer.DFA19_eof;
    this.min = StruxtJSLexer.DFA19_min;
    this.max = StruxtJSLexer.DFA19_max;
    this.accept = StruxtJSLexer.DFA19_accept;
    this.special = StruxtJSLexer.DFA19_special;
    this.transition = StruxtJSLexer.DFA19_transition;
};

org.antlr.lang.extend(StruxtJSLexer.DFA19, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "92:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA23_eotS:
        "\u0001\uffff\u0001\u0017\u0006\uffff\u0001\u001a\u0007\uffff\u0002"+
    "\u000f\u0004\uffff\u0001\u001e\u0008\uffff",
    DFA23_eofS:
        "\u001f\uffff",
    DFA23_minS:
        "\u0001\u0009\u0001\u0030\u0006\uffff\u0001\u0021\u0007\uffff\u0001"+
    "\u002a\u0001\u0078\u0002\uffff\u0001\u0000\u0001\uffff\u0001\u002e\u0008"+
    "\uffff",
    DFA23_maxS:
        "\u0001\u007e\u0001\u0039\u0006\uffff\u0001\u0021\u0007\uffff\u0001"+
    "\u002f\u0001\u0078\u0002\uffff\u0001\uffff\u0001\uffff\u0001\u0065\u0008"+
    "\uffff",
    DFA23_acceptS:
        "\u0002\uffff\u0001\u0002\u0001\u0003\u0001\u0004\u0001\u0005\u0001"+
    "\u0006\u0001\u0007\u0001\uffff\u0001\u0009\u0001\u000a\u0001\u000b\u0001"+
    "\u000c\u0001\u000d\u0001\u000e\u0001\u000f\u0002\uffff\u0001\u0010\u0001"+
    "\u0013\u0001\uffff\u0001\u0015\u0001\uffff\u0001\u0001\u0001\u0017\u0001"+
    "\u0012\u0001\u0008\u0001\u0014\u0001\u0011\u0001\u0018\u0001\u0016",
    DFA23_specialS:
        "\u0014\uffff\u0001\u0000\u000a\uffff}>",
    DFA23_transitionS: [
            "\u0002\u0015\u0002\uffff\u0001\u0015\u0012\uffff\u0001\u0015"+
            "\u0001\u0008\u0001\u0013\u0001\u0009\u0003\u000f\u0001\u0014"+
            "\u0001\u000b\u0001\u000c\u0002\u000f\u0001\u000a\u0001\u000f"+
            "\u0001\u0001\u0001\u0010\u000a\u0016\u0001\u0006\u0001\u0007"+
            "\u0003\u000f\u0001\u0011\u0001\u0002\u001a\u0012\u0001\u000d"+
            "\u0001\u0003\u0001\u000e\u0001\u000f\u0001\u0012\u0001\uffff"+
            "\u001a\u0012\u0001\u0004\u0001\u000f\u0001\u0005\u0001\u000f",
            "\u000a\u0018",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0019",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u001b\u0004\uffff\u0001\u001b",
            "\u0001\u001c",
            "",
            "",
            "\u0027\u001d\u0001\u0013\uffd8\u001d",
            "",
            "\u0001\u0018\u0001\uffff\u000a\u0016\u000b\uffff\u0001\u0018"+
            "\u001f\uffff\u0001\u0018",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(StruxtJSLexer, {
    DFA23_eot:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA23_eotS),
    DFA23_eof:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA23_eofS),
    DFA23_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA23_minS),
    DFA23_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(StruxtJSLexer.DFA23_maxS),
    DFA23_accept:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA23_acceptS),
    DFA23_special:
        org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA23_specialS),
    DFA23_transition: (function() {
        var a = [],
            i,
            numStates = StruxtJSLexer.DFA23_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(StruxtJSLexer.DFA23_transitionS[i]));
        }
        return a;
    })()
});

StruxtJSLexer.DFA23 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 23;
    this.eot = StruxtJSLexer.DFA23_eot;
    this.eof = StruxtJSLexer.DFA23_eof;
    this.min = StruxtJSLexer.DFA23_min;
    this.max = StruxtJSLexer.DFA23_max;
    this.accept = StruxtJSLexer.DFA23_accept;
    this.special = StruxtJSLexer.DFA23_special;
    this.transition = StruxtJSLexer.DFA23_transition;
};

org.antlr.lang.extend(StruxtJSLexer.DFA23, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | T__29 | OP | ID | XML | DOC | STR | COMMENT | WS | INT | FLOAT | CHAR );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA23_20 = input.LA(1);

                            s = -1;
                            if ( (LA23_20=='\'') ) {s = 19;}

                            else if ( ((LA23_20>='\u0000' && LA23_20<='&')||(LA23_20>='(' && LA23_20<='\uFFFF')) ) {s = 29;}

                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 23, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 
})();