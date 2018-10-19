import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'
import Posts from './Posts.js'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Posts />
      </div>
    );
  }
}

export default App;
