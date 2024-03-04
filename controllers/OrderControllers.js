const mongoose = require('mongoose')
const Order = require('../models/OrderModels')


const getOrders = async (req, res) => {
    const orders = await Order.find({}).sort({createdAt : -1})
    res.status(200).json(orders)
}

const getOrder = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "No such orders found" })
    }

    const order = await Order.findById(id)

    if (!id) {
        return res.status(404).json({ msg: "Id not found" })
    }

    res.status(200).json(order)
}

const createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const saveOrder = await newOrder.save()
        res.status(200).json(saveOrder)
    } catch (err) {
        res.status(404).json({ message: 'couldnot add new order' });
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such order is found" })
    }
 
    const order = await Order.findOneAndDelete({ _id: id })
 
    if (!order) {
       return res.status(404).json({ msg: "No such order is found" })
    }
 
    res.status(200).json(order)
 
 }

 const updateOrder = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such Order is found" })
    }
 
    const order = await Order.findOneAndUpdate({ _id: id },{...req.body})
 
    if (!order) {
       return res.status(404).json({ msg: "No such order is found" })
    }
 
    res.status(200).json(order)
 
 
 }


module.exports = {
    createOrder,
    getOrders,
    getOrder,
    deleteOrder,
    updateOrder
}