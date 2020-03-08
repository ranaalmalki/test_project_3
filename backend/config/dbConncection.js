const mongoose = require('mongoose');
const db = require('./bd');
require('dotenv/config');

const connectDB = async () => {
  await  mongoose.connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('=========the connection with mongodb is ESTABLISHED=======',db);
    }
  );}
  
module.exports = connectDB;