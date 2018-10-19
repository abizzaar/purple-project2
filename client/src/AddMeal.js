import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'
import AddMealForm from './AddMealForm.js';

const lowerNavCss = {
  margin: "auto",
  marginTop: "2rem"
}

const buttonCss = {
  background: "rgba(0,0,0,0.7)",
  color: "white",
  display: "block",
  margin: "0.8rem auto"
}

const buttonAction = {
  background: "#0D47A1",
  color: "white",
  display: "block",
  margin: "0.8rem auto"
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
      <Container>
        <div style={lowerNavCss}>
          <Button style={(this.state.clicked ? buttonCss: buttonAction)} onClick={this.handleClick}>
            {this.showButtonText()}
          </Button>
          {this.showForm()}
        </div>
      </Container>
    );
  }
}

export default AddMeal;

