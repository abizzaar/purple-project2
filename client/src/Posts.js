import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import LikeName from "./LikeName.js";

const lowerNavCss = {
  display: "flex",
  textAlign: "center",
  marginTop: "3rem",
  marginLeft: "8px",
  marginRight: "8px",
};

const header = {
  textTransform: "uppercase"
};

const postStyle = {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-around",
  flexWrap: "wrap",
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
              <div className="meta">&#8226; by {post.author} </div>
              <div className="meta">&#8226; MEALS AVAILABLE: {post.number}</div>
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
