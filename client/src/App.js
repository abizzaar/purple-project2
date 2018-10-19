import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'
import Posts from './Posts.js'
import AddMeal from './AddMeal.js'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Posts />
        <AddMeal />
      </div>
    );
  }
}

export default App;
