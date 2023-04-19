const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },


    mobileNo: {
        type: Number,
        required: true,
        unique: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true
    },

    otp: Number,
});

module.exports = mongoose.model("User", userSchema);