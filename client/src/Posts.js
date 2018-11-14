import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import LikeName from "./LikeName.js";

const lowerNavCss = {
  display: "flex",
  textAlign: "center",
  marginTop: "3rem",
  marginLeft: "8px",
  marginRight: "8px",
  fontSize: "18px"
};

const header = {
  textTransform: "uppercase"
};

const postStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-around",
  flexWrap: "wrap",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "1300px"
};

class Post extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let posts = [];
    for (let post of this.props.posts) {
      if (post.number > 0) {
        posts.push(
          <div style={lowerNavCss} className="ui card">
            <div className="content">
              <div style={header} className="header">
                {post.name}
              </div>
              <div className="meta">Chef: {post.author} </div>
              <div className="meta">Meals Left: {post.number}</div>
              <div className="description">{post.description}</div>
            </div>
            <LikeName like={this.props.like} post={post} />
          </div>
        );
      }
    }
    return (
      <div style={postStyle}>{posts}</div>
    )
  }
}

export default Post;
