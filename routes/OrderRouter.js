const express = require('express')
const router = express.Router()
const {getOrder, getOrders, createOrder, deleteOrder, updateOrder} = require('../controllers/OrderControllers')
 
const { verifyAdminAndOrganiser } = require("./VerifyUserAccess");

router.get('/', getOrders)

router.get('/:id', getOrder)


router.post('/', verifyAdminAndOrganiser, createOrder)

router.delete('/:id', verifyAdminAndOrganiser, deleteOrder)

router.patch('/:id', verifyAdminAndOrganiser, updateOrder)

module.exports = router