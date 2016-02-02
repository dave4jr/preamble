var path = require("path");
var rimraf = require("rimraf");

// gulp
var gulp = require("gulp");
var gutil = require("gulp-util");
var gsize = require("gulp-size");
var gzip = require("gulp-zip");
var gsourcemaps = require("gulp-sourcemaps");
var runSequence = require("run-sequence");

// webpack
var webpack = require("webpack-stream");

// PostCSS
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var postcssImport = require("postcss-import");
var reporter = require("postcss-reporter");
var cssnano = require("cssnano");

// eslint
var eslint = require("gulp-eslint");

gulp.task('js', () => {
  var config = webpackConfig();
  return gulp.src("js/main.js")
    .pipe(webpack(config, null, (err, stats) => {
      var statsWithOptions = stats.toString({
        chunks: false
      });
      err ? gutil.log(err) : gutil.log(statsWithOptions)
    }))
    .pipe(gsize())
    .pipe(gulp.dest("assets/"))
});

gulp.task('css', () => {
  var processors = [
    postcssImport(),
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    cssnano(),
    reporter()
  ];

  return gulp.src('css/main.css')
    .pipe(gsourcemaps.init())
    .pipe(postcss(processors))
    .pipe(gsourcemaps.write('.', {
      sourceMappingURL: file => "{{ \'main.css.map\' | asset_url }}"
    }))
    .pipe(gsize())
    .pipe(gulp.dest('assets/'))
});

gulp.task('watch', () => {
  gulp.watch(['./js/**'], ['js', 'lint']);
  gulp.watch(['./css/**'], ['css']);
});

gulp.task('zip', () => {
  var folders = [
    'assets/**',
    'templates/**',
    'snippets/**',
    'layout/**'
  ];
  var zipName = path.basename(__dirname);

  gutil.log(gutil.colors.magenta("Cleaning dist/..."))
  rimraf("dist/**", () => {
    return gulp.src(folders, { base: '.'})
      .pipe(gzip(`${zipName}.zip`))
      .pipe(gulp.dest('dist/'))
      .on("end", () => gutil.log('Zip created at', gutil.colors.magenta(__dirname + '/dist/' + zipName + '.zip')))
  });
});

gulp.task('lint', () => {
  return gulp.src(['js/*.+(js|jsx)'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

gulp.task('build', () => {
  process.env.NODE_ENV = "production";
  runSequence('js', 'css');
});

function webpackConfig() {
  if (process.env.NODE_ENV === "production") {
    return require("./webpack.production");
  } else {
    return require("./webpack.config");
  }
}
