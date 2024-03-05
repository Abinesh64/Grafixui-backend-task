const express = require('express')
const router = express.Router()

const {getTicketDetails, getTicketDetail, createTicketdetail, updateTicketdetail, deleteTicketdetail} = require('../controllers/TicketdetailControllers')
const { verifyAdminAndOrganiser} = require("./VerifyUserAccess");

router.get('/', getTicketDetails)

router.get('/:id', getTicketDetail)

router.post('/', verifyAdminAndOrganiser, createTicketdetail)

router.delete('/:id', verifyAdminAndOrganiser, deleteTicketdetail)

router.patch('/:id', verifyAdminAndOrganiser, updateTicketdetail)

module.exports = router