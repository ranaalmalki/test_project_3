const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Trans = require('../models/Transaction');





router.post('/:userId', async (req, res) => {
  // store new tweet in memory with data from request body
  const { TransType, TransDescription, TransState } = req.body
  let trans = {}
  trans.TransType = TransType,
    trans.TransDescription = TransDescription,
    trans.TransState = TransState
  // const saveTrans = new Trans({ TransType: req.body.TransType,TransDescription:req.body.TransDescription,TransState: req.body.TransState});
  const saveTrans = new Trans(trans)
  try {
    await saveTrans.save();
    return res.status(200).json(saveTrans);
  } catch (err) {
    res.status(404).json(err);
  }
  // find user in db by id and add new Transaction
  User.findById(req.params.userId,async (error, foundUser) => {
    foundUser.Transaction.push(saveTrans);
    try {
      await foundUser.save()
      return res.status(200).json(saveTrans);
    } catch (err) {
      res.status(404).json(err);
    }
    });
  });


  router.get('/', (req, res) => {
    User.find({ })
      .populate('Transaction')
      .exec((err, users) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        console.log(`found and populated all : ${users}`);
        res.json(users);
      });
  });


module.exports = router
