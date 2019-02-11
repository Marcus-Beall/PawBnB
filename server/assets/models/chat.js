let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Chat'

let messageSchema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  message: { type: String, required: true }
})

let schema = new Schema({
  messages: [messageSchema],
  name: { type: String, required: true },
  notes: { type: String, maxlength: 20 }
})

module.exports = mongoose.model(schemaName, schema)