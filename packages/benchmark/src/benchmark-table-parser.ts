import lex from '@masochist/lexer';
import {grammar, makeNode, parseWithTable, table} from '@masochist/parser';
import fs from 'fs';
import path from 'path';
import {PerformanceObserver, performance} from 'perf_hooks';
import {promisify} from 'util';

const readFile = promisify(fs.readFile);

function parse(source: string) {
  const tokens = [...lex(source)];
  parseWithTable(table, tokens, grammar, makeNode);
}

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

async function main() {
  const source = await read('source.graphql');

  console.log(`Read ${source.length} bytes`); // Assuming ASCII.

  const memory: {[key: string]: NodeJS.MemoryUsage} = {
    start: process.memoryUsage(),
  };

  const obs = new PerformanceObserver((items) => {
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

  memory['finish'] = process.memoryUsage();

  console.table(tableize(memory));
}

main().catch((error) => {
  console.log(error);
});
