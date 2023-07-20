const express = require('express')
require('dotenv').config()
const connection = require('./db/connection')
const Users = require('./models/users')


connection()

const app=express()

const cors = require('cors')
const port = 4000
app.use(express.json())
app.use(cors())
 
//import react from 'react'; // es6 import method 
// const port = process.env.PORT
// console.log(process.env)


//mongoose schema


app.post ('/register',async (req,res)=>{
  // console.log(req.body)
  try{
    Users.create(req.body)
  res.json({
    msg:"User has been added successfully."
  })
}
catch(err){
  res.json({
    msg:"User Registration failed."
  })
  console.log("User Registration failed.")
}

})

app.get ('/register',async(req,res)=>{
  console.log(hello)
  const data= await Users.find()
  if (data) res.json(data)
  
})

app.put('/register/:id',async (req,res)=>{
  await Users.findByIdAndUpdate(req.params.id,req.body)
})

app.delete('/register/:id',async(req,res)=>{
  try{
  await Users.findByIdAndDelete(req.params.id)
  res.json({
    msg:"User has been deleted successfully."
  })
}
catch(err){
  res.json({
    msg:"User deletion failed."
  })
  console.log("User deletion failed.")
}

})

app.use(cors({
  origin: 'http://localhost:4000',
}));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
 