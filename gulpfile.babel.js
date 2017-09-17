import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from 'gulp-util';
import pug from 'gulp-pug';
import webpack from 'webpack';
import productionConfig from './webpack.production.config.js';

let watching = false;

const babelOptions = {
  plugins: ['dev-expression'],
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
    gutil.log(gutil.colors.red(error.message));
    gutil.log(error.stack);
    if (watching) {
      gutil.log(gutil.colors.yellow('[aborting]'));
      stream.end();
    } else {
      gutil.log(gutil.colors.yellow('[exiting]'));
      process.exit(1);
    }
    ringBell();
  });
  return stream;
}

gulp.task('build', ['pug', 'babel', 'graphql', 'webpack:build']);

gulp.task('webpack:build', callback => {
  webpack(productionConfig, (error, stats) => {
    if (error) {
      ringBell();
      throw new gutil.PluginError('webpack:build', error);
    }
    if (stats.compilation.errors) {
      ringBell();
    }
    if (!watching) {
      gutil.log('[webpack:build]', stats.toString({colors: true}));
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

gulp.task('pug', () =>
  gulp
    .src('src/server/views/*.pug')
    .pipe(wrap(pug({client: true, compileDebug: false})))
    .pipe(gulp.dest('dist/server/views')),
);

if (__DEV__) {
  const eslint = require('gulp-eslint');
  const shell = require('gulp-shell');
  const mocha = require('gulp-mocha');

  gulp.task('default', ['watch']);

  gulp.task('flow', ['typecheck']);

  gulp.task('js', ['babel', 'lint', 'test', 'typecheck']);

  gulp.task('lint', () =>
    gulp.src('src/**/*.js').pipe(eslint()).pipe(eslint.format()),
  );

  gulp.task('test', () =>
    gulp
      .src(['src/**/__mocks__/*.js', 'src/**/__tests__/*-test.js'], {
        read: false,
      })
      .pipe(
        wrap(
          mocha({
            opts: 'mocha/mocha.opts',
            reporter: watching ? 'mocha/watch-reporter' : 'list',
          }),
        ),
      ),
  );

  gulp.task('typecheck', shell.task(['flow check --color=always src']));

  gulp.task('watch', () => {
    watching = true;
    gulp.watch('src/**/*.js', ['build']);
  });
} else {
  gulp.task('default', ['build']);
}
