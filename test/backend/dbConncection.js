const mongoose = require('mongoose');
require('dotenv/config');

const connectDB = async () => {
  await  mongoose.connect(
    "mongodb://localhost:27017/users",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log('=========the connection with mongodb is ESTABLISHED=======');
    }
  );}
  

module.exports = connectDB;