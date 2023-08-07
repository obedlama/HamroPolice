const express = require('express')
require('dotenv').config()
const userRoute=require('./routes/users')
const memberRoute=require('./routes/member')
const connection = require('./db/connection')
const Users = require('./models/users')
const Member = require('./models/member')
connection()
const app = express()


const cors = require('cors')
const port = 4000
app.use(express.json())
app.use(cors())
app.use("/",userRoute)
app.use("/",memberRoute)
 

 
 app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
 })