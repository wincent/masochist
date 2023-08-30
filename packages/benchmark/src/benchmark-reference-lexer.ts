import {spawnSync} from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import {promisify} from 'util';

import run from './benchmark-lexer';

const mkdtemp = promisify(fs.mkdtemp);

async function main() {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'bench-'));

  process.chdir(scratch);

  spawn('yarn', 'init', '-y');
  spawn('yarn', 'add', 'graphql');

  const {Lexer, Source} = require(
    path.join(scratch, ['node', 'modules'].join('_'), 'graphql'),
  );

  function* lex(input: string) {
    const lexer = new Lexer(new Source(input));
    while (true) {
      const token = lexer.advance();
      if (token.kind === '<EOF>') {
        break;
      }
      yield token;
    }
  }

  await run(lex);
}

function spawn(command: string, ...args: Array<string>) {
  const {error, signal, status, stdout} = spawnSync(command, args, {
    stdio: 'inherit',
  });

  if (status !== 0 || signal !== null || error) {
    throw new Error('Something bad happened');
  }

  return stdout;
}

main().catch((error) => {
  console.log(error);
});
