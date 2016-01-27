var gulp = require("gulp");
var gutil = require("gulp-util")

gulp.task('js', callback => {
  var webpack = require("webpack");

  // see bottom for webpackConfig()
  webpack(webpackConfig(), (err, stats) => {
    gutil.log("[webpack]", stats.toString({
      chunks: false
    }));
    callback();
  });
});

gulp.task('css', () => {
  var postcss = require("gulp-postcss");
  var autoprefixer = require("autoprefixer");
  var postcssImport = require("postcss-import");
  var processors = [
    postcssImport(),
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ];

  return gulp.src('./css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets'))
});

gulp.task('watch', () => {
  gulp.watch(['./js/**'], ['js']);
  gulp.watch(['./css/**'], ['css']);
});

function webpackConfig() {
  var config = require("./webpack.config.js");

  if (process.env.NODE_ENV === "production") {
    return config.production;
  } else {
    return config.dev;
  }
}
