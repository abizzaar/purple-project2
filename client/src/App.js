import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'
import Posts from './Posts.js'
import AddMeal from './AddMeal.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      author: '',
      name: '',
      description: '',
      number: '',
    };
  }

  componentDidMount() {

  }

  loadPostsFromServer = () => {
    // fetch returns a promise. If you are not familiar with promises, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    fetch('/api/posts/')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
  }

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
