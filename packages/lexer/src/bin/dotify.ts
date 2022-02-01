/**
 * Generate "interesting" state machine images for DFAs used in the lexer.
 *
 * Run with `make dotify`.
 */

import {escapeForRegExp} from '@masochist/common';
import child_process from 'child_process';
import {promises as fs} from 'fs';
import path from 'path';

import compileRegExp from '../compileRegExp';
import ignore from '../ignore';
import {
  AMPERSAND,
  AT,
  BANG,
  BAR,
  CLOSING_BRACE,
  CLOSING_BRACKET,
  CLOSING_PAREN,
  COLON,
  COMMA,
  COMMENT,
  DOLLAR,
  ELLIPSIS,
  EQUALS,
  LINE_TERMINATOR,
  NAME,
  OPENING_BRACE,
  OPENING_BRACKET,
  OPENING_PAREN,
  UNICODE_BOM,
  WHITESPACE,
} from '../lexer';
import union from '../union';
import NFAToDFA from '../NFA/NFAToDFA';
import dotifyTransitionTable from '../NFA/dotifyTransitionTable';
import minimizeDFA from '../NFA/minimizeDFA';
import regExpToNFA from '../NFA/regExpToNFA';
import removeEpsilons from '../NFA/removeEpsilons';
import sortEdges from '../NFA/sortEdges';
import toTransitionTable from '../NFA/toTransitionTable';

/**
 * A single (combined) machine that recognizes (and discards) any ignored token.
 */
function ignoredTokens() {
  return ignore(COMMA, COMMENT, LINE_TERMINATOR, UNICODE_BOM, WHITESPACE);
}

function machine(pattern: RegExp | string) {
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
}

/**
 * A single (combined) machine that recognizes tokens that can be
 * differentiated with a single character of lookahead.
 */
function unionedTokens() {
  return union(
    // Punctuators.
    {
      AMPERSAND,
      AT,
      BANG,
      BAR,
      CLOSING_BRACE,
      CLOSING_BRACKET,
      CLOSING_PAREN,
      COLON,
      DOLLAR,
      ELLIPSIS,
      EQUALS,
      OPENING_BRACE,
      OPENING_BRACKET,
      OPENING_PAREN,

      // TODO: strings and numbers too

      // Other Lexical tokens.
      NAME,
    },
  );
}

function spawn(command: string, args: Array<string>) {
  return new Promise<void>((resolve, reject) => {
    const child = child_process.spawn(command, args, {stdio: 'inherit'});
    child.on('close', (code) => {
      if (code) {
        reject(new Error(`spawn(): exited with code ${code}`));
      } else {
        resolve();
      }
    });

    child.on('error', reject);
  });
}

async function main() {
  const diagrams = {
    // Composite machines.
    ignored: ignoredTokens(),
    unioned: unionedTokens(),

    // Individual machines.
    AMPERSAND: machine(AMPERSAND),
    AT: machine(AT),
    BANG: machine(BANG),
    BAR: machine(BAR),
    CLOSING_BRACE: machine(CLOSING_BRACE),
    CLOSING_BRACKET: machine(CLOSING_BRACKET),
    CLOSING_PAREN: machine(CLOSING_PAREN),
    COLON: machine(COLON),
    COMMA: machine(COMMA),
    COMMENT: machine(COMMENT),
    DOLLAR: machine(DOLLAR),
    ELLIPSIS: machine(ELLIPSIS),
    EQUALS: machine(EQUALS),
    LINE_TERMINATOR: machine(LINE_TERMINATOR),
    NAME: machine(NAME),
    OPENING_BRACE: machine(OPENING_BRACE),
    OPENING_BRACKET: machine(OPENING_BRACKET),
    OPENING_PAREN: machine(OPENING_PAREN),
    UNICODE_BOM: machine(UNICODE_BOM),
    WHITESPACE: machine(WHITESPACE),
  };

  let README = '# `@masochist/lexer` state machine diagrams\n';

  const directory = path.join(path.dirname(__filename), '..', '..', 'diagrams');
  await fs.mkdir(directory, {recursive: true});
  for (const [name, table] of Object.entries(diagrams)) {
    for (const dark of [true, false]) {
      const contents = dotifyTransitionTable(table, dark);
      const dot = path.join(
        directory,
        `${name}-${dark ? 'dark' : 'light'}.dot`,
      );
      const png = path.join(
        directory,
        path.basename(dot, path.extname(dot)) + '.png',
      );
      await fs.writeFile(dot, contents, 'utf8');
      await spawn('dot', ['-Tpng', dot, '-o', png]);
    }

    README += '\n';
    README += `## ${name}\n\n`;
    README += `![${name}](./${name}-dark.png#gh-dark-mode-only)\n`;
    README += `![${name}](./${name}-light.png#gh-light-mode-only)\n`;
  }

  await fs.writeFile(path.join(directory, 'README.md'), README, 'utf8');
  // TODO: parallelize a bit because this is slow AF
}

main().catch((error) => {
  console.log(error);
  process.exit(1);
});
