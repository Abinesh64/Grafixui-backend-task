const router = require("express").Router();
const Coupon = require("../models/Coupon");

router.post('/', async (req, res) => {
    try {
        const newCoupon = new Coupon(req.body);
        const savedCoupon = await newCoupon.save();
        res.status(201).json(savedCoupon);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/find/:eventId", async(req, res)=>{
    try{
        const coupon = await Coupon.findOne({eventid : req.params.eventId})
        res.status(200).json(coupon);
    }
    catch(err){
        res.status(500).json(err)
    }
}) 

router.delete("/delete/:eventid", async(req, res) => {
    try {
        const result = await Coupon.deleteOne({ eventid: req.params.eventid });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Coupon not found." });
        }
        res.status(200).json({ message: "Coupon has been deleted." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.put("/update/:eventid", async (req, res) => {
    try {        
        const updatedCoupon = await Coupon.findOneAndUpdate(
            { eventid: req.params.eventid },
            req.body,
            { new: true }
        );        
        if (updatedCoupon) {
            res.status(200).json(updatedCoupon);
        } else {
            res.status(404).json({ error: "Coupon not found" });
        }
    } catch (err) {
        console.error("Error updating coupon:", err);
        res.status(500).json(err);
    }
});






  
module.exports = router