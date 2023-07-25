const express = require('express')

const router = express.Router()

const userController = require('../controller/users')

router.post('/register', userController.registerUser)
 
router.get('/checkUserExists/:phoneNumber', userController.checkIfUserExists) 

module.exports = router