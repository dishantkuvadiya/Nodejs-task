const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dishantkuvadiya02:NTWMGcxP5iItZHll@cluster0.hnyte3o.mongodb.net/mydb")
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Database Not Connected");
    })