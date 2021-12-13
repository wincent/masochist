import Builder from './Builder';

type Callback = (dsl: {
    ignored: (
        name: string,
        matcher: string | RegExp,
        options?: Options,
    ) => void;
    range: (specifier: string) => CharRange;
    token: (name: string, matcher: string | RegExp, options?: Options) => void;
}) => void;

type CharRange = {
    from: string;
    to: string;
};

type Lookahead = string | CharRange;

type Options = {
    lookahead?: Lookahead | Array<Lookahead>;
    sequence?: Array<string>;
};

type Token = {
    ignored: boolean;
    lookahead?: Lookahead | Array<Lookahead>;
    sequence?: Array<string>;
    name: string;
    test: string | RegExp;
};

/**
 * @see https://tc39.es/ecma262/#sec-quotejsonstring
 */
function escape(
    text: string,
    options: {except: string} = {except: ''},
): string {
    return text.replace(/["\b\f\n\r\t\\]/g, (char) => {
        if (options.except.includes(char)) {
            return char;
        } else {
            return JSON.stringify(char).slice(1, -1);
        }
    });
}

function stringify(text: string): string {
    const hasDoubleQuote = text.includes('"');
    const hasSingleQuote = text.includes("'");

    if (!hasSingleQuote) {
        return `'${escape(text, {except: '"'})}'`;
    } else if (!hasDoubleQuote) {
        return `"${escape(text)}"`;
    } else {
        return JSON.stringify(text);
    }
}

export default function generate(callback: Callback): string {
    const TOKENS: Array<Token> = [];

    function getConditionsForLookahead(
        value: string,
        token: Token,
    ): string | Array<string> {
        if (token.lookahead && Array.isArray(token.lookahead)) {
            return token.lookahead.map((condition) => {
                if (typeof condition === 'string') {
                    return `${value} === ${stringify(condition)}`;
                } else {
                    return `${value} >= ${stringify(
                        condition.from,
                    )} && ${value} <= ${stringify(condition.to)}`;
                }
            });
        } else if (typeof token.test === 'string') {
            if (token.test.length > 1) {
                return Array.from(token.test).map((char, index) => {
                    if (index) {
                        return `input[i + ${index}] === ${stringify(char)}`;
                    } else {
                        return `${value} === ${stringify(char)}`;
                    }
                });
            } else {
            }
            return `${value} === ${stringify(token.test)}`;
        }

        return '// not implemented yet';
    }

    function genToken(
        name: string,
        matcher: string | RegExp,
        options: Options,
    ): Token {
        if (typeof matcher === 'string') {
            return {
                ...options,
                ignored: false,
                name,
                test: matcher, // TODO: check length
            };
        } else {
            return {
                ...options,
                ignored: false,
                name,
                test: matcher,
            };
        }
    }

    function ignored(
        name: string,
        matcher: string | RegExp,
        options: Options = {},
    ) {
        TOKENS.push({
            ...genToken(name, matcher, options),
            ignored: true,
        });
    }

    const RANGE_REGEXP = /^[^-]-[^-]$/;

    function range(specifier: string): CharRange {
        if (!RANGE_REGEXP.test(specifier)) {
            throw new Error(`Invalid range specifier: ${specifier}`);
        }

        const [from, to] = specifier.split('-');

        return {
            from,
            to,
        };
    }

    function token(
        name: string,
        matcher: string | RegExp,
        options: Options = {},
    ) {
        TOKENS.push({
            ...genToken(name, matcher, options),
            ignored: false,
        });
    }

    callback({ignored, range, token});

    const b = new Builder();

    if (TOKENS.some(({test}) => test instanceof RegExp)) {
        const tokens = TOKENS.filter(({test}) => test instanceof RegExp);

        tokens.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        });

        for (const {name, test} of tokens) {
            if (test instanceof RegExp) {
                const flags = Array.from(
                    new Set([...Array.from(test.flags), 'y']),
                ).join('');
                b.line(`const ${name} = /${test.source}/${flags};`);
            }
        }

        b.blank();
    }

    b.generator('lex', [['input', 'string']], () => {
        b.for('let i = 0', 'i < input.length', 'i++', () => {
            b.line('const char = input[i];');
            b.blank();

            for (let i = 0; i < TOKENS.length; i++) {
                const token = TOKENS[i];

                const statement = i ? 'elseIf' : 'if';

                const {lookahead, name, test} = token;

                if (lookahead && Array.isArray(lookahead)) {
                    const conditions = lookahead.map((condition) => {
                        if (typeof condition === 'string') {
                            return `char === ${stringify(condition)}`;
                        } else {
                            return `char >= ${stringify(
                                condition.from,
                            )} && char <= ${stringify(condition.to)}`;
                        }
                    });

                    b[statement](conditions, () => {
                        if (typeof test === 'string') {
                            // TODO
                        } else {
                            b.line(`${name}.lastIndex = i;`);
                            b.blank();
                            b.line(`const match = ${name}.exec(input);`);
                            b.blank();
                            b.if('match', () => {
                                b.line(`const contents = match[0];`);
                                b.blank();
                                b.yield(() => {
                                    b.object({
                                        contents: 'contents', // TODO shorthand
                                        index: 'i',
                                        name: stringify(name),
                                    });
                                });
                                b.blank();
                                b.line('i += contents.length - 1;');
                                b.blank();
                                b.line('continue;');
                            });
                        }
                    });
                } else if (typeof test === 'string' && test.length > 1) {
                    if (lookahead) {
                        // TODO: handle
                    } else {
                        const conditions = getConditionsForLookahead(
                            'char',
                            token,
                        );

                        // BUG: conditions here need to be && not ||
                        b[statement](conditions, () => {
                            b.yield(() => {
                                b.object({
                                    contents: stringify(test),
                                    index: 'i',
                                    name: stringify(name),
                                });
                            });
                            b.line(`i += ${test.length} - 1;`);
                        });
                    }
                } else if (typeof test === 'string') {
                    b[statement](`char === ${stringify(test)}`, () => {
                        b.yield(() => {
                            b.object({
                                contents: 'char',
                                index: 'i',
                                name: stringify(name),
                            });
                        });
                    });
                }
            }
        });
    });

    return b.print();
}
