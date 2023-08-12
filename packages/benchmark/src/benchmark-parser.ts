import fs from 'fs';
import path from 'path';
import {PerformanceObserver, performance} from 'perf_hooks';
import {promisify} from 'util';

const readFile = promisify(fs.readFile);

async function read(file: string): Promise<string> {
  return readFile(path.join(__dirname, '../../../support', file), 'utf8');
}

function mb(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function tableize(data: {[key: string]: NodeJS.MemoryUsage}): any {
  const table: {[key: string]: {[key: string]: string}} = {};

  Object.entries(data).forEach(([label, usage]) => {
    const subtable: {[key: string]: string} = {};

    Object.entries(usage).forEach(([category, bytes]) => {
      subtable[category] = mb(bytes);
    });

    table[label] = subtable;
  });

  return table;
}

const DEFAULT_ITERATIONS = process.env['DEFAULT_ITERATIONS'] || '100';
const WARMUP_ITERATIONS = parseInt(
  process.env['WARMUP_ITERATIONS'] || DEFAULT_ITERATIONS,
  10,
);
const BENCHMARK_ITERATIONS = parseInt(
  process.env['BENCHMARK_ITERATIONS'] || DEFAULT_ITERATIONS,
  10,
);
const CORPUS_MULTIPLIER = parseInt(process.env['CORPUS_MULTIPLIER'] || '1', 10);

function test(
  source: string,
  parse: (source: string) => unknown,
  times: number,
) {
  for (let i = 0; i < times; i++) {
    parse(source);
  }
}

export default async function run(parse: (source: string) => unknown) {
  const source = (await read('source.graphql')).repeat(CORPUS_MULTIPLIER);

  console.log(`Read ${source.length} bytes`); // Assuming ASCII.

  const memory: {[key: string]: NodeJS.MemoryUsage} = {
    start: process.memoryUsage(),
  };

  const obs = new PerformanceObserver((items) => {
    for (const measure of items.getEntries()) {
      console.log(`${measure.name}: ${measure.duration}ms`);
    }
    performance.clearMarks();
  });
  obs.observe({entryTypes: ['measure']});

  // Warm-up.
  performance.mark('A');
  test(source, parse, WARMUP_ITERATIONS);
  performance.mark('B');
  performance.measure('Warm-up', 'A', 'B');

  memory['warm-up'] = process.memoryUsage();

  performance.mark('C');
  test(source, parse, BENCHMARK_ITERATIONS);
  performance.mark('D');
  performance.measure('Test', 'C', 'D');

  memory['finish'] = process.memoryUsage();

  console.table(tableize(memory));
}
