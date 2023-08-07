const express = require('express')

const router = express.Router()

const userController = require('../controller/user')

router.post('/register', userController.registerUser)
router.post('/login', userController.login)
router.post('/change-password/:id', userController.changePassword)
router.put('/users/:id', userController.changeUserDetails)



 


module.exports = router