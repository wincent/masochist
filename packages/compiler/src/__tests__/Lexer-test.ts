import Lexer from '../Lexer';

describe('Lexer()', () => {
    it('fails if a zero-width token is produced', () => {
        // The idea is to bail out of infinite loops that would be produced by
        // use of combinators like repeat() combined with a matcher that matches
        // a zero-width string.
        const lexer = new Lexer((api) => {
            const {consume, match, oneOf, token} = api;

            return () => {
                const text = consume(
                    oneOf(
                        match('x'), // Won't match.
                        match('a').until(match('z')), // Zero-width match.
                    ),
                );

                return token('BAD', text);
            };
        });

        expect(() => [...lexer.lex('fffff')]).toThrow(
            'Zero-width token BAD produced at: "fffff"',
        );
    });

    describe('a()/an()', () => {
        it('can reference a named matcher that gets defined elsewhere', () => {
            const lexer = new Lexer((api) => {
                const {a, consume, match, token} = api;

                const THING = match('thing').name('THING');

                return () => {
                    const text = consume(
                        a('THING'), // Indirect reference (by name).
                        a(THING), // Direct reference.
                    );

                    return token('THING', text);
                };
            });

            expect([...lexer.lex('thingthing')]).toEqual([
                {
                    contents: 'thingthing',
                    index: 0,
                    name: 'THING',
                },
            ]);
        });

        it('wraps a matcher so it can be augmented without mutation', () => {
            const calls: Array<string> = [];

            const lexer = new Lexer((api) => {
                const {an, consume, match, sequence, token} = api;

                const ORIGINAL = match('foo')
                    .name('ORIGINAL')
                    .onMatch(() => calls.push('ORIGINAL'));
                const COPY = an(ORIGINAL)
                    .name('COPY')
                    .onMatch(() => calls.push('COPY'));
                const SEPARATOR = match(':').onMatch(() =>
                    calls.push('SEPARATOR'),
                );

                return () => {
                    const text = consume(sequence(COPY, SEPARATOR, ORIGINAL));

                    return token('TOKEN', text);
                };
            });

            expect([...lexer.lex('foo:foo')]).toEqual([
                {
                    contents: 'foo:foo',
                    index: 0,
                    name: 'TOKEN',
                },
            ]);

            // Note how ORIGINAL is used to match COPY, but after SEPARATOR we
            // match ORGINAL alone and see that it wasn't mutated (ie. it didn't
            // trigger COPY's onMatch() action as well).
            expect(calls).toEqual([
                'ORIGINAL',
                'COPY',
                'SEPARATOR',
                'ORIGINAL',
            ]);
        });
    });

    describe('allOf()', () => {
        let lexer: Lexer<unknown, unknown>;

        beforeEach(() => {
            lexer = new Lexer((api) => {
                const {allOf, consume, match, token} = api;

                return () => {
                    const text = consume(
                        allOf(match('foo'), match('bar'), match('baz')),
                    );

                    return token('ALL', text);
                };
            });
        });

        it('matches a series of matchers irrespective of order', () => {
            expect([...lexer.lex('foobarbaz')]).toEqual([
                {
                    contents: 'foobarbaz',
                    index: 0,
                    name: 'ALL',
                },
            ]);

            expect([...lexer.lex('bazbarfoo')]).toEqual([
                {
                    contents: 'bazbarfoo',
                    index: 0,
                    name: 'ALL',
                },
            ]);
        });

        it('fails if any matcher fails to match', () => {
            const iterator = lexer.lex('foofoobar');

            expect(() => iterator.next()).toThrow(
                'Failed to match allOf:("foo", "bar", "baz") at: "foofoobar"',
            );
        });
    });

    describe('atEnd()', () => {
        it('returns a boolean', () => {
            const atEndValues: Array<boolean> = [];

            const lexer = new Lexer((api) => {
                const {atEnd, consume, match, token} = api;

                return () => {
                    atEndValues.push(atEnd());

                    const text = consume(match('stuff'));

                    atEndValues.push(atEnd());

                    return token('TOKEN', text);
                };
            });

            const iterator = lexer.lex('stuff');

            expect(atEndValues).toEqual([]);

            iterator.next();

            expect(atEndValues).toEqual([false, true]);
        });
    });

    describe('choose()', () => {
        it('produces tokens using matchers defined in an object', () => {
            const lexer = new Lexer((api) => {
                const {choose, match} = api;

                const BAR = match('bar');
                const BAZ = match(/.../);
                const FOO = match('foo');

                return choose({
                    /* eslint-disable sort-keys */
                    FOO,
                    BAR,
                    BAZ,
                    /* eslint-enable sort-keys */
                });
            });

            expect([...lexer.lex('foobarbaz')]).toEqual([
                {
                    contents: 'foo',
                    index: 0,
                    name: 'FOO',
                },
                {
                    contents: 'bar',
                    index: 3,
                    name: 'BAR',
                },
                {
                    contents: 'baz',
                    index: 6,
                    name: 'BAZ',
                },
            ]);
        });

        it('produces tokens using matchers defined in a Map', () => {
            const lexer = new Lexer((api) => {
                const {choose, match} = api;

                const BAR = match('bar');
                const BAZ = match(/.../);
                const FOO = match('foo');

                return choose(
                    new Map([
                        ['FOO', FOO],
                        ['BAR', BAR],
                        ['BAZ', BAZ],
                    ]),
                );
            });

            expect([...lexer.lex('foobarbaz')]).toEqual([
                {
                    contents: 'foo',
                    index: 0,
                    name: 'FOO',
                },
                {
                    contents: 'bar',
                    index: 3,
                    name: 'BAR',
                },
                {
                    contents: 'baz',
                    index: 6,
                    name: 'BAZ',
                },
            ]);
        });
    });

    describe('consume()', () => {
        it('automatically uses sequence() if given multiple argumetns', () => {
            const lexer = new Lexer((api) => {
                const {consume, match, token} = api;

                return () => {
                    const text = consume(match('one'), match('two'));

                    return token('PAIR', text);
                };
            });

            expect([...lexer.lex('onetwo')]).toEqual([
                {
                    contents: 'onetwo',
                    index: 0,
                    name: 'PAIR',
                },
            ]);
        });
    });

    describe('match()', () => {
        let lexer: Lexer<unknown, unknown>;

        describe('lexing strings', () => {
            beforeEach(() => {
                lexer = new Lexer((api) => {
                    const {consume, match, token} = api;

                    return () => {
                        const text = consume(match('thing'));

                        return token('THING', text);
                    };
                });
            });

            it('lexes strings', () => {
                expect([...lexer.lex('thing')]).toEqual([
                    {
                        contents: 'thing',
                        index: 0,
                        name: 'THING',
                    },
                ]);
            });

            it('returns an iterator', () => {
                const iterator = lexer.lex('thing');

                expect(iterator.next().value).toEqual({
                    contents: 'thing',
                    index: 0,
                    name: 'THING',
                });

                expect(iterator.next().done).toBe(true);
            });

            it('throws if it cannot match', () => {
                const iterator = lexer.lex('bad input');

                expect(() => iterator.next()).toThrow(
                    /Failed to match "thing" at: "bad input"/,
                );
            });
        });

        describe('lexing regular expressions', () => {
            beforeEach(() => {
                lexer = new Lexer((api) => {
                    const {consume, match, token} = api;

                    return () => {
                        const text = consume(match(/foo\d+/));

                        return token('THING', text);
                    };
                });
            });

            it('lexes patterns', () => {
                expect([...lexer.lex('foo10')]).toEqual([
                    {
                        contents: 'foo10',
                        index: 0,
                        name: 'THING',
                    },
                ]);
            });

            it('treats patterns as anchored', () => {
                const iterator = lexer.lex('...foo10');

                expect(() => iterator.next()).toThrow(
                    'Failed to match /foo\\d+/ at: "...foo10"',
                );
            });
        });
    });

    describe('maybe()', () => {
        it('produces an optional match', () => {
            const lexer = new Lexer((api) => {
                const {consume, match, maybe, sequence, token} = api;

                return () => {
                    const text = consume(
                        sequence(
                            match('foo'),
                            maybe(match('bar')),
                            match('baz'),
                        ),
                    );

                    return token('MAYBE', text);
                };
            });

            expect([...lexer.lex('foobaz')]).toEqual([
                {
                    contents: 'foobaz',
                    index: 0,
                    name: 'MAYBE',
                },
            ]);

            expect([...lexer.lex('foobarbaz')]).toEqual([
                {
                    contents: 'foobarbaz',
                    index: 0,
                    name: 'MAYBE',
                },
            ]);
        });
    });

    describe('peek()', () => {
        it('automatically uses sequence() if given multiple argumetns', () => {
            const lexer = new Lexer((api) => {
                const {consume, match, peek, token} = api;

                return () => {
                    peek(match('one'), match('two'), match('three'));

                    const text = consume();

                    return token('SERIES', text);
                };
            });

            expect([...lexer.lex('onetwothree')]).toEqual([
                {
                    contents: 'onetwothree',
                    index: 0,
                    name: 'SERIES',
                },
            ]);
        });
    });

    describe('never', () => {
        it('never matches anything', () => {
            const lexer = new Lexer((api) => {
                const {consume, never, token} = api;

                return () => {
                    const text = consume(never);

                    return token('NEVER EMITTED', text);
                };
            });

            expect(() => lexer.lex('stuff').next()).toThrow(
                'Failed to match «never» at: "stuff"',
            );
        });

        it('is useful as the alternate in a `when()` matcher', () => {
            let active = false;

            const lexer = new Lexer((api) => {
                const {consume, match, never, oneOf, repeat, token, when} = api;

                return () => {
                    // Reason we have to use "never" here is because "pass"
                    // would have us infinitely matching zero-width strings;
                    // in contrast, "never" forces "oneOf" to try the next
                    // alternative(s).
                    const text = consume(
                        repeat(
                            oneOf(
                                match('a'),
                                when(() => active, match(/./), never),
                                match('b'),
                            ),
                        ),
                    );

                    return token('WORD', text);
                };
            });

            // When active is "false", we can only match a/b.
            expect([...lexer.lex('ababaabb')]).toEqual([
                {
                    contents: 'ababaabb',
                    index: 0,
                    name: 'WORD',
                },
            ]);

            expect(() => [...lexer.lex('axb')]).toThrow(/Failed to match/);

            // When active is "true", we can match anything.
            active = true;

            expect([...lexer.lex('ababzzzaabb')]).toEqual([
                {
                    contents: 'ababzzzaabb',
                    index: 0,
                    name: 'WORD',
                },
            ]);
        });
    });

    describe('onMatch()', () => {
        it('is called when a token matches', () => {
            const onMatch = jest.fn();

            let meta;

            const lexer = new Lexer((api) => {
                const {consume, match, meta: passedMeta, token} = api;

                meta = passedMeta;

                return () => {
                    const text = consume(match('foo').onMatch(onMatch));

                    return token('...', text);
                };
            });

            expect(onMatch).not.toHaveBeenCalled();

            lexer.lex('foo').next();

            expect(onMatch.mock.calls.length).toBe(1);
            expect(onMatch.mock.calls[0][0][0]).toBe('foo');
            expect(onMatch.mock.calls[0][1]).toBe(meta);
        });

        it('may produce side effects that can be rolled back', () => {
            const snapshots: Array<[string, Array<[unknown, unknown]>]> = [];

            const lexer = new Lexer((api) => {
                const {consume, match, meta, oneOf, sequence, token} = api;

                const record = (match: RegExpExecArray) => {
                    snapshots.push([`match: ${match[0]}`, [...meta.entries()]]);
                };

                return () => {
                    // A complex enough example to demonstrate the
                    // "undo-tree" in action. We pursue a branch that
                    // will fail and get rolled back before we pursue
                    // another that succeeds.
                    const text = consume(
                        sequence(
                            match('a').onMatch((match, meta) => {
                                meta.set('a', true);
                                record(match);
                            }),
                            match('b').onMatch((match, meta) => {
                                meta.set('b', true);
                                record(match);
                            }),
                            oneOf(
                                sequence(
                                    match('c').onMatch((match, meta) => {
                                        // Doing something destructive.
                                        meta.delete('a');
                                        record(match);
                                    }),
                                    match('d').onMatch((match, meta) => {
                                        meta.set('d', true);
                                        record(match);
                                    }),
                                    match('e').onMatch((match, meta) => {
                                        meta.set('e', true);
                                        record(match);
                                    }),
                                ),
                                sequence(
                                    match('f').onMatch((match, meta) => {
                                        meta.set('f', true);
                                        record(match);
                                    }),
                                    match('g').onMatch((match, meta) => {
                                        meta.set('g', true);
                                        record(match);
                                    }),
                                    match('h').onMatch((match, meta) => {
                                        meta.set('h', true);
                                        record(match);
                                    }),
                                ),
                                sequence(
                                    match('c').onMatch((match, meta) => {
                                        meta.set('c:2', true);
                                        record(match);
                                    }),
                                    match('i').onMatch((match, meta) => {
                                        meta.set('i', true);
                                        record(match);
                                    }),
                                ),
                                sequence(
                                    match('c').onMatch((match, meta) => {
                                        meta.set('c:3', true);
                                        record(match);
                                    }),
                                    match('j').onMatch((match, meta) => {
                                        meta.set('j', true);
                                        record(match);
                                    }),
                                ),
                            ),
                            match('k').onMatch((match, meta) => {
                                meta.set('k', true);
                                record(match);
                            }),
                        ),
                    );

                    return token('...', text);
                };
            });

            expect([...lexer.lex('abcjk')]).toEqual([
                {
                    contents: 'abcjk',
                    index: 0,
                    name: '...',
                },
            ]);

            expect(snapshots).toEqual([
                ['match: a', [['a', true]]],
                [
                    'match: b',
                    [
                        ['a', true],
                        ['b', true],
                    ],
                ],
                ['match: c', [['b', true]]],
                [
                    'match: c',
                    [
                        ['a', true],
                        ['b', true],
                        ['c:2', true],
                    ],
                ],
                [
                    'match: c',
                    [
                        ['a', true],
                        ['b', true],
                        ['c:3', true],
                    ],
                ],
                [
                    'match: j',
                    [
                        ['a', true],
                        ['b', true],
                        ['c:3', true],
                        ['j', true],
                    ],
                ],
                [
                    'match: k',
                    [
                        ['a', true],
                        ['b', true],
                        ['c:3', true],
                        ['j', true],
                        ['k', true],
                    ],
                ],
            ]);
        });
    });

    describe('oneOf()', () => {
        it('matches using the first matching matcher in a collection', () => {
            const lexer = new Lexer((api) => {
                const {consume, match, oneOf, token} = api;

                return () => {
                    const text = consume(
                        oneOf(match('foo'), match('bar'), match('baz')),
                    );

                    return token('ONE_OF', text);
                };
            });

            expect([...lexer.lex('bar')]).toEqual([
                {
                    contents: 'bar',
                    index: 0,
                    name: 'ONE_OF',
                },
            ]);
        });
    });

    describe('pass', () => {
        it('matches an empty string', () => {
            const lexer = new Lexer((api) => {
                const {consume, match, pass, sequence, token} = api;

                return () => {
                    const text = consume(sequence(pass, match('foo'), pass));

                    return token('PASS', text);
                };
            });

            expect([...lexer.lex('foo')]).toEqual([
                {
                    contents: 'foo',
                    index: 0,
                    name: 'PASS',
                },
            ]);
        });
    });

    describe('repeat()', () => {
        it('matches a matcher one or more times', () => {
            const lexer = new Lexer((api) => {
                const {consume, match, repeat, token} = api;

                return () => {
                    const text = consume(repeat(match('foo')));

                    return token('REPEAT', text);
                };
            });

            expect([...lexer.lex('foo')]).toEqual([
                {
                    contents: 'foo',
                    index: 0,
                    name: 'REPEAT',
                },
            ]);

            expect([...lexer.lex('foofoofoo')]).toEqual([
                {
                    contents: 'foofoofoo',
                    index: 0,
                    name: 'REPEAT',
                },
            ]);
        });
    });

    describe('sequence()', () => {
        it('matches a series of matchers', () => {
            const lexer = new Lexer((api) => {
                const {consume, match, sequence, token} = api;

                return () => {
                    const text = consume(
                        sequence(match('foo'), match('bar'), match('baz')),
                    );

                    return token('SEQUENCE', text);
                };
            });

            expect([...lexer.lex('foobarbaz')]).toEqual([
                {
                    contents: 'foobarbaz',
                    index: 0,
                    name: 'SEQUENCE',
                },
            ]);
        });
    });

    describe('to()', () => {
        let lexer: Lexer<unknown, unknown>;

        beforeEach(() => {
            lexer = new Lexer((api) => {
                const {consume, match, token} = api;

                return () => {
                    const text = consume(match(/./).to(match('x')));

                    return token('TO', text);
                };
            });
        });

        it('matches 0 or more times up-to-and-including a predicate', () => {
            expect([...lexer.lex('x')]).toEqual([
                {
                    contents: 'x',
                    index: 0,
                    name: 'TO',
                },
            ]);

            expect([...lexer.lex('aaxaaaax')]).toEqual([
                {
                    contents: 'aax',
                    index: 0,
                    name: 'TO',
                },
                {
                    contents: 'aaaax',
                    index: 3,
                    name: 'TO',
                },
            ]);
        });

        it('fails at the end of the input for unseen predicates', () => {
            expect(() => lexer.lex('aaaa').next()).toThrow(
                'Failed to match ->> "x" at: "aaaa"',
            );
        });
    });

    describe('until()', () => {
        let lexer: Lexer<unknown, unknown>;

        beforeEach(() => {
            lexer = new Lexer((api) => {
                const {consume, match, peek, token} = api;

                return () => {
                    if (peek(match('a'))) {
                        const text = consume(match(/./).until(match('x')));

                        return token('A', text);
                    } else {
                        const text = consume(match('x'));

                        return token('X', text);
                    }
                };
            });
        });

        it('matches 0 or more times up-to-and-not-including a predicate', () => {
            // 0-times.
            expect([...lexer.lex('x')]).toEqual([
                {
                    contents: 'x',
                    index: 0,
                    name: 'X',
                },
            ]);

            // n-times.
            expect([...lexer.lex('aaax')]).toEqual([
                {
                    contents: 'aaa',
                    index: 0,
                    name: 'A',
                },
                {
                    contents: 'x',
                    index: 3,
                    name: 'X',
                },
            ]);
        });

        it('succeeds at the end of the input even without seeing predicate', () => {
            expect([...lexer.lex('aaaa')]).toEqual([
                {
                    contents: 'aaaa',
                    index: 0,
                    name: 'A',
                },
            ]);
        });
    });

    describe('when()', () => {
        it('chooses a matcher based on a predicate', () => {
            const lexer = new Lexer((api) => {
                const {consume, match, repeat, token, when} = api;

                let count = 0;

                return () => {
                    const text = consume(
                        repeat(when(() => count++ < 1, match('a'), match('b'))),
                    );

                    return token('WHEN', text);
                };
            });

            expect([...lexer.lex('abbbbb')]).toEqual([
                {
                    contents: 'abbbbb',
                    index: 0,
                    name: 'WHEN',
                },
            ]);

            expect(() => [...lexer.lex('foo')]).toThrow(
                'Failed to match predicate("a", "b")+ at: "foo"',
            );
        });
    });
});
