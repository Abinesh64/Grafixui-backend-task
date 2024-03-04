const Event = require("../models/EventModels");

const postEvent = async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}


const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
      } catch (err) {
        res.status(500).json(err);
      }
}

const getEvent = async(req, res)=>{
    try{
        const event = await Event.findOne({userid : req.params.userid})
        res.status(200).json(event);
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteEvent = async(req, res) => {
    try {
        const result = await Event.deleteOne({ userid: req.params.userid });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Event not found." });
        }
        res.status(200).json({ message: "Event has been deleted." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateEvent = async (req, res) => {
    try {        
        const updatedEvent = await Event.findOneAndUpdate(
            { userid: req.params.userid },
            req.body,
            { new: true }
        );        
        if (updatedEvent) {
            res.status(200).json(updatedEvent);
        } else {
            res.status(404).json({ error: "Event not found" });
        }
    } catch (err) {
        console.error("Error updating Event:", err);
        res.status(500).json(err);
    }
}


module.exports = {
    postEvent,
    getEvents,
    getEvent,
    deleteEvent,
    updateEvent
}