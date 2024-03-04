const Faq = require("../models/Faq");

const postFaq = async (req, res) => {
    try {
        const newFaq = new Faq(req.body);
        const savedFaq = await newFaq.save();
        res.status(201).json(savedFaq);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getFaqs = async (req, res) => {
    try {
        const faqs = await Faq.find();
        res.status(200).json(faqs);
      } catch (err) {
        res.status(500).json(err);
      }
}

const getFaq = async(req, res)=>{
    try{
        const faq = await Faq.findOne({eventid : req.params.eventid})
        res.status(200).json(faq);
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteFaq = async(req, res) => {
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
}

const updateFaq = async (req, res) => {
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
}

module.exports = {
    postFaq,
    getFaqs,
    getFaq,
    deleteFaq,
    updateFaq
}