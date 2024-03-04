const mongoose = require("mongoose")
const EventSchema = new mongoose.Schema({
    eventtitle : {
        type: String, 
        required: true, 
        unique:true
    },
    organisername : {
        type: String, 
        required: true, 
        unique: true
    },
    domaintype : { 
        type: String, 
        required: true
    },
    category : { 
        type: String, 
        required: true
    },
    mapurl : { 
        type: String, 
        required: true
    },
    userid : { 
        type: Number, 
        required: true,
        unique:true
    },
    month : { 
        type: String, 
        required: true
    },
    day : { 
        type: Number, 
        required: true
    },
    address : { 
        type: String, 
        required: true
    },
    year : { 
        type: Number, 
        required: true
    },
    locationname : { 
        type: String, 
        required: true
    },
    type : { 
        type: String, 
        required: true
    },
    eventimg : { 
        type: String, 
        required: true
    },
    organiserimg: { 
        type: String, 
        required: true
    },
    ticketingtype : { 
        type: String, 
        required: true
    },
    seatsiopublickey : { 
        type: String, 
        required: true
    },
    seatsioeventkey : { 
        type: String, 
        required: true
    },
    redprice : { 
        type: Number, 
        required: true
    },
    orangeprice : { 
        type: Number, 
        required: true
    },
    pinkprice : { 
        type: Number, 
        required: true
    },
},{ timestamps: true}
);

module.exports = mongoose.model("Event", EventSchema)