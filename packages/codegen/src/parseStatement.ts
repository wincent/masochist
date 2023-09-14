// @ts-nocheck
/**
 * vim: set nomodifiable : DO NOT EDIT - edit "build.ts", run "make graphql" instead
 *
 * @generated
 */
import {Lexer, Token} from './lex';
/**
 * r0: no production
 */
function r1($1) {
  return $1;
}
function r2($1) {
  return $1;
}
function r3($1) {
  return $1;
}
function r4(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'const',
    lhs: $2,
    rhs: $4,
  };
}
function r5(_$1, $2, _$3, $4) {
  return {
    kind: 'AssignmentStatement',
    binding: 'let',
    lhs: $2,
    rhs: $4,
  };
}
function r6($1) {
  return {
    kind: 'Identifier',
    name: $1.contents,
  };
}
function r7($1) {
  return $1;
}
function r8($1) {
  return $1;
}
function r9($1) {
  return $1;
}
function r10($1) {
  return $1;
}
function r11($1) {
  return $1;
}
function r12($1) {
  return $1;
}
function r13() {
  return {
    kind: 'ArrayValue',
    items: [],
  };
}
function r14(_$1, $2) {
  return {
    kind: 'ArrayValue',
    items: $2,
  };
}
function r15($1) {
  return [$1];
}
function r16($1, _$2, $3) {
  $1.push($3);
  return $1;
}
function r17() {
  return {
    kind: 'BooleanValue',
    value: false,
  };
}
function r18() {
  return {
    kind: 'BooleanValue',
    value: true,
  };
}
function r19() {
  return {
    kind: 'NullValue',
  };
}
function r20($1) {
  return {
    kind: 'NumberValue',
    value: parseFloat($1.contents),
    base: 10,
  };
}
function r21(_$1, _$2, $3) {
  return {
    kind: 'ExportDefaultDeclaration',
    declaration: $3,
  };
}
function r22($1) {
  return $1;
}
function r23(_$1, $2) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: [],
  };
}
function r24(_$1, $2, _$3, $4) {
  return {
    kind: 'ClassDeclaration',
    id: $2.name,
    body: $4,
  };
}
function r25($1) {
  return [$1];
}
function r26($1, $2) {
  $1.push($2);
  return $1;
}
function r27($1) {
  return $1;
}
function r28($1, _$2, $3) {
  return {
    kind: 'PropertyDeclaration',
    name: $1.name,
    type: $3.name,
  };
}
const actions = [
  {
    CLASS: {
      kind: 'Shift',
      state: 6,
    },
    CONST: {
      kind: 'Shift',
      state: 3,
    },
    EXPORT: {
      kind: 'Shift',
      state: 8,
    },
    LET: {
      kind: 'Shift',
      state: 4,
    },
  },
  {
    ['$']: {
      kind: 'Accept',
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 1,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 2,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 3,
    },
  },
  {
    DEFAULT: {
      kind: 'Shift',
      state: 13,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 14,
    },
  },
  {
    ASSIGN: {
      kind: 'Reduce',
      rule: 6,
    },
    OPENING_BRACE: {
      kind: 'Reduce',
      rule: 6,
    },
    SEMICOLON: {
      kind: 'Reduce',
      rule: 6,
    },
    COLON: {
      kind: 'Reduce',
      rule: 6,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 6,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 6,
    },
  },
  {
    ASSIGN: {
      kind: 'Shift',
      state: 15,
    },
  },
  {
    OPENING_BRACE: {
      kind: 'Shift',
      state: 16,
    },
  },
  {
    CLASS: {
      kind: 'Shift',
      state: 6,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 25,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 28,
    },
    NUMBER: {
      kind: 'Shift',
      state: 30,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 23,
    },
    TRUE: {
      kind: 'Shift',
      state: 26,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 25,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 28,
    },
    NUMBER: {
      kind: 'Shift',
      state: 30,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 23,
    },
    TRUE: {
      kind: 'Shift',
      state: 26,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 32,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 21,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 22,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 37,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 7,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 7,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 7,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 8,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 8,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 8,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 9,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 9,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 9,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 38,
    },
    FALSE: {
      kind: 'Shift',
      state: 25,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 28,
    },
    NUMBER: {
      kind: 'Shift',
      state: 30,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 23,
    },
    TRUE: {
      kind: 'Shift',
      state: 26,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 10,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 10,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 10,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 17,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 17,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 17,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 18,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 18,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 18,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 11,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 11,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 11,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 19,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 19,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 19,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 12,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 12,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 12,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 20,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 20,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 20,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 41,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 23,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Shift',
      state: 42,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 25,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 25,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 27,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 27,
    },
  },
  {
    COLON: {
      kind: 'Shift',
      state: 44,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 4,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 13,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 13,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 13,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Shift',
      state: 45,
    },
    COMMA: {
      kind: 'Shift',
      state: 46,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 15,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 15,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 5,
    },
  },
  {
    ['$']: {
      kind: 'Reduce',
      rule: 24,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 26,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 26,
    },
  },
  {
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
  },
  {
    SEMICOLON: {
      kind: 'Reduce',
      rule: 14,
    },
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 14,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 14,
    },
  },
  {
    FALSE: {
      kind: 'Shift',
      state: 25,
    },
    IDENTIFIER: {
      kind: 'Shift',
      state: 10,
    },
    NULL: {
      kind: 'Shift',
      state: 28,
    },
    NUMBER: {
      kind: 'Shift',
      state: 30,
    },
    OPENING_BRACKET: {
      kind: 'Shift',
      state: 23,
    },
    TRUE: {
      kind: 'Shift',
      state: 26,
    },
  },
  {
    SEMICOLON: {
      kind: 'Shift',
      state: 49,
    },
  },
  {
    CLOSING_BRACKET: {
      kind: 'Reduce',
      rule: 16,
    },
    COMMA: {
      kind: 'Reduce',
      rule: 16,
    },
  },
  {
    CLOSING_BRACE: {
      kind: 'Reduce',
      rule: 28,
    },
    IDENTIFIER: {
      kind: 'Reduce',
      rule: 28,
    },
  },
];
const gotos = [
  {
    AssignmentStatement: 2,
    ClassDeclaration: 5,
    ExportDefaultDeclaration: 7,
    Statement: 1,
  },
  {},
  {},
  {
    Identifier: 9,
  },
  {
    Identifier: 11,
  },
  {},
  {
    Identifier: 12,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ClassDeclaration: 18,
    Declaration: 17,
  },
  {
    ArrayValue: 22,
    BooleanValue: 24,
    Expression: 19,
    Identifier: 20,
    NullValue: 27,
    NumberValue: 29,
    PrimitiveValue: 21,
  },
  {
    ArrayValue: 22,
    BooleanValue: 24,
    Expression: 31,
    Identifier: 20,
    NullValue: 27,
    NumberValue: 29,
    PrimitiveValue: 21,
  },
  {
    ClassBodyList: 33,
    ClassBodyListItem: 34,
    Identifier: 36,
    PropertyDeclaration: 35,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {
    ArrayItemList: 39,
    ArrayValue: 22,
    BooleanValue: 24,
    Expression: 40,
    Identifier: 20,
    NullValue: 27,
    NumberValue: 29,
    PrimitiveValue: 21,
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
  {
    ClassBodyListItem: 43,
    Identifier: 36,
    PropertyDeclaration: 35,
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
  {
    Identifier: 47,
  },
  {},
  {
    ArrayValue: 22,
    BooleanValue: 24,
    Expression: 48,
    Identifier: 20,
    NullValue: 27,
    NumberValue: 29,
    PrimitiveValue: 21,
  },
  {},
  {},
  {},
];
const rules = [
  {
    production: "Statement'",
    pop: 1,
    action: () => {} /* dummy placeholder */,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r1,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r2,
  },
  {
    production: 'Statement',
    pop: 1,
    action: r3,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r4,
  },
  {
    production: 'AssignmentStatement',
    pop: 5,
    action: r5,
  },
  {
    production: 'Identifier',
    pop: 1,
    action: r6,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r7,
  },
  {
    production: 'Expression',
    pop: 1,
    action: r8,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r9,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r10,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r11,
  },
  {
    production: 'PrimitiveValue',
    pop: 1,
    action: r12,
  },
  {
    production: 'ArrayValue',
    pop: 2,
    action: r13,
  },
  {
    production: 'ArrayValue',
    pop: 3,
    action: r14,
  },
  {
    production: 'ArrayItemList',
    pop: 1,
    action: r15,
  },
  {
    production: 'ArrayItemList',
    pop: 3,
    action: r16,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r17,
  },
  {
    production: 'BooleanValue',
    pop: 1,
    action: r18,
  },
  {
    production: 'NullValue',
    pop: 1,
    action: r19,
  },
  {
    production: 'NumberValue',
    pop: 1,
    action: r20,
  },
  {
    production: 'ExportDefaultDeclaration',
    pop: 3,
    action: r21,
  },
  {
    production: 'Declaration',
    pop: 1,
    action: r22,
  },
  {
    production: 'ClassDeclaration',
    pop: 4,
    action: r23,
  },
  {
    production: 'ClassDeclaration',
    pop: 5,
    action: r24,
  },
  {
    production: 'ClassBodyList',
    pop: 1,
    action: r25,
  },
  {
    production: 'ClassBodyList',
    pop: 2,
    action: r26,
  },
  {
    production: 'ClassBodyListItem',
    pop: 1,
    action: r27,
  },
  {
    production: 'PropertyDeclaration',
    pop: 4,
    action: r28,
  },
];
const EOF = new Token('$', -1, -1, '');
export default function parseStatement(input) {
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
