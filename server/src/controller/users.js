const bcrypt = require('bcryptjs');
const saltRounds = 10;
const Users = require('../models/users')
const checkIfUserExists = async(req, res) => {
    const data= await Users.findOne({phoneNumber:req.params.phoneNumber })
    if(data) {
        res.json({
        msg: "PhoneNo already exists",
        validPhone: false
        })
    }else{
        res.json({
        validPhone: true
        })
    }
    }

   /* const registerUser=  async(req, res) => {
       

       //check if user already exists
      

       // create a hash password of req.body.password
       req.body.password = await bcrypt.hash(rep.body.password, saltRounds)
        
        await Users.create(req.body)
        console.log(req.body.password)
        res.json({
        msg: "You are successfully registered",
        success: true
        })*/
const registerUser = async (req, res) => {
    
  req.body.password = await bcrypt.hash(req.body.password, saltRounds)
  console.log(req.body.password)
   await Users.create(req.body)
     
     res.json({
     msg: "You are Sucessfully Registered",
     success: true
     })
 }
    

    module.exports = {checkIfUserExists,registerUser}
