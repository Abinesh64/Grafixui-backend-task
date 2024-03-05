const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PromodetailSchema = new Schema({
    codename: {
        type: String,
        required: true
    },
    ticketlimit: {
        type: String,
        required: true
    },
    discountprecentage: {
        type: String,
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

module.exports = mongoose.model('Promodetail', PromodetailSchema)