const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,

    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    publicationYear: {
        type: String
    },

});

module.exports = mongoose.model("book", bookSchema);