const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema({
    ticketprice: {
        type: Number,
        required: true
    },
    eventid: {
        type: Number,
        required: true
    },
    ticketid: {
        type: Number,
        required: true
    },
    userid: {
        type: Number,
        required: true
    },
    totalprice: {
        type: Number,
        required: true
    },
    ticketquantity: {
        type: Number,
        required: true
    },
    ticketdetails: {
        type: String,
        required: true
    },
    organizerid: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    movieid: {
        type: Number,
        required: true
    }


}, { timestamps: true })

module.exports = mongoose.model('Order', OrderSchema)