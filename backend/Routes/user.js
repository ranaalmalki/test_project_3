const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');

router.get('/:userId', async (req, res) => {

    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json(user); 
    } catch (err) {
         res.status(404).json({message: 'Id not found'});
    }
});

router.get('/', (req, res) => {
  User.find()
  // Return all Articles as an Array
  .then((allUser) => {
    res.status(200).json({ users: allUser });
  })
  // Catch any errors that might occur
  .catch((error) => {
    res.status(500).json({ error: error });
  });
  });

router.post('/', async (req, res) => {
    
    const saveUser = new User({
            name: req.body.name,
            Password: req.body.Password,
            phone: req.body.phone,
            email: req.body.email

    })
    try {
        await saveUser.save();
        res.status(200).json(saveUser); 
    } catch (err) {
         res.status(404).json(err);
    }
});
 

  module.exports = router
