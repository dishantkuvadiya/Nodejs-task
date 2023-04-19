const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    role: String,
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confirmPassword: String,
});

module.exports = mongoose.model("admin", adminSchema);