const router = require("express").Router();
const {postCoupon, getCoupons, getCoupon, deleteCoupon, updateCoupon} = require('../controllers/CouponController');
const {verifyAdmin} = require("./VerifyUserAccess");

router.post('/', postCoupon);

router.get('/', getCoupons);

router.get("/find/:eventId", getCoupon) 

router.delete("/delete/:eventid", verifyAdmin , deleteCoupon);

router.put("/update/:eventid", verifyAdmin, updateCoupon);
  
module.exports = router
