const express = require('express');
const router = express.Router();

const bookcontroller = require("../controllers/bookcontroller");


router.post("/books", bookcontroller.addbook);

router.delete("/books/:id", bookcontroller.deletebook);

router.put("/books/:id", bookcontroller.updatebook);

router.get("/books/:id", bookcontroller.viewbook);
router.get("/books", bookcontroller.viewallbook);



module.exports = router;