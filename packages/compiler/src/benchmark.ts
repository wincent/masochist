import fs from 'fs';
import path from 'path';
import {promisify} from 'util';

import parse from './parse';

const readFile = promisify(fs.readFile);

async function read(file: string): Promise<string> {
  return readFile(
    path.join(__dirname, '../../../support', file),
    'utf8',
  );
}

async function main() {
  const source = await read('client-corpus.graphql');

  console.log(`Read ${source.length} bytes`); // Assuming ASCII.

  const parsed = parse(source);
}

main()
  .catch(error => {
    console.log(error);
  });
