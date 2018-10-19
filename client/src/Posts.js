import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'
import LikeName from './LikeName.js'

const lowerNavCss = {
  margin: "auto",
  marginTop: "2rem"
}


const header = {
  textTransform: "uppercase"
}


class Post extends Component { 
  constructor() {
    super();
    this.state = {
    }
  }
  

  render() {
    let posts = [];
    for (let post of this.props.posts) {
      posts.push(
        <div  style={lowerNavCss} class='ui card'>
        <div class='content'>
          <div style={header} class='header'>{post.name}</div>
          <div class='meta'>&#8226; by {post.author} </div>
          <div class='meta'>&#8226; MEALS AVAILABLE: {post.number}</div>
          <div class='description'>
            {post.description}
          </div>
        </div>
        <LikeName like={this.props.like} post={post}/>
      </div>
      )
    }
    return (
      <div>
      {posts}
    </div>
    );
  }
}

export default Post;
