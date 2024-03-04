const mongoose = require('mongoose');
const User = require('../models/UserModels');


const getUsers = async (req, res) => {
    const user = await User.find({}).sort({ createdAt: -1 })
    res.status(200).json(user)
}

const getUser = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ msg: "No such user found" })
    }

    const user = await User.findById(id)

    if (!id) {
        return res.status(404).json({ msg: "Id not found" })
    }

    res.status(200).json(user)
}

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    } catch (err) {
        res.status(404).json({ message: 'couldnot add new user' });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such user is found" })
    }
 
    const user = await User.findOneAndDelete({ _id: id })
 
    if (!user) {
       return res.status(404).json({ msg: "No such user is found" })
    }
 
    res.status(200).json(user)
 
 }

 const updateUser = async (req, res) => {
    const { id } = req.params
 
    if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({ msg: "No such user is found" })
    }
 
    const user = await User.findOneAndUpdate({ _id: id },{...req.body})
 
    if (!user) {
       return res.status(404).json({ msg: "No such user is found" })
    }
 
    res.status(200).json(user)
 
 
 }


module.exports = {
 getUsers,
 getUser,
 updateUser,
 deleteUser,
 createUser
}