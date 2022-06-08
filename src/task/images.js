const{src, dest} = require("gulp"); // берем методі src и dest из запрошенного j,]trnf gulp

const images = function(){
    return src("img/**/*.{png,svg,jpg,jpeg}", {base: './'} )
    .pipe(dest("./public"))
}

module.exports = images;