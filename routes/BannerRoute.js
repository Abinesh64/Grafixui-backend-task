const router = require("express").Router();
const {postBanner, getBanners, getBanner, deleteBanner, updateBanner} = require('../controllers/BannerController');
const {verifyAdmin} = require("./VerifyUserAccess");


router.post('/', postBanner);

router.get('/', getBanners);

router.get("/find/:_id", getBanner) 

router.delete("/delete/:id", verifyAdmin, deleteBanner);

router.put("/update/:id", verifyAdmin, updateBanner);

module.exports = router