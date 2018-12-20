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

//post a reviews

router.post('/:userId/reviews', (req, res, next) => {
  Users.findById(req.params.userId)
    .then(user => {
      user.reviews.push(req.body)
      user.save(err => {
        if (err) {
          next(err)
        }
        res.send(user)
      })
    })
})


module.exports = router