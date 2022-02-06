const express = require('express')

const app = express()
const qs = require('querystring')
app.use((req,res,next)=>{
    let str = ''
    req.on('data',(chunk) =>{
        str += chunk
    })

    req.on('end',()=>{
        // console.log(str)
        // req.body = str
        // next()
        const body = qs.parse(str)
        console.log(body)
    })
})
app.post('/user',(req,res) =>{
    console.log(req.body)
    res.send('ok')
})

app.listen(80,() =>{
    console.log('web start')
})