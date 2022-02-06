const express =require('express')

const app = express()
app.use('/api',require('./12router'))
app.listen(80,()=>{
    console.log('web start ')
})