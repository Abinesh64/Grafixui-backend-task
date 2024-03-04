const mongoose = require("mongoose")
const MovieSchema = new mongoose.Schema({
    movietitle : {
        type: String, 
        required: true, 
        unique:true
    },
    moviedesc : {
        type: String, 
        required: true, 
        unique: true
    },
    movietype : { 
        type: String, 
        required: true
    },
    genre : { 
        type: String, 
        required: true
    },
    theatre : { 
        type: String, 
        required: true
    },
    address : { 
        type: String, 
        required: true
    },
    maplink : { 
        type: String, 
        required: true
    },
    about : { 
        type: String, 
        required: true
    },
    userid : { 
        type: Number, 
        required: true
    },
    organisername : { 
        type: String, 
        required: true
    },
    month : { 
        type: String, 
        required: true
    },
    day : { 
        type: Number, 
        required: true
    },
    year : { 
        type: Number, 
        required: true
    },
    seatsio_publickey : { 
        type: String, 
        required: true
    },
    seatsio_eventkey : { 
        type: String, 
        required: true
    },
    redcircle_price : { 
        type: Number, 
        required: true
    },
    pinkcircle_price : { 
        type: Number, 
        required: true
    },
    orangecircle_price : { 
        type: Number, 
        required: true
    },
    type : { 
        type: String, 
        required: true
    },
    movieimg : { 
        type: String, 
        required: true
    },
    organiserimg : { 
        type: String, 
        required: true
    },
},{ timestamps: true}
);

module.exports = mongoose.model("Movie", MovieSchema)