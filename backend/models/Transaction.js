const mongoose = require('mongoose');


const TransactionSchema = mongoose.Schema({
    TransType: {
        type: String,
        required: [true, 'Transaction Type  required']
      },
      TransDescription: {
        type: String,
        required: [true, 'Transaction Description required']
      },
      TransState: {
        type: String,
        required: [true, 'Transaction State required']
      }
   
});
module.exports = mongoose.model('transaction',TransactionSchema)