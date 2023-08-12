// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make parser" instead
 *
 * @generated
 */
import {Lexer, Token} from '@masochist/lexer';
/**
 * r0: no production
 */
function r1($1) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'DOCUMENT',
      definitions: $1,
    };
  }
  return $$;
}
function r2($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r3($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r4($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r5($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r6($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r7($1, $2, $3, $4, $5) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'OPERATION',
      name: $2,
      directives: $4,
      selections: $5,
      type: $1,
      variables: $3,
    };
  }
  return $$;
}
function r8($1) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'OPERATION',
      name: null,
      directives: null,
      selections: $1,
      type: 'QUERY',
      variables: null,
    };
  }
  return $$;
}
function r9($1) {
  let $$ = undefined;
  {
    {
      const {contents} = $1;
      if (contents === 'query') {
        $$ = 'QUERY';
      } else if (contents === 'mutation') {
        $$ = 'MUTATION';
      } else if (contents === 'subscription') {
        $$ = 'SUBSCRIPTION';
      } else {
        throw new Error(`Unsupported operation type: ${contents}`);
      }
    }
  }
  return $$;
}
function r10($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r11() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r12($1) {
  let $$ = undefined;
  {
    $$ = $1.contents;
  }
  return $$;
}
function r13() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r14() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r15($2) {
  let $$ = undefined;
  {
    $$ = $2;
  }
  return $$;
}
function r16() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r17($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r18($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r19($1, $3, $4, $5) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'VARIABLE_DEFINITION',
      defaultValue: $4,
      directives: $5,
      type: $3,
      variable: $1,
    };
  }
  return $$;
}
function r20($2) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'VARIABLE',
      name: $2,
    };
  }
  return $$;
}
function r21($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r22($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r23($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r24($1) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'NAMED_TYPE',
      name: $1,
    };
  }
  return $$;
}
function r25($2) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'LIST_TYPE',
      type: $2,
    };
  }
  return $$;
}
function r26($1) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'NON_NULL_TYPE',
      type: $1,
    };
  }
  return $$;
}
function r27($1) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'NON_NULL_TYPE',
      type: $1,
    };
  }
  return $$;
}
function r28($2) {
  let $$ = undefined;
  {
    $$ = $2;
  }
  return $$;
}
function r29() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r30($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r31($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r32($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r33($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r34($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r35($1) {
  let $$ = undefined;
  {
    {
      const {contents} = $1;

      // TODO: Distinguish between these tokens in the lexer instead?
      if (/^-?\d+$/.test(contents)) {
        $$ = {kind: 'INT', value: parseInt(contents, 10)};
      } else {
        $$ = {kind: 'FLOAT', value: contents};
      }
    }
  }
  return $$;
}
function r36($1) {
  let $$ = undefined;
  {
    {
      const name = $1;
      if (name === 'true') {
        $$ = {kind: 'BOOLEAN', value: true};
      } else if (name === 'false') {
        $$ = {kind: 'BOOLEAN', value: false};
      } else if (name === 'null') {
        $$ = {kind: 'NULL'};
      } else {
        $$ = {kind: 'ENUM', value: name};
      }
    }
  }
  return $$;
}
function r37() {
  let $$ = undefined;
  {
    $$ = {
      kind: 'LIST_VALUE',
      value: [],
    };
  }
  return $$;
}
function r38($2) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'LIST_VALUE',
      value: $2,
    };
  }
  return $$;
}
function r39($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r40($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r41() {
  let $$ = undefined;
  {
    $$ = {
      kind: 'OBJECT_VALUE',
      fields: [],
    };
  }
  return $$;
}
function r42($2) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'OBJECT_VALUE',
      fields: $2,
    };
  }
  return $$;
}
function r43($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r44($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r45($1, $3) {
  let $$ = undefined;
  {
    $$ = {
      name: $1,
      value: $3,
    };
  }
  return $$;
}
function r46($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r47() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r48($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r49($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r50($2, $3) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'DIRECTIVE',
      arguments: $3,
      name: $2,
    };
  }
  return $$;
}
function r51($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r52() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r53($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r54($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r55($2, $3) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'DIRECTIVE',
      arguments: $3,
      name: $2,
    };
  }
  return $$;
}
function r56($2) {
  let $$ = undefined;
  {
    $$ = $2;
  }
  return $$;
}
function r57($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r58() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r59($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r60($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r61($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r62($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r63($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r64($1, $2, $3, $4) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'FIELD',
      alias: null,
      arguments: $2,
      directives: $3,
      name: $1,
      selections: $4,
    };
  }
  return $$;
}
function r65($1, $2, $3, $4, $5) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'FIELD',
      alias: $1,
      arguments: $3,
      directives: $4,
      name: $2,
      selections: $5,
    };
  }
  return $$;
}
function r66($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r67($2) {
  let $$ = undefined;
  {
    $$ = $2;
  }
  return $$;
}
function r68() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r69($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r70($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r71($1, $3) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'ARGUMENT',
      name: $1,
      value: $3,
    };
  }
  return $$;
}
function r72($2) {
  let $$ = undefined;
  {
    $$ = $2;
  }
  return $$;
}
function r73() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
function r74($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r75($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r76($1, $3) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'ARGUMENT',
      name: $1,
      value: $3,
    };
  }
  return $$;
}
function r77($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r78($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r79($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r80($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r81($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r82($1) {
  let $$ = undefined;
  {
    $$ = $1;
  }
  return $$;
}
function r83($1) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'STRING',
      block: false,
      // TODO: consider doing this slice in the lexer
      value: $1.contents.slice(1, -1),
    };
  }
  return $$;
}
function r84($1) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'STRING',
      block: true,
      // TODO: preprocess value here...
      value: $1.contents,
    };
  }
  return $$;
}
function r85() {
  let $$ = undefined;
  {
    $$ = {
      kind: 'LIST_VALUE',
      value: [],
    };
  }
  return $$;
}
function r86($2) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'LIST_VALUE',
      value: $2,
    };
  }
  return $$;
}
function r87($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r88($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r89() {
  let $$ = undefined;
  {
    $$ = {
      kind: 'OBJECT_VALUE',
      fields: [],
    };
  }
  return $$;
}
function r90($2) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'OBJECT_VALUE',
      fields: $2,
    };
  }
  return $$;
}
function r91($1) {
  let $$ = undefined;
  {
    $$ = [$1];
  }
  return $$;
}
function r92($1, $2) {
  let $$ = undefined;
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r93($1, $3) {
  let $$ = undefined;
  {
    $$ = {
      name: $1,
      value: $3,
    };
  }
  return $$;
}
function r94($2, $4, $5, $6) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'FRAGMENT',
      directives: $5,
      name: $2,
      on: $4,
      selections: $6,
    };
  }
  return $$;
}
function r95($1) {
  let $$ = undefined;
  {
    $$ = $1.contents;
  }
  return $$;
}
function r96($2, $3) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'FRAGMENT_SPREAD',
      name: $2,
      directives: $3,
    };
  }
  return $$;
}
function r97($2, $3, $4) {
  let $$ = undefined;
  {
    $$ = {
      kind: 'INLINE_FRAGMENT',
      directives: $3,
      on: $2,
      selections: $4,
    };
  }
  return $$;
}
function r98($2) {
  let $$ = undefined;
  {
    $$ = $2;
  }
  return $$;
}
function r99() {
  let $$ = undefined;
  {
    $$ = null;
  }
  return $$;
}
const actions = [
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 11,
    },
    NAME: {
      kind: 'Shift',
      state: 7,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    ['$']: {
      kind: 'Accept',
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 11,
    },
    NAME: {
      kind: 'Shift',
      state: 7,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 2,
    },
    NAME: {
      kind: 'Reduce',
      rule: 2,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 2,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 2,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 4,
    },
    NAME: {
      kind: 'Reduce',
      rule: 4,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 4,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 4,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 6,
    },
    NAME: {
      kind: 'Reduce',
      rule: 6,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 6,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 11,
    },
    AT: {
      kind: 'Reduce',
      rule: 11,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 11,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      rule: 9,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 9,
    },
    ON: {
      kind: 'Reduce',
      rule: 9,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 9,
    },
    AT: {
      kind: 'Reduce',
      rule: 9,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 9,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 8,
    },
    NAME: {
      kind: 'Reduce',
      rule: 8,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 8,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    ELLIPSIS: {
      kind: 'Shift',
      state: 24,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 5,
    },
    NAME: {
      kind: 'Reduce',
      rule: 5,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 5,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 5,
    },
  },
  {
    NAME: {
      kind: 'Shift',
      state: 27,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 3,
    },
    NAME: {
      kind: 'Reduce',
      rule: 3,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 3,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 29,
    },
    AT: {
      kind: 'Reduce',
      rule: 16,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 16,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 10,
    },
    AT: {
      kind: 'Reduce',
      rule: 10,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 10,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 12,
    },
    AT: {
      kind: 'Reduce',
      rule: 12,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 12,
    },
    COLON: {
      kind: 'Reduce',
      rule: 12,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 12,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 12,
    },
    NAME: {
      kind: 'Reduce',
      rule: 12,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 12,
    },
    ON: {
      kind: 'Reduce',
      rule: 12,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 12,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 12,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 12,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 12,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 12,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 12,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 12,
    },
    BANG: {
      kind: 'Reduce',
      rule: 12,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 12,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 13,
    },
    AT: {
      kind: 'Reduce',
      rule: 13,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 13,
    },
    COLON: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 13,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 13,
    },
    NAME: {
      kind: 'Reduce',
      rule: 13,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 13,
    },
    ON: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 13,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 13,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 13,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 13,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 13,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 13,
    },
    BANG: {
      kind: 'Reduce',
      rule: 13,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      rule: 14,
    },
    AT: {
      kind: 'Reduce',
      rule: 14,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 14,
    },
    COLON: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 14,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 14,
    },
    NAME: {
      kind: 'Reduce',
      rule: 14,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 14,
    },
    ON: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 14,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 14,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 14,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 14,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 14,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 14,
    },
    BANG: {
      kind: 'Reduce',
      rule: 14,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 14,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 30,
    },
    ELLIPSIS: {
      kind: 'Shift',
      state: 24,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 59,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 59,
    },
    NAME: {
      kind: 'Reduce',
      rule: 59,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 59,
    },
    ON: {
      kind: 'Reduce',
      rule: 59,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 61,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 61,
    },
    NAME: {
      kind: 'Reduce',
      rule: 61,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 61,
    },
    ON: {
      kind: 'Reduce',
      rule: 61,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 33,
    },
    OPENING_PAREN: {
      kind: 'Shift',
      state: 34,
    },
    AT: {
      kind: 'Reduce',
      rule: 68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 68,
    },
    NAME: {
      kind: 'Reduce',
      rule: 68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 68,
    },
    ON: {
      kind: 'Reduce',
      rule: 68,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 62,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 62,
    },
    NAME: {
      kind: 'Reduce',
      rule: 62,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 62,
    },
    ON: {
      kind: 'Reduce',
      rule: 62,
    },
  },
  {
    NAME: {
      kind: 'Shift',
      state: 27,
    },
    ON: {
      kind: 'Shift',
      state: 38,
    },
    AT: {
      kind: 'Reduce',
      rule: 99,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 99,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 63,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 63,
    },
    NAME: {
      kind: 'Reduce',
      rule: 63,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 63,
    },
    ON: {
      kind: 'Reduce',
      rule: 63,
    },
  },
  {
    ON: {
      kind: 'Shift',
      state: 39,
    },
  },
  {
    ON: {
      kind: 'Reduce',
      rule: 95,
    },
    AT: {
      kind: 'Reduce',
      rule: 95,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 95,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 95,
    },
    NAME: {
      kind: 'Reduce',
      rule: 95,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 95,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 56,
    },
    NAME: {
      kind: 'Reduce',
      rule: 56,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 56,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 56,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 56,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 56,
    },
    ON: {
      kind: 'Reduce',
      rule: 56,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 60,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 60,
    },
    NAME: {
      kind: 'Reduce',
      rule: 60,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 60,
    },
    ON: {
      kind: 'Reduce',
      rule: 60,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 47,
    },
    NAME: {
      kind: 'Reduce',
      rule: 47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 47,
    },
    ON: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      rule: 66,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 66,
    },
    ON: {
      kind: 'Reduce',
      rule: 66,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 34,
    },
    AT: {
      kind: 'Reduce',
      rule: 68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 68,
    },
    NAME: {
      kind: 'Reduce',
      rule: 68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 68,
    },
    ON: {
      kind: 'Reduce',
      rule: 68,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 47,
    },
    NAME: {
      kind: 'Reduce',
      rule: 47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 47,
    },
    ON: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 46,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 46,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 46,
    },
    NAME: {
      kind: 'Reduce',
      rule: 46,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 46,
    },
    ON: {
      kind: 'Reduce',
      rule: 46,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 48,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 48,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 48,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 48,
    },
    NAME: {
      kind: 'Reduce',
      rule: 48,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 48,
    },
    ON: {
      kind: 'Reduce',
      rule: 48,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 61,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 17,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 17,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 63,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 58,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 58,
    },
    NAME: {
      kind: 'Reduce',
      rule: 58,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 58,
    },
    ON: {
      kind: 'Reduce',
      rule: 58,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 67,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 69,
    },
    NAME: {
      kind: 'Reduce',
      rule: 69,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 69,
    },
    ON: {
      kind: 'Reduce',
      rule: 69,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 69,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 47,
    },
    NAME: {
      kind: 'Reduce',
      rule: 47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 47,
    },
    ON: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 96,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 96,
    },
    NAME: {
      kind: 'Reduce',
      rule: 96,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 96,
    },
    ON: {
      kind: 'Reduce',
      rule: 96,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 98,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 98,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 24,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 24,
    },
    BANG: {
      kind: 'Reduce',
      rule: 24,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 24,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 24,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 24,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 24,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 47,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 7,
    },
    NAME: {
      kind: 'Reduce',
      rule: 7,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 7,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 49,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 49,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 49,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 49,
    },
    NAME: {
      kind: 'Reduce',
      rule: 49,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 49,
    },
    ON: {
      kind: 'Reduce',
      rule: 49,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 34,
    },
    AT: {
      kind: 'Reduce',
      rule: 68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 68,
    },
    NAME: {
      kind: 'Reduce',
      rule: 68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 68,
    },
    ON: {
      kind: 'Reduce',
      rule: 68,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 15,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 15,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 18,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 18,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 77,
    },
  },
  {
    COLON: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 20,
    },
    NAME: {
      kind: 'Reduce',
      rule: 20,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 20,
    },
    ON: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 20,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 20,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 20,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 20,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 20,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 20,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 20,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 64,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 64,
    },
    NAME: {
      kind: 'Reduce',
      rule: 64,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 64,
    },
    ON: {
      kind: 'Reduce',
      rule: 64,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 57,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 57,
    },
    NAME: {
      kind: 'Reduce',
      rule: 57,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 57,
    },
    ON: {
      kind: 'Reduce',
      rule: 57,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 67,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 67,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 67,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 67,
    },
    NAME: {
      kind: 'Reduce',
      rule: 67,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 67,
    },
    ON: {
      kind: 'Reduce',
      rule: 67,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 70,
    },
    NAME: {
      kind: 'Reduce',
      rule: 70,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 70,
    },
    ON: {
      kind: 'Reduce',
      rule: 70,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 89,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 58,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 58,
    },
    NAME: {
      kind: 'Reduce',
      rule: 58,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 58,
    },
    ON: {
      kind: 'Reduce',
      rule: 58,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 97,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 97,
    },
    NAME: {
      kind: 'Reduce',
      rule: 97,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 97,
    },
    ON: {
      kind: 'Reduce',
      rule: 97,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 9,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 50,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 50,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 50,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 50,
    },
    NAME: {
      kind: 'Reduce',
      rule: 50,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 50,
    },
    ON: {
      kind: 'Reduce',
      rule: 50,
    },
  },
  {
    EQUALS: {
      kind: 'Shift',
      state: 95,
    },
    AT: {
      kind: 'Reduce',
      rule: 29,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 29,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 29,
    },
  },
  {
    BANG: {
      kind: 'Shift',
      state: 96,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 21,
    },
    AT: {
      kind: 'Reduce',
      rule: 21,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 21,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 21,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 21,
    },
  },
  {
    BANG: {
      kind: 'Shift',
      state: 97,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 22,
    },
    AT: {
      kind: 'Reduce',
      rule: 22,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 22,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 22,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 22,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 77,
    },
  },
  {
    EQUALS: {
      kind: 'Reduce',
      rule: 23,
    },
    AT: {
      kind: 'Reduce',
      rule: 23,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 23,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 23,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 23,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 71,
    },
    NAME: {
      kind: 'Reduce',
      rule: 71,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 71,
    },
    ON: {
      kind: 'Reduce',
      rule: 71,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 77,
    },
    NAME: {
      kind: 'Reduce',
      rule: 77,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 77,
    },
    ON: {
      kind: 'Reduce',
      rule: 77,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 77,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 77,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 77,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 77,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 77,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 77,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 77,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 77,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 78,
    },
    NAME: {
      kind: 'Reduce',
      rule: 78,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 78,
    },
    ON: {
      kind: 'Reduce',
      rule: 78,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 78,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 78,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 78,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 78,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 78,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 78,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 78,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 78,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 35,
    },
    NAME: {
      kind: 'Reduce',
      rule: 35,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 35,
    },
    ON: {
      kind: 'Reduce',
      rule: 35,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 35,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 35,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 35,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 35,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 35,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 35,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 35,
    },
    AT: {
      kind: 'Reduce',
      rule: 35,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 35,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 79,
    },
    NAME: {
      kind: 'Reduce',
      rule: 79,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 79,
    },
    ON: {
      kind: 'Reduce',
      rule: 79,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 79,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 79,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 79,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 79,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 79,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 79,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 79,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 79,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 83,
    },
    NAME: {
      kind: 'Reduce',
      rule: 83,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 83,
    },
    ON: {
      kind: 'Reduce',
      rule: 83,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 83,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 83,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 83,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 83,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 83,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 83,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 83,
    },
    AT: {
      kind: 'Reduce',
      rule: 83,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 83,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 84,
    },
    NAME: {
      kind: 'Reduce',
      rule: 84,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 84,
    },
    ON: {
      kind: 'Reduce',
      rule: 84,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 84,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 84,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 84,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 84,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 84,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 84,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 84,
    },
    AT: {
      kind: 'Reduce',
      rule: 84,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 80,
    },
    NAME: {
      kind: 'Reduce',
      rule: 80,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 80,
    },
    ON: {
      kind: 'Reduce',
      rule: 80,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 80,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 80,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 80,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 80,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 80,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 80,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 80,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 80,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 36,
    },
    NAME: {
      kind: 'Reduce',
      rule: 36,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 36,
    },
    ON: {
      kind: 'Reduce',
      rule: 36,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 36,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 36,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 36,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 36,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 36,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 36,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 36,
    },
    AT: {
      kind: 'Reduce',
      rule: 36,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 36,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 81,
    },
    NAME: {
      kind: 'Reduce',
      rule: 81,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 81,
    },
    ON: {
      kind: 'Reduce',
      rule: 81,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 81,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 81,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 81,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 81,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 81,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 81,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 81,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 81,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 99,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 89,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 82,
    },
    NAME: {
      kind: 'Reduce',
      rule: 82,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 82,
    },
    ON: {
      kind: 'Reduce',
      rule: 82,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 82,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 82,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 82,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 82,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 82,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 82,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 82,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 82,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 102,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 65,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      rule: 65,
    },
    NAME: {
      kind: 'Reduce',
      rule: 65,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 65,
    },
    ON: {
      kind: 'Reduce',
      rule: 65,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      rule: 94,
    },
    NAME: {
      kind: 'Reduce',
      rule: 94,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 94,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 94,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 109,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 52,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 52,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    EQUALS: {
      kind: 'Reduce',
      rule: 27,
    },
    AT: {
      kind: 'Reduce',
      rule: 27,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 27,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 27,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 27,
    },
  },
  {
    EQUALS: {
      kind: 'Reduce',
      rule: 26,
    },
    AT: {
      kind: 'Reduce',
      rule: 26,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 26,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 26,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 26,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 118,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 85,
    },
    NAME: {
      kind: 'Reduce',
      rule: 85,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 85,
    },
    ON: {
      kind: 'Reduce',
      rule: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 85,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 85,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 85,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 85,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 85,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 85,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 85,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 85,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 119,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 89,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 87,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 87,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 87,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 87,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 87,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 87,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 87,
    },
    NAME: {
      kind: 'Reduce',
      rule: 87,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 87,
    },
    ON: {
      kind: 'Reduce',
      rule: 87,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 89,
    },
    NAME: {
      kind: 'Reduce',
      rule: 89,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 89,
    },
    ON: {
      kind: 'Reduce',
      rule: 89,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 89,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 89,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 89,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 89,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 89,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 89,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 89,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 89,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 121,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 91,
    },
    NAME: {
      kind: 'Reduce',
      rule: 91,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 91,
    },
    ON: {
      kind: 'Reduce',
      rule: 91,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 123,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 19,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 19,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 109,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 51,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 51,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 53,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 53,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 53,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 28,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 28,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 28,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 30,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 30,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 30,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 30,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 30,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 30,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 30,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 30,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 30,
    },
    NAME: {
      kind: 'Reduce',
      rule: 30,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 30,
    },
    ON: {
      kind: 'Reduce',
      rule: 30,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 30,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 31,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 31,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 31,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 31,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 31,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 31,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 31,
    },
    NAME: {
      kind: 'Reduce',
      rule: 31,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 31,
    },
    ON: {
      kind: 'Reduce',
      rule: 31,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 31,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 32,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 32,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 32,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 32,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 32,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 32,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 32,
    },
    NAME: {
      kind: 'Reduce',
      rule: 32,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 32,
    },
    ON: {
      kind: 'Reduce',
      rule: 32,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 32,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 33,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 33,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 33,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 33,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 33,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 33,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 33,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 33,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 33,
    },
    NAME: {
      kind: 'Reduce',
      rule: 33,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 33,
    },
    ON: {
      kind: 'Reduce',
      rule: 33,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 33,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 126,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 34,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 34,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 34,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 34,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 34,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 34,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 34,
    },
    NAME: {
      kind: 'Reduce',
      rule: 34,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 34,
    },
    ON: {
      kind: 'Reduce',
      rule: 34,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 34,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 129,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    BANG: {
      kind: 'Reduce',
      rule: 25,
    },
    EQUALS: {
      kind: 'Reduce',
      rule: 25,
    },
    AT: {
      kind: 'Reduce',
      rule: 25,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 25,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 25,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 25,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 86,
    },
    NAME: {
      kind: 'Reduce',
      rule: 86,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 86,
    },
    ON: {
      kind: 'Reduce',
      rule: 86,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 86,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 86,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 86,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 86,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 86,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 86,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 86,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 86,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 88,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 88,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 88,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 88,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 88,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 88,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 88,
    },
    NAME: {
      kind: 'Reduce',
      rule: 88,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 88,
    },
    ON: {
      kind: 'Reduce',
      rule: 88,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 90,
    },
    NAME: {
      kind: 'Reduce',
      rule: 90,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 90,
    },
    ON: {
      kind: 'Reduce',
      rule: 90,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 90,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 90,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 90,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 90,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 90,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 90,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 90,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 90,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 92,
    },
    NAME: {
      kind: 'Reduce',
      rule: 92,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 92,
    },
    ON: {
      kind: 'Reduce',
      rule: 92,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    DOLLAR: {
      kind: 'Shift',
      state: 47,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 91,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 89,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 54,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 54,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 54,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 135,
    },
    AT: {
      kind: 'Reduce',
      rule: 73,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 73,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 73,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 37,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 37,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 37,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 37,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 37,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 37,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 37,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 37,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 37,
    },
    NAME: {
      kind: 'Reduce',
      rule: 37,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 37,
    },
    ON: {
      kind: 'Reduce',
      rule: 37,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 37,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 136,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 39,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 39,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 39,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 39,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 39,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 39,
    },
    NAME: {
      kind: 'Reduce',
      rule: 39,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 39,
    },
    ON: {
      kind: 'Reduce',
      rule: 39,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 41,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 41,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 41,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 41,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 41,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 41,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 41,
    },
    NAME: {
      kind: 'Reduce',
      rule: 41,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 41,
    },
    ON: {
      kind: 'Reduce',
      rule: 41,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 41,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 138,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 43,
    },
    NAME: {
      kind: 'Reduce',
      rule: 43,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 43,
    },
    ON: {
      kind: 'Reduce',
      rule: 43,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 140,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 93,
    },
    NAME: {
      kind: 'Reduce',
      rule: 93,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 93,
    },
    ON: {
      kind: 'Reduce',
      rule: 93,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 55,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 55,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 55,
    },
  },
  {
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 38,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 38,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 38,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 38,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 38,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 38,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 38,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 38,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 38,
    },
    NAME: {
      kind: 'Reduce',
      rule: 38,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 38,
    },
    ON: {
      kind: 'Reduce',
      rule: 38,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 38,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 40,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 40,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 40,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 40,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 40,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 40,
    },
    NAME: {
      kind: 'Reduce',
      rule: 40,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 40,
    },
    ON: {
      kind: 'Reduce',
      rule: 40,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 42,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 42,
    },
    NUMBER: {
      kind: 'Reduce',
      rule: 42,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      rule: 42,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      rule: 42,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      rule: 42,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 42,
    },
    NAME: {
      kind: 'Reduce',
      rule: 42,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 42,
    },
    ON: {
      kind: 'Reduce',
      rule: 42,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 42,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 44,
    },
    NAME: {
      kind: 'Reduce',
      rule: 44,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 44,
    },
    ON: {
      kind: 'Reduce',
      rule: 44,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Shift',
      state: 145,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 74,
    },
    NAME: {
      kind: 'Reduce',
      rule: 74,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 74,
    },
    ON: {
      kind: 'Reduce',
      rule: 74,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 147,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 45,
    },
    NAME: {
      kind: 'Reduce',
      rule: 45,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 45,
    },
    ON: {
      kind: 'Reduce',
      rule: 45,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      rule: 72,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 72,
    },
    DOLLAR: {
      kind: 'Reduce',
      rule: 72,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 75,
    },
    NAME: {
      kind: 'Reduce',
      rule: 75,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 75,
    },
    ON: {
      kind: 'Reduce',
      rule: 75,
    },
  },
  {
    BLOCK_STRING_VALUE: {
      kind: 'Shift',
      state: 85,
    },
    FRAGMENT: {
      kind: 'Shift',
      state: 16,
    },
    NAME: {
      kind: 'Shift',
      state: 15,
    },
    NUMBER: {
      kind: 'Shift',
      state: 82,
    },
    ON: {
      kind: 'Shift',
      state: 17,
    },
    OPENING_BRACE: {
      kind: 'Shift',
      state: 117,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 115,
    },
    STRING_VALUE: {
      kind: 'Shift',
      state: 84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      rule: 76,
    },
    NAME: {
      kind: 'Reduce',
      rule: 76,
    },
    FRAGMENT: {
      kind: 'Reduce',
      rule: 76,
    },
    ON: {
      kind: 'Reduce',
      rule: 76,
    },
  },
];
const gotos = [
  {
    Definition: 3,
    DefinitionList: 2,
    Document: 1,
    ExecutableDefinition: 4,
    FragmentDefinition: 10,
    OperationDefinition: 5,
    OperationType: 6,
    SelectionSet: 8,
  },
  {},
  {
    Definition: 12,
    ExecutableDefinition: 4,
    FragmentDefinition: 10,
    OperationDefinition: 5,
    OperationType: 6,
    SelectionSet: 8,
  },
  {},
  {},
  {},
  {
    Name: 14,
    OperationNameOpt: 13,
  },
  {},
  {},
  {
    Alias: 22,
    Field: 20,
    FragmentSpread: 23,
    InlineFragment: 25,
    Name: 21,
    Selection: 19,
    SelectionList: 18,
  },
  {},
  {
    FragmentName: 26,
  },
  {},
  {
    VariableDefinitionsOpt: 28,
  },
  {},
  {},
  {},
  {},
  {
    Alias: 22,
    Field: 20,
    FragmentSpread: 23,
    InlineFragment: 25,
    Name: 21,
    Selection: 31,
  },
  {},
  {},
  {
    ArgumentsOpt: 32,
  },
  {
    Name: 35,
  },
  {},
  {
    FragmentName: 36,
    TypeConditionOpt: 37,
  },
  {},
  {},
  {},
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 40,
  },
  {
    Variable: 46,
    VariableDefinition: 45,
    VariableDefinitionList: 44,
  },
  {},
  {},
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 48,
  },
  {},
  {
    Argument: 50,
    ArgumentList: 49,
    Name: 51,
  },
  {
    ArgumentsOpt: 52,
  },
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 53,
  },
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 54,
  },
  {
    Name: 56,
    NamedType: 55,
  },
  {
    Name: 56,
    NamedType: 57,
  },
  {
    SelectionSet: 58,
  },
  {
    Directive: 59,
  },
  {},
  {
    Name: 60,
  },
  {
    Variable: 46,
    VariableDefinition: 62,
  },
  {},
  {},
  {
    Name: 64,
  },
  {
    SelectionSet: 66,
    SelectionSetOpt: 65,
  },
  {
    Argument: 68,
    Name: 51,
  },
  {},
  {},
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 70,
  },
  {},
  {
    SelectionSet: 71,
  },
  {},
  {},
  {
    Directive: 42,
    DirectiveList: 41,
    DirectivesOpt: 72,
  },
  {},
  {},
  {
    ArgumentsOpt: 73,
  },
  {},
  {},
  {
    ListType: 76,
    Name: 56,
    NamedType: 75,
    NonNullType: 78,
    Type: 74,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValue: 88,
    Name: 87,
    NamedValue: 86,
    NumberValue: 81,
    ObjectValue: 90,
    StringValue: 83,
    Value: 79,
    Variable: 80,
  },
  {
    SelectionSet: 66,
    SelectionSetOpt: 92,
  },
  {},
  {
    SelectionSet: 93,
  },
  {},
  {
    DefaultValueOpt: 94,
  },
  {},
  {},
  {
    ListType: 76,
    Name: 56,
    NamedType: 75,
    NonNullType: 78,
    Type: 98,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ListValue: 88,
    ListValueList: 100,
    Name: 87,
    NamedValue: 86,
    NumberValue: 81,
    ObjectValue: 90,
    StringValue: 83,
    Value: 101,
    Variable: 80,
  },
  {},
  {
    Name: 105,
    ObjectField: 104,
    ObjectFieldList: 103,
  },
  {},
  {},
  {
    DirectiveConst: 108,
    DirectiveConstList: 107,
    DirectivesConstOpt: 106,
  },
  {
    ListValueConst: 114,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 110,
  },
  {},
  {},
  {},
  {},
  {
    ListValue: 88,
    Name: 87,
    NamedValue: 86,
    NumberValue: 81,
    ObjectValue: 90,
    StringValue: 83,
    Value: 120,
    Variable: 80,
  },
  {},
  {},
  {
    Name: 105,
    ObjectField: 122,
  },
  {},
  {},
  {},
  {
    DirectiveConst: 124,
  },
  {},
  {
    Name: 125,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValueConst: 114,
    ListValueConstList: 127,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 128,
  },
  {},
  {
    Name: 132,
    ObjectFieldConst: 131,
    ObjectFieldConstList: 130,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValue: 88,
    Name: 87,
    NamedValue: 86,
    NumberValue: 81,
    ObjectValue: 90,
    StringValue: 83,
    Value: 133,
    Variable: 80,
  },
  {},
  {
    ArgumentsConstOpt: 134,
  },
  {},
  {
    ListValueConst: 114,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 137,
  },
  {},
  {},
  {
    Name: 132,
    ObjectFieldConst: 139,
  },
  {},
  {},
  {},
  {},
  {
    ArgumentConst: 142,
    ArgumentConstList: 141,
    Name: 143,
  },
  {},
  {},
  {},
  {},
  {
    ListValueConst: 114,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 144,
  },
  {
    ArgumentConst: 146,
    Name: 143,
  },
  {},
  {},
  {},
  {},
  {},
  {
    ListValueConst: 114,
    Name: 87,
    NamedValue: 113,
    NumberValue: 111,
    ObjectValueConst: 116,
    StringValue: 112,
    ValueConst: 148,
  },
  {},
];
const rules = [
  {
    lhs: "Document'",
    rhs: ['Document'],
    action: () => {} /* dummy placeholder */,
  },
  {
    lhs: 'Document',
    rhs: ['DefinitionList'],
    action: r1,
  },
  {
    lhs: 'DefinitionList',
    rhs: ['Definition'],
    action: r2,
  },
  {
    lhs: 'DefinitionList',
    rhs: ['DefinitionList', 'Definition'],
    action: r3,
  },
  {
    lhs: 'Definition',
    rhs: ['ExecutableDefinition'],
    action: r4,
  },
  {
    lhs: 'Definition',
    rhs: ['FragmentDefinition'],
    action: r5,
  },
  {
    lhs: 'ExecutableDefinition',
    rhs: ['OperationDefinition'],
    action: r6,
  },
  {
    lhs: 'OperationDefinition',
    rhs: [
      'OperationType',
      'OperationNameOpt',
      'VariableDefinitionsOpt',
      'DirectivesOpt',
      'SelectionSet',
    ],
    action: r7,
  },
  {
    lhs: 'OperationDefinition',
    rhs: ['SelectionSet'],
    action: r8,
  },
  {
    lhs: 'OperationType',
    rhs: ['NAME'],
    action: r9,
  },
  {
    lhs: 'OperationNameOpt',
    rhs: ['Name'],
    action: r10,
  },
  {
    lhs: 'OperationNameOpt',
    rhs: [],
    action: r11,
  },
  {
    lhs: 'Name',
    rhs: ['NAME'],
    action: r12,
  },
  {
    lhs: 'Name',
    rhs: ['FRAGMENT'],
    action: r13,
  },
  {
    lhs: 'Name',
    rhs: ['ON'],
    action: r14,
  },
  {
    lhs: 'VariableDefinitionsOpt',
    rhs: ['OPENING_PAREN', 'VariableDefinitionList', 'CLOSING_PAREN'],
    action: r15,
  },
  {
    lhs: 'VariableDefinitionsOpt',
    rhs: [],
    action: r16,
  },
  {
    lhs: 'VariableDefinitionList',
    rhs: ['VariableDefinition'],
    action: r17,
  },
  {
    lhs: 'VariableDefinitionList',
    rhs: ['VariableDefinitionList', 'VariableDefinition'],
    action: r18,
  },
  {
    lhs: 'VariableDefinition',
    rhs: ['Variable', 'COLON', 'Type', 'DefaultValueOpt', 'DirectivesConstOpt'],
    action: r19,
  },
  {
    lhs: 'Variable',
    rhs: ['DOLLAR', 'Name'],
    action: r20,
  },
  {
    lhs: 'Type',
    rhs: ['NamedType'],
    action: r21,
  },
  {
    lhs: 'Type',
    rhs: ['ListType'],
    action: r22,
  },
  {
    lhs: 'Type',
    rhs: ['NonNullType'],
    action: r23,
  },
  {
    lhs: 'NamedType',
    rhs: ['Name'],
    action: r24,
  },
  {
    lhs: 'ListType',
    rhs: ['OPENING_BRACKET', 'Type', 'CLOSING_BRACKET'],
    action: r25,
  },
  {
    lhs: 'NonNullType',
    rhs: ['ListType', 'BANG'],
    action: r26,
  },
  {
    lhs: 'NonNullType',
    rhs: ['NamedType', 'BANG'],
    action: r27,
  },
  {
    lhs: 'DefaultValueOpt',
    rhs: ['EQUALS', 'ValueConst'],
    action: r28,
  },
  {
    lhs: 'DefaultValueOpt',
    rhs: [],
    action: r29,
  },
  {
    lhs: 'ValueConst',
    rhs: ['NumberValue'],
    action: r30,
  },
  {
    lhs: 'ValueConst',
    rhs: ['StringValue'],
    action: r31,
  },
  {
    lhs: 'ValueConst',
    rhs: ['NamedValue'],
    action: r32,
  },
  {
    lhs: 'ValueConst',
    rhs: ['ListValueConst'],
    action: r33,
  },
  {
    lhs: 'ValueConst',
    rhs: ['ObjectValueConst'],
    action: r34,
  },
  {
    lhs: 'NumberValue',
    rhs: ['NUMBER'],
    action: r35,
  },
  {
    lhs: 'NamedValue',
    rhs: ['Name'],
    action: r36,
  },
  {
    lhs: 'ListValueConst',
    rhs: ['OPENING_BRACKET', 'CLOSING_BRACKET'],
    action: r37,
  },
  {
    lhs: 'ListValueConst',
    rhs: ['OPENING_BRACKET', 'ListValueConstList', 'CLOSING_BRACKET'],
    action: r38,
  },
  {
    lhs: 'ListValueConstList',
    rhs: ['ValueConst'],
    action: r39,
  },
  {
    lhs: 'ListValueConstList',
    rhs: ['ListValueConstList', 'ValueConst'],
    action: r40,
  },
  {
    lhs: 'ObjectValueConst',
    rhs: ['OPENING_BRACE', 'CLOSING_BRACE'],
    action: r41,
  },
  {
    lhs: 'ObjectValueConst',
    rhs: ['OPENING_BRACE', 'ObjectFieldConstList', 'CLOSING_BRACE'],
    action: r42,
  },
  {
    lhs: 'ObjectFieldConstList',
    rhs: ['ObjectFieldConst'],
    action: r43,
  },
  {
    lhs: 'ObjectFieldConstList',
    rhs: ['ObjectFieldConstList', 'ObjectFieldConst'],
    action: r44,
  },
  {
    lhs: 'ObjectFieldConst',
    rhs: ['Name', 'COLON', 'ValueConst'],
    action: r45,
  },
  {
    lhs: 'DirectivesOpt',
    rhs: ['DirectiveList'],
    action: r46,
  },
  {
    lhs: 'DirectivesOpt',
    rhs: [],
    action: r47,
  },
  {
    lhs: 'DirectiveList',
    rhs: ['Directive'],
    action: r48,
  },
  {
    lhs: 'DirectiveList',
    rhs: ['DirectiveList', 'Directive'],
    action: r49,
  },
  {
    lhs: 'Directive',
    rhs: ['AT', 'Name', 'ArgumentsOpt'],
    action: r50,
  },
  {
    lhs: 'DirectivesConstOpt',
    rhs: ['DirectiveConstList'],
    action: r51,
  },
  {
    lhs: 'DirectivesConstOpt',
    rhs: [],
    action: r52,
  },
  {
    lhs: 'DirectiveConstList',
    rhs: ['DirectiveConst'],
    action: r53,
  },
  {
    lhs: 'DirectiveConstList',
    rhs: ['DirectiveConstList', 'DirectiveConst'],
    action: r54,
  },
  {
    lhs: 'DirectiveConst',
    rhs: ['AT', 'Name', 'ArgumentsConstOpt'],
    action: r55,
  },
  {
    lhs: 'SelectionSet',
    rhs: ['OPENING_BRACE', 'SelectionList', 'CLOSING_BRACE'],
    action: r56,
  },
  {
    lhs: 'SelectionSetOpt',
    rhs: ['SelectionSet'],
    action: r57,
  },
  {
    lhs: 'SelectionSetOpt',
    rhs: [],
    action: r58,
  },
  {
    lhs: 'SelectionList',
    rhs: ['Selection'],
    action: r59,
  },
  {
    lhs: 'SelectionList',
    rhs: ['SelectionList', 'Selection'],
    action: r60,
  },
  {
    lhs: 'Selection',
    rhs: ['Field'],
    action: r61,
  },
  {
    lhs: 'Selection',
    rhs: ['FragmentSpread'],
    action: r62,
  },
  {
    lhs: 'Selection',
    rhs: ['InlineFragment'],
    action: r63,
  },
  {
    lhs: 'Field',
    rhs: ['Name', 'ArgumentsOpt', 'DirectivesOpt', 'SelectionSetOpt'],
    action: r64,
  },
  {
    lhs: 'Field',
    rhs: ['Alias', 'Name', 'ArgumentsOpt', 'DirectivesOpt', 'SelectionSetOpt'],
    action: r65,
  },
  {
    lhs: 'Alias',
    rhs: ['Name', 'COLON'],
    action: r66,
  },
  {
    lhs: 'ArgumentsOpt',
    rhs: ['OPENING_PAREN', 'ArgumentList', 'CLOSING_PAREN'],
    action: r67,
  },
  {
    lhs: 'ArgumentsOpt',
    rhs: [],
    action: r68,
  },
  {
    lhs: 'ArgumentList',
    rhs: ['Argument'],
    action: r69,
  },
  {
    lhs: 'ArgumentList',
    rhs: ['ArgumentList', 'Argument'],
    action: r70,
  },
  {
    lhs: 'Argument',
    rhs: ['Name', 'COLON', 'Value'],
    action: r71,
  },
  {
    lhs: 'ArgumentsConstOpt',
    rhs: ['OPENING_PAREN', 'ArgumentConstList', 'CLOSING_PAREN'],
    action: r72,
  },
  {
    lhs: 'ArgumentsConstOpt',
    rhs: [],
    action: r73,
  },
  {
    lhs: 'ArgumentConstList',
    rhs: ['ArgumentConst'],
    action: r74,
  },
  {
    lhs: 'ArgumentConstList',
    rhs: ['ArgumentConstList', 'ArgumentConst'],
    action: r75,
  },
  {
    lhs: 'ArgumentConst',
    rhs: ['Name', 'COLON', 'ValueConst'],
    action: r76,
  },
  {
    lhs: 'Value',
    rhs: ['Variable'],
    action: r77,
  },
  {
    lhs: 'Value',
    rhs: ['NumberValue'],
    action: r78,
  },
  {
    lhs: 'Value',
    rhs: ['StringValue'],
    action: r79,
  },
  {
    lhs: 'Value',
    rhs: ['NamedValue'],
    action: r80,
  },
  {
    lhs: 'Value',
    rhs: ['ListValue'],
    action: r81,
  },
  {
    lhs: 'Value',
    rhs: ['ObjectValue'],
    action: r82,
  },
  {
    lhs: 'StringValue',
    rhs: ['STRING_VALUE'],
    action: r83,
  },
  {
    lhs: 'StringValue',
    rhs: ['BLOCK_STRING_VALUE'],
    action: r84,
  },
  {
    lhs: 'ListValue',
    rhs: ['OPENING_BRACKET', 'CLOSING_BRACKET'],
    action: r85,
  },
  {
    lhs: 'ListValue',
    rhs: ['OPENING_BRACKET', 'ListValueList', 'CLOSING_BRACKET'],
    action: r86,
  },
  {
    lhs: 'ListValueList',
    rhs: ['Value'],
    action: r87,
  },
  {
    lhs: 'ListValueList',
    rhs: ['ListValueList', 'Value'],
    action: r88,
  },
  {
    lhs: 'ObjectValue',
    rhs: ['OPENING_BRACE', 'CLOSING_BRACE'],
    action: r89,
  },
  {
    lhs: 'ObjectValue',
    rhs: ['OPENING_BRACE', 'ObjectFieldList', 'CLOSING_BRACE'],
    action: r90,
  },
  {
    lhs: 'ObjectFieldList',
    rhs: ['ObjectField'],
    action: r91,
  },
  {
    lhs: 'ObjectFieldList',
    rhs: ['ObjectFieldList', 'ObjectField'],
    action: r92,
  },
  {
    lhs: 'ObjectField',
    rhs: ['Name', 'COLON', 'Value'],
    action: r93,
  },
  {
    lhs: 'FragmentDefinition',
    rhs: [
      'FRAGMENT',
      'FragmentName',
      'ON',
      'NamedType',
      'DirectivesOpt',
      'SelectionSet',
    ],
    action: r94,
  },
  {
    lhs: 'FragmentName',
    rhs: ['NAME'],
    action: r95,
  },
  {
    lhs: 'FragmentSpread',
    rhs: ['ELLIPSIS', 'FragmentName', 'DirectivesOpt'],
    action: r96,
  },
  {
    lhs: 'InlineFragment',
    rhs: ['ELLIPSIS', 'TypeConditionOpt', 'DirectivesOpt', 'SelectionSet'],
    action: r97,
  },
  {
    lhs: 'TypeConditionOpt',
    rhs: ['ON', 'NamedType'],
    action: r98,
  },
  {
    lhs: 'TypeConditionOpt',
    rhs: [],
    action: r99,
  },
];

const EOF = new Token('$', -1, -1, '');

export default function parse(input) {
  const stack = [[null, 0]];
  const lexer = new Lexer(input);

  let token;

  while (true) {
    const [, current] = stack[stack.length - 1];
    const action = actions[current][token.name];

    if (!action) {
      throw new Error('syntax error');
    }
    if (action.kind === 'Accept') {
      // Expect initial state + accept state.
      const [tree] = stack[1];
      return tree;
    } else if (action.kind === 'Shift') {
      stack.push([token, action.state]);
      token = lexer.next() || EOF;
    } else if (action.kind === 'Reduce') {
      const {lhs, rhs, action: code} = rules[action.rule];
      const popped: Array<P | Token | null> = [];
      for (let i = 0; i < rhs.length; i++) {
        const [node] = stack.pop()!;
        popped[rhs.length - i - 1] = node;
      }
      const [, next] = stack[stack.length - 1];
      const target = gotos[next][lhs];
      if (code) {
        stack.push([code(...popped), target]);
      } else {
        throw new Error(
          'to use static parser must provide semantic action for every production',
        );
      }
    }
  }
}
