require('../database/db')

const adminData = require('../models/adminmodel');


const bcrypt = require("bcrypt");

const adminregister = async(req, res) => {
    try {

        const admin = adminData({
            role: req.body.role,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,

        });
        const salt = await bcrypt.genSalt(10);

        admin.password = bcrypt.hashSync(admin.password, salt);
        admin.confirmPassword = bcrypt.hashSync(admin.confirmPassword, salt);
        if (admin.password == admin.confirmPassword) {
            admin.save();
            res.status(200).json({
                message: "User Register",
                status: 200,
                data: admin
            });
        } else {
            res.send("ConfirmPassword Not Match")
        }

    } catch (error) {
        res.send(error);
    }
};

const loginadmin = async(req, res) => {
    try {
        email = req.body.email;
        password = req.body.password;

        const data = await adminData.findOne({ email });

        if (data) {

            const validPassword = await bcrypt.compare(password, data.password);
            if (validPassword) {
                res.send("Admin Login")
            } else {
                res.send("Admin Not Login");
            }
        }
    } catch (error) {

        res.send(error);
    }
};

//view admin by id
const viewadmin = async(req, res) => {
    try {
        const data = await adminData.findById({ _id: req.params.id });
        res.status(200).json({
            message: "View User",
            status: 200,
            data: data
        })
    } catch (error) {
        res.send(error);
    }
};

//View All Admin
const viewalladmins = async(req, res) => {
    try {
        const data = await adminData.find({});
        res.status(200).json({
            message: "View Admin",
            status: 200,
            data: data
        })
    } catch (error) {
        res.send(error);
    }
};

//update admin
const updateadmin = async(req, res) => {
    try {
        const data = await adminData.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword
            },
        }, { new: true });
        const salt = await bcrypt.genSalt(10);

        data.password = bcrypt.hashSync(data.password, salt);
        data.confirmPassword = bcrypt.hashSync(data.confirmPassword, salt);

        data.save()
        if (data) {
            res.status(200).json({
                message: "Admin Updated Successfully",
                status: 200,
                data: data
            })
        } else {
            res.status(404).json({
                message: "Admin Not Found",
                status: 404
            })

        }
    } catch (error) {
        res.send(error);
    }
};


//logout admin
const logoutadmin = async(req, res) => {
    try {
        const data = await adminData.findById({ _id: req.params.id })

        data.save();
        res.send("logout Successfull");
    } catch (error) {
        res.send("Faild logout");
    }
};

const deletadmin = async(req, res) => {
    try {
        const data = await adminData.findByIdAndDelete({ _id: req.params.id })

        res.send("Delete Successfull");
    } catch (error) {
        res.send("Not deleted");
    }
};



module.exports = {
    adminregister,
    loginadmin,
    updateadmin,
    viewadmin,
    viewalladmins,
    logoutadmin,
    deletadmin,
}