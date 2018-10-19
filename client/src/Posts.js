import React from 'react';
import { Card } from 'semantic-ui-react'

const lowerNavCss = {
  margin: "auto",
  marginTop: "2rem"
}


const Post = (props) => {
  return (
    <div>
      <div  style={lowerNavCss} class='ui card'>
        <div class='content'>
          <div class='header'>NAME OF FOOD</div>
          <div class='meta'>MEALS AVAILABLE: 4</div>
          <div class='meta'>INGREDIENTS: tomato, lettuce, blah </div>
          <div class='description'>
            This shit is mad tasty. Get in the mix you savage yeee
          </div>
        </div>
      </div>
  </div>
  );
};

export default Post;

