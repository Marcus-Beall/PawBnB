let router = require('express').Router();
let Users = require('../models/user');
let session = require('./session')

//NEVER TELL USERS WHICH FAILED
let loginError = new Error('Bad Email or Password')

//CREATE A NEW USER
router.post('/auth/register', (req, res) => {
  if (req.body.password.length < 5) {
    return res.status(400).send({
      error: 'Password must be at least 5 characters'
    })
  }
  // @ts-ignore
  req.body.password = Users.generateHash(req.body.password)
  Users.create(req.body)
    .then(user => {
      delete user._doc.password
      req.session.uid = user._id
      res.send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.get('/auth/hosts', (req, res) => {
  Users.find({ isHost: true })
    .then(users => {
      res.send(users)
    }).catch(err => {
      res.status(400).send(loginError)
    })
})

router.put('/auth/hosts/:id', (req, res) => {
  Users.findByIdAndUpdate({ id: req.session.uid }, req.body, { new: true })
    .then(user => {
      res.send(user)
    }).catch(err => {
      res.status(400).send(loginError)
    })
})

router.post('/auth/login', (req, res) => {
  //FIND A USER BASED ON PROVIDED EMAIL
  Users.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        return res.status(400).send(loginError)
      }
      //CHECK THE PASSWORD
      if (!user.validatePassword(req.body.password)) {
        return res.status(400).send(loginError)
      }
      //ALWAYS REMOVE THE PASSWORD FROM THE USER OBJECT
      delete user._doc.password
      req.session.uid = user._id
      res.send(user)
    }).catch(err => {
      res.status(400).send(loginError)
    })
})

//REMOVE THE ACTIVE SESSION FROM THE DATABASE
router.delete('/auth/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send(err)
    }
    return res.send({
      message: 'Logout Successful'
    })
  })
})


//Validates req.session.uid
router.get('/auth/authenticate', (req, res) => {
  Users.findById(req.session.uid)
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: 'Please login to continue'
        })
      }
      delete user._doc.password
      res.send(user)
    }).catch(err => {
      res.status(500).send(err)
    })
})


module.exports = {
  router,
  session
}