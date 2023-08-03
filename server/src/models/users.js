const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: String, // String is shorthand for {type: String}
    address: String,
    password: String,
<<<<<<< HEAD
    email: String,
    phoneNumber: Number,
    image: String,
    dob: String, 
    role: String,
    gender: String,
    mode: {type: String, default:'User'}
   });
    
   const Users = mongoose.model('User', userSchema);

   module.exports = Users;
   
=======
    mode: {type: String, default: 'User'},
   
  });
  
  const Users = mongoose.model('Users', userSchema);
  module.exports = Users
>>>>>>> d9460774f9f69c34ae1b41b8cfeec5ef3a82b3e5
