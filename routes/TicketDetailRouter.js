const express = require('express')
const {getTicketDetails, getTicketDetail, createTicketdetail, updateTicketdetail, deleteTicketdetail} = require('../controllers/TicketdetailControllers')

const router = express.Router()


router.get('/', getTicketDetails)

router.get('/:id', getTicketDetail)


router.post('/', createTicketdetail)

router.delete('/', deleteTicketdetail)


router.patch('/', updateTicketdetail)

module.exports = router