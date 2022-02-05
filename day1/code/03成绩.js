const fs = require('fs')
const path = require('path')

fs.readFile('./file/成绩.txt','utf-8',(err,dataStr)=>{
    if (err) {
        return console.log('文件读取失败',err.message);
    }

    const arr = dataStr.split(' ')
    const newArr = []
    arr.forEach(item => {
        newArr.push(item.replace('=',':'))
    });
    const newstr = newArr.join('\n')
    fs.writeFile(path.join(__dirname,'/file/成绩-ok.txt'),newstr,(err) =>{
        if (err) {
            return console.log(err.message);
        }
        console.log('OK');
    })
})

