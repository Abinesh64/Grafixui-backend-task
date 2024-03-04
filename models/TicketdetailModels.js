const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TicketdetailSchema = new Schema({
    tickettitle: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    eventid: {
        type: Number,
        required: true
    },
    movieid: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Ticketdetail', TicketdetailSchema)