let router = require('express').Router()
let Hosts = require('../models/user')

//GET
router.get('/:zipcode', (req, res, next) => {
  Hosts.find({ isHost: true, zipcode: req.params.zipcode })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GET SPECIFIC USER
router.get('/:id', (req, res, next) => {
  Hosts.findById(req.params.id, { isHost: true })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

module.exports = router