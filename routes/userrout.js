const express = require('express');
const router = express.Router();

const userController = require("../controllers/usercontroller");

router.post("/register", userController.registeruser);

router.post("/loginuser", userController.loginuser);

router.put("/updateuser/:id", userController.updateuser);

router.get("/view/:id", userController.view);

router.post("/logout/:id", userController.logout);

router.delete("/delete/:id", userController.deleteuser);

router.get("/viewallusers", userController.viewAll);




module.exports = router;