import React, { Component } from 'react';
import { Button, Form, Container } from 'semantic-ui-react'
import AddMealForm from './AddMealForm.js';

const lowerNavCss = {
  margin: "auto",
  marginTop: "2rem"
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

  handleClick() {
    if (this.state.clicked) {
      this.setState({clicked: false});
    } else {
      this.setState({clicked: true});
    }
  }

  showForm() {
    if (this.state.clicked) {
      return (
        <AddMealForm />
      );
    }
  }

  showButtonText() {
    if (this.state.clicked) {
      return ("Don't add your own meal :'(");
    } else {
      return ("Add your own meal!");
    }
  }

  render() {
    return (
      <Container>
        <div style={lowerNavCss}>
          <Button onClick={this.handleClick}>
            {this.showButtonText()}
          </Button>
          {this.showForm()}
        </div>
      </Container>
    );
  }
}

export default AddMeal;

