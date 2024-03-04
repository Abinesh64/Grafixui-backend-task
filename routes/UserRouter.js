const express = require('express')
const {getUser, getUsers, updateUser, deleteUser, createUser} = require('../controllers/UserControllers')

const router = express.Router()


router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/', deleteUser)

router.patch('/', updateUser)

module.exports = router