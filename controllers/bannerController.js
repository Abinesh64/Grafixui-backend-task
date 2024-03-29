const Banner = require("../models/BannerModels");
const mongoose = require("mongoose");

const postBanner = async (req, res) => {
    try {
        const newBanner = new Banner(req.body);
        const savedBanner = await newBanner.save();
        res.status(201).json(savedBanner);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.status(200).json(banners);
      } catch (err) {
        res.status(500).json(err);
      }
}

const getBanner = async(req, res)=>{
    try{
        const banner = await Banner.findOne({_id : req.params._id});
        res.status(200).json(banner);
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteBanner = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID format." });
        }
        const result = await Banner.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Banner not found." });
        }
        res.status(200).json({ message: "Banner has been deleted." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateBanner = async (req, res) => {
    try {        
        const updatedBanner = await Banner.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );        
        if (updatedBanner) {
            res.status(200).json(updatedBanner);
        } else {
            res.status(404).json({ error: "Banner not found" });
        }
    } catch (err) {
        console.error("Error updating Banner:", err);
        res.status(500).json(err);
    }
}

module.exports = {
    postBanner,
    getBanners,
    getBanner,
    deleteBanner,
    updateBanner
}