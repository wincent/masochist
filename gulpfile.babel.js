import colors from 'ansi-colors';
import child_process from 'child_process';
import log from 'fancy-log';
import gulp from 'gulp';
import gulpBabel from 'gulp-babel';
import PluginError from 'plugin-error';
import runWebpack from 'webpack';
import productionConfig from './webpack.production.config.js';

let watching = false;

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
    'relay',
    'transform-object-rest-spread',
    'transform-class-properties',
  ],
  presets: [
    [
      'env',
      {
        targets: {
          node: '10.13.0',
        },
      },
    ],
    'react',
  ],
};

/**
 * Ring the terminal bell.
 */
function ringBell() {
  process.stderr.write('\x07');
}

/**
 * Wrap a stream in an error-handler (until Gulp 4, needed to prevent "watch"
 * task from dying on error).
 */
function wrap(stream) {
  stream.on('error', error => {
    log(colors.red(error.message));
    log(error.stack);
    if (watching) {
      log(colors.yellow('[aborting]'));
      stream.end();
    } else {
      log(colors.yellow('[exiting]'));
      process.exit(1);
    }
    ringBell();
  });
  return stream;
}

export function webpack(callback) {
  runWebpack(productionConfig, (error, stats) => {
    if (error) {
      ringBell();
      throw new PluginError('webpack', error);
    }
    if (stats.compilation.errors && stats.compilation.errors.length) {
      const [firstError, ...remainingErrors] = stats.compilation.errors;
      remainingErrors.forEach(console.log.bind(console));
      ringBell();
      throw new PluginError('webpack', firstError);
    }
    if (!watching) {
      log('[webpack:build]', stats.toString({colors: true}));
    }
    callback();
  });
}

export function babel() {
  return gulp
    .src([
      'src/**/*.js',
      '!src/**/__tests__/**/*.js',
      '!src/**/__mocks__/**/*.js',
    ])
    .pipe(wrap(gulpBabel(babelOptions)))
    .pipe(gulp.dest('dist'));
}

export function graphql() {
  return gulp
    .src(['src/__generated__/*.txt'])
    .pipe(gulp.dest('dist/__generated__'));
}

export const build = gulp.parallel(babel, graphql, webpack);

let fix;
let js;
let lint;
let test;
let typecheck;
let watch;

if (process.env.NODE_ENV !== 'production') {
  const eslint = require('gulp-eslint');

  watch = function watch() {
    watching = true;
    gulp.watch('src/**/*.js', build);
  };

  gulp.task('default', watch);

  lint = function lint() {
    return gulp
      .src('src/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format());
  };

  fix = function fix() {
    return gulp
      .src('src/**/*.js')
      .pipe(eslint({fix: true}))
      .pipe(eslint.format())
      .pipe(gulp.dest('src'));
  };

  function exec(executable, args) {
    return callback => {
      child_process
        .execFile(executable, args, (error, stdout, stderr) => {
          if (stdout) {
            log(stdout);
          }
          if (stderr) {
            log(stderr);
          }
        })
        .on('close', (code, signal) => {
          callback(
            code === 0
              ? undefined
              : new Error(`${executable} ${args.join(' ')}: exit ${code}`),
          );
        });
    };
  }

  test = exec('jest', ['--color', '--forceExit']);

  typecheck = exec('flow', ['check', '--color=always', 'src']);

  gulp.task('js', gulp.parallel(babel, lint, test, typecheck));
} else {
  gulp.task('default', build);
}

export const flow = typecheck;

export {fix, js, lint, test, typecheck, watch};
