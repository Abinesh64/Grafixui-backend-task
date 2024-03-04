const mongoose = require('mongoose')

const Schema = mongoose.Schema

const   UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true,
        match: /^\S+@\S+\.\S+$/
    },
    provider: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetPasswordToken: {
        type: String,
        required: true
    },
    confirmationToken: {
        type: String,
        required: true
    },
    confirmed: {
        type: Boolean,
        required: true
    },
    blocked: {
        type: Boolean,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    Balance: {
        type: Number,
        required: true
    },
    likedevent: {
        type: String,
        required: true
    },
    likedmovie: {
        type: String,
        required: true
    },



}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema)