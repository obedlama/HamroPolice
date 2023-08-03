<<<<<<< HEAD
const express=require('express')
const router=express.Router()
const UsersController = require('../controller/users')
// router.get('/phone-available/:phoneNumber',UsersController.checkIfUserExists )
router.post('/register', UsersController.registerUser )
router.post('/login', UsersController.loginUser )


module.exports=router;
=======
const express = require('express')

const router = express.Router()

const userController = require('../controller/user')

router.post('/register', userController.registerUser)
router.post('/login', userController.login)
 


module.exports = router
>>>>>>> d9460774f9f69c34ae1b41b8cfeec5ef3a82b3e5
