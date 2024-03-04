const mongoose = require("mongoose")
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
},{ timestamps: true}
);

module.exports = mongoose.model("Banner", BannerSchema)