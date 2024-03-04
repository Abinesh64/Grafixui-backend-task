const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    rating: {
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
    username: {
        type: String,
        required: true
    },
    userid: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Review', ReviewSchema)