// @ts-nocheck
import {Lexer} from '@masochist/lexer';
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make parser" instead
 *
 * @generated
 */
/**
 * r0: no production
 */
function r1($1) {
  {
    $$ = {
      kind: 'DOCUMENT',
      definitions: $1,
    };
  }
  return $$;
}
function r2($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r3($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r4($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r5($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r6($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r7($1, $2, $3, $4, $5) {
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
  {
    $$ = $1;
  }
  return $$;
}
function r11() {
  {
    $$ = null;
  }
  return $$;
}
function r12($1) {
  {
    $$ = $1.contents;
  }
  return $$;
}
function r13() {
  {
    $$ = null;
  }
  return $$;
}
function r14() {
  {
    $$ = null;
  }
  return $$;
}
function r15($2) {
  {
    $$ = $2;
  }
  return $$;
}
function r16() {
  {
    $$ = null;
  }
  return $$;
}
function r17($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r18($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r19($1, $3, $4, $5) {
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
  {
    $$ = {
      kind: 'VARIABLE',
      name: $2,
    };
  }
  return $$;
}
function r21($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r22($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r23($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r24($1) {
  {
    $$ = {
      kind: 'NAMED_TYPE',
      name: $1,
    };
  }
  return $$;
}
function r25($2) {
  {
    $$ = {
      kind: 'LIST_TYPE',
      type: $2,
    };
  }
  return $$;
}
function r26($1) {
  {
    $$ = {
      kind: 'NON_NULL_TYPE',
      type: $1,
    };
  }
  return $$;
}
function r27($1) {
  {
    $$ = {
      kind: 'NON_NULL_TYPE',
      type: $1,
    };
  }
  return $$;
}
function r28($2) {
  {
    $$ = $2;
  }
  return $$;
}
function r29() {
  {
    $$ = null;
  }
  return $$;
}
function r30($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r31($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r32($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r33($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r34($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r35($1) {
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
  {
    $$ = {
      kind: 'LIST_VALUE',
      value: [],
    };
  }
  return $$;
}
function r38($2) {
  {
    $$ = {
      kind: 'LIST_VALUE',
      value: $2,
    };
  }
  return $$;
}
function r39($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r40($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r41() {
  {
    $$ = {
      kind: 'OBJECT_VALUE',
      fields: [],
    };
  }
  return $$;
}
function r42($2) {
  {
    $$ = {
      kind: 'OBJECT_VALUE',
      fields: $2,
    };
  }
  return $$;
}
function r43($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r44($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r45($1, $3) {
  {
    $$ = {
      name: $1,
      value: $3,
    };
  }
  return $$;
}
function r46($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r47() {
  {
    $$ = null;
  }
  return $$;
}
function r48($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r49($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r50($2, $3) {
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
  {
    $$ = $1;
  }
  return $$;
}
function r52() {
  {
    $$ = null;
  }
  return $$;
}
function r53($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r54($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r55($2, $3) {
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
  {
    $$ = $2;
  }
  return $$;
}
function r57($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r58() {
  {
    $$ = null;
  }
  return $$;
}
function r59($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r60($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r61($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r62($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r63($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r64($1, $2, $3, $4) {
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
  {
    $$ = $1;
  }
  return $$;
}
function r67($2) {
  {
    $$ = $2;
  }
  return $$;
}
function r68() {
  {
    $$ = null;
  }
  return $$;
}
function r69($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r70($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r71($1, $3) {
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
  {
    $$ = $2;
  }
  return $$;
}
function r73() {
  {
    $$ = null;
  }
  return $$;
}
function r74($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r75($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r76($1, $3) {
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
  {
    $$ = $1;
  }
  return $$;
}
function r78($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r79($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r80($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r81($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r82($1) {
  {
    $$ = $1;
  }
  return $$;
}
function r83($1) {
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
  {
    $$ = {
      kind: 'LIST_VALUE',
      value: [],
    };
  }
  return $$;
}
function r86($2) {
  {
    $$ = {
      kind: 'LIST_VALUE',
      value: $2,
    };
  }
  return $$;
}
function r87($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r88($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r89() {
  {
    $$ = {
      kind: 'OBJECT_VALUE',
      fields: [],
    };
  }
  return $$;
}
function r90($2) {
  {
    $$ = {
      kind: 'OBJECT_VALUE',
      fields: $2,
    };
  }
  return $$;
}
function r91($1) {
  {
    $$ = [$1];
  }
  return $$;
}
function r92($1, $2) {
  {
    $1.push($2);
    $$ = $1;
  }
  return $$;
}
function r93($1, $3) {
  {
    $$ = {
      name: $1,
      value: $3,
    };
  }
  return $$;
}
function r94($2, $4, $5, $6) {
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
  {
    $$ = $1.contents;
  }
  return $$;
}
function r96($2, $3) {
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
  {
    $$ = $2;
  }
  return $$;
}
function r99() {
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
      action: r1,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      action: r2,
    },
    NAME: {
      kind: 'Reduce',
      action: r2,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r2,
    },
    ['$']: {
      kind: 'Reduce',
      action: r2,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      action: r4,
    },
    NAME: {
      kind: 'Reduce',
      action: r4,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r4,
    },
    ['$']: {
      kind: 'Reduce',
      action: r4,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      action: r6,
    },
    NAME: {
      kind: 'Reduce',
      action: r6,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r6,
    },
    ['$']: {
      kind: 'Reduce',
      action: r6,
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
      action: r11,
    },
    AT: {
      kind: 'Reduce',
      action: r11,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r11,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      action: r9,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r9,
    },
    ON: {
      kind: 'Reduce',
      action: r9,
    },
    OPENING_PAREN: {
      kind: 'Reduce',
      action: r9,
    },
    AT: {
      kind: 'Reduce',
      action: r9,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r9,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      action: r8,
    },
    NAME: {
      kind: 'Reduce',
      action: r8,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r8,
    },
    ['$']: {
      kind: 'Reduce',
      action: r8,
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
      action: r5,
    },
    NAME: {
      kind: 'Reduce',
      action: r5,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r5,
    },
    ['$']: {
      kind: 'Reduce',
      action: r5,
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
      action: r3,
    },
    NAME: {
      kind: 'Reduce',
      action: r3,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r3,
    },
    ['$']: {
      kind: 'Reduce',
      action: r3,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 29,
    },
    AT: {
      kind: 'Reduce',
      action: r16,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r16,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      action: r10,
    },
    AT: {
      kind: 'Reduce',
      action: r10,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r10,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      action: r12,
    },
    AT: {
      kind: 'Reduce',
      action: r12,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r12,
    },
    COLON: {
      kind: 'Reduce',
      action: r12,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r12,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r12,
    },
    NAME: {
      kind: 'Reduce',
      action: r12,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r12,
    },
    ON: {
      kind: 'Reduce',
      action: r12,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r12,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r12,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r12,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r12,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r12,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r12,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r12,
    },
    BANG: {
      kind: 'Reduce',
      action: r12,
    },
    EQUALS: {
      kind: 'Reduce',
      action: r12,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      action: r13,
    },
    AT: {
      kind: 'Reduce',
      action: r13,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r13,
    },
    COLON: {
      kind: 'Reduce',
      action: r13,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r13,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r13,
    },
    NAME: {
      kind: 'Reduce',
      action: r13,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r13,
    },
    ON: {
      kind: 'Reduce',
      action: r13,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r13,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r13,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r13,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r13,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r13,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r13,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r13,
    },
    BANG: {
      kind: 'Reduce',
      action: r13,
    },
    EQUALS: {
      kind: 'Reduce',
      action: r13,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Reduce',
      action: r14,
    },
    AT: {
      kind: 'Reduce',
      action: r14,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r14,
    },
    COLON: {
      kind: 'Reduce',
      action: r14,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r14,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r14,
    },
    NAME: {
      kind: 'Reduce',
      action: r14,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r14,
    },
    ON: {
      kind: 'Reduce',
      action: r14,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r14,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r14,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r14,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r14,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r14,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r14,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r14,
    },
    BANG: {
      kind: 'Reduce',
      action: r14,
    },
    EQUALS: {
      kind: 'Reduce',
      action: r14,
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
      action: r59,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r59,
    },
    NAME: {
      kind: 'Reduce',
      action: r59,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r59,
    },
    ON: {
      kind: 'Reduce',
      action: r59,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r61,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r61,
    },
    NAME: {
      kind: 'Reduce',
      action: r61,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r61,
    },
    ON: {
      kind: 'Reduce',
      action: r61,
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
      action: r68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r68,
    },
    NAME: {
      kind: 'Reduce',
      action: r68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r68,
    },
    ON: {
      kind: 'Reduce',
      action: r68,
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
      action: r62,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r62,
    },
    NAME: {
      kind: 'Reduce',
      action: r62,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r62,
    },
    ON: {
      kind: 'Reduce',
      action: r62,
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
      action: r99,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r99,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r63,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r63,
    },
    NAME: {
      kind: 'Reduce',
      action: r63,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r63,
    },
    ON: {
      kind: 'Reduce',
      action: r63,
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
      action: r95,
    },
    AT: {
      kind: 'Reduce',
      action: r95,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r95,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r95,
    },
    NAME: {
      kind: 'Reduce',
      action: r95,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r95,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r47,
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
      action: r56,
    },
    NAME: {
      kind: 'Reduce',
      action: r56,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r56,
    },
    ['$']: {
      kind: 'Reduce',
      action: r56,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r56,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r56,
    },
    ON: {
      kind: 'Reduce',
      action: r56,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r60,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r60,
    },
    NAME: {
      kind: 'Reduce',
      action: r60,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r60,
    },
    ON: {
      kind: 'Reduce',
      action: r60,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r47,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r47,
    },
    NAME: {
      kind: 'Reduce',
      action: r47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r47,
    },
    ON: {
      kind: 'Reduce',
      action: r47,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      action: r66,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r66,
    },
    ON: {
      kind: 'Reduce',
      action: r66,
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
      action: r68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r68,
    },
    NAME: {
      kind: 'Reduce',
      action: r68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r68,
    },
    ON: {
      kind: 'Reduce',
      action: r68,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r47,
    },
    NAME: {
      kind: 'Reduce',
      action: r47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r47,
    },
    ON: {
      kind: 'Reduce',
      action: r47,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r47,
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
      action: r46,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r46,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r46,
    },
    NAME: {
      kind: 'Reduce',
      action: r46,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r46,
    },
    ON: {
      kind: 'Reduce',
      action: r46,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r48,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r48,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r48,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r48,
    },
    NAME: {
      kind: 'Reduce',
      action: r48,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r48,
    },
    ON: {
      kind: 'Reduce',
      action: r48,
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
      action: r17,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r17,
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
      action: r58,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r58,
    },
    NAME: {
      kind: 'Reduce',
      action: r58,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r58,
    },
    ON: {
      kind: 'Reduce',
      action: r58,
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
      action: r69,
    },
    NAME: {
      kind: 'Reduce',
      action: r69,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r69,
    },
    ON: {
      kind: 'Reduce',
      action: r69,
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
      action: r47,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r47,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r47,
    },
    NAME: {
      kind: 'Reduce',
      action: r47,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r47,
    },
    ON: {
      kind: 'Reduce',
      action: r47,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r96,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r96,
    },
    NAME: {
      kind: 'Reduce',
      action: r96,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r96,
    },
    ON: {
      kind: 'Reduce',
      action: r96,
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
      action: r98,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r98,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r24,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r24,
    },
    BANG: {
      kind: 'Reduce',
      action: r24,
    },
    EQUALS: {
      kind: 'Reduce',
      action: r24,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r24,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r24,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r24,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 43,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r47,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      action: r7,
    },
    NAME: {
      kind: 'Reduce',
      action: r7,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r7,
    },
    ['$']: {
      kind: 'Reduce',
      action: r7,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r49,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r49,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r49,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r49,
    },
    NAME: {
      kind: 'Reduce',
      action: r49,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r49,
    },
    ON: {
      kind: 'Reduce',
      action: r49,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 34,
    },
    AT: {
      kind: 'Reduce',
      action: r68,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r68,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r68,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r68,
    },
    NAME: {
      kind: 'Reduce',
      action: r68,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r68,
    },
    ON: {
      kind: 'Reduce',
      action: r68,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r15,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r15,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r18,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r18,
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
      action: r20,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r20,
    },
    NAME: {
      kind: 'Reduce',
      action: r20,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r20,
    },
    ON: {
      kind: 'Reduce',
      action: r20,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r20,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r20,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r20,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r20,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r20,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r20,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r20,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r20,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r64,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r64,
    },
    NAME: {
      kind: 'Reduce',
      action: r64,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r64,
    },
    ON: {
      kind: 'Reduce',
      action: r64,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r57,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r57,
    },
    NAME: {
      kind: 'Reduce',
      action: r57,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r57,
    },
    ON: {
      kind: 'Reduce',
      action: r57,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r67,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r67,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r67,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r67,
    },
    NAME: {
      kind: 'Reduce',
      action: r67,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r67,
    },
    ON: {
      kind: 'Reduce',
      action: r67,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r70,
    },
    NAME: {
      kind: 'Reduce',
      action: r70,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r70,
    },
    ON: {
      kind: 'Reduce',
      action: r70,
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
      action: r58,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r58,
    },
    NAME: {
      kind: 'Reduce',
      action: r58,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r58,
    },
    ON: {
      kind: 'Reduce',
      action: r58,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r97,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r97,
    },
    NAME: {
      kind: 'Reduce',
      action: r97,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r97,
    },
    ON: {
      kind: 'Reduce',
      action: r97,
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
      action: r50,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r50,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r50,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r50,
    },
    NAME: {
      kind: 'Reduce',
      action: r50,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r50,
    },
    ON: {
      kind: 'Reduce',
      action: r50,
    },
  },
  {
    EQUALS: {
      kind: 'Shift',
      state: 95,
    },
    AT: {
      kind: 'Reduce',
      action: r29,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r29,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r29,
    },
  },
  {
    BANG: {
      kind: 'Shift',
      state: 96,
    },
    EQUALS: {
      kind: 'Reduce',
      action: r21,
    },
    AT: {
      kind: 'Reduce',
      action: r21,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r21,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r21,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r21,
    },
  },
  {
    BANG: {
      kind: 'Shift',
      state: 97,
    },
    EQUALS: {
      kind: 'Reduce',
      action: r22,
    },
    AT: {
      kind: 'Reduce',
      action: r22,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r22,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r22,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r22,
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
      action: r23,
    },
    AT: {
      kind: 'Reduce',
      action: r23,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r23,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r23,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r23,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r71,
    },
    NAME: {
      kind: 'Reduce',
      action: r71,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r71,
    },
    ON: {
      kind: 'Reduce',
      action: r71,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r77,
    },
    NAME: {
      kind: 'Reduce',
      action: r77,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r77,
    },
    ON: {
      kind: 'Reduce',
      action: r77,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r77,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r77,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r77,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r77,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r77,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r77,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r77,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r77,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r78,
    },
    NAME: {
      kind: 'Reduce',
      action: r78,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r78,
    },
    ON: {
      kind: 'Reduce',
      action: r78,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r78,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r78,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r78,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r78,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r78,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r78,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r78,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r78,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r35,
    },
    NAME: {
      kind: 'Reduce',
      action: r35,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r35,
    },
    ON: {
      kind: 'Reduce',
      action: r35,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r35,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r35,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r35,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r35,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r35,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r35,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r35,
    },
    AT: {
      kind: 'Reduce',
      action: r35,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r35,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r79,
    },
    NAME: {
      kind: 'Reduce',
      action: r79,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r79,
    },
    ON: {
      kind: 'Reduce',
      action: r79,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r79,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r79,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r79,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r79,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r79,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r79,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r79,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r79,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r83,
    },
    NAME: {
      kind: 'Reduce',
      action: r83,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r83,
    },
    ON: {
      kind: 'Reduce',
      action: r83,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r83,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r83,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r83,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r83,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r83,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r83,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r83,
    },
    AT: {
      kind: 'Reduce',
      action: r83,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r83,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r84,
    },
    NAME: {
      kind: 'Reduce',
      action: r84,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r84,
    },
    ON: {
      kind: 'Reduce',
      action: r84,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r84,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r84,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r84,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r84,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r84,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r84,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r84,
    },
    AT: {
      kind: 'Reduce',
      action: r84,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r84,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r80,
    },
    NAME: {
      kind: 'Reduce',
      action: r80,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r80,
    },
    ON: {
      kind: 'Reduce',
      action: r80,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r80,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r80,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r80,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r80,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r80,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r80,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r80,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r80,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r36,
    },
    NAME: {
      kind: 'Reduce',
      action: r36,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r36,
    },
    ON: {
      kind: 'Reduce',
      action: r36,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r36,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r36,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r36,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r36,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r36,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r36,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r36,
    },
    AT: {
      kind: 'Reduce',
      action: r36,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r36,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r81,
    },
    NAME: {
      kind: 'Reduce',
      action: r81,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r81,
    },
    ON: {
      kind: 'Reduce',
      action: r81,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r81,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r81,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r81,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r81,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r81,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r81,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r81,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r81,
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
      action: r82,
    },
    NAME: {
      kind: 'Reduce',
      action: r82,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r82,
    },
    ON: {
      kind: 'Reduce',
      action: r82,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r82,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r82,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r82,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r82,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r82,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r82,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r82,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r82,
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
      action: r65,
    },
    ELLIPSIS: {
      kind: 'Reduce',
      action: r65,
    },
    NAME: {
      kind: 'Reduce',
      action: r65,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r65,
    },
    ON: {
      kind: 'Reduce',
      action: r65,
    },
  },
  {
    FRAGMENT: {
      kind: 'Reduce',
      action: r94,
    },
    NAME: {
      kind: 'Reduce',
      action: r94,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r94,
    },
    ['$']: {
      kind: 'Reduce',
      action: r94,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 109,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r52,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r52,
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
      action: r27,
    },
    AT: {
      kind: 'Reduce',
      action: r27,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r27,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r27,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r27,
    },
  },
  {
    EQUALS: {
      kind: 'Reduce',
      action: r26,
    },
    AT: {
      kind: 'Reduce',
      action: r26,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r26,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r26,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r26,
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
      action: r85,
    },
    NAME: {
      kind: 'Reduce',
      action: r85,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r85,
    },
    ON: {
      kind: 'Reduce',
      action: r85,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r85,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r85,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r85,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r85,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r85,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r85,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r85,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r85,
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
      action: r87,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r87,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r87,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r87,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r87,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r87,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r87,
    },
    NAME: {
      kind: 'Reduce',
      action: r87,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r87,
    },
    ON: {
      kind: 'Reduce',
      action: r87,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r89,
    },
    NAME: {
      kind: 'Reduce',
      action: r89,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r89,
    },
    ON: {
      kind: 'Reduce',
      action: r89,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r89,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r89,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r89,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r89,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r89,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r89,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r89,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r89,
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
      action: r91,
    },
    NAME: {
      kind: 'Reduce',
      action: r91,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r91,
    },
    ON: {
      kind: 'Reduce',
      action: r91,
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
      action: r19,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r19,
    },
  },
  {
    AT: {
      kind: 'Shift',
      state: 109,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r51,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r51,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r53,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r53,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r53,
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
      action: r28,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r28,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r28,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r30,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r30,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r30,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r30,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r30,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r30,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r30,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r30,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r30,
    },
    NAME: {
      kind: 'Reduce',
      action: r30,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r30,
    },
    ON: {
      kind: 'Reduce',
      action: r30,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r30,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r31,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r31,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r31,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r31,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r31,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r31,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r31,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r31,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r31,
    },
    NAME: {
      kind: 'Reduce',
      action: r31,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r31,
    },
    ON: {
      kind: 'Reduce',
      action: r31,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r31,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r32,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r32,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r32,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r32,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r32,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r32,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r32,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r32,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r32,
    },
    NAME: {
      kind: 'Reduce',
      action: r32,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r32,
    },
    ON: {
      kind: 'Reduce',
      action: r32,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r32,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r33,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r33,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r33,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r33,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r33,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r33,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r33,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r33,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r33,
    },
    NAME: {
      kind: 'Reduce',
      action: r33,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r33,
    },
    ON: {
      kind: 'Reduce',
      action: r33,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r33,
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
      action: r34,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r34,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r34,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r34,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r34,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r34,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r34,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r34,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r34,
    },
    NAME: {
      kind: 'Reduce',
      action: r34,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r34,
    },
    ON: {
      kind: 'Reduce',
      action: r34,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r34,
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
      action: r25,
    },
    EQUALS: {
      kind: 'Reduce',
      action: r25,
    },
    AT: {
      kind: 'Reduce',
      action: r25,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r25,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r25,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r25,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r86,
    },
    NAME: {
      kind: 'Reduce',
      action: r86,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r86,
    },
    ON: {
      kind: 'Reduce',
      action: r86,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r86,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r86,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r86,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r86,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r86,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r86,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r86,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r86,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r88,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r88,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r88,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r88,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r88,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r88,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r88,
    },
    NAME: {
      kind: 'Reduce',
      action: r88,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r88,
    },
    ON: {
      kind: 'Reduce',
      action: r88,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r90,
    },
    NAME: {
      kind: 'Reduce',
      action: r90,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r90,
    },
    ON: {
      kind: 'Reduce',
      action: r90,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r90,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r90,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r90,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r90,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r90,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r90,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r90,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r90,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r92,
    },
    NAME: {
      kind: 'Reduce',
      action: r92,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r92,
    },
    ON: {
      kind: 'Reduce',
      action: r92,
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
      action: r54,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r54,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r54,
    },
  },
  {
    OPENING_PAREN: {
      kind: 'Shift',
      state: 135,
    },
    AT: {
      kind: 'Reduce',
      action: r73,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r73,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r73,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r37,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r37,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r37,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r37,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r37,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r37,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r37,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r37,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r37,
    },
    NAME: {
      kind: 'Reduce',
      action: r37,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r37,
    },
    ON: {
      kind: 'Reduce',
      action: r37,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r37,
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
      action: r39,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r39,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r39,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r39,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r39,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r39,
    },
    NAME: {
      kind: 'Reduce',
      action: r39,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r39,
    },
    ON: {
      kind: 'Reduce',
      action: r39,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r41,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r41,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r41,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r41,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r41,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r41,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r41,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r41,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r41,
    },
    NAME: {
      kind: 'Reduce',
      action: r41,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r41,
    },
    ON: {
      kind: 'Reduce',
      action: r41,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r41,
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
      action: r43,
    },
    NAME: {
      kind: 'Reduce',
      action: r43,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r43,
    },
    ON: {
      kind: 'Reduce',
      action: r43,
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
      action: r93,
    },
    NAME: {
      kind: 'Reduce',
      action: r93,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r93,
    },
    ON: {
      kind: 'Reduce',
      action: r93,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r55,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r55,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r55,
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
      action: r38,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r38,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r38,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r38,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r38,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r38,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r38,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r38,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r38,
    },
    NAME: {
      kind: 'Reduce',
      action: r38,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r38,
    },
    ON: {
      kind: 'Reduce',
      action: r38,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r38,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r40,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r40,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r40,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r40,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r40,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r40,
    },
    NAME: {
      kind: 'Reduce',
      action: r40,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r40,
    },
    ON: {
      kind: 'Reduce',
      action: r40,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r42,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r42,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r42,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      action: r42,
    },
    NUMBER: {
      kind: 'Reduce',
      action: r42,
    },
    STRING_VALUE: {
      kind: 'Reduce',
      action: r42,
    },
    BLOCK_STRING_VALUE: {
      kind: 'Reduce',
      action: r42,
    },
    OPENING_BRACKET: {
      kind: 'Reduce',
      action: r42,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      action: r42,
    },
    NAME: {
      kind: 'Reduce',
      action: r42,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r42,
    },
    ON: {
      kind: 'Reduce',
      action: r42,
    },
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r42,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      action: r44,
    },
    NAME: {
      kind: 'Reduce',
      action: r44,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r44,
    },
    ON: {
      kind: 'Reduce',
      action: r44,
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
      action: r74,
    },
    NAME: {
      kind: 'Reduce',
      action: r74,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r74,
    },
    ON: {
      kind: 'Reduce',
      action: r74,
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
      action: r45,
    },
    NAME: {
      kind: 'Reduce',
      action: r45,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r45,
    },
    ON: {
      kind: 'Reduce',
      action: r45,
    },
  },
  {
    AT: {
      kind: 'Reduce',
      action: r72,
    },
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r72,
    },
    DOLLAR: {
      kind: 'Reduce',
      action: r72,
    },
  },
  {
    CLOSING_PAREN: {
      kind: 'Reduce',
      action: r75,
    },
    NAME: {
      kind: 'Reduce',
      action: r75,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r75,
    },
    ON: {
      kind: 'Reduce',
      action: r75,
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
      action: r76,
    },
    NAME: {
      kind: 'Reduce',
      action: r76,
    },
    FRAGMENT: {
      kind: 'Reduce',
      action: r76,
    },
    ON: {
      kind: 'Reduce',
      action: r76,
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
  },
  {
    lhs: 'Document',
    rhs: ['DefinitionList'],
  },
  {
    lhs: 'DefinitionList',
    rhs: ['Definition'],
  },
  {
    lhs: 'DefinitionList',
    rhs: ['DefinitionList', 'Definition'],
  },
  {
    lhs: 'Definition',
    rhs: ['ExecutableDefinition'],
  },
  {
    lhs: 'Definition',
    rhs: ['FragmentDefinition'],
  },
  {
    lhs: 'ExecutableDefinition',
    rhs: ['OperationDefinition'],
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
  },
  {
    lhs: 'OperationDefinition',
    rhs: ['SelectionSet'],
  },
  {
    lhs: 'OperationType',
    rhs: ['NAME'],
  },
  {
    lhs: 'OperationNameOpt',
    rhs: ['Name'],
  },
  {
    lhs: 'OperationNameOpt',
    rhs: [],
  },
  {
    lhs: 'Name',
    rhs: ['NAME'],
  },
  {
    lhs: 'Name',
    rhs: ['FRAGMENT'],
  },
  {
    lhs: 'Name',
    rhs: ['ON'],
  },
  {
    lhs: 'VariableDefinitionsOpt',
    rhs: ['OPENING_PAREN', 'VariableDefinitionList', 'CLOSING_PAREN'],
  },
  {
    lhs: 'VariableDefinitionsOpt',
    rhs: [],
  },
  {
    lhs: 'VariableDefinitionList',
    rhs: ['VariableDefinition'],
  },
  {
    lhs: 'VariableDefinitionList',
    rhs: ['VariableDefinitionList', 'VariableDefinition'],
  },
  {
    lhs: 'VariableDefinition',
    rhs: ['Variable', 'COLON', 'Type', 'DefaultValueOpt', 'DirectivesConstOpt'],
  },
  {
    lhs: 'Variable',
    rhs: ['DOLLAR', 'Name'],
  },
  {
    lhs: 'Type',
    rhs: ['NamedType'],
  },
  {
    lhs: 'Type',
    rhs: ['ListType'],
  },
  {
    lhs: 'Type',
    rhs: ['NonNullType'],
  },
  {
    lhs: 'NamedType',
    rhs: ['Name'],
  },
  {
    lhs: 'ListType',
    rhs: ['OPENING_BRACKET', 'Type', 'CLOSING_BRACKET'],
  },
  {
    lhs: 'NonNullType',
    rhs: ['ListType', 'BANG'],
  },
  {
    lhs: 'NonNullType',
    rhs: ['NamedType', 'BANG'],
  },
  {
    lhs: 'DefaultValueOpt',
    rhs: ['EQUALS', 'ValueConst'],
  },
  {
    lhs: 'DefaultValueOpt',
    rhs: [],
  },
  {
    lhs: 'ValueConst',
    rhs: ['NumberValue'],
  },
  {
    lhs: 'ValueConst',
    rhs: ['StringValue'],
  },
  {
    lhs: 'ValueConst',
    rhs: ['NamedValue'],
  },
  {
    lhs: 'ValueConst',
    rhs: ['ListValueConst'],
  },
  {
    lhs: 'ValueConst',
    rhs: ['ObjectValueConst'],
  },
  {
    lhs: 'NumberValue',
    rhs: ['NUMBER'],
  },
  {
    lhs: 'NamedValue',
    rhs: ['Name'],
  },
  {
    lhs: 'ListValueConst',
    rhs: ['OPENING_BRACKET', 'CLOSING_BRACKET'],
  },
  {
    lhs: 'ListValueConst',
    rhs: ['OPENING_BRACKET', 'ListValueConstList', 'CLOSING_BRACKET'],
  },
  {
    lhs: 'ListValueConstList',
    rhs: ['ValueConst'],
  },
  {
    lhs: 'ListValueConstList',
    rhs: ['ListValueConstList', 'ValueConst'],
  },
  {
    lhs: 'ObjectValueConst',
    rhs: ['OPENING_BRACE', 'CLOSING_BRACE'],
  },
  {
    lhs: 'ObjectValueConst',
    rhs: ['OPENING_BRACE', 'ObjectFieldConstList', 'CLOSING_BRACE'],
  },
  {
    lhs: 'ObjectFieldConstList',
    rhs: ['ObjectFieldConst'],
  },
  {
    lhs: 'ObjectFieldConstList',
    rhs: ['ObjectFieldConstList', 'ObjectFieldConst'],
  },
  {
    lhs: 'ObjectFieldConst',
    rhs: ['Name', 'COLON', 'ValueConst'],
  },
  {
    lhs: 'DirectivesOpt',
    rhs: ['DirectiveList'],
  },
  {
    lhs: 'DirectivesOpt',
    rhs: [],
  },
  {
    lhs: 'DirectiveList',
    rhs: ['Directive'],
  },
  {
    lhs: 'DirectiveList',
    rhs: ['DirectiveList', 'Directive'],
  },
  {
    lhs: 'Directive',
    rhs: ['AT', 'Name', 'ArgumentsOpt'],
  },
  {
    lhs: 'DirectivesConstOpt',
    rhs: ['DirectiveConstList'],
  },
  {
    lhs: 'DirectivesConstOpt',
    rhs: [],
  },
  {
    lhs: 'DirectiveConstList',
    rhs: ['DirectiveConst'],
  },
  {
    lhs: 'DirectiveConstList',
    rhs: ['DirectiveConstList', 'DirectiveConst'],
  },
  {
    lhs: 'DirectiveConst',
    rhs: ['AT', 'Name', 'ArgumentsConstOpt'],
  },
  {
    lhs: 'SelectionSet',
    rhs: ['OPENING_BRACE', 'SelectionList', 'CLOSING_BRACE'],
  },
  {
    lhs: 'SelectionSetOpt',
    rhs: ['SelectionSet'],
  },
  {
    lhs: 'SelectionSetOpt',
    rhs: [],
  },
  {
    lhs: 'SelectionList',
    rhs: ['Selection'],
  },
  {
    lhs: 'SelectionList',
    rhs: ['SelectionList', 'Selection'],
  },
  {
    lhs: 'Selection',
    rhs: ['Field'],
  },
  {
    lhs: 'Selection',
    rhs: ['FragmentSpread'],
  },
  {
    lhs: 'Selection',
    rhs: ['InlineFragment'],
  },
  {
    lhs: 'Field',
    rhs: ['Name', 'ArgumentsOpt', 'DirectivesOpt', 'SelectionSetOpt'],
  },
  {
    lhs: 'Field',
    rhs: ['Alias', 'Name', 'ArgumentsOpt', 'DirectivesOpt', 'SelectionSetOpt'],
  },
  {
    lhs: 'Alias',
    rhs: ['Name', 'COLON'],
  },
  {
    lhs: 'ArgumentsOpt',
    rhs: ['OPENING_PAREN', 'ArgumentList', 'CLOSING_PAREN'],
  },
  {
    lhs: 'ArgumentsOpt',
    rhs: [],
  },
  {
    lhs: 'ArgumentList',
    rhs: ['Argument'],
  },
  {
    lhs: 'ArgumentList',
    rhs: ['ArgumentList', 'Argument'],
  },
  {
    lhs: 'Argument',
    rhs: ['Name', 'COLON', 'Value'],
  },
  {
    lhs: 'ArgumentsConstOpt',
    rhs: ['OPENING_PAREN', 'ArgumentConstList', 'CLOSING_PAREN'],
  },
  {
    lhs: 'ArgumentsConstOpt',
    rhs: [],
  },
  {
    lhs: 'ArgumentConstList',
    rhs: ['ArgumentConst'],
  },
  {
    lhs: 'ArgumentConstList',
    rhs: ['ArgumentConstList', 'ArgumentConst'],
  },
  {
    lhs: 'ArgumentConst',
    rhs: ['Name', 'COLON', 'ValueConst'],
  },
  {
    lhs: 'Value',
    rhs: ['Variable'],
  },
  {
    lhs: 'Value',
    rhs: ['NumberValue'],
  },
  {
    lhs: 'Value',
    rhs: ['StringValue'],
  },
  {
    lhs: 'Value',
    rhs: ['NamedValue'],
  },
  {
    lhs: 'Value',
    rhs: ['ListValue'],
  },
  {
    lhs: 'Value',
    rhs: ['ObjectValue'],
  },
  {
    lhs: 'StringValue',
    rhs: ['STRING_VALUE'],
  },
  {
    lhs: 'StringValue',
    rhs: ['BLOCK_STRING_VALUE'],
  },
  {
    lhs: 'ListValue',
    rhs: ['OPENING_BRACKET', 'CLOSING_BRACKET'],
  },
  {
    lhs: 'ListValue',
    rhs: ['OPENING_BRACKET', 'ListValueList', 'CLOSING_BRACKET'],
  },
  {
    lhs: 'ListValueList',
    rhs: ['Value'],
  },
  {
    lhs: 'ListValueList',
    rhs: ['ListValueList', 'Value'],
  },
  {
    lhs: 'ObjectValue',
    rhs: ['OPENING_BRACE', 'CLOSING_BRACE'],
  },
  {
    lhs: 'ObjectValue',
    rhs: ['OPENING_BRACE', 'ObjectFieldList', 'CLOSING_BRACE'],
  },
  {
    lhs: 'ObjectFieldList',
    rhs: ['ObjectField'],
  },
  {
    lhs: 'ObjectFieldList',
    rhs: ['ObjectFieldList', 'ObjectField'],
  },
  {
    lhs: 'ObjectField',
    rhs: ['Name', 'COLON', 'Value'],
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
  },
  {
    lhs: 'FragmentName',
    rhs: ['NAME'],
  },
  {
    lhs: 'FragmentSpread',
    rhs: ['ELLIPSIS', 'FragmentName', 'DirectivesOpt'],
  },
  {
    lhs: 'InlineFragment',
    rhs: ['ELLIPSIS', 'TypeConditionOpt', 'DirectivesOpt', 'SelectionSet'],
  },
  {
    lhs: 'TypeConditionOpt',
    rhs: ['ON', 'NamedType'],
  },
  {
    lhs: 'TypeConditionOpt',
    rhs: [],
  },
];


export default function parse(input) {
  const stack = [[null, 0]];
  const lexer = new Lexer(input);

  let token;

  // TODO: handle EOF here
  while ((token = lexer.next())) {
    // ie. Pretty much the same as 'parseWithTable'; I removed some invariants for readability.
    const [, current] = stack[stack.length - 1];
    const action = actions[current][token.name];

    if (!action) {
      //throw new Error(
      //  `parseWithTable(): Syntax error (no action for $ {token.name} (token index $ {pointer}) [$ {token.contents}] in state $ {current})`,
      //);
    }
    if (action.kind === 'Accept') {
      // Expect initial state + accept state.
      const [tree] = stack[1];
      return tree;
    } else if (action.kind === 'Shift') {
      stack.push([token, action.state]);
    } else if (action.kind === 'Reduce') {
      console.log(action);
      const {lhs, rhs} = rules[action.state];
      const popped: Array<P | Token | null> = [];
      for (let i = 0; i < rhs.length; i++) {
        const [node] = stack.pop()!;
        popped[rhs.length - i - 1] = node;
      }
      const [, next] = stack[stack.length - 1];
      const target = gotos[next][lhs];
      const code = actions[action.state];
      if (code) {
        stack.push([code(...popped), target]);
      } else {
        stack.push([makeNode(lhs, popped), target]);
      }
    }
  }
}
