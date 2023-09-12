import Bun from 'bun';
import {promises as fs} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

type Options = {
  dark?: boolean;
};

const __filename = fileURLToPath(import.meta.url);

function log(...args: Array<any>) {
  console.log(...args);
}

async function main(options: Options = {}) {
  const color = [
    `color = "${options.dark ? 'white' : 'black'}"`,
    `fontcolor = "${options.dark ? 'white' : 'black'}"`,
  ].join(', ');

  // Build dependency graph.
  const dependencies: {
    [name: string]: Set<string>;
  } = {};
  const packages = path.join(__filename, '..', '..', 'packages');
  for (const entry of await fs.readdir(packages, {withFileTypes: true})) {
    if (entry.isDirectory()) {
      try {
        const packageJSON = await Bun.file(
          path.join(packages, entry.name, 'package.json'),
        ).text();
        const parsed = JSON.parse(packageJSON);
        if (parsed.dependencies) {
          for (const dependency of Object.keys(parsed.dependencies)) {
            dependencies[parsed.name] = dependencies[parsed.name] || new Set();
            dependencies[parsed.name].add(dependency);
          }
        }
      } catch {
        // Swallow.
      }
    }
  }

  // Emit Dot.
  log('// vim: set nomodifiable : DO NOT EDIT');
  log('//');
  log(
    '// Edit "support/dotifyDependencyGraph.ts" and run "make docs" instead.',
  );
  log('//');
  log('// @generated');
  log('');
  log('digraph dependency_graph {');
  log('  bgcolor = "transparent";');
  log('');
  for (const name of Object.keys(dependencies)) {
    log(`  node[${color}]; "${name}"`);
  }
  log('');
  for (const [name, deps] of Object.entries(dependencies)) {
    for (const dep of deps) {
      log(`  "${name}" -> "${dep}" [${color}];`);
    }
  }
  log('}');
}

main({dark: !!process.env['DARK']}).catch((error) => {
  console.log(error);
});
