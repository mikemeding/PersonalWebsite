/**
 * Gulp build file.
 *
 * Mike Meding
 */
var connect = require('gulp-connect'),
    gulp = require('gulp');

// connect livereload webserver
gulp.task('connect', function () {
    return connect.server({
        root: '',
        livereload: true,
        port: 8189
    });
});

// watch files for changes
gulp.task('watch', function () {
    gulp.watch(['**/*.js', 'index.html', '**/*.html'], function (event) {
        // gulp.watch(['dist/*.js'], function(event) {
        gulp.src(event.path)
            .pipe(connect.reload());
    });
});

// copy and rename the config file
var rename = require("gulp-rename");
gulp.task('copy-settings-prod', function () {
    gulp.src("../config/production.json")
        .pipe(rename("config.json"))
        .pipe(gulp.dest("/"));
});
gulp.task('copy-settings-dev', function () {
    gulp.src("../config/development.json")
        .pipe(rename("config.json"))
        .pipe(gulp.dest("/"));
});

gulp.task('build-prod', ['copy-settings-prod']);
gulp.task('build-dev', ['copy-settings-dev']);
gulp.task('default', ['connect', 'watch']);
