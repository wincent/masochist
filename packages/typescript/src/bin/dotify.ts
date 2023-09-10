/**
 * Generate a state machine image for the DFA used in the lexer.
 *
 * This script is responsible for generating the ".dot" source files and a
 * README.md that includes the images.
 *
 * The `make diagrams` target runs this script, and then invokes `dot` in
 * parallel to actually generate the actual images.
 */

import {dotifyTransitionTable} from '@masochist/lexer';
import {promises as fs} from 'fs';
import Bun from 'bun';
import path from 'path';

import {default as lexer} from '../lexer';

async function main() {
  const diagrams = {
    lexer,
  };

  let README = '# `@masochist/typescript` state machine diagram\n';

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
