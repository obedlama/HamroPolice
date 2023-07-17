const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: String, // String is shorthand for {type: String}
    address: String,
    password: String,
    number: Number,
    role: String,
    mode: {type: String, default:'User'}
   });
    
   const Users = mongoose.model('User', userSchema);

   module.exports = Users;