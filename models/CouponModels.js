const mongoose = require("mongoose")
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
},{ timestamps: true}
);

module.exports = mongoose.model("Coupon", CouponSchema)