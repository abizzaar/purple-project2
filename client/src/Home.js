import React, {Component} from 'react';
import Nav from './Nav.js';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        <img src={"./updated-logo-2.png"} />     
      </div>
    )
  }
}

export default Home;
