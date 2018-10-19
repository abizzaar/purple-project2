
// model/comment.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const PostSchema = new Schema({
  id: ObjectId,
  author: String,
  description: String,
  likes: [ {type : mongoose.Schema.ObjectId, ref : 'Like'} ]
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);

const LikeFoodSchema = new Schema({
  id: ObjectId,
  author: String,
  postForLike: [ {type : mongoose.Schema.ObjectId, ref : 'Post'} ]
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Like', LikeFoodSchema);
