let router = require('express').Router()
let Bookings = require('../models/booking')


//GET BOOKINGS
router.get('/:bookingId', (req, res, next) => {
  Bookings.findById(req.params.bookingId)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

module.exports = Bookings