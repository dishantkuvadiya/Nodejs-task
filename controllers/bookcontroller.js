require('../database/db')

const bookData = require('../models/bookmodel')
const mongoose = require('mongoose');


//add book
const addbook = async(req, res) => {
    try {
        const data = await bookData({

            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            publicationYear: req.body.publicationYear,

        });

        data.save();
        if (data) {
            res.status(200).json({
                message: "Add Book",
                status: 200,
                data: data
            })
        } else {
            res.status(400).json({
                message: "Bad Request",
                status: 400
            })
        }

    } catch (error) {
        res.send(error);
    }
};

//view book by id
const viewbook = async(req, res) => {
    try {
        const data = await bookData.findOne({ _id: req.params.id });
        if (data) {
            res.status(200).json({
                message: "View Book by Id",
                status: 200,
                data: data
            })
        } else {
            res.status(404).json({
                message: "Book Not Found",
                status: 400
            })
        }
    } catch (error) {
        res.send(error);
    }
};

// view all
const viewallbook = async(req, res) => {
    try {
        const data = await bookData.find({});

        if (data) {
            res.status(200).json({
                message: "All Books",
                status: 200,
                data: data
            })
        } else {
            res.status(400).json({
                message: "Bad Request",
                status: 400
            })
        }

    } catch (error) {
        res.send(error);
    }
};

//update book by id
const updatebook = async(req, res) => {
    try {
        const data = await bookData.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                author: req.body.author,
                genre: req.body.genre,
                publicationYear: req.body.publicationYear,
            },
        }, { new: true });
        if (data) {
            res.status(200).json({
                message: " Book Update Succesfu",
                status: 200,
                data: data
            })
        } else {
            res.status(404).json({
                message: "Book Not Found",
                status: 400
            })
        }
    } catch (error) {
        res.send(error);
    }
};

//delete book by id
const deletebook = async(req, res) => {
    try {
        const data = await bookData.findByIdAndDelete({ _id: req.params.id });

        if (data) {
            res.status(200).json({
                message: "Delete Book by Id",
                status: 200,
                data: data
            })
        } else {
            res.status(404).json({
                message: "Book Not Found",
                status: 400
            })
        }
    } catch (error) {
        res.send(error);
    }
};



module.exports = {
    addbook,
    deletebook,
    updatebook,
    viewbook,
    viewallbook
};