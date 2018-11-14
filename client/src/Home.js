import React, {Component} from 'react';
import Nav from './Nav.js';

const imgContainer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const imgStyle = {

}
class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
        <div style={imgContainer}>
          <img style={imgStyle} src={"/updated-logo-2.png"} />
        </div>
      </div>
    )
  }
}

export default Home;
