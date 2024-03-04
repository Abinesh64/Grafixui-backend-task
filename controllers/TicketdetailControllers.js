const mongoose = require('mongoose')
const Ticketdetail = require('../models/TicketdetailModels')


const getTicketDetails = async (req, res) => {
    const ticketdetails = await Ticketdetail.find({}).sort({ createdAt: -1 })
    res.status(200).json(ticketdetails)
}

const getTicketDetail = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "No such ticketdetail found" })
    }

    const ticketdetail = await Ticketdetail.findById(id)

    if (!id) {
        return res.status(404).json({ msg: "Id not found" })
    }

    res.status(200).json(ticketdetail)
}

const createTicketdetail = async (req, res) => {
    try {
        const newTicketdetail = new Ticketdetail(req.body);
        const saveTicketdetail = await newTicketdetail.save()
        res.status(200).json(saveTicketdetail)
    } catch (err) {
        res.status(404).json({ message: 'couldnot add new ticketdetail' });
    }
}

const deleteTicketdetail = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such ticketdetail is found" })
    }
 
    const ticketdetail = await Ticketdetail.findOneAndDelete({ _id: id })
 
    if (!ticketdetail) {
       return res.status(404).json({ msg: "No such ticketdetail is found" })
    }
 
    res.status(200).json(ticketdetail)
 
 }

 const updateTicketdetail = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such ticketdetail is found" })
    }
 
    const ticketdetail = await Ticketdetail.findOneAndUpdate({ _id: id },{...req.body})
 
    if (!ticketdetail) {
       return res.status(404).json({ msg: "No such ticketdetail is found" })
    }
 
    res.status(200).json(ticketdetail)
 
 
 }


module.exports = {
  getTicketDetails,
  getTicketDetail,
  createTicketdetail,
  updateTicketdetail,
  deleteTicketdetail
}