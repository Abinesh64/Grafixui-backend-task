const express = require('express')
const router = express.Router()
const {getUser, getUsers, updateUser, deleteUser, createUser} = require('../controllers/UserControllers')
const {verifyAdmin} = require("./VerifyUserAccess");

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/:id', verifyAdmin, deleteUser)

router.patch('/:id', updateUser)

module.exports = router