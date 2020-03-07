const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User Name required']
      },
      Password: {
        type: String,
        required: [true, 'User Password required']
      },
      phone: {
        type: String,
        minlength: [10,'Pease inter correct phone number'],
        maxlength: [10,'Pease inter correct phone number'],

        required: [true, 'User phone number required']
      },
      email: {
        type: String,
        // 1) If the promise rejects, Mongoose assumes the validator failed with the given error.
        // 2) If the promise resolves to `false`, Mongoose assumes the validator failed and creates an error with the given `message`.
        validate: {
          validator: () => Promise.resolve(true),
          message: 'Email validation failed'
        }
      },   
});
module.exports = mongoose.model('users', UserSchema)