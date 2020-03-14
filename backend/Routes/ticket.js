const express = require('express');
const router = express.Router();

const Emp = require('../models/Emp');
const Ticket = require('../models/Ticket');



//-------------create ticket embedded in emp-------------------
router.post('/:empId',  (req, res) => {
  // store new ticket in memory with data from request body
  const { TicketType, TicketDescription, TicketState } = req.body
  let ticket = {}
  ticket.TicketType = TicketType,
  ticket.TicketDescription = TicketDescription,
  ticket.TicketState = TicketState,
  ticket.TicketsEmp = [req.params.empId]
  const savedTicket = new Ticket(ticket)
  savedTicket.save()     
  // find emp in db by id and add new ticket
  Emp.findById(req.params.empId,async (error, foundEmp) => {
    try{
      await foundEmp.Tickets.push(savedTicket);
      foundEmp.save()
      res.status(200).json(savedTicket);
    }
    catch(error){
      res.status(404).json(error);
    }
  }); 
});


//-------------Get all tickets-------------------
  router.get('/emp_ticket', (req, res) => {
    Ticket.find({ })
      .populate('TicketsEmp')
      .exec((err, Emp) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
        console.log(`found and populated all : ${Emp}`);
        res.json(Emp);
      });
  });

//-------------Pass ticket to another Emp-------------------
router.patch('/PassTicket/:TicketId',  (req, res) => {

  Ticket.findById(req.params.TicketId, (error, foundTicket) => {
    foundTicket.TicketsEmp.push(req.body.TicketsEmp);
      foundTicket.save()
      res.status(200).json(foundTicket.TicketsEmp);
  });
  Emp.findById(req.body.TicketsEmp,async (foundEmp) => {
    try{
      await foundEmp.Tickets.push(foundTicket);
      foundEmp.save()
      res.status(200).json(foundTicket);
    }
    catch(error){
      res.status(404).json(error);
    }
  }); 

});





module.exports = router