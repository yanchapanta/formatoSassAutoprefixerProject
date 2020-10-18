const { series } = require("gulp");
const gulp=require('gulp');
const sass=require('gulp-sass');
const autoprefixer=require('gulp-autoprefixer');
const browserSync=require('browser-sync');
const  sourcesmaps= require('gulp-sourcemaps');

gulp.task('sass', ()=> {
    return gulp.src('sass/**/*.scss')
     .pipe(sourcesmaps.init())
      .pipe(sass({
        outputStyle:'compressed'
      }).on('error', sass.logError))
     
      .pipe(autoprefixer({
        cascade: false
        }))
      .pipe(sourcesmaps.write('./dist'))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
  });


  gulp.task('default', () =>{
    gulp.watch('sass/**/*.scss',gulp.series('sass'))  

    
    gulp.watch("./*.html").on('change', browserSync.reload);
    browserSync.init({
        server: "./"
    });
     
  });