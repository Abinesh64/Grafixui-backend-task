const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},{ timestamps: true}
);

module.exports = mongoose.model("Faq", FaqSchema)