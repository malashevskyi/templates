const gulp = require('gulp');
const bS = require('browser-sync').create();
const del = require('del');
const pl = {
  sass: require('gulp-sass'),
  sourcemaps: require('gulp-sourcemaps'),
  autoprefixer: require('gulp-autoprefixer'),
  cleancss: require('gulp-clean-css'),
  rename: require('gulp-rename'),
  csso: require('gulp-csso'),
  imagemin: require('gulp-imagemin'),
  uglifyJs: require('gulp-uglify-es').default,
  concat: require('gulp-concat'),
  include: require('gulp-file-include'),
  babel: require('gulp-babel'),
};

const isDev = process.env.MODE === 'development';

const browserSync = () => {
  bS.init({
    server: { baseDir: 'dist/' },
    open: false,
  });
};

function scripts() {
  return gulp
    .src(['./src/assets/js/*.js'])
    .pipe(pl.babel({ presets: ['@babel/preset-env'] }))
    .pipe(pl.concat('main.js'))
    .pipe(gulp.dest('dist/assets/js/'))
    .pipe(pl.concat('main.min.js'))
    .pipe(isDev ? pl.rename({}) : pl.uglifyJs())
    .pipe(gulp.dest('dist/assets/js/'))
    .pipe(bS.stream());
}

function sass() {
  console.log(process.env.MODE);
  return (
    gulp
      .src(['./src/assets/styles/**/*.{s[ca]ss,css}']) // css, scss or sass
      .pipe(pl.sourcemaps.init())
      .pipe(pl.sass({}))
      .pipe(pl.autoprefixer())
      .pipe(pl.sourcemaps.write('.'))
      .pipe(pl.rename({ suffix: isDev ? '.min' : '', prefix: '' }))
      .pipe(gulp.dest('dist/assets/styles/'))

      // if production minify, create one more css file (main.css and main.min.css),
      .pipe(isDev ? pl.rename({}) : pl.csso({ restructure: true }))
      .pipe(isDev ? pl.rename({}) : pl.rename({ suffix: '.min' }))
      .pipe(isDev ? pl.rename({}) : gulp.dest('dist/assets/styles/'))
      .pipe(bS.stream())
  );
}

function html() {
  return gulp
    .src(['./src/*.html'])
    .pipe(pl.include({ prefix: '@@' }))
    .pipe(gulp.dest('dist/'))
    .pipe(bS.stream());
}

function images() {
  const dev = gulp
    .src(['./src/assets/images/**/*.{png,jpg,jpeg,gif,svg,ico,webp}'])
    .pipe(gulp.dest('dist/assets/images/'));
  const prod = gulp
    .src(['./src/assets/images/**/*.{png,jpg,jpeg,gif,svg,ico,webp}'])
    .pipe(
      pl.imagemin([
        pl.imagemin.gifsicle({ interlaced: true }),
        pl.imagemin.optipng({ optimizationLevel: 3 }),
        pl.imagemin.svgo({
          plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
        }),
      ])
    );

  return isDev ? dev : prod;
}

function fonts() {
  return gulp
    .src(['./src/assets/fonts/**/*.{woff,woff2}'])
    .pipe(gulp.dest('dist/assets/fonts/'));
}

async function clean() {
  del(['dist/*']);

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });

  return;
}

function watch() {
  gulp.watch(['src/assets/js/**/*.js', '!src/assets/**/*.min.js'], scripts);
  gulp.watch(['src/**/*.html'], html); //.on('change', bS.reload);
  gulp.watch(
    ['./src/assets/styles/**/*.s[ca]ss', './src/assets/styles/**/*.css'],
    sass
  );
  gulp
    .watch(['src/assets/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}'], images)
    .on('change', bS.reload);
}

exports.browserSync = browserSync;
exports.scripts = scripts;
exports.html = html;
exports.watch = watch;
exports.sass = sass;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.default = gulp.series(
  clean,
  gulp.parallel(html, fonts, sass, images, scripts, browserSync, watch)
);
