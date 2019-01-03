let router = require('express').Router()
let Hosts = require('../models/user')



//UPDATE A HOST
router.put('/:hostId', (req, res, next) => {
  Hosts.findByIdAndUpdate(req.params.hostId, req.body, { new: true })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


//GET BY ZIP AND AVAILABILITY
router.get('/:zipcode', (req, res, next) => {
  Hosts.find({ isHost: true, zipcode: req.params.zipcodse, unavailable: req.params.unavailable })
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

//CHANGE HOST DATA
router.put('/:id', (req, res, next) => {
  Hosts.findByIdAndUpdate(req.params.id, { images: req.body }, { new: true })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

router.post('/:id/img', (req, res, next) => {
  Hosts.findById(req.params.id)
    .then(host => {
      host.images.push(req.body)
      host.save(err => {
        if (err) {
          next(err)
        }
        res.send(host)
      })
    })
})

router.delete('/:id/img/:i', (req, res, next) => {
  Hosts.findById(req.params.id)
    .then(host => {
      host.images.splice(req.params.i, 1)
      host.save(err => {
        if (err) {
          next(err)
        }
        res.send(host)
      })
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


module.exports = router