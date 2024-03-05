const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const BannerSchema = new mongoose.Schema({
    bannerimg : {
        type: String, 
        required: true, 
        unique:true
    },
    link : {
        type: String, 
        required: true, 
    },
    imgurl : { 
        type: String, 
        required: true
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},{ timestamps: true}
);

module.exports = mongoose.model("Banner", BannerSchema)