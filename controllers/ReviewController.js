const mongoose = require('mongoose')
const Review = require('../models/ReviewModels')


const getReviews = async (req, res) => {
    const reviews = await Review.find({}).sort({ createdAt: -1 })
    res.status(200).json(reviews)
}

const getReview = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "No such review found" })
    }

    const review = await Review.findById(id)

    if (!id) {
        return res.status(404).json({ msg: "Id not found" })
    }

    res.status(200).json(review)
}

const createReview = async (req, res) => {
    try {
        const newReview = new Review(req.body);
        const saveReview = await newReview.save()
        res.status(200).json(saveReview)
    } catch (err) {
        res.status(404).json({ message: 'couldnot add new review' });
    }
}

const deleteReview = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such review is found" })
    }
 
    const review = await Review.findOneAndDelete({ _id: id })
 
    if (!review) {
       return res.status(404).json({ msg: "No such review is found" })
    }
 
    res.status(200).json(review)
 
 }

 const updateReview = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such review is found" })
    }
 
    const review = await Review.findOneAndUpdate({ _id: id },{...req.body})
 
    if (!review) {
       return res.status(404).json({ msg: "No such review is found" })
    }
 
    res.status(200).json(review)
 
 
 }


module.exports = {
   getReviews,
   getReview,
   createReview,
   updateReview,
   deleteReview
}