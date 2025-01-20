const babel = require('@babel/core');
const fs = require('fs/promises');
const path = require('path');
const webpack = require('webpack');

const DIST = path.join(__dirname, 'dist');
const SRC = path.join(__dirname, 'src');

const babelOptions = {
  babelrc: false,
  plugins: [
    [
      'minify-replace',
      {
        replacements: [
          {
            identifierName: '__DEV__',
            replacement: {
              type: 'booleanLiteral',
              value: false,
            },
          },
        ],
      },
    ],
    [
      './scripts/babel/invariant',
      {
        strip: true,
      },
    ],
    'relay',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10.13.0',
        },
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  sourceMaps: true,
};

/**
 * Transform all ".js" files under "src/" using Babel, excluding "__tests__" and
 * "__mocks__", writing into "dist/".
 */
async function runBabel() {
  async function traverse(input, output) {
    const entries = await fs.readdir(input, {withFileTypes: true});
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (entry.name !== '__tests__' && entry.name !== '__mocks__') {
          await traverse(
            path.join(input, entry.name),
            path.join(output, entry.name),
          );
        }
      } else if (entry.name.endsWith('.js')) {
        const file = path.join(input, entry.name);
        const {code, map} = await babel.transformFileAsync(file, babelOptions);
        await fs.mkdir(output, {recursive: true});
        await fs.writeFile(path.join(output, entry.name), code);
        if (map) {
          await fs.writeFile(path.join(output, entry.name + '.map'), JSON.stringify(map));
        }
      }
    }
  }

  console.log('[start] Babel');
  await traverse(SRC, DIST);
  console.log('[finish] Babel');
}

/**
 * Copy "src/__generated__/*.txt" to "dist/__generated__/".
 */
async function runGraphQL() {
  console.log('[start] GraphQL');
  const input = path.join(SRC, '__generated__');
  const output = path.join(DIST, '__generated__');
  await fs.mkdir(output, {recursive: true});
  const files = await fs.readdir(input);
  for (const file of files) {
    if (file.endsWith('.txt')) {
      // TODO: use `fs.cp` (added in Node 16.7.0).
      // await fs.cp(path.join(input, file), path.join(output, file));
      await fs.writeFile(
        path.join(output, file),
        await fs.readFile(path.join(input, file)),
      );
    }
  }
  console.log('[finish] GraphQL');
}

/**
 * Run webpack with webpack.production.config.
 */
const config = require('./webpack.production.config');
function runWebpack() {
  console.log('[start] webpack');
  return new Promise((resolve, reject) => {
    webpack(config, (error, stats) => {
      if (error) {
        reject(error);
      } else if (stats.hasErrors()) {
        const errors = stats.flatMap(({compilation}) => {
          if (compilation.errors) {
            return compiliation.errors;
          } else {
            return [];
          }
        });
        reject(new Error(errors.map((error) => error.toString()).join('\n\n')));
      } else {
        // Merge assets.json.
        const assets = {
          main: {},
        };
        config.forEach(({name, output}) => {
          const contents = require('fs').readFileSync(
            path.join(output.path, `webpack-${name}-assets.json`).toString()
          );
          for (const [key, value] of Object.entries(JSON.parse(contents).main)) {
            assets.main[key] = value;
          }
        });
        require('fs').writeFileSync(
          path.join('dist', 'webpack-assets.json'),
          JSON.stringify(assets, null, 2)
        );
        console.log(stats.toString({colors: true}));
        console.log('[finish] webpack');
        resolve();
      }
    });
  });
}

console.log('Starting build');

Promise.all([runBabel(), runGraphQL(), runWebpack()])
  .then(() => console.log('Done'))
  .catch((error) => {
    // Ring terminal bell.
    process.stderr.write('\x07');

    console.log(`Error: ${error}`);
  });
