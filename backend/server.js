const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connection = require('./config/dbConncection')
const bodyParser = require('body-parser');
const empRoute =require('./Routes/emp');
const cors = require('cors');
const passport = require('passport');
const path = require('path');

const transactionRoute = require('./Routes/ticket');
require('dotenv/config');


connection();
app.use(express.json());
// BodyParser Middleware
app.use(bodyParser.json());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


app.use('/emp',empRoute);
app.use('/emp',transactionRoute);
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
  next()
})


// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send('We think you are lost!')
})

// Handler for Error 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
})



    



console.log('===== HERE WE END =====');
const PROT = process.env.PROT || 5000;
app.listen(PROT, () => {
  console.log(`LISTENING to http://localhost:${PROT}`);
});