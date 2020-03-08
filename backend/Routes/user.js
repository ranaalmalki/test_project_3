const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/User');

router.get('user/:userId', async (req, res) => {

    try {
        const user = await User.findById(req.params.userId);
        res.status(200).json(user); 
    } catch (err) {
         res.status(404).json({message: err});
    }
});

router.get('/', (req, res) => {
    if(req.query.name) {
      res.send(`You have requested a person ${req.query.name}`)
    }
    else {
      res.send('You have requested a user')
    }
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
