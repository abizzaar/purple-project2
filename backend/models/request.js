import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const MealRequestSchema = new Schema({
  id: Schema.ObjectId,
  author: String,
  description: String,
  number: Number,
  name: String
}, { timestamps: true });

export default mongoose.model('MealRequest', MealRequestSchema);
