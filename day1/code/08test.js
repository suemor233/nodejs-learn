const suemor = require('../tools')

console.log(suemor.dateFormat(new Date()));

const htmlStr = '<h1 title="abc">这个<span>123&nbsp;</span></h1>'
const str = suemor.htmlEscape(htmlStr)
console.log(str);
const str2 = suemor.htmlUnEscape(str)
console.log(str2);