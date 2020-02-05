const express=require('express')
const app=express()
const BodyParser=require('body-parser')
const cors=require('cors')
const bearerToken=require('express-bearer-token')
const {router}=require('./routers')

const port = 2020

app.use(cors())
app.use(bearerToken())
app.use(BodyParser.json())

app.get('/',(req,res)=>{
    return res.status(200).send('welcome to ujian_backend api')
})

app.use('/ujian',router)

app.listen(port,()=>console.log('ujian_backend aktif di '+port))