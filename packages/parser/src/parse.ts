// @ts-nocheck
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

const table = null; // TODO: put actual table in here...
const grammar = null; // TODO: put actual augmented grammar in here...
const EOF = new Token('$', -1, -1, '');

export default function parse(input) {
  const stack = [[null, 0]];
  const lexer = new Lexer(input);

  let token;

  // TODO: handle EOF here
  while ((token = lexer.next())) {
    // ie. Pretty much the same as 'parseWithTable'; I removed some invariants for readability.
    const [, current] = stack[stack.length - 1];
    const [actions] = table[current];
    const action = actions[token.name];

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
      const {lhs, rhs} = grammar.rules[action.rule];
      const popped: Array<P | Token | null> = [];
      for (let i = 0; i < rhs.length; i++) {
        const [node] = stack.pop()!;
        popped[rhs.length - i - 1] = node;
      }
      const [, next] = stack[stack.length - 1];
      const [, gotos] = table[next];
      const target = gotos[lhs];
      const code = ACTIONS[action.rule];
      if (code) {
        stack.push([code(...popped), target]);
      } else {
        stack.push([makeNode(lhs, popped), target]);
      }
    }
  }
}
