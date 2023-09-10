/**
 * Generate "interesting" state machine images for DFAs used in the lexer.
 *
 * This script is responsible for generating the ".dot" source files and a
 * README.md that includes the images.
 *
 * The `make diagrams` target runs this script, and then invokes `dot` in
 * parallel to actually generate the actual images.
 */

import {escapeForRegExp} from '@masochist/common';
import {
  compileRegExp,
  ignore,
  NFAToDFA,
  dotifyTransitionTable,
  minimizeDFA,
  regExpToNFA,
  removeEpsilons,
  sortEdges,
  toTransitionTable,
} from '@masochist/lexer';
import {promises as fs} from 'fs';
import Bun from 'bun';
import path from 'path';

import {
  ASSIGN,
  BANG,
  CLASS,
  CLOSING_BRACE,
  CLOSING_BRACKET,
  CLOSING_PAREN,
  COLON,
  COMMA,
  CONST,
  CONTINUE,
  DEFAULT,
  ELSE,
  EQUALS,
  EXPORT,
  FALSE,
  FOR,
  FUNCTION,
  GREATER_THAN,
  GREATER_THAN_OR_EQUAL,
  IDENTIFIER,
  IF,
  IMPORT,
  LESS_THAN,
  LESS_THAN_OR_EQUAL,
  LET,
  LINE_TERMINATOR,
  LOGICAL_AND,
  LOGICAL_OR,
  NEW,
  NUMBER,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
  REST,
  RETURN,
  SEMICOLON,
  STRICT_EQUALS,
  THIS,
  TRUE,
  WHILE,
  WHITESPACE,
  YIELD,
  default as lexer,
} from '../lexer';

import type {TransitionTable} from '@masochist/lexer';

/**
 * A single (combined) machine that recognizes (and discards) any ignored token.
 */
function ignoredTokens() {
  return ignore(LINE_TERMINATOR, WHITESPACE);
}

function machine(pattern: TransitionTable | RegExp | string) {
  if (typeof pattern === 'string' || pattern instanceof RegExp) {
    const regExp =
      typeof pattern === 'string'
        ? new RegExp(escapeForRegExp(pattern))
        : pattern;

    let nfa = regExpToNFA(compileRegExp(regExp));
    nfa = removeEpsilons(nfa);
    nfa = NFAToDFA(nfa);
    nfa = sortEdges(nfa);
    nfa = minimizeDFA(nfa);
    return toTransitionTable(nfa);
  } else {
    return pattern;
  }
}

async function main() {
  const diagrams = {
    // Composite machines.
    lexer,
    ignored: ignoredTokens(),

    // Individual machines.
    ASSIGN: machine(ASSIGN),
    BANG: machine(BANG),
    CLASS: machine(CLASS),
    CLOSING_BRACE: machine(CLOSING_BRACE),
    CLOSING_BRACKET: machine(CLOSING_BRACKET),
    CLOSING_PAREN: machine(CLOSING_PAREN),
    COLON: machine(COLON),
    COMMA: machine(COMMA),
    CONST: machine(CONST),
    CONTINUE: machine(CONTINUE),
    DEFAULT: machine(DEFAULT),
    ELSE: machine(ELSE),
    EQUALS: machine(EQUALS),
    EXPORT: machine(EXPORT),
    FALSE: machine(FALSE),
    FOR: machine(FOR),
    FUNCTION: machine(FUNCTION),
    GREATER_THAN: machine(GREATER_THAN),
    GREATER_THAN_OR_EQUAL: machine(GREATER_THAN_OR_EQUAL),
    IDENTIFIER: machine(IDENTIFIER),
    IF: machine(IF),
    IMPORT: machine(IMPORT),
    LESS_THAN: machine(LESS_THAN),
    LESS_THAN_OR_EQUAL: machine(LESS_THAN_OR_EQUAL),
    LET: machine(LET),
    LINE_TERMINATOR: machine(LINE_TERMINATOR),
    LOGICAL_AND: machine(LOGICAL_AND),
    LOGICAL_OR: machine(LOGICAL_OR),
    NEW: machine(NEW),
    NUMBER: machine(NUMBER),
    OPENING_BRACE: machine(OPENING_BRACE),
    OPENING_BRACKET: machine(OPENING_BRACKET),
    OPENING_PAREN: machine(OPENING_PAREN),
    REST: machine(REST),
    RETURN: machine(RETURN),
    SEMICOLON: machine(SEMICOLON),
    STRICT_EQUALS: machine(STRICT_EQUALS),
    THIS: machine(THIS),
    TRUE: machine(TRUE),
    WHILE: machine(WHILE),
    WHITESPACE: machine(WHITESPACE),
    YIELD: machine(YIELD),
  };

  let README = '# `@masochist/typescript` state machine diagrams\n';

  const directory = path.join(
    path.dirname(import.meta.path),
    '..',
    '..',
    'lexer',
    'diagrams',
  );
  await fs.mkdir(directory, {recursive: true});
  for (const [name, table] of Object.entries(diagrams)) {
    for (const dark of [true, false]) {
      const contents = dotifyTransitionTable(table, dark);
      const dot = path.join(
        directory,
        `${name}-${dark ? 'dark' : 'light'}.dot`,
      );
      let current;
      try {
        current = await Bun.file(dot).text();
      } catch {
        // Doesn't exist.
      }
      if (current !== contents) {
        await Bun.write(dot, contents);
      }
    }

    README += '\n';
    README += `## ${name}\n\n`;
    README += `![${name}](./${name}-dark.png#gh-dark-mode-only)\n`;
    README += `![${name}](./${name}-light.png#gh-light-mode-only)\n`;
  }

  await Bun.write(path.join(directory, 'README.md'), README);
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
