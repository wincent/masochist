import {dedent} from '@masochist/common';

import getAugmentedGrammar from '../getAugmentedGrammar';
import stringifyGrammar from '../stringifyGrammar';
import {toyGrammar} from './grammars';

describe('stringifyGrammar()', () => {
  it('returns a stringified toy grammar', () => {
    const augmentedGrammar = getAugmentedGrammar(toyGrammar);

    // Note the use of rule numbers here (to makes this output useful in
    // conjunction with the output of the `stringifyParseTable()` function).
    expect(stringifyGrammar(augmentedGrammar)).toBe(
      dedent`
        %token eq
        %token star
        %token x

        r0: S' → S
        r1: S → N
        r2: N → V eq E
        r3: N → E
        r4: E → V
        r5: V → x
        r6: V → star E
      ` + '\n',
    );
  });
});
