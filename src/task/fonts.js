const{src, dest} = require("gulp"); // берем методі src и dest из запрошенного j,]trnf gulp

const fonts = function(){
    return src("./fonts/*.*", {base: './'})
    .pipe(dest("./public"))
}

module.exports = fonts;