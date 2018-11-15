import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Post from './models/post';
import Like from './models/like';
import Comment from './models/comment';
import MealRequest from './models/request';
// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.post('/newfood', (req, res) => {
  const post = new Post();
  // body parser lets us use the req.body
  const { author, description, number, name, id, location,lat,long } = req.body;
  if (!author || !name || !number || !description) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author and comment'
    });
  }
  post.author = author;
  post.description = description;
  post.number=number;
  post.name=name;
  post.id = id;
  if(location){
	post.location=location;
	post.lat=lat;
	post.long=long;
  }
  post.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post('/assigntochef', (req, res) => {
  const post = new Post();
  // body parser lets us use the req.body
  const { id, author } = req.body;
  if (!author || !id) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author and id'
    });
  }
  MealRequest.findById(id,(err, post) => {
    if (err) return res.json({ success: false, error: err });
    const newPost=new Post();
    newPost.author = author;
    newPost.description = post.description;
    newPost.number= post.number;
    newPost.name=post.name;
    newPost.id = post.id;
    newPost.save(err => {
    if (err){
	 return res.json({ success: false, error: err });
    }
    MealRequest.findById(id).remove().exec();
    return res.json({ success: true });
    });
});
});

router.post('/newmealrequest', (req, res) => {
  const mealReq = new MealRequest();
  // body parser lets us use the req.body
  const { author, description, number, name, id } = req.body;
  if (!author || !name || !number || !description) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author, desc, name,number'
    });
  }
  mealReq.author = author;
  mealReq.description = description;
  mealReq.number=number;
  mealReq.name=name;
  mealReq.id = id;
  mealReq.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});


router.post('/newlike', (req, res) => {
  const post = new Post();
  // body parser lets us use the req.body
  const { id, author } = req.body;
  if (!author || !id) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author and id'
    });
  }
  Post.findById(id,(err, post) => {
    if (err) return res.json({ success: false, error: err });
    var like = new Like();
    like.author=author;
    like.save(function(err) {

      post.likes.push(like);
      post.number=post.number-1;
      post.save(function(err) {
        if(err) return res.json({success: false,error: 'Error saving the comment'});
        return res.json({ success: true});
      });
    });
  });
});

router.post('/newcomment', (req, res) => {
  const post = new Post();
  // body parser lets us use the req.body
  const { id, author, text } = req.body;
  if (!author || !id|| !text) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author and id and text'
    });
  }
  Post.findById(id,(err, post) => {
    if (err) return res.json({ success: false, error: err });
    var comment = new Comment();
    comment.author=author;
    comment.text=text;
    comment.save(function(err) {

      post.comments.push(comment);
      post.save(function(err) {
        if(err) return res.json({success: false,error: 'Error saving the comment'});
        return res.json({ success: true});
      });
    });
  });
});

/* delete all posts */
router.delete('/posts', (req, res) => {
  Post.remove({}, (error, comment) => {
    if (error) return res.json({ success: false, error });
    return res.json({ success: true });
  });
});

/*
router.put('/posts/:postId'), (req, res) => {
  const put
}
*/

router.get('/posts', (req, res) => {
  Post.find((err, posts) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: posts });
  });
});

router.get('/mealrequests', (req, res) => {
  MealRequest.find((err, posts) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: posts });
  });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
