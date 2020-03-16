const Emp =require('../models/Emp');
const config = require('./bd');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
require("dotenv").config();
// To authenticate the User by JWT Strategy
module.exports = (userType, passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = config.database.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        if (userType == 'admin' && jwt_payload.data.admin === true) {
            Emp.getUserById(jwt_payload.data._id, (err, user) => {
                if (err) return done(err, false);
                if (user) return done(null, user);
                return done(null, false);      
                });
        }

        if (userType == 'emp' && jwt_payload.data.admin === true) {

            console.log('I am ADMIN but I go to EMP route');
            return done(null, {m:'ggggg'});    

            
        }
        if (userType == 'emp' && jwt_payload.data.admin === false) {
            Emp.getUserById(jwt_payload.data._id, (err, user) => {
                if (err) return done(err, false);
                if (user) return done(null, user);
                return done(null, false);
            });
        }
        console.log('other wise');
   
    }));
}