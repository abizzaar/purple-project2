import React, {Component} from 'react';
import Nav from './Nav.js';

class Recipes extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        <div>THIS IS THE RECIPES PAGE</div>
      </div>
    )
  }
}

export default Recipes;
