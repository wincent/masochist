import fs from 'fs';
import path from 'path';
import {PerformanceObserver, performance} from 'perf_hooks';
import {promisify} from 'util';

import parse from './parse';

const readFile = promisify(fs.readFile);

async function read(file: string): Promise<string> {
  return readFile(path.join(__dirname, '../../../support', file), 'utf8');
}

function mb(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function memory(heading: string) {
  const {heapTotal, heapUsed} = process.memoryUsage();

  console.log(`Memory: ${heading}`);
  console.table({
    heapTotal: mb(heapTotal),
    heapUsed: mb(heapUsed),
  });
}

async function main() {
  const source = await read('client-corpus.graphql');

  console.log(`Read ${source.length} bytes`); // Assuming ASCII.

  memory('Start');

  const obs = new PerformanceObserver(items => {
    console.log(items.getEntries()[0].duration);
    performance.clearMarks();
  });
  obs.observe({entryTypes: ['measure']});

  performance.mark('A');
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  parse(source);
  performance.mark('B');
  performance.measure('A to B', 'A', 'B');

  memory('End');
}

main().catch(error => {
  console.log(error);
});
