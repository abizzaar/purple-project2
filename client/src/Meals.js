import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav.js'
import Post from './Posts.js'
import AddMeal from './AddMeal.js'

class Meals extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      author: '',
      name: '',
      description: '',
      number: '',
      location: '',
      id: 0,
      long: 0,
      lat: 0
    };
    // this posts to the server
    this.updateValues = this.updateValues.bind(this);
  }

  componentDidMount() {
    this.loadPostsFromServer();
    const { author, text, name, description, number, updateId } = this.state;
    if (!this.pollInterval) {
      this.pollInterval = setInterval(this.loadPostsFromServer, 2000);
    }
  }

  componentWillUnmount() {
    if (this.pollInterval) clearInterval(this.pollInterval);
    this.pollInterval = null;
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

  /* use to delete all posts */
  deletePosts = () => {
    fetch('/api/posts/', { method: 'DELETE' })
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
  }

  updateValues(obj) {
    this.setState({
      location: obj['location'],
      author: obj['author'],
      name: obj['name'],
      description: obj['description'],
      number: obj['number'],
      long: obj['long'],
      lat: obj['lat']
    }, () => {
      const {author, name, number, description, location, long, lat} = this.state;
      const data = [...this.state.data, {author, name, description, number,location, long, lat}];
      console.log(data);
      this.setState({ data });
      fetch('/api/newfood/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({author, description, number:parseInt(number), name,location})
      }).then(res => res.json()).then((res) => {
        if (!res.success) console.log("holyy");
        else this.setState({author: '',description: '',number: '',name: '', location:'', long: 0, lat: 0});
      });
    });
  }

  like(liker, id) {
    fetch('/api/newlike/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({author: liker, id})
    }).then(res => res.json()).then((res) => {
      if (!res.success) console.log("holyy");
    });
  }



  render() {
    return (
      <div>
        <Nav />
        <AddMeal updateValues={this.updateValues} postToServer={this.postToServer}/>
        <Post like={this.like} posts={this.state.data}/>
      </div>
    );
  }
}

export default Meals;
