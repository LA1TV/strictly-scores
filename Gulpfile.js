import gulp from 'gulp';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';

gulp.task('lint', function() {
    return gulp.src('client/app/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format());
});

gulp.task('mocha', function() {
    return gulp.src('test/**/*.test.js', {read: false})
        .pipe(mocha({
            reporter: 'spec'
        }))
        .once('error', () => {
            process.exit(1);
        })
        .once('end', () => {
            process.exit();
        });
});

gulp.task('test', ['lint', 'mocha']);
