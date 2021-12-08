#!/usr/bin/env node

const {spawnSync} = require('child_process');
const glob = require('glob');
const {join} = require('path');

const INVERSE = '\x1b[7m';
const RESET = '\x1b[0m';
const YELLOW = '\x1b[33m';

const paths = [
  'babel.config.js',
  'gulpfile.babel.js',
  'postcss.config.js',
  '{scripts,src}/**/*.js',
  'webpack.*.js',
];
const files = glob
  .sync('{' + paths.join(',') + '}')
  .filter(path => path.indexOf('/__generated__/') === -1);
const root = join(__dirname, '..');
const executable = join(root, 'node_modules', '.bin', 'prettier');

const check = process.argv.indexOf('--check') !== -1;
const mode = check ? '--list-different' : '--write';
process.chdir(root);

const {stdout, stderr, status, error} = spawnSync(executable, [mode, ...files]);
const out = stdout.toString().trim();
const err = stdout.toString().trim();

function print(message) {
  if (message) {
    process.stdout.write(message + '\n');
  }
}

if (status) {
  print(out);
  print(err);
  if (check) {
    print(`\n${YELLOW}The files listed above are not correctly formatted.`);
    print(`Try: ${INVERSE} npm run pretty ${RESET}`);
  }
}
if (error) {
  print('error', error);
}
process.exit(status != null ? status : 1);
