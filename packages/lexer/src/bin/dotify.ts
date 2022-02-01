/**
 * Generate "interesting" state machine images for DFAs used in the lexer.
 *
 * Run with `make dotify`.
 */

import child_process from 'child_process';
import {promises as fs} from 'fs';
import path from 'path';
import {promisify} from 'util';

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
import dotifyTransitionTable from '../NFA/dotifyTransitionTable';

const spawn = promisify(child_process.spawn);

/**
 * A single (combined) machine that recognizes (and discards) any ignored token.
 */
function ignoredTokens() {
  return ignore(
    COMMA,
    COMMENT,
    LINE_TERMINATOR,
    UNICODE_BOM,
    WHITESPACE,
  );
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

async function main() {
  const diagrams = {
    ignoredDark: dotifyTransitionTable(ignoredTokens(), true),
    ignoredLight: dotifyTransitionTable(ignoredTokens()),

    unionedDark: dotifyTransitionTable(unionedTokens(), true),
    unionedLight: dotifyTransitionTable(unionedTokens()),
  };

  const directory = path.join(path.dirname(__filename), '..', '..', 'diagrams');
  await fs.mkdir(directory, {recursive: true});
  for (const [name, contents] of Object.entries(diagrams)) {
    const output = path.join(directory, `${name}.dot`);
    await fs.writeFile(output, contents, 'utf8');
    // await spawn('dot', output);
  }
  // TODO create md file
}

main()
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
