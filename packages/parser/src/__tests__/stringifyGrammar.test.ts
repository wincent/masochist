import {describe, expect, it} from 'bun:test';
import {dedent} from '@masochist/common';

import getAugmentedGrammar from '../getAugmentedGrammar';
import parseDSL from '../parseDSL';
import stringifyGrammar from '../stringifyGrammar';
import {toyGrammar} from './grammars';

describe('stringifyGrammar()', () => {
  it('returns a stringified toy grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(toyGrammar);
    const ARROW = '\u2192';

    // Note the use of rule numbers here (to makes this output useful in
    // conjunction with the output of the `stringifyParseTable()` function).
    expect(stringifyGrammar(augmentedGrammar)).toBe(
      dedent`
        %token eq
        %token star
        %token x

        r0 : S' ${ARROW} S
        r1 : S ${ARROW} N
        r2 : N ${ARROW} V eq E
        r3 : N ${ARROW} E
        r4 : E ${ARROW} V
        r5 : V ${ARROW} x
        r6 : V ${ARROW} star E
      ` + '\n',
    );
  });

  it('stringifies a grammar with %left and %right directives', () => {
    expect(
      stringifyGrammar(
        parseDSL(`
      %token EXPONENT MINUS NUMBER PLUS

      %left MINUS PLUS
      %right EXPONENT

      Expression → Expression MINUS Expression
      Expression → Expression PLUS Expression
      Expression → Expression EXPONENT Expression
      Expression → NUMBER
    `),
      ),
    ).toEqual(
      dedent`
      %token EXPONENT
      %token MINUS
      %token NUMBER
      %token PLUS

      %left MINUS PLUS
      %right EXPONENT

      r0 [precedence = 1] : Expression → Expression MINUS Expression
      r1 [precedence = 1] : Expression → Expression PLUS Expression
      r2 [precedence = 2] : Expression → Expression EXPONENT Expression
      r3 : Expression → NUMBER
    ` + '\n',
    );
  });
});
