let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
  hostEmail: { type: String, required: true, unique: true },
  userEmail: { type: String, required: true, unique: true },
  created: { type: Number, required: true, default: Date.now() },
  userId: { type: ObjectId, ref: 'User', required: true },
  hostId: { type: ObjectId, ref: 'User', required: true },
  pets: ['Pet'],
  dates: []
})
