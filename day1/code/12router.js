const express = require('express')

const router = express.Router()

router.get('/user/list',(req,res) =>{
    res.send('Get user LIst')
})

router.post('/user/add',(req,res) =>{
    res.send('add new user')
})

module.exports = router