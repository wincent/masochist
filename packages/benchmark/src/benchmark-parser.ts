import Bun from 'bun';
import path from 'path';

import benchmark from './benchmark';

async function read(file: string): Promise<string> {
  return Bun.file(path.join(import.meta.dir, '../../../support', file)).text();
}

const CORPUS_MULTIPLIER = parseInt(process.env['CORPUS_MULTIPLIER'] || '1', 10);

export default async function run(parse: (source: string) => unknown) {
  const source = (await read('source.graphql')).repeat(CORPUS_MULTIPLIER);
  console.log(`Read ${source.length} bytes`); // Assuming ASCII.

  benchmark(() => parse(source));
}
