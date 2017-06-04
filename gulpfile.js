var gulp = require('gulp'),
watch = require('gulp-watch'),
concat = require('gulp-concat'),
minify = require('gulp-minify'),
plumber = require('gulp-plumber'),
cachebust = require('gulp-cache-bust');
sass = require('gulp-sass');

var paths = {};
paths.js = {
    src: ['./src/**/*.js', '!./dist/*.js'],
    dest: './dist/',
    filename: 'kappu.js'
};
paths.css = {
    src: ['./src/styles/*.scss'],
    dest: './dist/',
    filename: 'styles.css'
};

var karmaServer = require('karma').Server;

gulp.task('css', 
    function () {
        return gulp.src(paths.css.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(paths.css.filename))
        .pipe(minify({
            ext: {
                min: '.css'
            }
        }))
        .pipe(gulp.dest(paths.css.dest));
    });

gulp.task('js',
    function() {
        return gulp.src(paths.js.src)
        .pipe(plumber({
            handleError: function(err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(concat(paths.js.filename))
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(paths.js.dest));
    });

gulp.task('test', function() {
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});

gulp.task('default', function() {
    gulp.start('js');
    gulp.start('css');
});

gulp.task('watch', function() {
    watch(paths.js.src, {}, function() {
        gulp.start('js')
    });
    watch(paths.css.src, {}, function() {
        gulp.start('css')
    });
    new karmaServer({
        configFile: __dirname + '/karma.conf.js',
        autoWatch: true,
        singleRun: false
    }).start();
});