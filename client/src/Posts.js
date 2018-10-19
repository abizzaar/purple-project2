import React from 'react';
import { Card } from 'semantic-ui-react'

const lowerNavCss = {
  margin: "auto",
  marginTop: "2rem"
}

const buttonCss = {
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "white"
}


const Post = (props) => {
  return (
    <div>
      <div  style={lowerNavCss} class='ui card'>
        <div class='content'>
          <div class='header'>NAME OF FOOD</div>
          <div class='meta'>&#8226; MEALS AVAILABLE: 4</div>
          <div class='meta'>&#8226; INGREDIENTS: tomato, lettuce, blah </div>
          <div class='description'>
            This shit is mad tasty. Get in the mix you savage yeee
          </div>
        </div>
        <button style={buttonCss} class="ui button">I WANT THIS</button>
      </div>
  </div>
  );
};

export default Post;

