const Coupon = require("../models/CouponModels");

const postCoupon = async (req, res) => {
    try {
        const newCoupon = new Coupon(req.body);
        const savedCoupon = await newCoupon.save();
        res.status(201).json(savedCoupon);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
      } catch (err) {
        res.status(500).json(err);
      }
}

const getCoupon = async(req, res)=>{
    try{
        const coupon = await Coupon.findOne({eventid : req.params.eventId})
        res.status(200).json(coupon);
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteCoupon = async(req, res) => {
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
}

const updateCoupon = async (req, res) => {
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
}

module.exports = {
    postCoupon,
    getCoupons,
    getCoupon,
    deleteCoupon,
    updateCoupon
}