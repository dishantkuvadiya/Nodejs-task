const express = require('express');
const router = express.Router();

const admincontroller = require("../controllers/admincontroller");


router.post("/adminregister", admincontroller.adminregister);

router.post("/loginadmin", admincontroller.loginadmin);

router.put("/updateadmin/:id", admincontroller.updateadmin);

router.get("/viewadmin/:id", admincontroller.viewadmin);

router.get("/viewalladmins", admincontroller.viewalladmins);

router.post("/logoutadmin/:id", admincontroller.logoutadmin);

router.delete("/deleteadmin/:id", admincontroller.deletadmin);


module.exports = router;