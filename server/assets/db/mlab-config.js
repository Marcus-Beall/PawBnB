var mongoose = require('mongoose')
var connectionString = 'mongodb://user1:user123@ds237574.mlab.com:37574/pawbnb'
var connection = mongoose.connection

//mlab login
//username zelgius
//password blackkn1ght

mongoose.connect(connectionString, { useMongoClient: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})