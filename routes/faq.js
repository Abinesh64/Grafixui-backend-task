const router = require("express").Router();
const Faq = require("../models/Faq");

router.post('/', async (req, res) => {
    try {
        const newFaq = new Faq(req.body);
        const savedFaq = await newFaq.save();
        res.status(201).json(savedFaq);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.status(200).json(faqs);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/find/:eventid", async(req, res)=>{
    try{
        const faq = await Faq.findOne({eventid : req.params.eventid})
        res.status(200).json(faq);
    }
    catch(err){
        res.status(500).json(err)
    }
}) 

router.delete("/delete/:eventid", async(req, res) => {
    try {
        const result = await Faq.deleteOne({ eventid: req.params.eventid });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Faq not found." });
        }
        res.status(200).json({ message: "Faq has been deleted." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.put("/update/:eventid", async (req, res) => {
    try {        
        const updatedFaq = await Faq.findOneAndUpdate(
            { eventid: req.params.eventid },
            req.body,
            { new: true }
        );        
        if (updatedFaq) {
            res.status(200).json(updatedFaq);
        } else {
            res.status(404).json({ error: "Faq not found" });
        }
    } catch (err) {
        console.error("Error updating Faq:", err);
        res.status(500).json(err);
    }
});


module.exports = router