import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import jade from 'gulp-jade';
import shell from 'gulp-shell';
import mocha from 'gulp-spawn-mocha';
import gutil from 'gulp-util';
import webpack from 'webpack';
import devBabelPlugin from './babel/devBabelPlugin';
import productionConfig from './webpack.production.config.js';

let watching = false;

const babelOptions = {
  plugins: [devBabelPlugin],
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

gulp.task('default', ['watch']);

gulp.task('build', ['jade', 'babel', 'webpack:build']);

gulp.task('flow', ['typecheck']);

gulp.task('js', ['babel', 'lint', 'test'/*, 'typecheck'*/]);

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

gulp.task('babel', () => (
  gulp.src([
    'src/**/*.js',
    '!src/**/__tests__/**/*.js',
    '!src/**/__mocks__/**/*.js',
  ])
    .pipe(wrap(babel(babelOptions)))
    .pipe(gulp.dest('dist'))
));

gulp.task('jade', () => (
  gulp.src('src/server/views/*.jade')
    .pipe(wrap(jade({client: true})))
    .pipe(gulp.dest('dist/server/views'))
));

gulp.task('lint', () => (
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
));

gulp.task('typecheck', shell.task(['flow check --color=always src']));

gulp.task('test', () => (
  gulp.src(
    [
      'src/**/__mocks__/*.js',
      'src/**/__tests__/*-test.js',
    ],
    {read: false}
  )
    .pipe(wrap(mocha({
      opts: 'mocha/mocha.opts',
      reporter: watching ? 'mocha/watch-reporter' : 'list',
    })))
));

gulp.task('watch', () => {
  watching = true;
  gulp.watch('src/**/*.js', ['build']);
});
