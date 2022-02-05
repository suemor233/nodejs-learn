const http  = require('http')

const server = http.createServer()

server.on('request',(req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.end('哈哈')
})
 

server.listen(8080,()=>{
    console.log('start at 8080');
})