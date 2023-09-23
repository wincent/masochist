import Bun from 'bun';
import path from 'node:path';
import fs from 'node:fs/promises';
import os from 'node:os';
import process from 'node:process';

const EXTENSIONS = ['graphql', 'json', 'md', 'ts', 'yml'];

const INCLUDE = new RegExp(`\\.(?:${EXTENSIONS.join('|')})$`);

const EXCLUSIONS = [
  // Custom exclusions.
  'lib',
  'tsconfig-base',

  // Prettier defaults.
  '\\.git',
  'node_modules',
];
const EXCLUDE = new RegExp(`\\b(?:${EXCLUSIONS.join('|')})\\b`);

async function* walk(directory: string = '.'): AsyncGenerator<string> {
  const entries = await fs.readdir(directory, {withFileTypes: true});
  for (const entry of entries) {
    const joined = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDE.test(joined)) {
        for await (const child of walk(joined)) {
          yield child;
        }
      }
    } else if (INCLUDE.test(joined) && !EXCLUDE.test(joined)) {
      yield joined;
    }
  }
}

const root = path.join(import.meta.dir, '..');
process.chdir(root);

const options = await Bun.file(path.join(root, '.prettierrc.json')).json();

const cores = Math.min(16, Math.max(1, os.cpus().length));

const workerURL = new URL('format/worker.ts', import.meta.url).href;

type Job = Check | Format | Exit;
type Check = {job: 'check'; path: string};
type Format = {job: 'format'; path: string};
type Exit = {job: 'exit'};

let walking = true;
const workers = new Set<Worker>();
const idle: Array<Worker> = [];
const stack: Array<Job> = [];

let problems = false;

for (let i = 0; i < cores; i++) {
  const worker = new Worker(workerURL);
  worker.postMessage({
    job: 'prepare',
    id: i,
    options,
  });
  worker.addEventListener('close', (_event) => {
    workers.delete(worker);
  });
  worker.addEventListener('message', (event) => {
    if (event.data.job === 'check' && event.data.result === false) {
      problems = true;
      console.log(event.data.path);
    }
    if (stack.length) {
      worker.postMessage(stack.pop());
    } else if (!walking) {
      idle.push(worker);
      for (const w of workers) {
        w.postMessage({job: 'exit'});
      }
    } else {
      idle.push(worker);
    }
  });
  workers.add(worker);
  idle.push(worker);
}

for await (const entry of walk()) {
  stack.push({
    job: 'check',
    path: entry,
  });
  while (idle.length && stack.length) {
    const job = stack.pop();
    idle.pop()?.postMessage(job);
  }
}

walking = false;

// Busy wait.
while (workers.size) {
  await new Promise((resolve) => {
    setTimeout(resolve, 100);
  });
}

if (problems) {
  process.exit(1);
}
