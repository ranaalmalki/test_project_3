const mongoose = require('mongoose');


const TicketSchema = mongoose.Schema({
  TicketType: {
        type: String,
        required: [true, 'Ticket Type  required']
      },
      TicketDescription: {
        type: String,
        required: [true, 'Ticket Description required']
      },
      TicketState: {
        type: String,
        required: [true, 'Ticket State required'],
        enum:['Open', 'onProgress','closed']
      }
   
});
module.exports = mongoose.model('Ticket',TicketSchema)