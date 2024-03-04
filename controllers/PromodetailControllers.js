const mongoose = require('mongoose')
const Promodetail = require('../models/PromodetailModels')


const getPromodetails = async (req, res) => {
    const promodetails = await Promodetail.find({}).sort({ createdAt: -1 })
    res.status(200).json(promodetails)
}

const getPromodetail = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "No such promodetail found" })
    }

    const promodetail = await Promodetail.findById(id)

    if (!id) {
        return res.status(404).json({ msg: "Id not found" })
    }

    res.status(200).json(promodetail)
}

const createPromodetails = async (req, res) => {
    try {
        const newPromodetail = new Promodetail(req.body);
        const savePromodetail = await newPromodetail.save()
        res.status(200).json(savePromodetail)
    } catch (err) {
        res.status(404).json({ message: 'couldnot add new promodetail' });
    }
}

const deletePromodetail = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such promodetail is found" })
    }
 
    const promodetail = await Promodetail.findOneAndDelete({ _id: id })
 
    if (!promodetail) {
       return res.status(404).json({ msg: "No such promodetail is found" })
    }
 
    res.status(200).json(promodetail)
 
 }

 const updatePromodetail = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such promodetail is found" })
    }
 
    const promodetail = await Promodetail.findOneAndUpdate({ _id: id },{...req.body})
 
    if (!promodetail) {
       return res.status(404).json({ msg: "No such promodetail is found" })
    }
 
    res.status(200).json(promodetail)
 
 
 }


module.exports = {
   getPromodetail,
   getPromodetails,
   createPromodetails,
   deletePromodetail,
   updatePromodetail
}