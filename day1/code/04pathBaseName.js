const path = require('path')


const name = path.basename('/a/b/index.html','.html')
const name = path.extname('/a/b/index.html')

console.log(name);