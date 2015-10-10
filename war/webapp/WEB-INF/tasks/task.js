exports.build  = function(config)
{
    /************************** modules start *****************************/
    var gulp = require('gulp');
    var uglify = require('gulp-uglify');
    var source = require('vinyl-source-stream');
    var browserify = require('browserify');
    var reactify = require('reactify');
    var md5 = require('MD5');
    var gutil = require('gulp-util');
    var argv = require('yargs').argv;
    var fs = require('fs');
    var rimraf = require('gulp-rimraf');
    var concat = require('gulp-concat');
    var minifyCss = require("gulp-minify-css");
    var stylus = require('gulp-stylus');
    var nib = require('nib');
    var inject = require('gulp-inject');
    /************************** modules end *****************************/


    /************************** parameters start***************************/
    var config = config || {};

    config.isPrd = argv.p;

    var tasks = {
        cleanJs : config.module + '.clean.js',
        browserify : config.module + '.browserify.js',
        uglify : config.module + '.uglify.js',
        layoutJs : config.module + '.layout.js',
        cleanCss : config.module + '.clean.css',
        compileStylus : config.module + '.compile.stylus',
        layoutCss : config.module + '.layout.css',
        module : config.module
    }
    /************************** parameters end***************************/


    /****************************** js tasks start****************************/
    gulp.task(tasks.cleanJs, function () {
        return gulp.src(config.dest + '/' + '/*.js', {read: false})
            .pipe(rimraf({force: true}));
    });


    gulp.task(tasks.browserify, [tasks.cleanJs], function () {
        return browserify({
            entries: [config.jsPath + config.module + '/main.js'], // Only need initial file, browserify finds the deps
            transform: [reactify] // We want to convert JSX to normal javascript
        })
            .bundle() // Create the initial bundle when starting the task
            .pipe(source('main.js'))
            .pipe(gulp.dest(config.dest));
    });

    gulp.task(tasks.uglify, [tasks.browserify], function () {
        return gulp.src(config.dest + '/main.js')
            .pipe(config.isPrd ? uglify() : gutil.noop())
            .pipe(gulp.dest(config.dest));
    });

    gulp.task(tasks.layoutJs, [tasks.uglify], function () {
        var sourceJs = config.dest + "/main.js";
        var hashJs = md5(fs.readFileSync(sourceJs, "utf8"));
        var finalJs = config.dest + '/' + config.module + hashJs + '.js';
        fs.renameSync(sourceJs, finalJs);

        return gulp.src(config.view)
            .pipe(inject(gulp.src(finalJs, {read: false}),
                {
                    starttag: '<!-- inject:js -->',
                    transform: function (filepath, i, length) {
                        var source = null;
                        var fileName = require('path').basename(filepath);
                        source = config.resourcesPath + config.module + '/' + fileName;
                        return "<script src='" + source + "' type='text/jsx'></script>";
                    }
                }))
            .pipe(gulp.dest(config.viewPath + config.module ));
    });
    /****************************** js tasks end****************************/

    /****************************** css tasks start****************************/
    gulp.task(tasks.cleanCss, function () {
        return gulp.src(config.dest + '/*.css', {read: false})
            .pipe(rimraf({force: true}));
    })

    gulp.task(tasks.compileStylus, [tasks.cleanCss], function () {
        return gulp.src(config.stylusPath + config.module + '/main.styl')
            .pipe(stylus({
                use: [nib()],
                sourcemap: {inline: true}
            }))
            .pipe(config.isPrd ? minifyCss() : gutil.noop())
            .pipe(gulp.dest(config.dest));

    });

    gulp.task(tasks.layoutCss, [tasks.compileStylus], function () {
        var sourceCss = config.dest + '/main.css';
        var hashCss = md5(fs.readFileSync(sourceCss, 'utf-8'));
        var finalCss = config.dest + '/' + config.module + hashCss + '.css';
        fs.renameSync(sourceCss, finalCss);

        return gulp.src(config.view)
            .pipe(inject(gulp.src(finalCss, {read: false}),
                {
                    starttag: '<!-- inject:css -->',
                    transform: function (filepath, i, length) {
                        var source = null;
                        var fileName = require('path').basename(filepath);
                        source = config.resourcesPath + config.module + '/' + fileName;
                        return '<link rel="stylesheet" href="' + source + '">';
                    }
                }))
            .pipe(gulp.dest(config.viewPath + config.module));
    });
    /****************************** js tasks end****************************/

    gulp.task(tasks.module, function () {
        var runSequence = require('run-sequence');
        runSequence(tasks.layoutJs, tasks.layoutCss);
    });
};