 const express = require('express')

 const app = express()

 app.listen(80,()=>{
     console.log('web start');
 })

 app.get('/user',(req,res) =>{
     res.send({name: 'zs',age: 20,sex: '未知'})
 })

 app.post('/user',(req,res) =>{
     res.send('请求成功')
 })

 app.get('/',(req,res) =>{
    console.log(req.query)
     res.send(req.query)
 })

 app.get('/user/:id/:name',(req,res) =>{
    console.log(req.params)
     res.send(req.params)
 })