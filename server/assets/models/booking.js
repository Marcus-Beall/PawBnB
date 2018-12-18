let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() }
})
