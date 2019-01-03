let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Pet'

let petReviewSchema = new Schema({
  ratings: { type: Number, min: 1, max: 5, required: true },
  content: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() }
})

let schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  img: { type: String },
  ownerId: { type: ObjectId, ref: 'User', required: true },
  cntct: { type: String, required: true },
  notes: { type: String },
  petReviews: [petReviewSchema],

},
  {
    usePushEach: true
  })

module.exports = mongoose.model(schemaName, schema)