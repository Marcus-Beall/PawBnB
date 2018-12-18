let router = require('express').Router()
let Users = require('../models/user')

//GET
router.get('/', (req, res, next) => {
  Users.find({})
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
  Users.findById(req.params.id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

module.exports = router