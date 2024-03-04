const express = require('express')
const {getOrder, getOrders, createOrder, deleteOrder, updateOrder} = require('../controllers/OrderControllers')
 
const router = express.Router()


router.get('/', getOrders)

router.get('/:id', getOrder)


router.post('/', createOrder)

router.delete('/:id', deleteOrder)


router.patch('/:id', updateOrder)

module.exports = router