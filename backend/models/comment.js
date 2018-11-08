
// model/comment.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentFoodSchema = new Schema({
  id: Schema.ObjectId,
  author: String,
  comment: String,
  postForComment: [ {type : mongoose.Schema.ObjectId, ref : 'Post'} ]
}, { timestamps: true });

// export our module to use in server.js
export default mongoose.model('Comment', CommentFoodSchema);
