const router = require("express").Router();
const {postCoupon, getCoupons, getCoupon, deleteCoupon, updateCoupon} = require('../controllers/CouponController');


router.post('/', postCoupon);

router.get('/', getCoupons);

router.get("/find/:eventId", getCoupon) 

router.delete("/delete/:eventid", deleteCoupon);

router.put("/update/:eventid", updateCoupon);
  
module.exports = router