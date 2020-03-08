const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connection = require('./config/dbConncection')
const bodyParser = require('body-parser');
const userRoute =require('./Routes/user');
require('dotenv/config');


connection();
app.use(bodyParser.json());
app.use(express.json());

app.use('/user',userRoute);
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