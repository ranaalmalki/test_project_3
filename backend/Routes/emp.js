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
    const emp = {}
    emp.empFullName = empFullName,
        emp.empUsername = empUsername,
        emp.email = email + '@enjaz.com',
        emp.empPhone = empPhone,
        emp.password = password,
        emp.admin = admin
    let newEmp = new Emp(emp)

    Emp.addUser(newEmp, (err, emp) => {
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




router.post('/login', (req, res, next) => {
    const empUsername = req.body.empUsername;
    const password = req.body.password;
    const admin = req.body.admin

    Emp.getUserByUsername(empUsername,admin, (err, emp) => {
        if (err) throw err;
        if (!emp) {
            return res.json({
                success: false,
                message: "Emp not found."
            });
        }

        Emp.comparePassword(password, emp.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({
                    type: "emp",
                    data: {
                        _id: emp._id,
                        empUsername: emp.empUsername,
                        empFullName: emp.empFullName,
                        email: emp.email,
                        empPhone: emp.empPhone
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
    console.log(`emp login success ${req.user}`);
    return res.json(
        req.user
    );
}

);

  


module.exports = router;
