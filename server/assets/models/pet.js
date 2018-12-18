let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Pet'

let schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  img: { type: String },
  ownerId: { type: ObjectId, ref: 'User', required: true },
  cntct: { type: String, required: true },
  notes: { type: String }
})

module.exports = mongoose.model(schemaName, schema)