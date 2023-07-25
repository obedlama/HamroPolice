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

    const registerUser=  async(req, res) => {
        await Users.create(req.body)
        res.json({
        msg: "You are successfully registered",
        success: true
        })
    }

    module.exports = {checkIfUserExists,registerUser}