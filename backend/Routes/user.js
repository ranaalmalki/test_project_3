const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Trans = require('../models/Transaction');
const User = require('../models/User');



/**
 * Action:        SHOW
 * Method:        GET
 * URI:           /user/5d664b8b68b4f5092aba18e9
 * Description:   Get An Article by Article ID
 */
router.get('/:userId', async (req, res) => {

  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  }
  catch (err) {
    res.status(404).json({ message: "The provided ID doesn\'t match any documents" });
  }
});

// router.patch('/:userId/newtrans',async (req, res) => {
//   // store new tweet in memory with data from request body
//   const { TransType, TransDescription, TransState } = req.body
//   let trans = {}
//     trans.TransType = TransType,
//     trans.TransDescription = TransDescription,
//     trans.TransState = TransState
//   // const saveTrans = new Trans({ TransType: req.body.TransType,TransDescription:req.body.TransDescription,TransState: req.body.TransState});
//   const saveTrans = new Trans(trans)
//   try {
//     await saveTrans.save();
//     res.status(200).json(saveTrans);
//   } catch (err) {
//     res.status(404).json(err);
//   }  
//   // find user in db by id and add new tweet
//   User.findById(req.params.userId, (error, foundUser) => {
//     foundUser.Transaction.push(saveTrans);
//     foundUser.save((err, savedUser) => {
//       res.json(saveTrans);
//     });
//   });
// });
/**
 * Action:       CREATE
 * Method:       POST
 * URI:          /user
 * Description:  Create a new Article
 */

router.post('/', async (req, res) => {
  const { name, Password, phone, email } = req.body
  let user = {}
    user.name = name,
    user.Password = Password,
    user.phone = phone,
    user.email = email
  const saveUser = new User(user)
  try {
    await saveUser.save();
    res.status(200).json(saveUser);
  } catch (err) {
    res.status(404).json(err);
  }
});


  /**
   * Action:      UPDATE
   * Method:      PATCH
   * URI:         /api/articles/5d664b8b68b4f5092aba18e9
   * Description: Update An Article by Article ID
   */

  // router.patch('/:userId', (req, res) => {
  //    try {

  //   const user = await User.findOneAndUpdate(req.params.userId);
  //   res.status(200).json({user:user,});
  // }
  // catch (err) {
  //   res.status(404).json({ message: "The provided ID doesn\'t match any documents" });
  // }

  //  });


module.exports = router
