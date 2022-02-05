const fs = require('fs')

fs.readFile('./file/1.txt','utf-8',(err,dataStr)=>{
    console.log(err);
    console.log('------');
    console.log(dataStr);
})
