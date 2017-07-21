const gulp = require('gulp');
const htmlsplit = require('gulp-htmlsplit');

function GulpWebpackSplitHtmlPlugin() {

}

GulpWebpackSplitHtmlPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', stats => {
        gulp.src('./resources/views/templates/template.blade.php')
            .pipe(htmlsplit())
            .pipe(gulp.dest('./resources/views/layouts'));

    });
    console.log('Termino la ejecución del plugin GulpWebpackSplitHtmlPlugin');
};

module.exports = GulpWebpackSplitHtmlPlugin;