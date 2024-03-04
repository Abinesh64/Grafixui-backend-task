const router = require("express").Router();
const {postEvent, getEvents, getEvent, deleteEvent, updateEvent} = require('../controllers/EventControllers');

router.post('/', postEvent);

router.get('/', getEvents);

router.get("/find/:userid", getEvent) 

router.delete("/delete/:userid", deleteEvent);

router.put("/update/:userid", updateEvent);

module.exports = router