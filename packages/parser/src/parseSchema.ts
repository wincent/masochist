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

  $$ = {
    kind: 'TYPE_SYSTEM_DOCUMENT',
    definitions: $1,
  };

  return $$;
}
function r2($1) {
  let $$ = undefined;
  $$ = [$1];
  return $$;
}
function r3($1, $2) {
  let $$ = undefined;
  $1.push($2);
  $$ = $1;
  return $$;
}
function r4($1) {
  let $$ = undefined;
  $$ = $1;
  return $$;
}
function r5($1) {
  let $$ = undefined;
  $$ = $1;
  return $$;
}
/**
 * r6: no production
 */
const actions = [
  {
    NAME: {
      kind: 'Shift',
      state: 6,
    },
  },
  {
    ['$']: {
      kind: 'Accept',
    },
    NAME: {
      kind: 'Shift',
      state: 6,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      rule: 1,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      rule: 2,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 2,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      rule: 4,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 4,
    },
  },
  {
    NAME: {
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
      kind: 'Reduce',
      rule: 6,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    NAME: {
      kind: 'Reduce',
      rule: 3,
    },
    ['$']: {
      kind: 'Reduce',
      rule: 3,
    },
  },
];
const gotos = [
  {
    ScalarTypeDefinition: 5,
    TypeDefinition: 4,
    TypeSystemDefinition: 3,
    TypeSystemDefinitionList: 2,
    TypeSystemDocument: 1,
  },
  {
    ScalarTypeDefinition: 5,
    TypeDefinition: 4,
    TypeSystemDefinition: 7,
  },
  {},
  {},
  {},
  {},
  {},
  {},
];
const rules = [
  {
    production: "TypeSystemDocument'",
    pop: 1,
    action: () => {} /* dummy placeholder */,
  },
  {
    production: 'TypeSystemDocument',
    pop: 1,
    action: r1,
  },
  {
    production: 'TypeSystemDefinitionList',
    pop: 1,
    action: r2,
  },
  {
    production: 'TypeSystemDefinitionList',
    pop: 2,
    action: r3,
  },
  {
    production: 'TypeSystemDefinition',
    pop: 1,
    action: r4,
  },
  {
    production: 'TypeDefinition',
    pop: 1,
    action: r5,
  },
  {
    production: 'ScalarTypeDefinition',
    pop: 1,
    action: r6,
  },
];

const EOF = new Token('$', -1, -1, '');

export default function parse(input) {
  const stack = [[null, 0]];
  const lexer = new Lexer(input);

  let token = lexer.next() || EOF;

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
      // TODO: instead of pop, set length?
      const {production, pop, action: code} = rules[action.rule];
      const popped: Array<P | Token | null> = [];
      for (let i = 0; i < pop; i++) {
        const [node] = stack.pop()!;
        popped[pop - i - 1] = node;
      }
      const [, next] = stack[stack.length - 1];
      const target = gotos[next][production];
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
