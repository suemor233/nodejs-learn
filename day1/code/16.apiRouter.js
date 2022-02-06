const express = require('express')

module.exports = app => {
   const router = express.Router()
    router.get('/user/:list',(req,res) =>{
        const query = req.params

        res.send({
            status: 0,
            msg: 'GET 成功',
            data: query
        })
    })

    // router.get('/user/:id',(req,res) =>{
    //     console.log(req.params)
    //     res.send(req.params)
    // })
    app.use(router)
}



