const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const CouponSchema = new mongoose.Schema({
    eventid : {
        type: Number, 
        required: true, 
        unique:true
    },
    movieid : {
        type: Number, 
        required: true, 
        unique: true
    },
    code : { 
        type: String, 
        required: true
    },
    discount : { 
        type: Number, 
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},{ timestamps: true}
);

module.exports = mongoose.model("Coupon", CouponSchema)