let router = require('express').Router()
let Pets = require('../models/pet')


//Get all pets for one user 

router.get('/:ownerId', (req, res, next) => {
  Pets.find({ ownerId: req.params.ownerId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//Get one specific pet 

router.get('/:petId', (req, res, next) => {
  Pets.findById(req.params.petId)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//Create a pet
router.post('/', (req, res, next) =>
  Pets.create(req.body)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
)

//Update one pet 

router.put('/:petId', (req, res, next) =>
  Pets.findByIdAndUpdate(req.params.petId, { new: true })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
)

module.exports = router