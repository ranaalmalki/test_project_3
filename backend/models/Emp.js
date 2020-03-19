const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const EmpSchema = mongoose.Schema({
  empFullName: {
    type: String,
    required: [true, "Emp Full Name required"]
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    index: true,
    required: [true, "Emp email  required"]
  },
  empUsername: {
    type: String,
    unique: true,
    required: [true, "User name required"]
  },
  password: {
    type: String,
    required: [true, "Emp Password required"]
  },
  empPhone: {
    type: String,
    minlength: [10, "Pease inter correct phone number"],
    maxlength: [10, "Pease inter correct phone number"],
    required: [true, "Emp phone number required"]
  },
  sendTickets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket"
    }
  ],
  receivedTickets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket"
    }
  ],
  admin: {
    type: Boolean,
    default: false
  }
});

EmpSchema.plugin(uniqueValidator);

const Emp = (module.exports = mongoose.model("Emp", EmpSchema));

// Find the user by ID
module.exports.getUserById = (id, callback) => {
  Emp.findById(id, callback);
};

// Find the user by Its username
module.exports.getUserByUsername = (empUsername, callback) => {
  const query = {
    empUsername: empUsername,
  };
  Emp.findOne(query, callback);
};

// to Register the user
module.exports.addUser = (newEmp, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newEmp.password, salt, (err, hash) => {
      console.log(newEmp);
      if (err) throw err;
      newEmp.password = hash;
      newEmp.save(callback);
    });
  });
};

// Compare Password
module.exports.comparePassword = (password, hash, callback) => {
  bcrypt.compare(password, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
