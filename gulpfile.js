var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-clean-css'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	imageminWebp = require('imagemin-webp'),
	svgmin		 = require('gulp-svgmin'),
	webp		 = require('gulp-webp'),
	pngquant	 = require('imagemin-pngquant'),
	clone		 = require('gulp-clone'),
	clonesink	 = clone.sink(),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', gulp.series(function() {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			grid: true
		}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
}));

gulp.task('scripts', gulp.series(function() {
	return gulp.src([
		'bower_components/jquery/dist/jquery.min.js',
		'node_modules/owl.carousel2/dist/owl.carousel.min.js'
		])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
}));

gulp.task('scripts-common', gulp.series(function() {
	return gulp.src([
		'app/js/common.js'
		])
		.pipe(concat('common.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'));
}));

gulp.task('css-libs', gulp.series('sass', function() {
	return gulp.src('app/css/libs.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'));
}));

gulp.task('browser-sync', gulp.series(function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
	});
}));

gulp.task('clean', gulp.series(function() {
	return del('dist');
}));

gulp.task('img', gulp.series(function() {
	return gulp.src('app/img/**/*.jpg')
		.pipe(imagemin({
			optimizationLevel: 5,
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()] 
		}))
		.pipe(gulp.dest('dist/img/jpg'));
}));

gulp.task('svgmin', function () {
    return gulp.src('app/img/**/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/img/svg'));
});

gulp.task('webp', gulp.series(function() {
	return gulp.src('dist/img/jpg/**/*.jpg')
		.pipe(webp())
		.pipe(rename({suffix: '.jpg'}))
		.pipe(gulp.dest('dist/img/webp'));
}));

gulp.task('watch', gulp.series('browser-sync', 'css-libs', 'scripts', function() {
	gulp.watch('app/sass/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
}));

gulp.task('build', gulp.series('clean', 'img', 'svgmin', 'webp', 'sass', 'scripts', 'scripts-common', function(cd) {

	var buildCss = gulp.src('app/css/**/*')
		.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

	cd();

}));