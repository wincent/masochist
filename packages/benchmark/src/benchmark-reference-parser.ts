import {spawnSync} from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';

import run from './benchmark-parser';

import {promisify} from 'util';

const mkdtemp = promisify(fs.mkdtemp);

async function main() {
  const scratch = await mkdtemp(path.join(os.tmpdir(), 'bench-'));

  process.chdir(scratch);

  spawn('yarn', 'init', '-y');
  spawn('yarn', 'add', 'graphql');

  const {parse} = require(
    path.join(scratch, ['node', 'modules'].join('_'), 'graphql'),
  );

  await run(parse);
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
