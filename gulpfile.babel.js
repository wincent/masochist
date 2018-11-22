import log from 'fancy-log';
import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from 'gulp-util';
import webpack from 'webpack';
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
          node: '8.5.0',
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
    log(gutil.colors.red(error.message));
    log(error.stack);
    if (watching) {
      log(gutil.colors.yellow('[aborting]'));
      stream.end();
    } else {
      log(gutil.colors.yellow('[exiting]'));
      process.exit(1);
    }
    ringBell();
  });
  return stream;
}

gulp.task('build', ['babel', 'graphql', 'webpack:build']);

gulp.task('webpack:build', callback => {
  webpack(productionConfig, (error, stats) => {
    if (error) {
      ringBell();
      throw new gutil.PluginError('webpack:build', error);
    }
    if (stats.compilation.errors && stats.compilation.errors.length) {
      const [firstError, ...remainingErrors] = stats.compilation.errors;
      remainingErrors.forEach(console.log.bind(console));
      ringBell();
      throw new gutil.PluginError('webpack:build', firstError);
    }
    if (!watching) {
      log('[webpack:build]', stats.toString({colors: true}));
    }
    callback();
  });
});

gulp.task('babel', () =>
  gulp
    .src([
      'src/**/*.js',
      '!src/**/__tests__/**/*.js',
      '!src/**/__mocks__/**/*.js',
    ])
    .pipe(wrap(babel(babelOptions)))
    .pipe(gulp.dest('dist')),
);

gulp.task('graphql', () =>
  gulp.src(['src/__generated__/*.txt']).pipe(gulp.dest('dist/__generated__')),
);

if (process.env.NODE_ENV !== 'production') {
  const eslint = require('gulp-eslint');
  const shell = require('gulp-shell');

  gulp.task('default', ['watch']);

  gulp.task('flow', ['typecheck']);

  gulp.task('js', ['babel', 'lint', 'test', 'typecheck']);

  gulp.task('lint', () =>
    gulp
      .src('src/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format()),
  );

  gulp.task('test', shell.task(['jest --forceExit']));
  gulp.task('typecheck', shell.task(['flow check --color=always src']));

  gulp.task('watch', () => {
    watching = true;
    gulp.watch('src/**/*.js', ['build']);
  });
} else {
  gulp.task('default', ['build']);
}
