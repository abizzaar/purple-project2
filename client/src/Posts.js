import React from 'react';
import { Card } from 'semantic-ui-react'

const lowerNavCss = {
  margin: "auto",
  marginTop: "2rem"
}

const buttonCss = {
  background: "rgba(0,0,0,0.7)",
  color: "white"
}

const header = {
  textTransform: "uppercase"
}


const Post = (props) => {
  let posts = [];
  for (let post of props.posts) {
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
      <button onClick={props.like(post.id)} style={buttonCss} class="ui button">I WANT THIS</button>
    </div>
    )
  }
  return (
    <div>
    {posts}
  </div>
  );
};

export default Post;

