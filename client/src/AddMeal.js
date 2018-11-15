import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'
import AddMealForm from './AddMealForm.js';

const lowerNavCss = {
  marginLeft: "1rem"
}

const buttonCss = {
  background: "rgba(0,0,0,0.7)",
  color: "white",
  display: "block",
  margin: "2rem auto 1rem auto",
}

const buttonAction = {
  background: "#0D47A1",
  color: "white",
  display: "block",
  margin: "2rem auto 1rem auto",
}

const container = {
  
}

class AddMeal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showForm = this.showForm.bind(this);
    this.showButtonText = this.showButtonText.bind(this);
  }

  handleClick(e) {
    if (this.state.clicked) {
      this.setState({clicked: false});
    } else {
      this.setState({clicked: true});
    }
  }

  showForm() {
    if (this.state.clicked) {
      return (
        <AddMealForm handleChange={this.props.handleChange} postToServer={this.postToServer}/>
      );
    }
  }

  showButtonText() {
    if (this.state.clicked) {
      return ("Close");
    } else {
      return ("POST YOUR MEAL");
    }
  }

  postToServer = (e) => {
    this.props.postToServer(e);
    this.handleClick();
    console.log(e.target.value);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    return (
      <div className="maxWidth" >
        <div style={lowerNavCss}>
          <Button style={(this.state.clicked ? buttonCss: buttonAction)} onClick={this.handleClick}>
            {this.showButtonText()}
          </Button>
          {this.showForm()}
        </div>
      </div>
    );
  }
}

export default AddMeal;

