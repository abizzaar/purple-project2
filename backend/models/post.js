import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const PostSchema = new Schema({
  id: Schema.ObjectId,
  author: String,
  description: String,
  number: Number,
  name: String,
  location: String,
  likes: [ {type : mongoose.Schema.ObjectId, ref : 'Like'} ],
  comments: [ {type : mongoose.Schema.ObjectId, ref : 'Comment'} ]
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);
