import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav.js'
import Post from './Posts.js'
import RequestMeal from './RequestMeal.js'

class MealRequest extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      author: '',
      name: '',
      description: '',
      number: '',
      location: '',
      id: 0
    };
    this.postToServer = this.postToServer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.loadPostsFromServer();
    //this.getMyLocation();
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
    fetch('/api/mealrequests/')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error });
        else this.setState({ data: res.data });
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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

  postToServer() {
    const {author, name, number, description} = this.state;
    const data = [...this.state.data, {author, name, description, number}];
    this.setState({ data });
    fetch('/api/newmealrequest/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({author, description, number:parseInt(number), name})
    }).then(res => res.json()).then((res) => {
      if (!res.success) console.log("holyy");
      else this.setState({author: '',description: '',number: '',name: '' });
    });
  }
  like(liker, id) {
    fetch('/api/assigntochef/', {
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
        <RequestMeal handleChange={this.handleChange} postToServer={this.postToServer}/>
        <Post buttonTxt="I'LL COOK THIS" like={this.like} posts={this.state.data}/>
      </div>
    );
  }
}

export default MealRequest;
