const mongoose = require("mongoose")
const FaqSchema = new mongoose.Schema({
    eventid : {
        type: Number, 
        required: true, 
        unique:true
    },
    question : { 
        type: String, 
        required: true
    },
    answer : { 
        type: String, 
        required: true
    },
    movieid : {
        type: Number, 
        required: true, 
        unique: true
    }
},{ timestamps: true}
);

module.exports = mongoose.model("Faq", FaqSchema)