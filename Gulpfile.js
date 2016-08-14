import gulp from 'gulp';
import eslint from 'gulp-eslint';
import ava from 'gulp-ava';

/* React */
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';
import sourcemaps from 'gulp-sourcemaps';

var dependencies = [
    'react'
];

gulp.task('lint', () => {
    return gulp.src(['**/*.js', '!node_modules/**', '!public/**'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('vendors', () => {
    return browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('vendor.bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('public/js'));
});

gulp.task('react', ['vendors'], () => {
    return browserify({
        entries: 'templates/**/index.jsx',
        debug: true
    })
    .external(dependencies)
    .transform(babelify, {
        presets: ['es2016', 'react']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({
        loadMaps: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('ava', () =>
    gulp.src([
        'templates/**/test/*.spec.js',
        'test/*.spec.js'
    ])
    .pipe(ava())
);

gulp.task('test', ['lint', 'ava']);
gulp.task('build', ['react']);
