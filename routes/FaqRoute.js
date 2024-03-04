const router = require("express").Router();
const {postFaq, getFaqs, getFaq, deleteFaq, updateFaq} = require('../controllers/FaqControllers');

router.post('/', postFaq);

router.get('/', getFaqs);

router.get("/find/:eventid", getFaq) 

router.delete("/delete/:eventid", deleteFaq);

router.put("/update/:eventid", updateFaq);


module.exports = router