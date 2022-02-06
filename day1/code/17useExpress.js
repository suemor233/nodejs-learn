const express =require('express')
const cors = require('cors')
const app = express()
app.use(cors())
require('./16.apiRouter')(app)

app.listen(80,()=>{
    console.log('web start ')
})