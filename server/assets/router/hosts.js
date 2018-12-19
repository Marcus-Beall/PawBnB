let router = require('express').Router()
let Hosts = require('../models/user')

//GET
router.get('/', (req, res, next) => {
  Hosts.find({ isHost: true })
    .then(data => {

      res.send('zipcode: ' + req.params.zipcode)
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