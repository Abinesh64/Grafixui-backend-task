const router = require("express").Router();
const {postBanner, getBanners, getBanner, deleteBanner, updateBanner} = require('../controllers/bannerController');


router.post('/', postBanner);

router.get('/', getBanners);

router.get("/find/:_id", getBanner) 

router.delete("/delete/:id", deleteBanner);

router.put("/update/:id", updateBanner);

module.exports = router