require('../database/db')
const bcrypt = require("bcrypt");
const res = require('express/lib/response');

const userData = require('../models/usermodel');


//Register User
const registeruser = async(req, res) => {
    try {

        const User = userData({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobileNo: req.body.mobileNo,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            otp: req.body.otp,

        });
        const salt = await bcrypt.genSalt(10);

        User.password = bcrypt.hashSync(User.password, salt);
        User.confirmPassword = bcrypt.hashSync(User.confirmPassword, salt);

        User.save();

        res.status(200).json({
            message: "User Register",
            status: 200,
            data: User
        });
    } catch (error) {
        res.send(error);
    }
}

//ogin User
const loginuser = async(req, res) => {
    try {
        mobileNo = req.body.mobileNo;
        otp = req.body.otp;


        const data = await userData.findOne({ mobileNo });

        if (data) {
            res.send("User Login");
        } else {
            res.send("invalid Login");
        }

    } catch (error) {
        res.send(error);
    }
};

//View by Id
const view = async(req, res) => {
    try {
        let id = req.params.id;
        const data = await userData.findById({ _id: id });
        // console.log("Data:", data);

        res.status(200).json({
            message: "View User",
            status: 200,
            data: data
        })
    } catch (error) {
        console.log("User04:", error);
        res.status(400).json({
            message: "Bad Request",
            status: 400
        })
    }
};

//View All Users
const viewAll = async(req, res) => {
    try {
        const data = await userData.find({});
        res.status(200).json({
            message: "View User",
            status: 200,
            data: data
        })
    } catch (error) {
        res.send(error);
    }
};

//Update user
const updateuser = async(req, res) => {
    try {
        const data = await userData.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mobileNo: req.body.mobileNo,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword,
            },
        }, { new: true });

        const salt = await bcrypt.genSalt(10);
        data.password = bcrypt.hashSync(data.password, salt);
        data.confirmPassword = bcrypt.hashSync(data.confirmPassword, salt);

        if (data) {
            res.status(200).json({
                message: "User Updated Successfully",
                status: 200,
                data: data
            })
        } else {
            res.status(404).json({
                message: "User Not Found",
                status: 404
            })

        }

    } catch (error) {
        console.log("User03:", error);
        res.status(400).json({
            message: "Bad Request",
            status: 400
        })
    }

};



//Logout User
const logout = async(req, res) => {
    try {
        const User = await userData.findById({ _id: req.params.id })

        User.save();
        res.send("logout Successfull");
    } catch (error) {
        res.send("Faild logout");
    }
};

//Delete User
const deleteuser = async(req, res) => {
    try {
        const data = await userData.findByIdAndDelete({ _id: req.params.id })
        res.send("User Deleted")
    } catch (error) {
        res.send(error)
    }
};


module.exports = {
    registeruser,
    loginuser,
    updateuser,
    view,
    logout,
    deleteuser,
    viewAll
}