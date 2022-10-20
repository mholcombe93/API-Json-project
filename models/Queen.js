import mongoose from "mongoose"
const Schema = mongoose.Schema

let SeasonSchema = new Schema({
  "seasonNumber": String,
  "place": Number
})
 
let Queen = new Schema({
  "name": { type: String, required: true },
  "order": {type: Number},
  "winner": {type: Boolean},
  "missCongeniality": {type: Boolean},
  "image_url": {type: String},
  "quote": {type: String},
  "seasons": [SeasonSchema]
 })
 
 
export default mongoose.model('queens', Queen)
