const router = require("express").Router();
const {postEvent, getEvents, getEvent, deleteEvent, updateEvent} = require('../controllers/EventControllers');
const { verifyAdminAndOrganiser} = require("./VerifyUserAccess");


router.post('/', verifyAdminAndOrganiser, postEvent);

router.get('/', getEvents);

router.get("/find/:userid", getEvent) 

router.delete("/delete/:userid", verifyAdminAndOrganiser, deleteEvent);

router.put("/update/:userid", verifyAdminAndOrganiser, updateEvent);

module.exports = router