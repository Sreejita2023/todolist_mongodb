const express=require('express')
const app=express()
require('dotenv').config()

// load config from env file
const PORT =process.env.PORT||4000;

// middleware  to parse json request body
app.use(express.json())

// import route from TODO API
const todoRoutes=require('./routes/todo')

app.use("/api/v1",todoRoutes)
 app.listen(PORT,()=>{
    console.log(`served start successfully at ${PORT}`)
 })
 
const dbConnect =require('./config/database') 
dbConnect()
app.get('/',(req,res)=>{
    res.send(`<h1>home page</h1>`)
})