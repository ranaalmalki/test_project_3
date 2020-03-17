const express = require('express');
const router = express.Router();
const passport = require('passport');
// const passport = require('../config/passport');
const jwt = require('jsonwebtoken');
const Emp = require('../models/Emp');
const config = require('../config/bd');

require("dotenv").config();


router.post('/register', (req, res) => {
    const { empFullName, empUsername, email, password, empPhone,admin } = req.body;
    const admins = {}
    admins.empFullName = empFullName,
        admins.empUsername = empUsername,
        admins.email = email + '@enjaz.com',
        admins.empPhone = empPhone,
        admins.password = password,
        admins.admin = admin === true
    let newAdmin = new Emp(admins)

    Emp.addUser(newAdmin, (err, admins) => {
        if (err) {
            let message = "";
            if (err.errors.empUsername) message = "empUsername is already exist. ";
            if (err.errors.email) message += "Email already exists.";
            return res.json({
                success: false,
                message
            });
        } else {
            return res.json({
                success: true,
                message: "Emp registration is successful."
            });
        }
    });
});




router.post('/login', (req, res) => {
    const empUsername = req.body.empUsername;
    const password = req.body.password;

    Emp.getAdminByUsername(empUsername, (err, admins) => {
        if (err) throw err;
        if (!admins) {
            return res.json({
                success: false,
                message: "Emp not found."
            });
        }

        Emp.comparePassword(password, admins.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({
                    type: "admin",
                    data: {
                        _id: admins._id,
                        empUsername: admins.empUsername,
                        empFullName: admins.empFullName,
                        email: admins.email,
                        empPhone: admins.empPhone,
                        admin: admins.admin === true
                    }
                }, config.database.secret, {
                    expiresIn: 36000000 // for 1 week time in milliseconds
                });
                console.log(token);
                return res.json({
                    success: true,
                    token: "jwt " + token
                });
            } else {
                return res.json({
                    success: true,
                    message: "Wrong Password."
                });
            }
        });
    });
});

/**
 * Get Authenticated user profile
 */


router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    console.log(`admin login success ${req.user}`);
    return res.json(
        req.user
    );
}

);


module.exports = router;
